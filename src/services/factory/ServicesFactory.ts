import path from "path";
export class ServicesFactory {
  private directoryCatalogRoot: string;
  constructor(directoryCatalogRoot?:string) {
      if(!directoryCatalogRoot) {
        this.directoryCatalogRoot = path.dirname(require.main.filename);
      } else {
        this.directoryCatalogRoot = directoryCatalogRoot;
      }

  }
  getService(serviceName:string, servicePath:string) {
     const serviceRealPath = path.resolve(this.directoryCatalogRoot, servicePath);
     console.debug('Getting service from path : ' + serviceRealPath);
     const importedModule = require(serviceRealPath);
     const instance = new importedModule[serviceName];
     return instance;
  }
}
