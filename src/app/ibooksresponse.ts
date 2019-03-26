
export interface IBooksResponse {
    items: IItems[];
}

export interface IItems {
    volumeInfo: IVolumenInfo;
}

export interface IVolumenInfo {
    title:string;
    authors:string[];
}
