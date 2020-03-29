"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = require("../datas/entities/Project");
class MemoryStorage {
    constructor() {
        this.innerStorage = [];
    }
    get(id) {
        if (this.exists(id)) {
            return this.innerStorage[this.innerStorage.findIndex(value => value.id === id)];
        }
        return null;
    }
    create(name, code, description) {
        const newProject = new Project_1.Project(name, code, description);
        this.add(newProject);
        return newProject;
    }
    add(project) {
        if (!this.innerStorage.find(value => {
            return value.id === project.id;
        })) {
            this.innerStorage.push(project);
        }
    }
    update(project) {
        this.delete(project);
        this.add(project);
    }
    exists(projectOrId) {
        if (projectOrId instanceof Project_1.Project) {
            return this.innerStorage.findIndex(value => value.id === projectOrId.id) >= 0;
        }
        else {
            return this.innerStorage.findIndex(value => value.id === projectOrId) >= 0;
        }
    }
    delete(project) {
        if (this.exists(project)) {
            this.innerStorage.splice(this.innerStorage.findIndex(value => value.id === project.id), 1);
        }
    }
}
exports.MemoryStorage = MemoryStorage;
//# sourceMappingURL=MemoryStorage.js.map