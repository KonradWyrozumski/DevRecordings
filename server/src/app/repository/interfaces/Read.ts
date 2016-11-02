interface Read<T> {
    retrieve: (callback: (error: any, result: any) => void) => void;
    retrieveOne(condition: Object, callback: (error: any, result: any) => void);
    findById: (id: string, callback: (error: any, result: T) => void) => void;
}

export = Read;