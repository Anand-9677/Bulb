// 4 Pillars of DOM:-
// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener 

//1. document.queryselector is used for selecting any query in HTMl.(1)
// var a = document.querySelector("h1")
// console.log(a)


//2. Changing HTML -- by using "innerHTML" for changing text in HTML. 
// var a = document.querySelector("h1")
// a.innerHTML = "Welcome to the world of Guns"


//3. Changing CSS -- for changing style in CSS, we use "Style".
// var a = document.querySelector("h1")
// a.style.color = "green"
// a.style.backgroundColor = "black"


//4. Event Listener -- The event which are happening on DOM.
// var a =  document.querySelector("h1")
// a.addEventListener("click", function(){
//     a.innerHTML = "Welcome to the world of GUNS"
//     a.style.color = "yellow"
//     a.style.backgroundColor = "#000"
// })

//1.{
// #Simple mathod for On/Off the bulb.
// var bulb = document.querySelector("#bulb")
// var btn1 = document.querySelector("#On")
// var btn2 = document.querySelector("#Off")
// btn1.addEventListener("click",function(){
//     bulb.style.backgroundColor = "yellow"
// })

// btn2.addEventListener("click",function(){
//     bulb.style.backgroundColor = "transparent"
// })
// }

//2.{On and Off Only in one button}
var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0

btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor = "yellow"
        console.log("ON")
        flag = 1
    }
    else{
        bulb.style.backgroundColor = "transparent"
        console.log("OFF")
        flag = 0
    }
})