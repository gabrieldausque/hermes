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

  private firstName: string;
  private lastName: string;

  constructor(firstName:string='test', lastName:string='TEST') {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  helloWorld(): string {
    return `Hello ${this.firstName} ${this.lastName} from second`;
  }
}

