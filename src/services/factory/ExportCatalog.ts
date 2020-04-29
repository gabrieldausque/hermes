import {IExportableClass} from "./IExportableClass";
import fs from 'fs';
import path from 'path';

export class ExportCatalog {
  private exportedTypes:object;
  constructor(){
    this.exportedTypes = {};
  }
  loadFromDirectory(directoryCatalogPath:string){
      fs.readdirSync(directoryCatalogPath).forEach((fileOrDirectoryName) => {
        const fullPath = path.resolve(directoryCatalogPath, fileOrDirectoryName);
        if (!fs.lstatSync(fullPath).isDirectory() && path.extname(fullPath) === '.js') {
          const module = require(fullPath);
          for (const exportedObjectName in module) {
            if(module.hasOwnProperty(exportedObjectName) && Array.isArray(module[exportedObjectName].metadatas)) {
              this.addExportedType(module[exportedObjectName]);
            }
          }
        } else if(fs.lstatSync(fullPath).isDirectory()) {
          this.loadFromDirectory(fileOrDirectoryName)
        }
      })
  }
  addExportedType(exportedClass:IExportableClass) {
    const classMetadatas = exportedClass.metadatas;
    classMetadatas.forEach((classMetadata) => {
      if(!this.exportedTypes[classMetadata.ContractType]) {
        this.exportedTypes[classMetadata.ContractType] = {};
      }
      this.exportedTypes[classMetadata.ContractType][classMetadata.ContractName] = exportedClass;
    })
  }

  hasExport(contractType: string, contractName: string):boolean {
    return typeof this.exportedTypes[contractType] !== 'undefined' && this.exportedTypes[contractType][contractName] !== 'undefined';
  }

  getExport(contractType: string, contractName: string) {
    return new this.exportedTypes[contractType][contractName]
  }
}
