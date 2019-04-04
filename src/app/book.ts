import { IVolumenInfo, IImageLinks } from './ibooksresponse';

export class Book{
    title:string;
    dateAdded:number;
    author: string;
    thumbnail: string;

    constructor(title:string, dateAdded:number, author:string, thumbnail:string){
        this.title = title;
        this.dateAdded = dateAdded;
        this.author = author;
        this.thumbnail = thumbnail;
    }
}