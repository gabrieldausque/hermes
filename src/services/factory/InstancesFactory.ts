import path from "path";
import {ExportCatalog} from "./ExportCatalog";
export class InstancesFactory {
  private readonly catalogs:ExportCatalog[];
  private readonly directoryCatalogRoot: string;
  constructor(directoryCatalogRoot?:string) {
      if(!directoryCatalogRoot) {
        this.directoryCatalogRoot = path.dirname(require.main.filename);
      } else {
        this.directoryCatalogRoot = directoryCatalogRoot;
      }
      this.catalogs = []
  }
  loadExportedClassesFromDirectory(directoryCatalogRoot:string) {
      const catalog = new ExportCatalog();
      const realPath = path.resolve(this.directoryCatalogRoot, directoryCatalogRoot);
      console.debug('Loading catalog from ' + realPath);
      catalog.loadFromDirectory(realPath);
      this.catalogs.push(catalog);
  }
  getInstanceFromModule(exportName:string, modulePath:string, ...constructorArgs:any):any {
     const serviceRealPath = path.resolve(this.directoryCatalogRoot, modulePath);
     console.debug('Getting service from path : ' + serviceRealPath);
     const importedModule = require(serviceRealPath);
     if(Array.isArray(constructorArgs)) {
       return new importedModule[exportName](...constructorArgs);
     }
     else {
       return new importedModule[exportName]();
     }
  }
  getInstanceFromCatalogs(contractType:string, contractName:string):any {
    let createdInstance = null;
    this.catalogs.forEach((catalog) => {
      if(catalog.hasExport(contractType, contractName)) {
        createdInstance = catalog.getExport(contractType, contractName);
      }
    });
    return createdInstance;
  }
}

export const GlobalFactory = new InstancesFactory();
