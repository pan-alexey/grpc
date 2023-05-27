import { Observable } from "rxjs";
export declare const protobufPackage = "external";
export interface Test {
    id: number;
    title: string;
    body?: string | undefined;
}
export interface Empty {
}
export interface GetTestListMessage {
    id?: number | undefined;
    text?: string | undefined;
}
export interface TestList {
    list: Test[];
}
export declare const EXTERNAL_PACKAGE_NAME = "external";
export interface ExternalServiceClient {
    getTestList(request: GetTestListMessage): Observable<TestList>;
    getTest(request: Empty): Observable<Test>;
}
export interface ExternalServiceController {
    getTestList(request: GetTestListMessage): Promise<TestList> | Observable<TestList> | TestList;
    getTest(request: Empty): Promise<Test> | Observable<Test> | Test;
}
export declare function ExternalServiceControllerMethods(): (constructor: Function) => void;
export declare const EXTERNAL_SERVICE_NAME = "ExternalService";
