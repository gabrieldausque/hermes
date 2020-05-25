import {IExportableClass} from "./IExportableClass";
import fs from 'fs';
import path from 'path';
import { InstancesFactory } from './InstancesFactory';

export class ExportCatalog {
  private exportedTypes:object;
  private sharedInstances:object;
  private factoryOwner: InstancesFactory;
  constructor(factoryOwner?:InstancesFactory){
    this.exportedTypes = {};
    this.sharedInstances = {};
    if(factoryOwner){
      this.factoryOwner = factoryOwner;
    }
  }
  loadFromDirectory(directoryCatalogPath:string){
      fs.readdirSync(directoryCatalogPath).forEach((fileOrDirectoryName) => {
        const fullPath = path.resolve(directoryCatalogPath, fileOrDirectoryName);
        if (!fs.lstatSync(fullPath).isDirectory() &&
            (
              path.extname(fullPath) === '.js' ||
              (path.extname(fullPath) === '.ts' && !fullPath.trim().endsWith('.d.ts'))
            )
           ){
          try {
            const module = require(fullPath);
            for (const exportedObjectName in module) {
              if(module.hasOwnProperty(exportedObjectName) && Array.isArray(module[exportedObjectName].metadata)) {
                this.addExportedType(module[exportedObjectName]);
              }
            }
          }catch(error){
            console.warn(fullPath + ' is not a regular or working nodejs exportable module. skipping it.')
          }
        } else if(fs.lstatSync(fullPath).isDirectory()) {
          this.loadFromDirectory(fullPath)
        }
      })
  }
  addExportedType(exportedClass:IExportableClass) {
    const classMetadata = exportedClass.metadata;
    classMetadata.forEach((data) => {
      if(!this.exportedTypes[data.contractType]) {
        this.exportedTypes[data.contractType] = {};
      }
      this.exportedTypes[data.contractType][data.contractName] = exportedClass;
    })
  }

  hasExport(contractType: string, contractName: string):boolean {
    return typeof this.exportedTypes[contractType] !== 'undefined' && typeof this.exportedTypes[contractType][contractName] !== 'undefined';
  }

  getExport(contractType: string, contractName: string, ...constructorArgs:any) {

    if(!this.hasExport(contractType,contractName))
      return null;

    let createdInstance;
    const exportedClass = this.exportedTypes[contractType][contractName];
    const metadata = exportedClass.metadata.find((m) => m.contractType === contractType && m.contractName === contractName);
    if(metadata.isShared && this.sharedInstances[contractType] && this.sharedInstances[contractType][contractName]) {
      createdInstance = this.sharedInstances[contractType][contractName];
    }
    else
    {
      if(Array.isArray(constructorArgs) && constructorArgs.length > 0){
        createdInstance =  new exportedClass(...constructorArgs);
      } else if(Array.isArray(metadata.constructorInjectedArgs) && metadata.constructorInjectedArgs.length > 0) {
        const injectedArgs = [];
        metadata.constructorInjectedArgs.forEach((injectedArg) => {
          let arg:any = null;
          if(this.factoryOwner)
            arg = this.factoryOwner.getInstanceFromCatalogs(injectedArg.contractType, injectedArg.contractName);
          else
            arg = this.getExport(injectedArg.contractType, injectedArg.contractName)
          injectedArgs.push(arg);
        });
        createdInstance = new exportedClass(...injectedArgs);
      } else {
        createdInstance = new exportedClass();
      }
      if(metadata.isShared){
        this.addSharedInstance(exportedClass, createdInstance);
      }
    }
    return createdInstance;
  }

  addSharedInstance(exportedClass: any, createdInstance: any) {
    exportedClass.metadata.forEach((metadata) => {
      if(!this.sharedInstances[metadata.contractType])
        this.sharedInstances[metadata.contractType] = {};
      if(!this.sharedInstances[metadata.contractType][metadata.contractName])
        this.sharedInstances[metadata.contractType][metadata.contractName] = createdInstance;
    })
  }
}
