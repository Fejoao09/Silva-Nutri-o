var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];

    var pesoTd = paciente.querySelector(".info-peso");
    var peso = pesoTd.textContent;
    var pesoVa = validaPeso(peso);

    var altuTd = paciente.querySelector(".info-altura");
    var altura = altuTd.textContent;
    var alturaVa = validaAltura(altura);

    var imcTd = paciente.querySelector(".info-imc");


    if (!pesoVa){
        console.log("Peso invalido");
        pesoVa = false;
        imcTd.textContent = ("Peso invalido");
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaVa){
        console.log("Altura invalida");
        alturaVa = false;
        imcTd.textContent = ("Altura invalida");
        paciente.classList.add("paciente-invalido");
    }

    if (alturaVa && pesoVa){
        var imc = calculaImc(peso,altura);
        imcTd.textContent = imc;
}
}

function validaPeso(peso){
        if(peso >= 0 && peso < 1000){
                return true;
        }else{
                return false;
        }
}

function validaAltura(altura){
        if(altura >= 0 && altura < 3){
                return true;
        }else{
                return false;
        }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);
}
