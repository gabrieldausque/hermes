import {MyInterface} from "../../MyInterface";
import {ExportMetadata} from "../../../src";

export class MultipleLevelComposedClass implements MyInterface {
    public static metadata: ExportMetadata[] = [
        {
            contractType:'MyInterface',
            contractName:'MultiLevelComposed',
            isShared:true,
            constructorInjectedArgs:[
                {
                    contractType:'MyInterface',
                    contractName:'UsingFirst'
                }
            ]
        }
    ];
    public innerInterface: MyInterface;

    constructor(innerComposedInterface:MyInterface) {
        this.innerInterface = innerComposedInterface;
    }

    doAction(): string {
        return this.innerInterface.doAction();
    }

    doActionWithArg(arg: string): string {
        return this.innerInterface.doActionWithArg(arg);
    }
}