# 6.2 - Teste de Mesa


::: tip
O Teste de Mesa é um processo manual que é utilizado para validar a lógica de um determinado algoritmo. Ele é utilizado principalmente em algoritmos quando a linguagem utilizada não possui nenhuma ferramenta automatizada de depuração.

Existe testes bem mais elaborados, mas para começar-mos a entender o fluxo de um programa pode ser útil.

Não há uma forma padrinizada para a elaboração de um Teste de Mesa, pois dependerá muito do que pretende verificar no algoritmo e do seu nível de entendimento. No geral, você deverá criar no papel uma tabela com todas as variáveis do programa e executar passo a passo seu código, anotando sempre os valores das variáveis. Assim você será capaz de identificar se os valores condizem com o esperado ou localizar a exata linha de código onde o valor da variável passa a ficar errado.

Em nosso curso, iremos considerar os seguintes passos:

1 - Elaborar uma tabela onde cada coluna se refere a cada variável envolvida e o resultado de uma operação em particular (ou observação pertinente).

2 - Executar os passos previstos no algoritmo.

3 - Verificar se os resultados obtidos são coerentes com os previstos.

4 - Encerrar o teste após um número razoável de resultados corretos obtidos.

Utilizaremos a sequência:

1 - Identifique todas as variáveis no seu programa.

2 - Crie uma tabela onde a primeira coluna se chama "Passo", a segunda de chama "Linha". A partir disto, crie uma coluna para cada variável do programa.

3 - Na primeira linha da tabela, preencha a coluna "Passo" com "Início", pode deixar a coluna "Linha" em branco e preencha cada coluna das variáveis com os respectivos valores iniciais.

4 - Percorra seu código linha a linha, preenchendo a tabela. A coluna "Passo" deverá ser incrementada a cada nova linha na tabela; a coluna "Linha" deve indicar o número da linha no código que está sendo analisada e em cada coluna das variáveis deve constar o respectivo valor para cada variável após a linha de código ser executada.

5 - Execute o passo 4 até o programa finalizar.

:::

::: tip

Vamos utilizar de exemplo o seguinte algoritmo:

```cpp{0}
#include <iostream>

int main () 
{
    int A = 12, B, C = 10; // 1
 // 2
    D = 2; // 3
 // 4
    while(A >= C && C > B) // 5
    { // 6
        if(A > B) // 7
        { // 8
            A -= B; // 9
        }else // 10
        { // 11
            A += B; // 12
            B *= 2; // 13
        }
    }
}
```

<strong>Passo 1</strong>: Identificar todas as variáveis e as condições do programa

No nosso caso, temos os inteiros A, B e C

Temos também a condição do loop na linha 5

<strong>Passo 2</strong>: Criar a tabela

|    Linha    |   A   |   B   |   C   |   Condição   |
| :----------:| :---: | :---: | :----:| :-----------:|

<strong>Passo 3</strong>: Preencher a primeira linha da tabela

|    Linha    |   A   |   B   |   C   |   Condição   |
| :----------:| :---: | :---: | :----:| :-----------:|
|      1      | 12 | ? | 10 | -- |

<strong>Passo 4</strong>: Percorrer cada linha do programa, preenchendo a tabela

Apenas escreveremos algo na tabela quando tiver alguma mudança, como no caso pulamos a linha 2

|    Linha    |   A   |   B   |   C   |   Condição   |
| :----------:| :---: | :---: | :----:| :-----------:|
|      1      | 12 | ? | 10 | -- |
|      3      | 12 | 2 | 10 | -- |

Na linha 5, temos uma condição, que no caso retorna true

A > B => true && C > A => true resulta em: true

|    Linha    |   A   |   B   |   C   |   Condição   |
| :----------:| :---: | :---: | :----:| :-----------:|
|      1      | 12 | ? | 10 | -- |
|      3      | 12 | 2 | 10 | -- |
|      5      | 12 | 2 | 10 | true |

Temos outra condição na linha 7,no caso A é maior que B,então retorna true

|    Linha    |   A   |   B   |   C   |   Condição   |
| :----------:| :---: | :---: | :----:| :-----------:|
|      1      | 12 | ? | 10 | -- |
|      3      | 12 | 2 | 10 | -- |
|      5      | 12 | 2 | 10 | true |
|      7      | 12 | 2 | 10 | true |

* Se preferir, separe as condições

Na linha 8, temos mudanças em A

|    Linha    |   A   |   B   |   C   |   Condição   |
| :----------:| :---: | :---: | :----:| :-----------:|
|      1      | 12 | ? | 10 | -- |
|      3      | 12 | 2 | 10 | -- |
|      5      | 12 | 2 | 10 | true |
|      7      | 12 | 2 | 10 | true |
|      8      | 10 | 2 | 10 | -- |

Agora, o loop será repetido novamente,e novamente retornara true,e o loop continua


|    Linha    |   A   |   B   |   C   |   Condição   |
| :----------:| :---: | :---: | :----:| :-----------:|
|      1      | 12 | ? | 10 | -- |
|      3      | 12 | 2 | 10 | -- |
|      5      | 12 | 2 | 10 | true |
|      7      | 12 | 2 | 10 | true |
|      9      | 10 | 2 | 10 | -- |
|      5      | 10 | 2 | 10 | true |
|      7      | 10 | 2 | 10 | true |
|      9      | 8 | 2 | 10 | -- |

Dessa vez, o loop principal irá retornar false, por conta que A não é maior ou igual a C

|    Linha    |   A   |   B   |   C   |   Condição   |
| :----------:| :---: | :---: | :----:| :-----------:|
|      1      | 12 | ? | 10 | -- |
|      3      | 12 | 2 | 10 | -- |
|      5      | 12 | 2 | 10 | true |
|      7      | 12 | 2 | 10 | true |
|      9      | 10 | 2 | 10 | -- |
|      5      | 10 | 2 | 10 | true |
|      7      | 10 | 2 | 10 | true |
|      9      | 8 | 2 | 10 | -- |
|      4      | 8 | 2 | 10 | false |

Pronto, finalizamos nosso teste de mesa

* Em caso de testes com saída de dados, faça uma tabela separada apenas para a saída.

:::