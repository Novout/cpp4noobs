# 8.1 - Protótipo de Função

::: tip
Nos exemplos, criamos nossas funções acima da nossa função main.

Se criarmos abaixo, por conta da ordem de compilação o C++ acaba não reconhecendo a função que está sendo chamada,pois ela ainda não existe

Mas temos uma forma de manipular isso:

```cpp{0}
#include <iostream>

void ExibirNome(std::string nome);

int main() 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    std::string a = "Joao";
    ExibirNome(a);
}

void ExibirNome(std::string nome) 
{
    std::cout <<"O nome e: "<< nome << std::endl;
}
```

O que fizemos foi:

Indicar que existe uma função `ExibirNome`, sendo um `protótipo`, e apos a função main executar sua lógica.
:::

::: tip

# `#define`

Podemos por meio do `#define` indicar algo a ser substituido antes de ser executado

O que ele faz é ler todo o códico em busca do que queremos definir e após executar a compilação


```cpp{0}
#include <iostream>
#include <string>
#include <array>

#define ALUNOS 3

void ExibirNomes(std::array<std::string, ALUNOS> arr);

int main() 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    std::array<std::string, ALUNOS> nomes; // Um array de string de 3 posições

    for(std::string &element : nomes) // & significa que estamos passando a referência de uma posição em nomes, teremos uma seção explicanto o que é uma referência.
        std::cin >> element;

    ExibirNomes(nomes);
}

void ExibirNomes(std::array<std::string, ALUNOS> arr) 
{
    for(std::string &element : arr)
        std::cout << element << " ";
}
```
:::