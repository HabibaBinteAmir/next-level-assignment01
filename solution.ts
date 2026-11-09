const multiplyValue =(value :number,multiplier?:number):number=>{
    if(multiplier===undefined){
        return value *2;
    }
    else{
        return value *multiplier;
    }
};

const processInput =(value:string | number | boolean):string|number=>{
    if(typeof value ==="string"){
        return value.trim().toLowerCase();
    }
    else if(typeof value==="number"){
        return value*10;
    }
    else{
        return value?"Active":"Inactive";
    }
};

const formatCoordinate =(cordinate:readonly[number ,number, string]):string => 
    {
    const[latitude,longitude,location]=cordinate;

  return "Location: " + location +" (" + latitude + ", " + longitude +")";
}



const concatenateArrays =<T>(...arr:T[][] ):T[]=>{
    let final:T[]=[];
    for(let i =0; i<arr.length;i++){
        final=final.concat(arr[i]);
    }
    return final;
}



interface Course {
    title :string;
    students:number;
    isPublished:boolean;
}
const getPopularCourses=   (courses:Course[],minStudent:number):Course[]=>
    {
        const final:Course[]=[];


       for(const course of courses){
        if(course.isPublished && course.students  >=minStudent){
            final.push(course);
        }
       }
       return final;

}

const pluckValues =<T,K extends keyof T>(items:T[],key:K):T[K][] =>{
    const final : T[K][]=[];


    for(const arr of items ){
        final.push(arr[key]);
    }
    return final;

}
class Employee {
    protected name:string;
    private baseSalary :number;

    constructor(name:string,baseSalary:number){
        this.name=name;
        this.baseSalary=baseSalary;
    }
    getDetails():string{
        return`Employee:${this.name},BaseSalary:${this.baseSalary}`;
    }
}
class Manager extends Employee{
    private department :string;
    constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}




//8
const validateAgeAsync =(age:number):Promise<string> =>{
    return new Promise((resolve,reject)=>{
        if(age>=18){
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else{
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};