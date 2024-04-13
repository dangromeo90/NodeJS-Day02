// var example = 5;
// function printNumbers() {
//     var test = 10 ;
//     console.log(example);
//     console.log(test);
// }
// printNumbers(); // in ra dc 5 , 10
// console.log(example);
// console.log(test);

// arg1 =>{}
// (arg1 = 10)=>{}
// () => {}
// (arg1, arg2) =>{
//     console.log(`this is : ${arg1}`);
//     console.log(`this is : ${arg2}`);
// }

// function formalGreeting(){
//     console.log('How are you ?');
// }
// function casualGreeting(){
//     console.log("What's up ?");
// }
// function greet(type, greetFormal, greetCasual) {
//     if (type === 'formal') {
//         greetFormal();
//     }else if( type === 'casual'){
//         greetCasual();
//     }
// }
// greet('casual', formalGreeting, casualGreeting)
// greet('formal', formalGreeting, casualGreeting)

// const arr1 =[1,2,3];
// const arr2 =[];
// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2)
// }
// console.log(arr2);

// const arr3 =[1, 2, 3];
// const arr4 = arr1.map(function(item) {
//     return item * 2;
// });
// console.log(arr4);

// const birthYear = [1962 , 1965 , 1990 , 1993 , 2013 , 2019];
// const ages = birthYear.map( year => year + 1)
// console.log(ages);
// class house{
//     constructor(width, height, address, floors = 3 ){
//         this.width = width ;
//         this.height = height ;
//         this.address = address ;
//         this.floors = floors ;
//     }
// }
// let myHouse = new house(4 , 80 ,'163/63 Thai Thai', 3)
// console.log(myHouse);

// const person = [
//     {name:'Dang', age: 35},
//     {  name:'Thoi', age: 60},
//     {  name:'Tam', age: 64},
//     {  name:'Son', age: 65},
//     {  name:'Nga', age: 64},
    
// ];
// const fullAge = person.filter(person => person.age >= 18);
// console.log(fullAge);

// class Cat {
//     constructor(name = "MeoMeo"){
//         this.name = name;
//     }
//     speak(){
//         console.log(`${this.name} gay tieng on`);
//     }
// }
// class Lion extends Cat{
//     speak(){
//         super.speak();
//         console.log(this.name + ' gammm')
//     }
// }
// var lion = new Lion(" fuzzy");
// lion.speak();