// 1. Armazenar os dados da pessoa
const nome = "Nicolas";
const peso = 75.0; // em quilogramas
const altura = 1.81 ; // em metros

// 2. Calcular o IMC usando a fórmula indicada
const imc = peso / (altura * altura);

// 3. Determinar a classificação correspondente
let classificacao = "";

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc <= 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

// 4. Exibir os resultados formatados
console.log(`Nome: ${nome}`);
console.log(`IMC: ${imc.toFixed(2)}`); // .toFixed(2) garante as duas casas decimais
console.log(`Classificação: ${classificacao}`);