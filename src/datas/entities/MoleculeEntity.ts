import {IMoleculeEntity} from "../interfaces/IMoleculeEntity";
import {uuid} from "uuidv4";

export class MoleculeEntity implements IMoleculeEntity{
  description: string;
  moleculeId: string;
  name: string;
  otherProperties: any[];
  constructor(name:string,description:string){
    this.moleculeId = uuid();
    this.name = name;
    this.description = description;
    this.otherProperties = []
  }

  addProperty(otherProperty: any): void {
    this.otherProperties.push(otherProperty);
  }

}
