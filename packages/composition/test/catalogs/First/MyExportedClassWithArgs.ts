import {MyInterface} from "../../MyInterface";

export class MyExportedClassWithArgs implements MyInterface{

    public static metadata: any[] = [
        {
            contractType:'MyInterface',
            contractName:'Second',
            isShared:true
        }
    ];

    private myString: string;

    constructor(theString:string) {
        this.myString = theString;
    }

    doAction(): string {
        return `Hello ${this.myString} from Exported Class`;
    }

    doActionWithArg(arg: string): string {
        return `Hello ${arg}`;
    }

}