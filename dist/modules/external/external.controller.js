"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalController = void 0;
const common_1 = require("@nestjs/common");
const external_service_1 = require("./external.service");
let ExternalController = class ExternalController {
    constructor(externalService) {
        this.externalService = externalService;
    }
    main() {
        return 'ok';
    }
    async getTest() {
        return this.externalService.getTest();
    }
    async getListById(id, text) {
        return this.externalService.getTestList(parseInt(id), text = '');
    }
    async getListByIdAndText(id, text) {
        return this.externalService.getTestList(parseInt(id), text);
    }
    async getList() {
        return this.externalService.getTestList();
    }
};
__decorate([
    (0, common_1.Get)('external'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ExternalController.prototype, "main", null);
__decorate([
    (0, common_1.Get)('external/getTest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExternalController.prototype, "getTest", null);
__decorate([
    (0, common_1.Get)('external/getList/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('text')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ExternalController.prototype, "getListById", null);
__decorate([
    (0, common_1.Get)('external/getList/:id/:text'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('text')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ExternalController.prototype, "getListByIdAndText", null);
__decorate([
    (0, common_1.Get)('external/getList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExternalController.prototype, "getList", null);
ExternalController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [external_service_1.ExternalService])
], ExternalController);
exports.ExternalController = ExternalController;
//# sourceMappingURL=external.controller.js.map