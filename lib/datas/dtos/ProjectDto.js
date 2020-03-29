"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectDto {
    constructor(id, code, name, description) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
    }
    static createFromEntity(entity) {
        if (entity === null)
            return null;
        return new ProjectDto(entity.id, entity.name, entity.code, entity.description);
    }
}
exports.ProjectDto = ProjectDto;
//# sourceMappingURL=ProjectDto.js.map