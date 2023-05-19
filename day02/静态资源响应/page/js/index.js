let tds = document.querySelectorAll("td")

// tds.forEach((item)=>{
//     // 箭头函数会继承 dom元素的this 
//     // 匿名函数会指向 dom元素
//     item.addEventListener("click",function(){
//         console.log(this);
        
//         item.style.backgroundColor ="#ffff"
//     })
// })
tds.forEach((item) => {
    item.onclick = () => {

        item.style.backgroundColor = "#ffff"
    }
})