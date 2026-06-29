function calcularDesconto(preco: number, percentual: number): number {
    // Calcula o valor a ser subtraído
    const valorDesconto = preco * (percentual / 100);
    
    // Calcula e retorna o valor final
    return preco - valorDesconto;
}

// --- Testes com 3 produtos diferentes ---

// Produto 1: Um jogo de R$ 100 com 10% de desconto
console.log(calcularDesconto(100, 10)); // Saída esperada: 90

// Produto 2: Um tênis de R$ 250 com 20% de desconto
console.log(calcularDesconto(250, 20)); // Saída esperada: 200

// Produto 3: Um smartphone de R$ 1500 com 15% de desconto
console.log(calcularDesconto(1500, 15)); // Saída esperada: 1275