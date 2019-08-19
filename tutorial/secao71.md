# 7.1 - std::array e std::vector

::: tip

C arrays não são muito flexíveis, algo que dificulta o desenvolvimento de um programa.

Felizmente, no C++ temos outras opções (que você deve usar): O std::array e std::vector

:::

::: warning

# Exemplos

```cpp{0}
#include <iostream>
#include <array>

int main ()
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    /**
      * std::array é o primeiro container que iremos ver.
      * A STL(Standard Template Library) oferece uma série de containers.
      * Um container é uma estrutura que pode conter uma coleção de objetos.

      * O std::array é uma Struct <link pra seção de struct> que possui um C array dentro dela.
      * Possui uma implementação simples e várias funções que facilitam o manejo de arrays.
      * O tamanho do std::array precisa ser conhecimento durante a compilação.

      * Recomenda-se que você use esse tipo de array ao invés de C arrays.
    */

    /* Criando um std::array com 3 posições que podem conter elementos do tipo std::string */
    std::array<std::string, 3> meu_array = {"Hello ", "world", "!"};

    /* Mostrando os elementos do array, funciona igual o C array */
    for(int i = 0; i < meu_array.size(); ++i) {
      std::cout << meu_array[i];
    }

    /* Também podemos usar um ranged loop para percorrer o array */
    for(std::string elemento : meu_array) {
      std::cout << element;
    }
}
```

```cpp{0}
#include <iostream>
#include <vector>

int main ()
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    /*
     * std::vector é um array que pode mudar de tamanho durante a execução do programa
     * Isso é possível através do uso de ponteiros <link para seção de ponteiros>
     * Ao contrário do C array e std::array, o tamanho do std::vector não precisa
     * ser conhecido durante a compilação
    */

    /* Criando um std::vector de floats */
    std::vector<float> meu_vector;

    /*
     * Foi criado um std::vector vazio, sendo assim, o tamanho dele é 0
     * Podemos adicionar elementos no std::vector usando as funções push_back() e emplace_back()
     * O std::vector aumenta e diminui de tamanho conforme você insere e remove elementos
    */
    meu_vector.push_back(3.14159);

    /*
     * Agora o meu_vector tem o tamanho 1
     * Podemos verificar o tamanho do vector do mesmo jeito que
     * vericamos o tamanho do std::array. Usando a função size()
    */
    std::cout << meu_vector.size() // 1

    /*
     * Podemos percorrer o std::vector do mesmo jeito que percorremos o std::array
    */

    meu_vector.push_back(2.71828)
    meu_vector.push_back(1.30357)

    for(double valor : meu_vector) {
      std::cout << valor;
    }
}
```
