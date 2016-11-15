import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { ApiClient } from './ApiClient';

@inject(HttpClient)
export class RecordingsApi extends ApiClient {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        super(httpClient);
        this.configure("api/recordings");
    }
}
