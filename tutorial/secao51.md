# 5.1 - Operações Matemáticas

::: tip

Primeiramente,vamos falar dos <strong>Operadores Aritméticas</strong> e são, basicamente, os mesmos encontrados na matemática basica.

| Operação        | Operador     | Exemplos                     |
| ----------------|:------------:| ----------------------------:|
| Adição          | +            | int a = 5 + 2                |
| Subtração       | -            | int b = (4 - 2) - 1          |
| Multiplicação   | *            | int c = ((2 * 2) * 2) * 2    |
| Divisão         | /            | int d = (8 / 6) / 2          |
| Módulo          | %            | int e = 4 % 2                |

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

    int A; // Inteiro A
    int B; // Inteiro B

    std::cout << "Digite o primeiro numero:" << std::endl;
    std::cin >> A;

    std::cout << "Digite o segundo numero:" << std::endl;
    std::cin >> B;

    // Estamos atribuindo a uma nova variável C o resultado da soma das variaveis A e B
    int C = A + B;

    std::cout << "A soma entre A e B e: " << C << std::endl;

    // Podemos calcular diretamente na saida de dados
    std::cout << "A multiplicação entre A e B e: " << A * B << std::endl;
}
```

```cpp{0} 
int main ()
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    float A;

    // Até aqui não atribuimos nenhum valor para a variável A

    A = 5.2; // Agora A vale 5.2

    std::cout << A << std::endl;

    A = 8.4; // Agora A vale 8.4

    std::cout << A << std::endl;

    A = A / 2; // Dividimos o atual o valor de A (8.4) por 2 na própria variavel A

    std::cout << A << std::endl;
}
```
* O CPP permite simplificar quando fazemos uma operação com a própria variavel.

```cpp{0}
int main () 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    float A = 5.5;

    A += 5; // Equivale A = A + 5 
    A -= 5; // Equivale A = A - 5 
    A *= 5; // Equivale A = A * 5 
    A /= 5; // Equivale A = A / 5 

    int a = 2;

    a /= 0; // NÃO EXISTE DIVISÃO POR 0
}
```

* CPP é `Case-sensitive`,ou seja, `int a` é <strong>DIFERENTE</strong> de `int A`.

:::

::: tip

# Operações com a biblioteca cmath
O Cabeçalho `<cmath>` declara um conjunto de funções para calcular operações e transformações matemáticas comuns:

```cpp{0}
#include <iostream>
#include <cmath>

int main ()
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    int x, y;
    std::cout << "Digite um numero: \n";
    std::cin >> x;

    std::cout << "Digite um outro numero: \n";
    std::cin >> y;

    std::cout << std::pow(x, 2); // Eleva algo a potencia, no caso o primeiro valor é elevado ao 2 valor
    std::cout << std::sqrt(x); // A raiz de x
    std::cout << std::hypot(x, y); // A raiz de (std::pow(x, 2) + std::pow(y,2))
    std::cout << std::abs(x + y) // A soma de x com y em módulo => |x + y|

    //cmath também possui outras funcionalidades, recomendamos acessar http://www.cplusplus.com/reference/cmath/
    
}

```
:::