import {MemoryStorage} from "./MemoryStorage";
import {NullableProject} from "../datas/entities/Project";

export class BackEndService {
  constructor(){
    this.store = new MemoryStorage();
  }
  store:MemoryStorage;

  //usecase
  getProject(id: string):NullableProject {
    return this.store.get(id);
  }
}
