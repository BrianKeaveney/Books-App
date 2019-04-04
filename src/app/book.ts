import { IVolumenInfo, IImageLinks } from './ibooksresponse';

export class Book{
    title:string;
    // authors:string[];
    // publisher: string;
    // description: string;
    // averageRating: string;
    // language: string;
    // imageLinks: IImageLinks;
    // smallThumbnail:string;
    // thumbnail:string;

    constructor(title:string){
        this.title = title;
        // this.authors = authors;
        // this.description = description;
        // this.smallThumbnail = smallThumbnail;
    }
}