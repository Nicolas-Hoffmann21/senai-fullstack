// 1. Criação do objeto aluno com suas propriedades iniciais
const aluno = {
    nome: "Gabriel",
    idade: 18,
    curso: "Programação Full Stack",
    matriculado: true,
    notaFinal: 7.5
};

// 2. Exibição dos dados iniciais no console
console.log("=== CADASTRO DO ALUNO ===");
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Curso: ${aluno.curso}`);
console.log(`Matriculado: ${aluno.matriculado}`);
console.log(`Nota final: ${aluno.notaFinal}`);

// 3. Atualização dos dados do objeto
aluno.idade = 19;          // Alterando a idade
aluno.notaFinal = 8.5;     // Alterando a nota final
aluno.matriculado = false; // Alterando o status de matrícula

// 4. Exibição dos dados atualizados no console
console.log("=== DADOS ATUALIZADOS ===");
console.log(`Nome: ${aluno.nome}`);
console.log(`Nova idade: ${aluno.idade}`);
console.log(`Nova nota final: ${aluno.notaFinal}`);
console.log(`Matriculado: ${aluno.matriculado}`);