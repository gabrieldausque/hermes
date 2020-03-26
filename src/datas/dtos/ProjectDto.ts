import {NullableProject, Project} from "../entities/Project";

export type NullableProjectDto = ProjectDto | null

export class ProjectDto {
  static createFromEntity(entity:NullableProject):NullableProjectDto {
    if(entity === null)
      return null;
    return new ProjectDto(entity.id, entity.name, entity.code, entity.description);
  }
  constructor(id:any, code:string, name:string,description:any){
    this.id = id;
    this.code = code;
    this.name = name;
    this.description = description;
  }
  id:number|string;
  code:string;
  name:string;
  description?:string;
}
