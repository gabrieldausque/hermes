import {NullableProject, ProjectEntity} from "../entities/ProjectEntity";
import {MoleculeDto} from "./MoleculeDto";
import {IMoleculeEntity} from "../interfaces/IMoleculeEntity";

export type NullableProjectDto = ProjectDto | null

export class ProjectDto {

  static createFromEntity(entity:NullableProject):NullableProjectDto {
    if(entity === null)
      return null;
    const newProject = new ProjectDto(entity.id, entity.name, entity.code, entity.description);
    entity.molecules.forEach((m) => {
      const newMolecule = new MoleculeDto(m.name,m.description);
      newMolecule.moleculeId = m.moleculeId;
      newProject.addMolecule(newMolecule);
    });
    return newProject;
  }
  constructor(id:any, code:string, name:string,description:any, needLongProcess:boolean = false){
    this.id = id;
    this.code = code;
    this.name = name;
    this.description = description;
    this.molecules = [];
    this.needLongProcess = needLongProcess;
  }
  id:number|string;
  code:string;
  name:string;
  description?:string;
  molecules: IMoleculeEntity[];
  needLongProcess:boolean

  addMolecule(moleculeDto: MoleculeDto) {
    const moleculeIndex = this.molecules.findIndex((m) => m.moleculeId === moleculeDto.moleculeId);
    if(moleculeIndex >= 0){
      this.molecules.splice(moleculeIndex,1)
    }
    this.molecules.push(moleculeDto);
  }
}
