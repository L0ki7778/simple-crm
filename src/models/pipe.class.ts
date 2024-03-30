export class CustomPipe {
    title: string;
    summedDeals: number;
    summedValue: number;
    currentDeals: number;
    id: string;
    index:number;
    type = "pipe";

    constructor(object?: any) {
        this.title = object ? object.title : '';
        this.summedDeals = object ? object.summedDeals : 0;
        this.summedValue = object ? object.summedValue : 0;
        this.currentDeals = object ? object.currentDeals : 0;
        this.id = object ? object.id : '';
        this.index = object ? object.index : null;
    }

   public toJSON() {
        return {
            title: this.title,
            summedDeals: this.summedDeals,
            summedValue: this.summedValue,
            currentDeals: this.currentDeals,
            id: this.id,
            index: this.index,
            type: this.type
        }
    }
}