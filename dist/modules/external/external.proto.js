"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXTERNAL_SERVICE_NAME = exports.ExternalServiceControllerMethods = exports.EXTERNAL_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "external";
exports.EXTERNAL_PACKAGE_NAME = "external";
function ExternalServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getTestList", "getTest"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("ExternalService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("ExternalService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.ExternalServiceControllerMethods = ExternalServiceControllerMethods;
exports.EXTERNAL_SERVICE_NAME = "ExternalService";
//# sourceMappingURL=external.proto.js.map