# 5.2 - std::string

::: tip



- Explicamos os tipos principais para você utilizar em seu códico, mas, por que não string's?

- Nativamente, para se utilizar string's no C++ precisamos usar `char*`, `char[]` ou `const char*`, mas optamos explicar diretamente por uma classe do C++, chamada std::string.

- Para utilizar-mos, precisamos incluir tanto o `<iostream>` como uma nova biblioteca, a `<string>`.

:::

::: tip

String's não são nada menos que cadeias de caracteres, por exemplo:

`"Hello World"`

Cada caractere representa uma posição

H - 1

e - 2

l - 3

l - 4

o - 5

' '  - 6

W - 7

o - 8

r - 9

l - 10

d - 11

:::

::: tip

Para utilizar o std::string é simples:

```cpp{0}
#include <iostream>
#include <string>

int main ()
{
    std::string nome = "Joao";

    std::cout << nome << std::endl;
}
```

* Mas temos alguns pontos:

* Por conta do std::string ser uma classe (falaremos sobre classe futuramente), ela tem formas diferentes de se manipular, não podendo considerar como um tipo comum (int, float, etc...).



:::