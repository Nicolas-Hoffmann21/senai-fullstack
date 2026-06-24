//Criar os arrays com nomes claros
let alunos = ["Aline", "Bryan", "Carlos", "Julia", "Luccas"];
let notas = [8.5, 5.0, 7.0, 9.5, 4.0];
let frequencias = [80, 65, 90, 95, 55]; // % de frequência

//Variável acumuladora para a média geral da turma
let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}
let mediaNotas = somaNotas / notas.length;

// Criar um menu com switch
// Altere o valor desta variável (1, 2, 3 ou 4) para testar as opções do menu
let opcao = 3; 

console.log(`--- MENU DE INFORMAÇÕES (Opção selecionada: ${opcao}) ---`);

switch (opcao) {
    case 1:
        // Listar todos os alunos (com a posição na lista)
        console.log("\n--- LISTA DE ALUNOS ---");
        for (let i = 0; i < alunos.length; i++) {
            // Mostra a posição (i + 1 para não começar do zero na exibição humana)
            console.log(`Posição: ${i + 1} | Aluno(a): ${alunos[i]} | Nota: ${notas[i]} | Frequência: ${frequencias[i]}%`);
        }
        break;

    case 2:
        // Mostrar média geral
        console.log("\n--- MÉDIA GERAL DA TURMA ---");
        console.log(`A média das notas da turma é: ${mediaNotas.toFixed(2)}`);
        break;

    case 3:
        // Classificar situação dos alunos (com as novas regras)
        console.log("\n--- SITUAÇÃO DOS ALUNOS ---");
        for (let i = 0; i < alunos.length; i++) {
            let status = "";

            if (notas[i] >= 7.0 && frequencias[i] >= 75) {
                status = "Aprovado";
            } else if (notas[i] >= 5.0 && notas[i] < 7.0 && frequencias[i] >= 75) {
                status = "Recuperação";
            } else {
                status = "Reprovado";
            }
            console.log(`Aluno(a): ${alunos[i]} | Status: ${status}`);
        }
        break;

    case 4:
        // Exemplo de resumo da turma (une as informações principais)
        console.log("\n--- RESUMO DA TURMA ---");
        console.log(`Total de alunos avaliados: ${alunos.length}`);
        console.log(`Média geral das notas: ${mediaNotas.toFixed(2)}`);
        
        // Exibe a situação geral rápida de cada um
        for (let i = 0; i < alunos.length; i++) {
        let status = (notas[i] >= 7.0 && frequencias[i] >= 75) ? "Aprovado" : 
             (notas[i] >= 5.0 && notas[i] < 7.0 && frequencias[i] >= 75) ? "Recuperação" : "Reprovado";
            console.log(`- ${alunos[i]}: ${status}`);
        }
        break;

    default:
        console.log("Opção inválida! Escolha um número de 1 a 4.");
        break;
}