import { Module } from '@nestjs/common';
import { AppModule } from './modules/app/app.module';
import { ExternalModule } from './modules/external/external.module';

@Module({
  imports: [AppModule, ExternalModule],
})
export class MainModule {}
