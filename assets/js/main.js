let imc = 0.0;
var nome = '';
var altura = 0.0;
var peso = 0.0;

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function identificarFaixaIMC(imc) {
    faixa = '';

    if (imc < 18.5) {
        faixa = 'Abaixo do peso';
    } else if(imc >= 18.5 && imc <= 24.9) {
        faixa = 'Peso normal';
    } else if (imc >= 25.0 && imc <= 29.9) {
        faixa = 'Pré-obeso';
    } else if (imc >= 30.0 && imc <= 34.9) {
        faixa = 'Obeso I';
    } else if (imc >= 35.0 && imc <= 39.9) {
        faixa = 'Obeso II';
    } else {
        faixa = 'Obeso III';
    }

    return faixa;
}

const form = document.getElementById('imc-form');
const resultArea =  document.getElementById('imc-result');

form.addEventListener("submit", function(event) {
    event.preventDefault();    

    nome = document.getElementById("nome").value;
    altura = parseFloat(document.getElementById("altura").value);
    peso = parseFloat(document.getElementById("peso").value);

    imc = calcularIMC(peso, altura).toFixed(2);
    // Restante do código...
    console.log(imc);

    resultArea.textContent = '';

    if (nome != '') {
        resultArea.textContent += `${nome} seu IMC é de ${imc}.`;
    } else {
        resultArea.textContent += `Seu IMC é de ${imc}`;
    }    

    resultArea.textContent += `Você está na seguinte classificação: ${identificarFaixaIMC(imc)}.`;
    
});



