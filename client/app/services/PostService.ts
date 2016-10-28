import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { IPostService } from './interfaces/IPostService';

@inject(HttpClient)
export class PostService implements IPostService {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;

        this.httpClient.configure(config => {
        });
    }

    postNewAddress(address: string): Promise<any> {
        var jsonAddress = JSON.stringify({ address: address });
        var headers = new Headers();
        headers.append("content-type", "application/json; charset=utf-8");

        return this.httpClient.fetch('api/recordings', {
            method: 'post',
            body: jsonAddress,
            headers: headers
        });
    }
}
