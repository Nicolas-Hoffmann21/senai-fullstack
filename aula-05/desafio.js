// 1. Criar os arrays originais
let alunos = ["Aline", "Bryan", "Carlos", "Julia", "Luccas"];
let notas = [8.5, 5.0, 7.0, 9.5, 4.0];
let frequencias = [80, 65, 90, 95, 55]; 

// [DESAFIO] Adicionar mais um aluno usando push
alunos.push("Mariana");
notas.push(7.5);
frequencias.push(85);

// 3. Média geral da turma
let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}
let mediaNotas = somaNotas / notas.length;

// 5. Menu com switch (Teste mudando para as opções 5, 6 ou 7!)
let opcao = 5; 

console.log(`--- MENU AMPLIADO (Opção selecionada: ${opcao}) ---`);

switch (opcao) {
    case 1:
        console.log("\n--- LISTA DE ALUNOS (FOR TRADICIONAL) ---");
        for (let i = 0; i < alunos.length; i++) {
            console.log(`Posição: ${i + 1} | Aluno(a): ${alunos[i]} | Nota: ${notas[i]} | Frequência: ${frequencias[i]}%`);
        }
        break;

    case 2:
        console.log("\n--- MÉDIA GERAL DA TURMA ---");
        console.log(`A média das notas da turma é: ${mediaNotas.toFixed(2)}`);
        break;

    case 3:
        console.log("\n--- SITUAÇÃO DOS ALUNOS ---");
        for (let i = 0; i < alunos.length; i++) {
            let status = (notas[i] >= 7.0 && frequencias[i] >= 75) ? "Aprovado" : 
                         (notas[i] >= 5.0 && notas[i] < 7.0 && frequencias[i] >= 75) ? "Recuperação" : "Reprovado";
            console.log(`Aluno(a): ${alunos[i]} | Status: ${status}`);
        }
        break;

    case 4:
        console.log("\n--- RESUMO DA TURMA ---");
        console.log(`Total de alunos avaliados: ${alunos.length}`);
        console.log(`Média geral das notas: ${mediaNotas.toFixed(2)}`);
        break;

    case 5:
        // [DESAFIO] Listagens alternativas (for...of e forEach)
        console.log("\n--- [DESAFIO] LISTAGEM COM FOR...OF ---");
        for (let [i, aluno] of alunos.entries()) {
            console.log(`Posição: ${i + 1} | Aluno(a): ${aluno}`);
        }

     console.log("\n--- [DESAFIO] LISTAGEM COM FOREACH ---");
alunos.forEach((aluno, i) => {
    // Corrigido: exibe a nota como valor e adiciona a frequência com o %
    console.log(`Posição: ${i + 1} | Aluno(a): ${aluno} | Nota: ${notas[i]} | Frequência: ${frequencias[i]}%`);
        });
        break;

    case 6:
        // [DESAFIO] Resumo de contadores de situação
        let aprovados = 0, recuperacao = 0, reprovados = 0;
        for (let i = 0; i < alunos.length; i++) {
            if (notas[i] >= 7.0 && frequencias[i] >= 75) aprovados++;
            else if (notas[i] >= 5.0 && notas[i] < 7.0 && frequencias[i] >= 75) recuperacao++;
            else reprovados++;
        }
        console.log("\n--- [DESAFIO] CONTAGEM DE SITUAÇÕES ---");
        console.log(`Aprovados: ${aprovados} | Em Recuperação: ${recuperacao} | Reprovados: ${reprovados}`);
        break;

    case 7:
        // [DESAFIO] Ordenar notas com sort
        let notasOrdenadas = [...notas].sort((a, b) => a - b);
        console.log("\n--- [DESAFIO] NOTAS EM ORDEM CRESCENTE ---");
        console.log(notasOrdenadas);
        break;

    default:
        console.log("Opção inválida!");
        break;
}