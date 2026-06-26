// 1. Criação do objeto jogador com suas propriedades iniciais
let jogador = { 
    nickname: "Bielzera", 
    nivel: 1, 
    moedas: 100, 
    energia: 50, 
    premium: false 
};

// 2. Mostrando o status inicial do jogador no console
console.log("=== STATUS INICIAL ===");
console.log(`Jogador: ${jogador.nickname}`);
console.log(`Nível: ${jogador.nivel}`);
console.log(`Moedas: ${jogador.moedas}`);
console.log(`Energia: ${jogador.energia}`);
console.log(`Premium: ${jogador.premium}`);

console.log("\n-----------------------------------\n"); // Linha divisória para o console

// 3. Alterando as propriedades (simulando evolução e uso de recursos)
jogador.nivel = 2;       // Subiu de nível
jogador.moedas = 70;     // Gastou 30 moedas em uma compra (ou recebeu recompensa)
jogador.energia = 35;    // Gastou 15 de energia jogando uma partida
jogador.premium = true;  // Tornou-se um usuário Premium

// 4. Mostrando o status final do jogador no console
console.log("=== STATUS FINAL ===");
console.log(`Jogador: ${jogador.nickname}`);
console.log(`Nível: ${jogador.nivel}`);
console.log(`Moedas: ${jogador.moedas}`);
console.log(`Energia: ${jogador.energia}`);
console.log(`Premium: ${jogador.premium}`);