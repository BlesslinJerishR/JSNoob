function external(){
    document.getElementById("external").innerHTML = "I am from an external script file.";
}
function internal(){
    document.getElementById("external").innerHTML = "I am reverted to internal html.";
}   