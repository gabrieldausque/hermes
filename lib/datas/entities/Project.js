"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guid_typescript_1 = require("guid-typescript");
class Project {
    constructor(code, name, description) {
        this.id = guid_typescript_1.Guid.create().toString();
        this.code = code;
        this.name = name;
        this.description = description;
    }
    static LoadFromDto(dto) {
        if (dto === null)
            return null;
        const project = new Project(dto.name, dto.code, dto.description);
        project.id = dto.id;
        return project;
    }
}
exports.Project = Project;
//# sourceMappingURL=Project.js.map