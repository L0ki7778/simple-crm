
export class User {

    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    timestamp: number;
    birthDate: number;
    zipCode: number;
    city: string;
    street: string;
    streetSecondLine: string;
    email: string;
    phone: number;
    notes: string;
    employmentStatus: string;
    job: string;
    creditScore: string;
    annualIncome: string;
    estimatedExpanses: string;
    netMonthlyIncome: string;
    reserves: string;

    constructor(object?: any) {
        this.id = object ? object.id : "";
        this.firstName = object ? object.firstName : "";
        this.lastName = object ? object.lastName : "";
        this.age = object ? object.age : "";
        this.gender = object ? object.gender : "";
        this.timestamp = object ? object.timestamp : "";
        this.birthDate = object ? object.birthDate : "";
        this.zipCode = object ? object.zipCode : "";
        this.city = object ? object.city : "";
        this.street = object ? object.street : "";
        this.streetSecondLine = object ? object.streetSecondLine : "";
        this.email = object ? object.email : "";
        this.phone = object ? object.phone : "";
        this.notes = object ? object.notes : "";
        this.employmentStatus = object ? object.employmentStatus : "";
        this.job = object ? object.job : "";
        this.creditScore = object ? object.creditScore : "";
        this.annualIncome = object ? object.annualIncome : "";
        this.estimatedExpanses = object ? object.estimatedExpanses : "";
        this.netMonthlyIncome = object ? object.netMonthlyIncome : "";
        this.reserves = object ? object.reserves : "";
    }

    public toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age,
            gender: this.gender,
            timestamp: this.timestamp,
            birthDate: this.birthDate,
            zipCode: this.zipCode,
            city: this.city,
            street: this.street,
            streetSecondLine: this.streetSecondLine,
            email: this.email,
            phone: this.phone,
            notes: this.notes,
            employmentStatus: this.employmentStatus,
            job: this.job,
            creditScore: this.creditScore,
            annualIncome: this.annualIncome,
            estimatedExpanses: this.estimatedExpanses,
            netMonthlyIncome: this.netMonthlyIncome,
            reserves: this.reserves
        }
    }
}
