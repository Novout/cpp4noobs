# 8.4 - Funções Lambda

::: tip

Funções lambda foram implementadas no C++11 e versões posteriores, onde podemos declarar objetos de funções em forma anônima, podendo ser utilizada em contextos assíncronos.

Sintaxe:

`[]() {};`

Chamamos uma função lambda como: `nome_variavel()`

Exemplo:
```cpp{0}
#include <iostream>
#include <cstdlib>

int main(int argc, const char **argv)
{
  /*|--------------------------------------|
   *|                                      |
   *|           He4rt Developers           |
   *|                                      |
   *|--------------------------------------|
   */

    int a(3), b(5);

    /* auto significa irá idenficar o que se retorna ou o que é associavel
     * neste caso precisamos utilizar auto,pois soma se associa com: class lambda[] int (int n1, int n2) -> int
     * Iremos ter uma seção específica apenas para a keyword auto, não se preocupe com isso.
     */

    auto soma = [](int n1, int n2) {
        return n1 + n2;
    };

    std::cout << soma(a, b);

    return EXIT_SUCCESS;
}
```

Podemos retornar uma função lambda por outra função:

```cpp{0}
auto func()
{
    return [](int var) { return var; }
}
```

Também podemos fazer lambda localmente para executar um determinado procedimento

Exemplos:

```cpp{0}
#include <iostream>
#include <cstdlib>

int main(int argc,const char **argv) 
{
  /*|--------------------------------------|
   *|                                      |
   *|           He4rt Developers           |
   *|                                      |
   *|--------------------------------------|
   */

    []{ std::cout << "He4rt Developers"; }();

    return EXIT_SUCCESS;
}
```
```cpp{0}
#include <iostream>

int main() 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    std::string he4rt = "He4rt";
    std::string developers = "Developers";

    [](std::string h, std::string d){ std::cout << h + " " + d ;}( he4rt, developers);

    // Saida: He4rt Developers
}
```
:::