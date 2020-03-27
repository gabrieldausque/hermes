import {IProject} from "../interfaces/IProject";
import {Guid} from "guid-typescript";
import {NullableProjectDto, ProjectDto} from "../dtos/ProjectDto";

export class Project implements IProject {
  constructor(code:string, name:string,description:any){
    this.id = Guid.create().toString();
    this.code = code;
    this.name = name;
    this.description = description;
  }
  id:number|string;
  code:string;
  name:string;
  description?:string;

  public static LoadFromDto(dto: NullableProjectDto) {
    if(dto === null)
      return null;
    const project =  new Project(dto.name, dto.code, dto.description);
    project.id = dto.id;
    return project;
  }
}

export type NullableProject = Project | null
