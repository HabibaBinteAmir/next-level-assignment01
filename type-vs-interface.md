Each blog must have a clear Title, Introduction, Detailed Body Paragraphs with Code Examples, and Conclusion.

Tittle:the core differences between type aliases and interface in TypeScript

A type alias and interface both are ways of declare a type of data in order to reuse it . Depending of the situation we can use both but it is suggested to use interface above type. 

the difference between type alias and interface are 

1.cannot build primative with interface but primative can be build with type
example:
type id =number;  //corrcet
interface id =number; // not correct or impossible;

2.cannot build union with interface but can with type 

type ROle ="admin" | "member"  // correct 
interface Role = "admin" | "member"  // incorrect 

3.Cannot redeclare type but can redeclare interface

type car ={
    model  =  string;    

}
type car={
    batch  =  number    //error ;
}

interface IEmployee{
    name:string;
}
interface IEmployee{
     model:string;
}
const user :IEmployee ={
    name:"MIr"
    model:"assignment"
}
4. to extend interface use extends but to extend type use & symbol
 interface Animal {
    species:string;
 }
  interface Cat extends Animal {
    bread:string;
 }
 const cat : Cat ={
    bread:string;
    species:string;
 }


 type vehical={
    brand:string;
 }
 type car = Vehical &{
    model:string;
 }
 const car :Car ={
    model: "corola";
    brand:"toyota"
 }


 we use interface for object like api etc 
 and use type when need unions, tuples, primitives aliases, mapped types, or conditional types
