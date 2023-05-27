import { ExternalService } from './external.service';
export declare class ExternalController {
    private readonly externalService;
    constructor(externalService: ExternalService);
    main(): string;
    getTest(): Promise<string>;
    getListById(id: string, text: string): Promise<string>;
    getListByIdAndText(id: string, text: string): Promise<string>;
    getList(): Promise<string>;
}
