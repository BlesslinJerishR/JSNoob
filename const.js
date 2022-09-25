const constDemo  = document.getElementById('constDemo');

function constCar(){
    const carName = "Const Volvo";
    constDemo.innerHTML = carName;
}

function constReset(){
    constDemo.innerHTML = "Const Example";
}