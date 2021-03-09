import {MyInterface} from "../MyInterface";

export class NoCtorArgsClass implements MyInterface {

    doAction(): string {
        return "Hello World !";
    }

    doActionWithArg(arg: string): string {
        return `Hello ${arg} !`;
    }

}