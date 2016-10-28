import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { IFetchService } from './interfaces/IFetchService';

@inject(HttpClient)
export class FetchService implements IFetchService {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;

        this.httpClient.configure(config => {
        });
    }

    getAllRecordings(): Promise<any> {
        return this.httpClient.fetch('api/recordings', {});
    }
}
