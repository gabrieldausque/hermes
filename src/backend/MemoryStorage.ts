import {NullableProject, Project} from "../datas/entities/Project";
import {exists} from "fs";

export class MemoryStorage {
  constructor(){
    this.innerStorage = [];
  }

  private innerStorage:Project[];
  get(id:string):NullableProject{
    if(this.exists(id)){
      return this.innerStorage[this.innerStorage.findIndex(value => value.id === id)];
    }
    return null;
  }
  create(name:string, code:string, description?:string):Project{
    const newProject = new Project(name, code, description);
    this.add(newProject);
    return newProject
  }
  add(project:Project):void{
    if(!this.innerStorage.find(value => {
      return value.id === project.id;
    })) {
      this.innerStorage.push(project)
    }
  }
  update(project:Project):void{
    this.delete(project);
    this.add(project);
  }

  private exists(projectOrId: Project|string):boolean {
    if(projectOrId instanceof Project){
      return this.innerStorage.findIndex(value => value.id === projectOrId.id) >= 0;
    }else {
      return this.innerStorage.findIndex(value => value.id === projectOrId) >= 0;
    }
  }

  delete(project: Project) {
    if(this.exists(project)) {
      this.innerStorage.splice(this.innerStorage.findIndex(value => value.id === project.id), 1);
    }
  }
}
