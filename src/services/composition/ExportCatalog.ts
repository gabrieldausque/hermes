import {AutoDescribed} from "./AutoDescribed";
import fs from 'fs';
import path from 'path';
import { InstancesFactory } from './InstancesFactory';
import { ExportMetadata } from './ExportMetadata';

/**
 * A catalog that contains exported class.
 */
export class ExportCatalog {
  /**
   * Hashset of exported class indexed by contract type/contract name
   */
  private exportedTypes:object;

  /**
   * Hashset of shared instance of exported class indexed by contract type/contract name
   */
  private sharedInstances:object;

  /**
   * The Instances factory that own this catalog, used for injection
   */
  private factoryOwner: InstancesFactory;

  /**
   * Create new catalog instance
   * @param [factoryOwner] - the factory that will own the catalog, used for complex composition scenario
   */
  constructor(factoryOwner?:InstancesFactory){
    this.exportedTypes = {};
    this.sharedInstances = {};
    if(factoryOwner){
      this.factoryOwner = factoryOwner;
    }
  }

  /**
   * Discover all exported class from a specified directory
   * @param directoryCatalogPath
   */
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

  /**
   * Add an AutoDescribed class in this catalog for the specified contract types and names (can be multiple)
   * @param exportedClass
   */
  addExportedType(exportedClass:AutoDescribed) {
    const classMetadata = exportedClass.metadata;
    classMetadata.forEach((data) => {
      if(data.contractType && data.contractName) {
        if(!this.exportedTypes[data.contractType]) {
          this.exportedTypes[data.contractType] = {};
        }
        this.exportedTypes[data.contractType][data.contractName] = exportedClass;
      }
    })
  }

  /**
   * Check if this catalog contains a specific export
   * @param contractType - the contract type to test
   * @param contractName - the contract name for the specified contract type to test
   */
  hasExport(contractType: string, contractName: string):boolean {
    return typeof this.exportedTypes[contractType] !== 'undefined' && typeof this.exportedTypes[contractType][contractName] !== 'undefined';
  }

  /**
   * return an instance of the exported class corresponding to the specified contract type and name. Can be also a shared instance.
   * @param contractType - the interface to get an instance for
   * @param contractName - the specific implementation label to get an instance for
   * @param [constructorArgs] - the args the constructors needs
   */
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

  /**
   * Add a shared instance to the current catalog for all specified exported class
   * @param exportedClass - the corresponding exported class
   * @param createdInstance - the shared instance
   */
  addSharedInstance(exportedClass: AutoDescribed, createdInstance: any) {
    exportedClass.metadata.forEach((metadata) => {
      if(metadata.contractType && metadata.contractName){
        if(!this.sharedInstances[metadata.contractType])
          this.sharedInstances[metadata.contractType] = {};
        if(!this.sharedInstances[metadata.contractType][metadata.contractName])
          this.sharedInstances[metadata.contractType][metadata.contractName] = createdInstance;
      }
    })
  }
}
