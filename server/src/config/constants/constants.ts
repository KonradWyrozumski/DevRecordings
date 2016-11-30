class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === "production" ? process.env.dbURI : "mongodb://localhost:27017/quickStart";
    static TOKEN_SECRET: string = process.env.NODE_ENV === "production" ? process.env.TOKEN_SECRET : "n-B5oYBHUoN8XokKDhwaAdMO";
}
Object.seal(Constants);
export = Constants;