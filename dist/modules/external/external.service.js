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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const external_proto_1 = require("./external.proto");
let ExternalService = class ExternalService {
    onModuleInit() {
        this.service = this.client.getService(external_proto_1.EXTERNAL_SERVICE_NAME);
    }
    async getTest() {
        const res = await (0, rxjs_1.firstValueFrom)(this.service.getTest({}));
        return JSON.stringify(res);
    }
    async getTestList(id, text) {
        const res = await (0, rxjs_1.firstValueFrom)(this.service.getTestList({ id, text }));
        return JSON.stringify(res);
    }
};
__decorate([
    (0, common_1.Inject)(external_proto_1.EXTERNAL_SERVICE_NAME),
    __metadata("design:type", Object)
], ExternalService.prototype, "client", void 0);
ExternalService = __decorate([
    (0, common_1.Injectable)()
], ExternalService);
exports.ExternalService = ExternalService;
//# sourceMappingURL=external.service.js.map