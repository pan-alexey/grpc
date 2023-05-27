import { Global, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ExternalController } from './external.controller';
import { EXTERNAL_SERVICE_NAME, EXTERNAL_PACKAGE_NAME } from './external.proto';
import { ExternalService } from './external.service';

@Global()
@Module({
  imports: [
    ClientsModule.register([
      {
        name: EXTERNAL_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: EXTERNAL_PACKAGE_NAME,
          protoPath: 'proto/external.proto',
        },
      },
    ]),
  ],
  controllers: [ExternalController],
  providers: [ExternalService],
  exports: [ExternalService],
})
export class ExternalModule {}
