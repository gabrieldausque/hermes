import {ExportMetadatas} from "../services/composition/ExportMetadatas";
import {IExportedClass} from "./IExportedClass";

export class ExportedClassExample
  implements IExportedClass {
  public static metadatas: ExportMetadatas[] = [
    {
      contractType:'IExportedClass',
      contractName:'First',
      isShared:false
    }
  ];

  helloWorld(): string {
    return "Hello World from first";
  }

}
