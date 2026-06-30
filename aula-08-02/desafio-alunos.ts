// 1. Definição da Classe Aluno com suas propriedades e métodos
class Aluno {
    nome: string;
    nota1: number;
    nota2: number;

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    // Retorna a média aritmética das duas notas
    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }

    // Retorna a situação baseada na média (Aprovado se >= 6)
    verificarSituacao(): string {
        const media = this.calcularMedia();
        return media >= 6 ? "Aprovado" : "Reprovado";
    }

    // Exibe os dados formatados no console
    exibirInformacoes(): void {
        const media = this.calcularMedia();
        const situacao = this.verificarSituacao();
        console.log(`Aluno: ${this.nome} | Média: ${media.toFixed(1)} | Situação: ${situacao}`);
    }
}

// 2. Criando instâncias de 3 alunos diferentes usando 'new'
const aluno1 = new Aluno("Ana Silva", 8.5, 7.0);
const aluno2 = new Aluno("Bruno Costa", 5.0, 4.5);
const aluno3 = new Aluno("Carlos Souza", 6.0, 6.5);

// 3. Colocando os objetos criados dentro de um Array (Lista)
const listaAlunos: Aluno[] = [aluno1, aluno2, aluno3];

// 4. Utilizando o loop 'for...of' para percorrer o array completo
console.log("=== RELATÓRIO FINAL DE ALUNOS ===");

for (const aluno of listaAlunos) {
    // A cada repetição, a variável 'aluno' assume o objeto da vez
    aluno.exibirInformacoes();
}