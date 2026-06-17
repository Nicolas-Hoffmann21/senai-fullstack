1 - O que são operadores em programação?
Operadores são símbolos ou palavras-chave especiais que dizem ao computador para realizar uma ação matemática, lógica ou de comparação específica usando um ou mais valores (chamados de operandos).

2 - Para que servem os operadores aritméticos? Cite exemplos.
Eles servem para realizar cálculos matemáticos padrão dentro do código.

Exemplos: + (adição), - (subtração), * (multiplicação) e / (divisão).

3 - Qual a diferença entre / e % em JavaScript?
O operador / faz a divisão comum e te dá o resultado (quociente) da divisão.
O operador % (módulo) te dá apenas o resto que sobrou dessa divisão inteira.
(Por exemplo: 5 / 2 dá 2.5, mas 5 % 2 dá 1, que é o que sobra).

4 - Como descobrir se um número é par usando o operador %?
Basta verificar se o resto da divisão desse número por 2 é igual a zero (numero % 2 === 0). Se o resto for 0, o número é par; se for 1, é ímpar.

5 - O que é uma expressão em programação?
É qualquer pedaço de código que combina valores, variáveis e operadores que o computador consegue calcular e reduzir a um único valor final.

6 - O que significa precedência de operadores?
É a ordem de prioridade (a "fila de preferência") que define quais operadores o JavaScript vai calcular primeiro quando houver vários misturados na mesma linha.

7 - Por que os parênteses podem mudar o resultado de uma expressão?
Porque os parênteses têm a maior prioridade de todas. Eles forçam o JavaScript a isolar e calcular o que está dentro deles antes de olhar para qualquer outro operador do lado de fora.
 
8 - Qual a diferença entre =, == e ===?

= é para atribuição (guarda um valor dentro de uma variável).

== é a igualdade ampla (compara só o valor, ignorando se um é texto e o outro é número).

=== é a igualdade estrita (compara o valor e o tipo de dado ao mesmo tempo; os dois precisam ser idênticos).

9 - Por que é recomendado usar === em JavaScript?
Porque ele evita bugs e comportamentos estranhos escondidos. O == tenta converter os tipos por baixo dos panos (fazendo "1" == 1 ser verdadeiro), enquanto o === garante que a comparação seja 100% precisa e segura.

10 - O que os operadores relacionais retornam: texto, número ou boolean?
Eles sempre retornam um boolean (true ou false).

11 - Quando usamos o operador >? E o operador >=?

r: > é usado para testar se o valor da esquerda é estritamente maior que o da direita.

r: >= é usado para testar se o valor da esquerda é maior ou igual ao da direita.

12 - Quando usamos o operador <? E o operador <=?

< é usado para testar se o valor da esquerda é menor que o da direita.

<= é usado para testar se o valor da esquerda é menor ou igual ao da direita.

13 - Para que serve o operador lógico &&?
É o operador E (AND). Ele serve para juntar condições onde todas precisam ser verdadeiras ao mesmo tempo para o resultado final ser true.

14 - Para que serve o operador lógico ||?
É o operador OU (OR). Ele serve para juntar condições onde basta que apenas uma delas seja verdadeira para o resultado final ser true.

15 - Para que serve o operador lógico !?
É o operador NÃO (NOT). Ele serve para inverter o estado lógico de um valor (se algo é true, o ! transforma em false, e vice-versa).

16 - Qual a diferença entre uma condição simples e uma condição composta?

A condição simples testa apenas uma única coisa no if (ex: if (idade >= 18)).

A condição composta combina duas ou mais checagens usando os operadores lógicos && ou || (ex: if (idade >= 18 && temCarteira === true)).

17 - Explique uma situação real em que duas condições precisam ser verdadeiras ao mesmo tempo.
Para fazer um saque no caixa eletrônico: você precisa ter o dinheiro disponível na conta E digitar a senha correta.

18 - Explique uma situação real em que apenas uma entre duas condições precisa ser verdadeira.
Para conseguir desconto de estudante no cinema: você precisa apresentar a carteirinha de estudante OU ter menos de 21 anos.

19 - Como o console.log() pode ajudar a encontrar
erros no codigo?
Ele funciona como uma "janela" para você ver o que está acontecendo por dentro do programa em tempo real. Você pode usá-lo para mostrar o valor de uma variável e descobrir exatamente em qual linha a lógica se perdeu.

20 - Por que devemos testar o mesmo programa
com valores diferentes?

Para garantir que o código funciona bem em qualquer situação (os chamados cenários de teste), e não apenas no caso perfeito. Isso ajuda a descobrir se o programa quebra com números negativos, zeros ou textos inválidos antes que o usuário final encontre o erro.