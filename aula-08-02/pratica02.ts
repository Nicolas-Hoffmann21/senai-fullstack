let produto = {
    nome: "Mouse",
    preco: 50,
    quantidade: 2,
    calcularTotal: function(): number {
        return this.preco * this.quantidade;
    }
};

console.log(`Produto: ${produto.nome}`);
console.log(`Total: R$ ${produto.calcularTotal()}`); // Deve exibir 100