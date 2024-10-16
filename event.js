let bt1 = document.querySelector("#bt1");

bt1.onclick=()=> {
    console.log('Button is Clicked')
}
let bt2 = document.querySelector('#bt2');
bt2.ondblclick=()=> {
    console.log('Button is Clicked')
    console.log(evt.type);
}
let div = document.querySelector("div");

div.onmouseover = () => {
    console.log('you are in box1');
}
div.onmouseover = () => {
    console.log('you are in box2');
}

let bt1 = document.querySelector("#bt1");

bt1.addEventListener=("click",())=> {
    console.log('Button is Clicked')
}