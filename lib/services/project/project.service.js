"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_class_1 = require("./project.class");
const project_hooks_1 = __importDefault(require("./project.hooks"));
function default_1(app) {
    const options = {
        paginate: app.get('paginate')
    };
    // Initialize our service with any options it requires
    app.use('/project', new project_class_1.Project(options, app));
    // Get our initialized service so that we can register hooks
    const service = app.service('project');
    service.hooks(project_hooks_1.default);
}
exports.default = default_1;
//# sourceMappingURL=project.service.js.map