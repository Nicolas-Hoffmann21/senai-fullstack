## 1. Em qual pratica usamos o for? Por que ele combina com esse caso? 
Resposta:Usamos quando sabemos exatamente o número de repetições de antemão (ex: contar de 1 a 10, percorrer uma lista de tamanho fixo).
Combina porque ele centraliza a inicialização, a condição e o incremento/decremento em uma única linha, evitando esquecimentos e deixando o código mais limpo.

## 2. Qual era a condicao do while na pratica da energia? 
Resposta:A condição era energia > 0 (enquanto houvesse energia disponível, o laço continuava executando).

## 3. O que aconteceria se esquecessemos o energia--? 
Resposta:O programa entraria em um loop infinito. Como a energia nunca diminuiria, a condição energia > 0 seria eternamente verdadeira, travando o programa ou consumindo toda a memória.

## 4. Por que o menu do do-while apareceu mesmo com opcao igual a 0?
Resposta:Porque o do-while é um laço com teste no final. Ele primeiro executa o bloco de código dentro do do e só depois checa a condição no while. Por isso, ele garante que o código rode pelo menos uma vez.

## 5. Qual dos tres lacos voces acharam mais facil? Por que? 
Resposta:O for costuma ser considerado o mais fácil para a maioria dos desenvolvedores.
Por quê: Como toda a estrutura de controle (início, fim e passo) fica visível logo na abertura do laço, o risco de criar um loop infinito por esquecer de atualizar a variável (como acontece no while) é muito menor.