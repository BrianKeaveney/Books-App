
export interface IBooksResponse {
    items: IItems[];
}

export interface IItems {
    volumeInfo: IVolumenInfo;
}

export interface IVolumenInfo {
    title:string;
    authors:string[];
    publisher: string;
    description: string;
    averageRating: string;
    language: string;
    imageLinks: IImageLinks;
}

export interface IImageLinks{
    smallThumbnail:string;
    thumbnail:string;
}
