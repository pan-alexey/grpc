"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const main_module_1 = require("./main.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(main_module_1.MainModule, new platform_fastify_1.FastifyAdapter());
    await app.listen(3000);
    console.log('http://127.0.0.1:3000');
}
bootstrap();
//# sourceMappingURL=main.js.map