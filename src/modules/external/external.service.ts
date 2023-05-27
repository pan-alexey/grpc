import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  ExternalServiceClient,
  EXTERNAL_SERVICE_NAME,
  Test,
  TestList
} from './external.proto';

@Injectable()
export class ExternalService {
  private service: ExternalServiceClient;

  @Inject(EXTERNAL_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.service = this.client.getService<ExternalServiceClient>(
      EXTERNAL_SERVICE_NAME,
    );
  }

  public async getTest(): Promise<string> {
    const res: Test = await firstValueFrom(this.service.getTest({}));

    return JSON.stringify(res);
  }

  public async getTestList(id?: number, text?: string): Promise<string> {
    const res: TestList = await firstValueFrom(this.service.getTestList({id, text}));

    return JSON.stringify(res);
  }
}
