import { HttpClient, HttpClientConfiguration, json } from "aurelia-fetch-client";
import * as $ from "jquery";

export interface ICommandResult {
    errors: any;
    hasErrors: boolean;
    data: any;
}

export abstract class ApiClient {
    private baseUrl: string;
    constructor(private http: HttpClient) {
        this.http.configure((cf: HttpClientConfiguration) => {
            cf.useStandardConfiguration()
                .defaults.headers = {
                    "Accept": "application/json",
                    "X-Requested-With": "Fetch"
                };
        });

    }

    configure(baseUrl: string) {
        this.baseUrl = baseUrl + (baseUrl.endsWith("/") ? "" : "/");
    }

    query(query: string, func: (result: any) => void, params?: any) {
        query = this.baseUrl + query;
        if (params) {
            let args = $.param(params);
            query = query + "?" + args;
        }

        return this.http.fetch(query)
            .then(r => r.json().then(b => func(b)))
            .catch(err => this.handleError(err));
    }

    protected handleError(err) {

        console.debug("Server err. ");
        console.debug(err);
    }

    execute(cmd: string, data: any, onfulfilledfunc: (res: any) => any, func: (res: ICommandResult) => void) {
        cmd = this.baseUrl + cmd;

        return this.http.fetch(cmd, {
            method: "POST",
            body: json(data)
        })
            .then(resp => { onfulfilledfunc(resp); return resp.json(); }).then(d => func(d))
            .catch(er => this.handleError(er));

    }
}