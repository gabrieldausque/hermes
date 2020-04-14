import {IProjectEntity} from "../interfaces/IProjectEntity";
import {Guid} from "guid-typescript";
import {NullableProjectDto, ProjectDto} from "../dtos/ProjectDto";
import {MoleculeEntity} from "./MoleculeEntity";
import {IMoleculeEntity} from "../interfaces/IMoleculeEntity";

export class ProjectEntity implements IProjectEntity {

  constructor(code:string, name:string,description:any){
    this.id = Guid.create().toString();
    this.code = code;
    this.name = name;
    this.description = description;
    this.molecules = []
  }
  id:number|string;
  code:string;
  name:string;
  description?:string;
  molecules: IMoleculeEntity[];

  public static loadFromDto(dto: NullableProjectDto) {
    if(dto === null)
      return null;
    const project =  new ProjectEntity(dto.name, dto.code, dto.description);
    project.id = dto.id;
    if(Array.isArray(dto.molecules)){
      dto.molecules.forEach((m) => {
        let newMolecule = new MoleculeEntity(m.name, m.description);
        newMolecule.moleculeId = m.moleculeId;
        project.addMolecule(newMolecule);
      });
    }
    return project;
  }

  addMolecule(molecule:MoleculeEntity):void{
    const moleculeIndex = this.molecules.findIndex((m) => m.moleculeId === molecule.moleculeId);
    if(moleculeIndex >= 0){
      this.molecules.splice(moleculeIndex,1)
    }
    this.molecules.push(molecule);
  }
}
export type NullableProject = ProjectEntity | null;
