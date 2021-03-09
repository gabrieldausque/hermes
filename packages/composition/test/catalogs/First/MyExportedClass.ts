import {MyInterface} from "../../MyInterface";

export class MyExportedClass implements MyInterface {

    public static metadata: any[] = [
        {
            contractType:'MyInterface',
            contractName:'First',
            isShared:true
        }
    ];

    doAction(): string {
        return "Hello World from First !";
    }

    doActionWithArg(arg: string): string {
        return `Hello ${arg} !`;
    }

}