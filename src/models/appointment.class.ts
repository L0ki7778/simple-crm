export class Appointment{
id:string;
location:string;
userId:string;
timeStamp:number;
description:string;
date:number;

constructor(object?:any){
    this.id=object?object.id:'';
    this.location=object?object.location:'';
    this.userId=object?object.userId:'';
    this.timeStamp=object?object.timeStamp:'';
    this.description=object?object.description:'';
    this.date=object?object.date:'';
};
toJson(){
    return {
        id:this.id,
        location:this.location,
        userId:this.userId,
        timeStamp:this.timeStamp,
        description:this.description,
        date:this.date
    }
}
}