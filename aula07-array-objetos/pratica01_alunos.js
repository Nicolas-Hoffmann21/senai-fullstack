// 1. Criação do array contendo os 3 objetos (alunos)
let alunos = [
    { nome: "Ana", idade: 18, curso: "Full Stack" },
    { nome: "Carlos", idade: 22, curso: "Full Stack" },
    { nome: "Maria", idade: 20, curso: "Full Stack" }
];

// 2. Exibição usando o loop FOR tradicional (apenas nome e idade)
console.log("=== LISTA COM FOR ===");
for (let i = 0; i < alunos.length; i++) {
    console.log(`Aluno: ${alunos[i].nome} | Idade: ${alunos[i].idade}`);
}

// 3. Exibição usando o FOREACH (nome, idade e curso)
console.log("=== LISTA COM FOREACH ===");
alunos.forEach(aluno => {
    console.log(`Aluno: ${aluno.nome} | Idade: ${aluno.idade} | Curso: ${aluno.curso}`);
});

// 4. Alterando a idade do segundo aluno usando o índice [1]
alunos[1].idade = 23;

// 5. Mostrando os dados do segundo aluno após a alteração
console.log("=== APÓS ALTERAÇÃO ===");
console.log(`${alunos[1].nome} agora tem ${alunos[1].idade} anos.`);


// Respostas:
// 1) O que o array alunos guarda?
// Guarda uma coleção ordenada de dados, onde cada elemento é um objeto contendo os atributos de um aluno (nome, idade e curso).

// 2) Para que serve o alunos[1]?
// Serve para acessar especificamente o segundo elemento (índice 1) do array "alunos", que neste caso corresponde ao objeto do Carlos.

// 3) Qual a diferença entre for e forEach neste exercício?
// O 'for' tradicional usa um contador/índice (i) para controlar manualmente os passos e acessar os elementos. Já o 'forEach' é um método próprio do JavaScript que percorre o array automaticamente, nos entregando diretamente o objeto de cada aluno a cada repetição.