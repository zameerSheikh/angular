export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    salary: number;
    dob: string;
    department?: string; // optoinal 
    //computeMonthlySalary(annualSalary: number): number;
}

export class Employee implements IEmployee {
    
    // to implement the interface we need to add all the properties in the class as well, however typescript provides 
    // a short hand by writing the properties as parameters in the constructor function.
    constructor(public code:string, public name:string, public gender:string, public salary:number, public dob:string) {

    }

    // computeMonthlySalary(annualSalary: number): number {
    //     return annualSalary / 12;
    // }
}