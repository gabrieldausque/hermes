import {NullableProject, ProjectEntity} from "../../datas/entities/ProjectEntity";
import cluster from 'cluster';
export class MemoryStorage {
  constructor(){
    this.innerStorage = [];
  }

  innerStorage:ProjectEntity[];
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
    console.log(`add from process ${process.pid}  which is ${cluster.isWorker?'worker':'master'}`);
    if(!this.innerStorage.find(value => {
      return value.id === project.id;
    })) {
      this.innerStorage.push(project)
    }
  }
  update(project:ProjectEntity):void{
    // console.log(`update from process ${process.pid}  which is ${cluster.isWorker?'worker':'master'}`);
    if(this.exists(project)){
      const index = this.innerStorage.indexOf(this.innerStorage.find((p) => p.id === project.id));
      this.innerStorage.splice(index,1, project);
    }
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
    return this.innerStorage;
  }

}
