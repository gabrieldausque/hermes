import {IProject} from "../interfaces/IProject";
import {Guid} from "guid-typescript";

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
}

export type NullableProject = Project | null
