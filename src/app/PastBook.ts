export class PastBook{
    thumbnail:string;
    searchName:string;
    $key:string;

    constructor(searchName:string, thumbnail:string) {
        this.searchName = searchName;
        this.thumbnail = thumbnail;
    }
}