// 1. Função com tipos numéricos para as notas e para o retorno
function calcularMedia(nota1: number, nota2: number, nota3: number): number {
    return (nota1 + nota2 + nota3) / 3;
}

// 2. Função que recebe uma média (number) e retorna uma string
function verificarSituacao(media: number): string {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5 && media < 7) {
        return "Recuperacao";
    } else {
        return "Reprovado";
    }
}

// 3. Função que recebe os dados tipados e não retorna nada (void)
function exibirBoletim(nome: string, media: number, situacao: string): void {
    console.log(`Aluno: ${nome}`);
    console.log(`Media: ${media.toFixed(0)}`); // .toFixed(0) para manter o visual do exemplo sem casas decimais
    console.log(`Situacao: ${situacao}`);
    console.log("-----------------------");
}

// --- Exemplo de Uso ---

let media: number = calcularMedia(8, 7, 6);
let situacao: string = verificarSituacao(media);
exibirBoletim("João", media, situacao);

media = calcularMedia(4, 5, 5.5);
situacao = verificarSituacao(media);
exibirBoletim("Maria", media, situacao);    