"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProjectDto_1 = require("../../datas/dtos/ProjectDto");
class Project {
    constructor(options = {}, app) {
        this.options = options;
        this.app = app;
        this.docs = {
            description: 'The project CRUD Service',
            definitions: {
                project: {
                    type: 'object',
                    required: [
                        'name',
                        'code'
                    ],
                    properties: {
                        id: {
                            type: 'string',
                            description: 'the id of the project: uuidv4'
                        },
                        name: {
                            type: 'string',
                            description: 'the name of the project'
                        },
                        code: {
                            type: 'string',
                            description: 'the code of the project'
                        },
                        description: {
                            type: 'string',
                            description: 'the description of the project'
                        }
                    }
                },
                project_list: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/project'
                    }
                }
            },
            operations: {
                get: {
                    description: 'Get a project by id',
                    'parameters[0]': {
                        description: 'The id of the searched project',
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                },
                create: {
                    description: 'Create a new project',
                    requestBody: {
                        description: "a project dto without id",
                        content: {
                            "application/json": {
                                schema: {
                                    type: 'object',
                                    required: [
                                        'name',
                                        'code'
                                    ],
                                    properties: {
                                        name: {
                                            type: 'string',
                                            description: 'the name of the project'
                                        },
                                        code: {
                                            type: 'string',
                                            description: 'the code of the project'
                                        },
                                        description: {
                                            type: 'string',
                                            description: 'the description of the project'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
    }
    find(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    get(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = this.app.backend.getProject(id.toString());
            return ProjectDto_1.ProjectDto.createFromEntity(project);
        });
    }
    create(data, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(data)) {
                return Promise.all(data.map(current => this.create(current, params)));
            }
            const project = this.app.backend.createProject(data);
            return ProjectDto_1.ProjectDto.createFromEntity(project);
        });
    }
    update(id, data, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield this.get(id.toString(), params);
            if (project === null)
                this.create(data, params);
            else {
                this.app.backend.updateProject(data);
            }
            return data;
        });
    }
    patch(id, data, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.update(id, data, params);
        });
    }
    remove(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectToDelete = this.app.backend.getProject(id.toString());
            if (projectToDelete !== null) {
                this.app.backend.deleteProject(projectToDelete);
            }
            return projectToDelete;
        });
    }
}
exports.Project = Project;
//# sourceMappingURL=project.class.js.map