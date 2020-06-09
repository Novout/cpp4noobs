# 5.2 - std::string

- Explicamos os tipos principais para você utilizar em seu código, mas, por que não string's?

- Nativamente, para se utilizar string's no C++ precisamos usar `char*`, `char[]` ou `const char*`, mas optamos explicar diretamente por uma classe do C++, chamada std::string.

- Para utilizar-mos, precisamos incluir tanto o `<iostream>` como uma nova biblioteca, a `<string>`.

String's não são nada menos que cadeias de caracteres, por exemplo:

`"Hello World"`

Cada caractere representa uma posição

H - 0

e - 1

l - 2

l - 3

o - 4

' ' - 5

W - 6

o - 7

r - 8

l - 9

d - 10

Para utilizar o std::string é simples:

```cpp{0}
/*|--------------------------------------|
 *|                                      |
 *|           He4rt Developers           |
 *|                                      |
 *|--------------------------------------|
 */

#include <iostream>
#include <string>

int main ()
{
    std::string nome = "Joao";

    std::cout << nome << std::endl;
}
```

- Mas temos alguns pontos:

- Por conta do std::string ser uma classe (falaremos sobre classe futuramente), ela tem formas diferentes de se manipular, não podendo considerar como um tipo comum (int, float, etc...).

- Para a entrada de dados com `std::string`, não podemos usar apenas o `std::cin`.

- Vamos utilizar o std::getline

```cpp{0}
/*|--------------------------------------|
 *|                                      |
 *|           He4rt Developers           |
 *|                                      |
 *|--------------------------------------|
 */

#include <iostream>
#include <string>

int main ()
{
    std::string nome;

    std::cout << "Digite seu nome: " << std::endl;
    std::getline(std::cin, nome); // Primeiramente passamos o que queremos fazer,no caso std::cin, e segundamente a variável

    std::cout << nome << std::endl;
}
```

Mas, essa abordagem tem alguns problemas,por exemplo:

```cpp{0}
/*|--------------------------------------|
 *|                                      |
 *|           He4rt Developers           |
 *|                                      |
 *|--------------------------------------|
 */

#include <iostream>
#include <string>

int main ()
{
    int a, b;

    std::cout << "Digite um numero: " << std::endl;
    std::cin >> a;

    std::string nome;

    std::cout << "Digite um nome: " << std::endl;
    std::getline(std::cin, nome);

    std::cout << "Digite um outro numero: " << std::endl;
    std::cin >> b;

    std::cout << nome << std::endl;
}
```

Este exemplo não irá funcionar, precisamos esvaziar o buffer para conseguir-mos utilizar o `std::getline`, então precisamos utilizar o `std::cin.ignore()`

```cpp{0}
/*|--------------------------------------|
 *|                                      |
 *|           He4rt Developers           |
 *|                                      |
 *|--------------------------------------|
 */

#include <iostream>
#include <string>

int main ()
{
    int a, b;

    std::cout << "Digite um numero: " << std::endl;
    std::cin >> a;

    std::cin.ignore();

    std::string nome;

    std::cout << "Digite um nome: " << std::endl;
    std::getline(std::cin, nome);

    std::cout << "Digite um outro numero: " << std::endl;
    std::cin >> b;

    std::cout << a << "\n" << b << std::endl;
    std::cout << nome << std::endl;

}
```

Sempre quando for dar entrada de dados em um std::string, certifique-se que o buffer está vazio, ou seja, não ter dado entrada de dados em outro tipo, no caso do exemplo utilizamos o `int a`.

std::string tem mais conteúdo, mas deixaremos para abordar mais para frente no curso.
