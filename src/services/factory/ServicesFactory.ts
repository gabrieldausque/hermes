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
  getService(serviceName:string, servicePath:string, ...constructorArgs:any) {
     const serviceRealPath = path.resolve(this.directoryCatalogRoot, servicePath);
     console.debug('Getting service from path : ' + serviceRealPath);
     const importedModule = require(serviceRealPath);
     if(Array.isArray(constructorArgs)) {
       return new importedModule[serviceName](...constructorArgs);
     }
     else {
       return new importedModule[serviceName]();
     }
  }
}
