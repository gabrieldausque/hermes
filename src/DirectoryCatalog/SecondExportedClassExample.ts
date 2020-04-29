import {IExportedClass} from "./IExportedClass";
import {ExportMetadatas} from "../services/factory/ExportMetadatas";

export class SecondExportedClassExample
  implements IExportedClass {
  public static metadatas:ExportMetadatas[] = [
    {
      ContractType:'IExportedClass',
      ContractName:'Second',
      IsShared:false
    }
  ];
  helloWorld(): string {
    return "Hello world from second";
  }
}

