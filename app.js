var First = document.querySelector("#first");
var Second = document.querySelector("#second");
var Third = document.querySelector("#third");
var btn = document.querySelector("button");
var output = document.querySelector("#output")

function btnhandler(){
    var Sum = parseInt(First.value)+ parseInt(Second.value)+ parseInt(Third.value);
    if(Sum === 180)
        output.innerHTML = "these angles form a triangle";
    else
    {   var diff = 180 - Sum;
        output.innerHTML = "Sum of the angles of triangle is 180 you should add "+ diff +" in any angle";
    }
}



btn.addEventListener("click",btnhandler);