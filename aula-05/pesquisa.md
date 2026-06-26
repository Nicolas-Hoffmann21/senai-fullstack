# *Pesquisa*
## 1. O que é um array em programação?
Resposta:Um array (também conhecido como arranjo, vetor ou matriz unidimensional) é uma estrutura de dados que permite armazenar uma coleção ordenada de elementos em uma única variável. Em vez de salvar apenas um dado (como um número ou um texto), um array pode guardar vários dados do mesmo tipo (ou de tipos diferentes, dependendo da linguagem) organizados em uma sequência.

## 2. Por que é melhor usar um array do que criar várias variáveis separadas, como aluno1, aluno2 e aluno3?
Resposta:Existem vários motivos pelos quais criar variáveis individuais é ineficiente:

Escalabilidade: Se você tiver 3 alunos, criar aluno1, aluno2 e aluno3 é fácil. Mas e se você tiver 1.000 alunos? Criar mil variáveis manualmente seria inviável.

Manutenção do código: Com um array, você pode adicionar, remover ou modificar elementos usando uma única linha de comando.

Automação: É impossível fazer o computador percorrer variáveis com nomes diferentes automaticamente. Com um array, você pode usar um laço de repetição (como o for) para processar todos os dados de uma vez só.

## 3. O que é índice em um array?
Resposta:O índice é o número que representa a posição exata de um elemento dentro do array. Ele funciona como o endereço ou o número do apartamento em um prédio. Sabendo o índice, você consegue ir direto ao valor que precisa acessar ou modificar.

## 4. Por que o primeiro elemento de um array fica na posição 0?
Resposta:Isso acontece por motivos históricos de arquitetura de computadores e eficiência de memória (indexação de base zero).
O nome do array aponta para o endereço inicial de memória onde o array começa. O índice funciona como um deslocamento (offset) a partir desse início.

O primeiro elemento está exatamente no início, ou seja, a um deslocamento de 0 posições.

O segundo elemento está a 1 posição de distância do início, e assim por diante.

## 5. Para que serve o .length?
Resposta:A propriedade .length (comprimento/tamanho) serve para contar quantos elementos existem dentro do array naquele momento. Ela retorna um número inteiro. Se um array tem 5 elementos, o .length será 5. É muito útil para saber até onde um laço de repetição deve ir para não tentar ler uma posição que não existe.

## 6. Como acessamos o primeiro elemento de um array chamado alunos?
Resposta:Como a contagem começa no zero, acessamos o primeiro elemento colocando o índice 0 entre colchetes logo após o nome do array:

## 7. Como podemos alterar um valor dentro de um array?
Resposta:Basta acessar a posição desejada pelo seu índice e utilizar o operador de atribuição (=) para dar um novo valor, exatamente como fazemos com uma variável comum:

## 8. Qual a relação entre arrays e laços de repetição?
Resposta:Eles nasceram um para o outro. Como os elementos de um array são acessados por números sequenciais (0, 1, 2, 3...), os laços de repetição (como for ou while) utilizam uma variável contadora que aumenta de 1 em 1 para percorrer o array automaticamente, lendo ou alterando cada elemento do primeiro ao último de forma extremamente rápida.

## 9. Qual a diferença entre percorrer um array com for e apenas mostrar um item específico?
Resposta:Mostrar um item específico: É uma ação direta e instantânea (Ex: console.log(alunos[3])). Você sabe exatamente qual posição quer e o computador vai direto nela.

Percorrer com for: É uma ação sequencial. O programa visita a posição 0, depois a 1, depois a 2, até o final do array. É usado quando você precisa analisar, transformar ou exibir todos (ou vários) elementos da lista, e não apenas um.

## 10. O que é um acumulador? Dê um exemplo de uso com notas ou valores.
Resposta:Um acumulador é uma variável criada para "juntar" ou somar valores a cada passo de um laço de repetição. Ela mantém o resultado anterior e adiciona o novo.

## 11. Para que servem operadores aritméticos como +, -, * e / dentro de um programa?
Resposta:Eles servem para realizar operações matemáticas básicas com os dados numéricos do programa:

+ : Soma (e em algumas linguagens, junta textos/strings).

- : Subtração.

* : Multiplicação.

/ : Divisão.

## 12. Para que servem operadores lógicos como && e ||?
Resposta:Eles servem para combinar duas ou mais condições em uma única estrutura de decisão (como o if), criando regras de negócio mais complexas:

&& (E / AND): A condição final só será verdadeira se TODAS as subcondições forem verdadeiras. (Ex: Para entrar no sistema, o usuário deve digitar o usuário correto && a senha correta).

|| (OU / OR): A condição final será verdadeira se PELO MENOS UMA das subcondições for verdadeira. (Ex: O desconto é aplicado se o cliente for estudante || se for aniversário dele).

## 13. Qual a diferença entre if/else e switch?
Resposta:if/else: É muito flexível. Permite testar condições complexas, intervalos de valores (ex: idade >= 18), operadores lógicos (&&, ||) e diferentes variáveis ao mesmo tempo.

switch: É focado e mais limpo, mas serve apenas para testar valores exatos e predefinidos de uma única variável (chamados de case). É excelente para criar menus de opções (ex: se o comando for 1 faça X, se for 2 faça Y).

## 14. O que os métodos push e pop fazem em um array?
Resposta:Eles servem para modificar o tamanho do array dinamicamente:

push(): Adiciona um ou mais elementos no final do array. O array cresce.

pop(): Remove o último elemento do array e o retorna. O array diminui.

## 15. O que é uma matriz e como ela se relaciona com arrays?
Resposta:Uma matriz (ou array bidimensional) nada mais é do que um array onde cada um de seus elementos também é um array. É como uma tabela com linhas e colunas (uma planilha do Excel).

Relação: Enquanto um array comum representa uma lista (uma única linha ou uma única coluna), a matriz possui duas dimensões. Para acessar um dado em um array comum você usa um índice (lista[0]), e para acessar um dado na matriz você precisa de dois índices: um para a linha e outro para a coluna (matriz[linha][coluna]).
