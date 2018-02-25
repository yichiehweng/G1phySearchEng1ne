export class SaveHistory{
    searchTerm: string;
    searchDate: string;
    constructor(searchTerm: string){
        this.searchTerm = searchTerm;
        this.searchDate = new Date(Date.now()).toLocaleString();
    }
}