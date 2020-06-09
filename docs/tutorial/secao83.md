# 8.3 - Recursão

Recursão é um conceito não exclusivo do C++, onde uma função chama a si mesma até que uma condição seja alcançada.

Tudo que pode ser resolvido por loops, pode ser resolvido por recursão.
Tudo que pode ser resolvido por recursão, pode ser resolvido por loops.

Por que usar recursão? Legibilidade.

Algumas soluções são mais fáceis de serem expressadas por recursão.
Assim como outras são mais fáceis através de loops.

# Exemplos

```cpp{0}
#include <iostream>

int factorial(int number)
{
  /**
    * Toda função recursiva precisa de uma condição de parada,
    * caso contrário entrará em um loop infinito
    * Nesse caso, a função retorna quando o encontrar
    * essa condição de parada
    * No caso da função fatorial, existem duas condições de parada:
    * quando number == 0 ou quanto number == 1, pois:
    * 0! = 1
    * 1! = 1
  */
  if (number <= 1)
  {
    return 1;
  }

  /**
    * Se o número não for <= 1, chamamos a função factorial novamente,
    * passando o número - 1 como parâmetro
    * Repetimos esse processo até que a condição de parada seja alcançada
  */
  return number * factorial(number - 1);
}

/**
  * Usando operador ternário
*/
int factorial(int number)
{
  return number <= 1 ? 1 : number * factorial(number - 1);
}

int fibonacci(int number)
{
  /**
    * Condição de parada
  */
  if (number <= 2)
  {
    return number;
  }

  return fibonacci(number - 2) + fibonacci(number - 1);
}

/**
  * Usando operador ternário
*/
int fibonacci(int number)
{
  return number <= 2 ? number : fibonacci(number - 2) + fibonacci(number - 1);
}

int main ()
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    /**
      * Calcular fatorial de um número é um exemplo clássico de recursão
    */
    std::cout << factorial(5); // 120

    /**
      * Calcular o nth termo da sequência de fibonacci é outro exemplo clássico
    */

    std::cout << fibonacci(10); // 55 começando do 0

    /**
      * Visualização de como uma função recursiva funciona.
      * int result = factorial(5)
      *                  5 * factorial(4)
      *                    4 * factorial(3)
      *                      3 * factorial(2)
      *                        2 * factorial(1)
      *                        2
      *                      6
      *                    24
      *                  120

      * std::cout << result; // 120
    */
}
```
