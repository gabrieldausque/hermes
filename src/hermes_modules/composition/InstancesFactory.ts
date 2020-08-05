import path from "path";
import {ExportCatalog} from "./ExportCatalog";
import {createTracing} from "trace_events";

/**
 * Factory to discover, import and create any object instance based on contract type (aka interface) and name (a key to distinguish
 * each implementation) to compose easily an object or a service
 */
export class InstancesFactory {
  /**
   * The list of catalogs that contains exportable class
   */
  private readonly catalogs:ExportCatalog[];
  /**
   * The default root path from which to load catalogs.
   */
  public directoryCatalogRoot: string;

  /**
   * Create instance of a factory
   * @param directoryCatalogRoot the path of the current running application the catalogs directory root path. Default to
   * path.dirname(require.main.filename)
   */
  constructor(directoryCatalogRoot?:string) {
      if(!directoryCatalogRoot) {
        this.directoryCatalogRoot = path.dirname(require.main.filename);
      } else {
        this.directoryCatalogRoot = directoryCatalogRoot;
      }
      this.catalogs = []
  }

  /**
   * Discover classes from a specified directory
   * @param directoryCatalogRoot The path to the catalog to discover. Can be absolute path, if you want to discover a
   * catalog not under the default directory catalog root
   * @param isAbsolutePath must be set to true if the directoryCatalogRoot is an absolute path.
   */
  loadExportedClassesFromDirectory(directoryCatalogRoot:string, isAbsolutePath:boolean=false) {
      const catalog = new ExportCatalog(this);
      let realPath = path.resolve(this.directoryCatalogRoot, directoryCatalogRoot);
      if(isAbsolutePath){
        realPath = directoryCatalogRoot;
      }
      console.debug('Loading catalog from ' + realPath);
      catalog.loadFromDirectory(realPath);
      this.catalogs.push(catalog);
  }

  /**
   * Create instance from a node module
   * @param exportName the export name to create from
   * @param modulePath the path to the module
   * @param constructorArgs args to be passed to the constructors
   */
  getInstanceFromModule(exportName:string, modulePath:string, ...constructorArgs:any):any {
     const serviceRealPath = path.resolve(this.directoryCatalogRoot, modulePath);
     console.debug('Getting instance from path : ' + serviceRealPath);
     const importedModule = require(serviceRealPath);
     if(Array.isArray(constructorArgs)) {
       return new importedModule[exportName](...constructorArgs);
     }
     else {
       return new importedModule[exportName]();
     }
  }

  /**
   * Get an instance from a discovered catalog.
   * @param contractType the contract type that you want to get
   * @param contractName the contract name related to the contract type that you want to get
   * @param constructorArgs args to be passed to the constructors
   */
  getInstanceFromCatalogs(contractType:string, contractName:string, ...constructorArgs:any):any {
    let createdInstance = null;
    this.catalogs.some((catalog) => {
      if(catalog.hasExport(contractType, contractName)) {
        createdInstance = catalog.getExport(contractType, contractName, ...constructorArgs);
        return createdInstance !== null && typeof createdInstance !== 'undefined';
      }
    });
    return createdInstance;
  }
}

/**
 * the global factory that can be used accross all objects of your running application
 */
export const globalInstancesFactory = new InstancesFactory();
