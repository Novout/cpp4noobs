# 7.2 - Matrizes

::: tip
Matrizes são vetores acoplados que formam linhas e colunas.

Por exemplo,temos 5 alunos, e cada aluno possui 5 anos.

Para facilitar,podemos utilizar matrizes:

```cpp{0}
#include <iostream>
#include <array>
#include <string>

int main () 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    int matriz[5][5];

    for(int i = 0;i < 5;i++)
        for(int j = 0;j < 5;j++)
            std::cin >> matriz[i][j];

    for(int i = 0;i < 5;i++)
        for(int j = 0;j < 5;j++)
            std::cout << matriz[i][j] << std::endl;
}
```


Podemos também utilizar `std::array`:

```cpp{0}
#include <iostream>
#include <array>
#include <string>

int main () 
{

    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    //Temos um vetor de vetor, com as linha representando cada aluno, e as colunas cada nota

    std::array<std::array<float, 5> , 5> alunos_nota = {{  {{4.5, 6.3, 5.5, 6.1, 7.2}},      // Aluno 0 
                                                           {{1.2, 4.2, 8.1, 8.3, 8.2}},      // Aluno 1
                                                           {{5.2, 4.2, 6.4, 5.6, 7.2}},      // Aluno 2
                                                           {{4.2, 5.4, 6.2, 5.2, 7.5}},      // Aluno 3
                                                           {{2.2, 4.4, 2.3, 5.5, 3.2}}  }};  // Aluno 4

    std::cout << "Notas dos alunos: \n\n";

    for (float i : alunos_nota){ // Percorre cada linha
        for (float j : i){ // Percorre cada coluna, assim que chegar ao final da coluna, vai para a próxima linha
            std::cout << j << ' ';
        }

        std::cout<< std::endl; // A cada linha lida
    }
}
```
:::