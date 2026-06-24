*Fixação*

## 1. Qual parte da prática usou arrays?
Resposta: Os arrays foram usados logo no início do código para criar os bancos de dados da turma. Foram criados três arrays estruturados: alunos (para armazenar os textos com os nomes dos estudantes), notas (para os valores numéricos decimais de desempenho) e frequencias (para os números inteiros representando a presença).

## 2. Qual parte da prática usou estrutura de repetição?
Resposta: A estrutura de repetição foi usada para ler os dados dos arrays sem precisar copiar e colar código. No formato tradicional (e dentro das opções do menu switch), o laço for usou a variável contadora i para passar de aluno em aluno. No desafio extra, as estruturas modernas for...of e forEach também foram aplicadas para automatizar essa mesma leitura sequencial de toda a lista.

## 3. Onde vocês usaram operador aritmético?
Resposta: Os operadores aritméticos foram fundamentais para a análise de desempenho da turma. O operador de soma (+ ou +=) foi usado dentro do laço de repetição para acumular os valores de todas as notas na variável somaNotas. Logo em seguida, o operador de divisão (/) foi utilizado para dividir esse total pelo número de alunos, gerando a média final da turma.

## 4. Onde vocês usaram operador lógico?
Resposta: O operador lógico && (E / AND) foi utilizado dentro das estruturas condicionais para validar as regras da escola. Ele garantiu que o aluno só recebesse o status de "Aprovado" se cumprisse as duas exigências ao mesmo tempo: nota maior ou igual a 7.0 && frequência maior ou igual a 75%. O mesmo operador validou o intervalo de notas do status de "Recuperação".

## 5. Qual foi a função do if/else na prática?
Resposta: A função do if/else foi analisar os dados individuais de cada estudante e tomar uma decisão automatizada sobre o destino deles. Ele serviu como um filtro inteligente que avaliou o cenário de cada linha do array e determinou de forma precisa se o aluno estava "Aprovado", em "Recuperação" ou "Reprovado".

## 6. Qual foi a função do switch na prática?
Resposta: O switch funcionou como o painel de controle ou menu interativo do sistema. Ele avaliou o valor exato inserido na variável opcao e decidiu qual bloco de código deveria ser executado na tela (Opção 1 para listar, Opção 2 para a média, Opção 3 para o status, etc.). No código original, ele também chegou a ser testado para classificar em faixas de texto o desempenho geral da média da turma.

## 7. Por que os arrays de nomes, notas e frequências precisam ter a mesma quantidade de itens?
Resposta: Porque eles funcionam de forma sincronizada através do índice de posição. O programa assume que o aluno que está na posição [0] do array de nomes é o mesmo dono da nota que está na posição [0] do array de notas e da presença contida na posição [0] de frequências. Se um array tiver tamanhos diferentes, os dados vão se desalhar e o sistema exibirá notas de um aluno no perfil de outro (ou tentará ler dados vazios/undefined).

## 8. O que aconteceria se esquecêssemos de usar .length no for?
Resposta: O laço for não saberia o momento exato em que a lista de alunos chegou ao fim. Se colocássemos um número fixo menor que a lista, o programa ignoraria os últimos alunos. Se colocássemos um número maior ou esquecêssemos a condição de parada, o laço tentaria ler posições de memória que não existem, resultando na exibição de dados errados (undefined) ou travando o programa em um loop infinito.

## 9. Qual foi a parte mais fácil da atividade?
Resposta: A parte mais fácil foi a declaração dos arrays iniciais e a criação das mensagens exibidas no console através de template strings (usando a crase ` `). Definir os nomes, notas e frequências iniciais é uma tarefa visual direta, e estruturar o texto impresso depende apenas de organizar a estética do relatório na tela.

## 10. Qual foi a parte mais difícil da atividade?
Resposta: A parte mais complexa foi garantir o sincronismo dos dados ao implementar os desafios extras. Ajustar o menu switch para que cada opção funcionasse de forma isolada, além de entender como extrair o índice (posição) do aluno utilizando os laços modernos for...of e forEach sem quebrar a lógica de exibição, exigiram um nível maior de atenção com a sintaxe do JavaScript.