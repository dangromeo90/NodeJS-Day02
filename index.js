// console.log('Hello')
// var number = 5 ;
// var number = 10 ;
// console.log(number);
// let number = "10" + " " + 5 ;
//  console.log(number);
// khai bao ES5
// function running(km) {
//     return "i am running " + km + " km";
// }
// console.log(running(5));
// Khai bao ES6
// const running = (km) => {
//     return'i am running '+ 5 + " km";
// }
//  console.log(running(5));

// let date = new Date();

// console.log(date);

// let text = document.getElementsByClassName("text");
// text[0].innerHTML = "Hello Dang";
// console.log(text);
const listItem = [
    {
        name: "San pham 1",
        price: 500,
        des : "Mo ta san pham"
    },
    {
        name: "San pham 2",
        price: 1000,
        des : "Mo ta san pham"
    },
    {
        name: "San pham 3",
        price: 1500,
        des : "Mo ta san pham"
    },
    {
        name: "San pham 4",
        price: 50,
        des : "Mo ta san pham"
    }
]
const listItemEl = document.getElementById('list-item');
const array = listItem.map((el, index) =>{
const h1 = document.createElement('h1')
h1.innerHTML = el.name;

const p = document.createElement('p')
p.innerHTML = el.price;
if(el.price === 50){
    p.style.color = "red"
}
const item = document.createElement('div')
item.appendChild(h1);
item.appendChild(p);
listItemEl.appendChild(item);

return item;
})