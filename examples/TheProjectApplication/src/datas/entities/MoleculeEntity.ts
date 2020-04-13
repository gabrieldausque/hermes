import {IMoleculeEntity} from "../interfaces/IMoleculeEntity";
import {uuid} from "uuidv4";

export class MoleculeEntity implements IMoleculeEntity{
  description: string;
  moleculeId: string;
  name: string;
  constructor(name:string,description:string){
    this.moleculeId = uuid();
    this.name = name;
    this.description = description;
  }
}
