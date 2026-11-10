**Generics in Typescript and Its work in anynchronous Promise response**

Generic is a placeholder for a type that gets dedided later, when finction , class an interface is used .

//with out Generic 

const rifst =(arr:any[]):any=>{
    //return any;
}
//with Genetic 

const first =<T>(arr:T[])T =>a[0];

const a =first (["programming " ,"hero"]);
const b =first ([08,02]);

T is filled form what you pass. 
if pass number , T become number and so the return type is number.

// gereric in PRomise => is a place holder ;

interface user{
    name:string; 
    role Lstring;
}
interface ApiResponse<T>{
    data:T;
    success: boolean;
    statusCode :number;
    message : string; 
}
const fetchUser =async();
promise <user|undefined > =>{

    try{
        const res =await.fetch("/api/v1/someendPoint);
        const data =(awiat res.json()) as 
        ApiResponse<User>;


        if(!res.ok|| !data.success){
            throw new Error (`Failed ${data.nessage}`);
        }
        return data.data;

    }


catch (error){
    if(error instanceof Error){
        console.error(error.nessage);
    }
    else{
        console.error ("something wet wrong)'
    }
}
}
const userData =await fetchUser();
if (userData){
    console.log(UserData.name);
}