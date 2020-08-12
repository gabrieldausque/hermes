import {MemoryStorage} from "./MemoryStorage";
import {NullableProject, ProjectEntity} from "../../datas/entities/ProjectEntity";

export class BackEndService {
  public static metadata:any[] = [
    {
      contractType:'BackEndService',
      contractName:'Default',
      isShared:true
    }
  ];

  constructor(){
    this.store = new MemoryStorage();
  }
  store:MemoryStorage;

  getProject(id: string):NullableProject {
    return this.store.get(id);
  }

  createProject(data: ProjectEntity):ProjectEntity {
    return this.store.create(data.name, data.code, data.description);
  }

  updateProject(data: NullableProject) {
    if(data != null) {
      this.store.update(data);
    }
  }

  deleteProject(data: ProjectEntity) {
    this.store.delete(data);
  }

  all():ProjectEntity[] {
    return this.store.all();
  }
}
