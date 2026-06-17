// --- Parte 1: Cálculo da Média e Situação ---
let nota1 = 7.5;
let nota2 = 8;
let nota3 = 7.0; // Definindo um valor para a terceira nota

const media = (nota1 + nota2 + nota3) / 3;
let situacao = media >= 7 ? "aprovado" : "reprovado";

// --- Parte 2: Verificação de Par ou Ímpar ---
const numero = 8; // Número solicitado no modelo de saída
let resultado;

if (numero % 2 === 0) {
    resultado = "par";
} else {
    resultado = "ímpar";
}

// --- Exibindo a saída exatamente como o modelo esperado ---
console.log(`Media: ${media.toFixed(1)}`);
console.log(`Situacao: ${situacao}`);
console.log(`Numero: ${numero}`);
console.log(`Resultado: ${resultado}`);
