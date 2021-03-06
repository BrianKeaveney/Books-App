export class Book{
    title:string;
    dateAdded:number;
    author: string;
    thumbnail: string;
    averageRating: number;
    review:string="";
    userRating:number;
    isReview:boolean=true;


    constructor(title:string, dateAdded:number, author:string, thumbnail:string, averageRating:number){
        this.title = title;
        this.dateAdded = dateAdded;
        this.author = author;
        this.thumbnail = thumbnail;
        this.averageRating = averageRating;
    }
}