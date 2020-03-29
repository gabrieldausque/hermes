"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_service_1 = __importDefault(require("./project/project.service"));
// Don't remove this comment. It's needed to format import lines nicely.
function default_1(app) {
    app.configure(project_service_1.default);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map