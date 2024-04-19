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

// let text = document.getElementsByClassName("text");
// text[0].innerHTML = "Hello Dang";
// console.log(text);
const listItem = [
  {
    name: "Viên uống Kirkland CoQ10",
    price: 450000,
    price2: 550000,
    des: "Mo ta san pham",
    image: "./img/co.webp",
    rating: "5",
  },
  {
    name: "Viên uống Kirkland Fish Oil",
    price: 700000,
    price2: 800000,
    des: "Mo ta san pham",
    image: "./img/fish5.webp",
    rating: "5",
  },
  {
    name: "Viên uống Kirkland Gluco",
    price: 600000,
    price2: 670000,
    des: "Mo ta san pham",
    image: "./img/gluco.webp",
    rating: "5",
  },
  {
    name: "Viên uống Kirkland Calcium",
    price: 500000,
    price2: 700000,
    des: "Mo ta san pham",
    image: "./img/zinc.webp",
    rating: "5",
  },
  {
    name: "Viên uống Kirkland VitaminC",
    price: 400000,
    price2: 550000,
    des: "Mo ta san pham",
    image: "./img/VitaminC.jpg",
    rating: "5",
  },
];
const listItemEl = document.getElementById("list-item");
listItemEl.style.fontFamily = "Quicksand";
listItemEl.style.display = "flex";
listItemEl.style.justifyContent = "space-between";
listItemEl.style.padding = "10px";
listItemEl.style.textAlign = "center";

const array = listItem.map((el, index) => {
    // Tạo ra thẻ div cha
  const item = document.createElement("div");
  item.style.boxShadow = "0 0 4px rgba(2, 41, 199)";
  item.style.padding = "10px";
  item.style.overflow = "hidden";


  // Tạo thẻ img và css
  const img = document.createElement("img");
  img.src = el.image;
  img.style.width = "200px";
  //Tạo hover ảnh
  img.addEventListener("mouseenter", () => {
  img.style.transform = "scale(1.2)";
  img.style.transition = "0.3s";
  });
  
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });

  // Tạo thẻ tên sản phẩm
  const h3 = document.createElement("h3");
  h3.innerHTML = el.name;
  h3.style.width = "250px";

  // Tạo thẻ giá bán sản phẩm
  const p = document.createElement("span");
  p.innerHTML = formatPrice(el.price);
  p.style.fontSize = "20px";
  p.style.color= "#e83770";
  p.style.fontWeight= "bold";
  
  const space = document.createElement("span");
  space.innerHTML = " - ";
  // Tạo thẻ giá gốc
  const pr = document.createElement("span");
  pr.innerHTML = formatPrice(el.price2);
  pr.style.fontSize = "18px";
  pr.style.textDecoration = "line-through 0";
 
  // Tạo ra đánh giá sao
  const star = document.createElement("p");
  star.innerHTML = "★★★★★";
  star.style.color = "orange";
  star.style.fontSize = "30px";

  // Tạo nút thêm sản phẩm

  const addPro = document.createElement("button")
  addPro.innerHTML= "Thêm vào giỏ";
  addPro.style.backgroundColor= " #86c200";
  addPro.style.border= "none";
  addPro.style.padding= "10px 60px";
  addPro.style.color= "white";
  addPro.style.borderRadius= "5px";
 
  addPro.addEventListener("mouseenter", () => {
    addPro.style.cursor = "pointer";
    });

  item.appendChild(img);
  item.appendChild(h3);
  item.appendChild(p);
  item.appendChild(space);
  item.appendChild(pr);
  
  item.appendChild(star);
   item.appendChild(addPro);


  listItemEl.appendChild(item);

  return item;
});
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}
