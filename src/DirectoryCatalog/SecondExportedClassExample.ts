import {IExportedClass} from "./IExportedClass";
import {ExportMetadatas} from "../services/composition/ExportMetadatas";

export class SecondExportedClassExample
  implements IExportedClass {
  public static metadatas:ExportMetadatas[] = [
    {
      contractType:'IExportedClass',
      contractName:'Second',
      isShared:false
    }
  ];
  helloWorld(): string {
    return "Hello world from second";
  }
}

