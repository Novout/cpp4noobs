# 8.4 - Funções Lambda

Funções lambda foram implementadas no C++11 e versões posteriores, onde podemos declarar objetos de funções em forma anônima, normalmente utilizadas quando precisamos de uma função que não precisará existir após ser utilizada.

Sintaxe:
`[]() -> T {}`

CAPTURAS `[]` <br/>
PARÂMETROS `()` <br/>
TIPO DO RETORNO `-> T` <br/>
CORPO DA FUNÇÃO `{}`

Chamamos uma função lambda da mesma forma que chamamos uma função normal: `nome_variavel()`

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

    /* Quando criamos uma lambda, precisamos usar 'auto', pois o tipo de cada função é único. */

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

Também podemos criar lambdas que são executadas imediatamente. Esse tipo de função é conhecido como IILE(Immediately Invoked Lambda Expression) ou IIFE(Immediately Invoked Function Expression)

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
#include <cstdlib>

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

    return EXIT_SUCCESS;
}
```
