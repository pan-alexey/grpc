export declare class ExternalService {
    private service;
    private readonly client;
    onModuleInit(): void;
    getTest(): Promise<string>;
    getTestList(id?: number, text?: string): Promise<string>;
}
