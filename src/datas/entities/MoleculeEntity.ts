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

  static deserialize(plainObjectMolecule:MoleculeEntity):MoleculeEntity {
    const m = new MoleculeEntity(plainObjectMolecule.name, plainObjectMolecule.description)
    m.moleculeId = plainObjectMolecule.moleculeId;
    m.otherProperties = m.otherProperties.concat(plainObjectMolecule.otherProperties);
    return m;
  }
}
