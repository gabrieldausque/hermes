"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryStorage_1 = require("./MemoryStorage");
const Project_1 = require("../datas/entities/Project");
class BackEndService {
    constructor() {
        this.store = new MemoryStorage_1.MemoryStorage();
    }
    //usecase
    getProject(id) {
        return this.store.get(id);
    }
    createProject(data) {
        return this.store.create(data.name, data.code, data.description);
    }
    updateProject(data) {
        if (data != null) {
            const updatedProject = Project_1.Project.LoadFromDto(data);
            this.store.update(updatedProject);
        }
    }
    deleteProject(data) {
        const projectToDelete = Project_1.Project.LoadFromDto(data);
        this.store.delete(projectToDelete);
    }
}
exports.BackEndService = BackEndService;
//# sourceMappingURL=BackEndService.js.map