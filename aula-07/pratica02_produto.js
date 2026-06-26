// Respostas: 
// 1) A propriedade que guarda o nome do produto é: nome
// 2) A propriedade alterada para representar o desconto foi: preco
// 3) A propriedade alterada para representar a venda foi: estoque

// 1. Criação do objeto produto com a propriedade extra (desafio)
let produto = { 
    nome: "Teclado", 
    preco: 120, 
    estoque: 10, 
    disponivel: true,
    categoria: "Periféricos" // Propriedade do desafio
};

// 2. Mostrando o produto antes das alterações
console.log("=== PRODUTO ANTES DA VENDA ===");
console.log(`Produto: ${produto.nome}`);
console.log(`Categoria: ${produto.categoria}`);
console.log(`Preço: R$ ${produto.preco}`);
console.log(`Estoque: ${produto.estoque}`);
console.log(`Disponível: ${produto.disponivel}`);

console.log("\n-----------------------------------\n"); // Linha divisória para organizar

// 3. Alterando as propriedades (simulando desconto e venda)
produto.preco = 99.90; // Novo preço com desconto
produto.estoque = 9;    // Novo estoque após uma venda

// Validação lógica de disponibilidade (se o estoque fosse 0, viraria false)
if (produto.estoque <= 0) {
    produto.disponivel = false;
}

// 4. Mostrando o produto após as alterações
console.log("=== PRODUTO APÓS ALTERAÇÃO ===");
console.log(`Produto: ${produto.nome}`);
console.log(`Novo preço: R$ ${produto.preco}`);
console.log(`Novo estoque: ${produto.estoque}`);
console.log(`Disponível: ${produto.disponivel}`);