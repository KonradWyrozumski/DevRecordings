export interface IPostService {
    postNewAddress(address: string): Promise<any>;
}