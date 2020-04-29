export class ServiceWithCtorArgs {
  private firstName: string;
  private lastName: string;
  constructor(firstName:string, lastName:string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  helloWorld():string{
    return 'Hello World ' + this.firstName + ' ' + this.lastName + ' From ctor args service !'
  }
}
