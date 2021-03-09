import {MyInterface} from "../../MyInterface";

export class AnotherExportedClass implements MyInterface {

    public static metadata: any[] = [
        {
            contractType:'MyInterface',
            contractName:'Another',
            isShared:false
        }
    ];

    doAction(): string {
        return "Hello World from Another !";
    }

    doActionWithArg(arg: string): string {
        return "";
    }

}
