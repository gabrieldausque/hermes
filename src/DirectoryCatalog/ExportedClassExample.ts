import {ExportMetadatas} from "../services/factory/ExportMetadatas";
import {IExportedClass} from "./IExportedClass";

export class ExportedClassExample
  implements IExportedClass {
  public static metadatas: ExportMetadatas[] = [
    {
      ContractType:'IExportedClass',
      ContractName:'First',
      IsShared:false
    }
  ];

  helloWorld(): string {
    return "Hello World from first";
  }

}
