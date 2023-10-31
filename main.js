
function myFunction() {
    let Numero = prompt("Ingrese un numero");
    if (Numero >= 50) {
      document.getElementById("demo").innerHTML =
      "GANASTE";
    }else{(Numero < 50) 
      document.getElementById("demo").innerHTML =
        "PERDISTE"
    }
}