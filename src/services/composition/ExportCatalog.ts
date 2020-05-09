import {IExportableClass} from "./IExportableClass";
import fs from 'fs';
import path from 'path';

export class ExportCatalog {
  private exportedTypes:object;
  private sharedInstances:object;
  constructor(){
    this.exportedTypes = {};
    this.sharedInstances = {};
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
              if(module.hasOwnProperty(exportedObjectName) && Array.isArray(module[exportedObjectName].metadatas)) {
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
    const classMetadatas = exportedClass.metadatas;
    classMetadatas.forEach((classMetadata) => {
      if(!this.exportedTypes[classMetadata.contractType]) {
        this.exportedTypes[classMetadata.contractType] = {};
      }
      this.exportedTypes[classMetadata.contractType][classMetadata.contractName] = exportedClass;
    })
  }

  hasExport(contractType: string, contractName: string):boolean {
    return typeof this.exportedTypes[contractType] !== 'undefined' && this.exportedTypes[contractType][contractName] !== 'undefined';
  }

  getExport(contractType: string, contractName: string, ...constructorArgs:any) {
    let createdInstance;
    const exportedClass = this.exportedTypes[contractType][contractName];
    const metadata = exportedClass.metadatas.find((m) => m.contractType === contractType && m.contractName === contractName);
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
          injectedArgs.push(this.getExport(injectedArg.contractType, injectedArg.contractName))
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
    exportedClass.metadatas.forEach((metadata) => {
      if(!this.sharedInstances[metadata.contractType])
        this.sharedInstances[metadata.contractType] = {};
      if(!this.sharedInstances[metadata.contractType][metadata.contractName])
        this.sharedInstances[metadata.contractType][metadata.contractName] = createdInstance;
    })
  }
}
