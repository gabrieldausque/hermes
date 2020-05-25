import {IExportedClass} from "./IExportedClass";

export class SecondExportedClassExample
  implements IExportedClass {
  public static metadata:any[] = [
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

