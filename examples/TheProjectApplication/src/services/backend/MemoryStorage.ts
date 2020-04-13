import {NullableProject, ProjectEntity} from "../../datas/entities/ProjectEntity";

export class MemoryStorage {
  constructor(){
    this.innerStorage = [];
  }

  private innerStorage:ProjectEntity[];
  get(id:string):NullableProject{
    if(this.exists(id)){
      return this.innerStorage[this.innerStorage.findIndex(value => value.id === id)];
    }
    return null;
  }
  create(name:string, code:string, description?:string):ProjectEntity{
    const newProject = new ProjectEntity(name, code, description);
    this.add(newProject);
    return newProject
  }
  add(project:ProjectEntity):void{
    if(!this.innerStorage.find(value => {
      return value.id === project.id;
    })) {
      this.innerStorage.push(project)
    }
  }
  update(project:ProjectEntity):void{
    this.delete(project);
    this.add(project);
  }

  private exists(projectOrId: ProjectEntity|string):boolean {
    if(projectOrId instanceof ProjectEntity){
      return this.innerStorage.findIndex(value => value.id === projectOrId.id) >= 0;
    }else {
      return this.innerStorage.findIndex(value => value.id === projectOrId) >= 0;
    }
  }

  delete(project: ProjectEntity) {
    if(this.exists(project)) {
      this.innerStorage.splice(this.innerStorage.findIndex(value => value.id === project.id), 1);
    }
  }

  all():ProjectEntity[] {
    return this.innerStorage.slice();
  }
}
