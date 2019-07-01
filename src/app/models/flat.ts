export class Flat {
     public flatId:number;
     public adress:string;
     public longtitude:number;
     public latitude:number;
     public numBeds:number;
     public numRooms:number;
     public numFloor:number;
     public defultPrice:number; 
     public flatOwnerId:number;

    constructor(flatId?,adress?,longtitude?,latitude?,numBeds?,numRooms?,numFloor?,defultPrice?,flatOwnerId?)
    {
this.flatId=flatId,
this.adress=adress,
this.longtitude=longtitude,
this.latitude=latitude,
this.numBeds=numBeds,
this.numRooms=numRooms,
this.numFloor=numFloor,
this.defultPrice=defultPrice,
this.flatOwnerId=flatOwnerId
    }

}

