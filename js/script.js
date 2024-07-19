
var container = document.querySelector('.container');
var dark = document.getElementById('dark');

dark.addEventListener('click', ()=>{
    container.classList.toggle('active');
})

 var result =document.getElementById('textarea');
 function disp (ele){
    result.value += ele;
    console.log(ele);
}
function solve(){
    let x =result.value;
    console.log(x);
    let op = eval(x);
    result.value = op;
}

function clr(){
    result.value = "";
    console.log("clear");
}