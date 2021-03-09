import {MyInterface} from "../MyInterface";

export class CtorWithArgsClass implements MyInterface {

    private sayHelloTo: string;

    constructor(sayHelloTo:string) {
        this.sayHelloTo = sayHelloTo;
    }

    doAction(): string {
        return `Hello ${this.sayHelloTo} !`;
    }

    doActionWithArg(arg: string): string {
        return `Hello ${arg} !`;
    }

}