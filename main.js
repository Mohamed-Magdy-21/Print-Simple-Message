// get elements into var
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

// Event 

btn.onclick = function(){
    // 1- get vlaue from input / inValue = value u write 
    // 2- put input value in p 
    // 3- empty input value
    let inValue = input.value;
    if(inValue !== ""){
        msg.innerHTML = inValue;
        input.value = ""; 
    }
}