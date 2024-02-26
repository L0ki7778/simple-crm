
export class User {
    firstName: string;
    lastName: string;
    email: string;
    timestamp: number;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    id: string;

    constructor(object?: any) {
        this.firstName = object ? object.firstName : "";
        this.lastName = object ? object.lastName : "";
        this.email = object ? object.email : "";
        this.timestamp = object ? object.timestamp : "";
        this.birthDate = object ? object.birthDate : "";
        this.street = object ? object.street : "";
        this.zipCode = object ? object.zipCode : "";
        this.city = object ? object.city : "";
        this.id = object ? object.id : "";
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            timestamp: this.timestamp,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            id: this.id
        }
    }
}

