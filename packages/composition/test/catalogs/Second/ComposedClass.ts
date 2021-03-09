import {MyInterface} from "../../MyInterface";
import {ExportMetadata} from "../../../src";

export class ComposedClass implements MyInterface {
    public static metadata: ExportMetadata[] = [
        {
            contractType:'MyInterface',
            contractName:'UsingFirst',
            isShared:true,
            constructorInjectedArgs:[
                {
                    contractType: 'MyInterface',
                    contractName: 'First'
                }
            ],
        },
        {
            contractType:'MyInterface',
            contractName:'UsingAnother',
            isShared:false,
            constructorInjectedArgs:[
                {
                    contractType: 'MyInterface',
                    contractName: 'Another'
                }
            ],
        }
    ];
    public innerInterface: MyInterface;

    constructor(innerInterfaceInstance:MyInterface) {
        this.innerInterface = innerInterfaceInstance;
    }

    doAction(): string {
        return this.innerInterface.doAction();
    }

    doActionWithArg(arg: string): string {
        return this.innerInterface.doActionWithArg(arg);
    }


}