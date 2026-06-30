function calcularMedia(numeros : number[]): number {
    if (numeros.length === 0) return 0;
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}
const numeros = [9, 5];
const media = calcularMedia(numeros);
console.log(`A média dos números é: ${media}`);
#teste