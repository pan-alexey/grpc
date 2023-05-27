import { Controller, Get, Param } from '@nestjs/common';
import { ExternalService } from './external.service';

@Controller()
export class ExternalController {
  constructor(private readonly externalService: ExternalService) {}

  @Get('external')
  main(): string {
    return 'ok';
  }

  @Get('external/getTest')
  async getTest(): Promise<string> {
    return this.externalService.getTest();
  }

  @Get('external/getList/:id')
  async getListById(@Param('id') id: string, @Param('text') text: string): Promise<string> {
    return this.externalService.getTestList(parseInt(id), text = '');
  }

  @Get('external/getList/:id/:text')
  async getListByIdAndText(@Param('id') id: string, @Param('text') text: string): Promise<string> {
    return this.externalService.getTestList(parseInt(id), text);
  }

  @Get('external/getList')
  async getList(): Promise<string> {
    return this.externalService.getTestList();
  }
}
