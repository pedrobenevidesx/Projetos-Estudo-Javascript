const botao = document.getElementById("but");

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = Number(document.getElementById("altura").value);
    const peso = Number(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    const calculo = peso / (altura * altura);

    let classificacao = '';


    if (calculo < 18.5) {
        classificacao = "Abaixo do peso";
    }

    else if (calculo >= 18.5 && calculo <= 24.9) {
        classificacao = "Peso normal";
    }

    else if (calculo >= 25 && calculo <= 29.9) {
        classificacao = "Sobrepeso";
    }

    else if (calculo >= 30 && calculo <= 34.9) {
        classificacao = "Obesidade grau 1";
    }

    else if (calculo >= 35 && calculo <= 39.9) {
        classificacao = "Obesidade grau 2";
    }

    else {
        classificacao = "obesidadde grau 3";
    }

    resultado.textContent = `${nome}, seu IMC é ${calculo.toFixed(2)} e você está com ${classificacao}.`;

}

botao.addEventListener("click", imc);