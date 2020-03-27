import {MemoryStorage} from "./MemoryStorage";
import {NullableProject, Project} from "../datas/entities/Project";
import {NullableProjectDto, ProjectDto} from "../datas/dtos/ProjectDto";

export class BackEndService {
  constructor(){
    this.store = new MemoryStorage();
  }
  store:MemoryStorage;

  //usecase
  getProject(id: string):NullableProject {
    return this.store.get(id);
  }

  createProject(data: ProjectDto):Project {
    return this.store.create(data.name, data.code, data.description);
  }

  updateProject(data: NullableProjectDto) {
    if(data != null) {
      const updatedProject = Project.LoadFromDto(data);
      this.store.update(updatedProject);
    }
  }

  deleteProject(data: ProjectDto) {
    const projectToDelete = Project.LoadFromDto(data);
    this.store.delete(projectToDelete);
  }

  all():Project[] {
    return this.store.all();
  }
}
