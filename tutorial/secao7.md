# 7 - Vetores (C Arrays)

::: tip

Conforme a complexidade de um programa cresce, surge a necessidade de agrupar variáveis e entidades.
Um vetor é uma estrutura (não é a única) que serve para este propósito.

Um vetor (C Array) é um tipo que consiste de uma sequência de elementos que estão lado a lado na memória.
O número de elementos que essa estrutura é capaz de suportar não muda durante a execução do programa.

O tamanho do vetor precisa ser conhecido durante a compilação.

Veremos como criar um array que pode mudar de tamanho durante a execução do programa em outra seção.

:::

::: warning

# Exemplos

```cpp{0}
#include <iostream>

int main ()
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    /**
      * Um array pode conter (quase)qualquer tipo.
      * Por exemplo: int, float, double, std::string
      * Acessar um elemento que está no array leva tempo constante,
      * falaremos mais sobre isso na seção <link pra seção de Big O Nonation>
    */

    /* Declarando um array de 5 posições e que pode conter apenas elementos do tipo int */
    int meu_array[5];

    /**
      * Podemos acessar um elemento do array usando a posição na qual ele se encontra.
      * O primeiro elemento se encontra na posição 0,
      * algo que é padrão na maioria das linguagens de programação.
    */

    /* meu_array contem o número 10 na posição 0 */
    meu_array[0] = 10;

    meu_array[1] = 20;
    meu_array[2] = 30;
    meu_array[3] = 40;
    meu_array[4] = 50;

    /**
      * Nosso array possui 5 posições, começando da posição 0, sendo assim,
      * para acessar a última posição, usamos o número 4.
    */
}
```

```cpp{0}
#include <iostream>

int main ()
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    /**
      * Podemos usar loops para percorrer um array acessando cada elemento
    */

    /* Arrays podem ser inicializados com valores */
    int meu_array[5] = {1, 2, 3, 4, 5};

    /**
      * Percorrendo todas as posições do array e mostrando cada elemento que está na posição
    */
    for(int i = 0; i < 5; ++i){
      std::cout << meu_array[i];
    }
}
```
