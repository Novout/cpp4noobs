# 15 - Big O Notation

Big O Notation é uma forma de classificar algoritmos baseado na relação entre o tamanho de um input e o tempo que uma ação baseada nesse input leva para ser executada.

Big O Notation não é exato, e o tempo que um algoritmo ou programa leva para ser executado, depende de vários fatores. Apesar disso, pode ser útil para entender por que algumas soluções são naturalmente mais lentas que outras, e para aproximar a performance de um algoritmo de forma rápida.

# Tempo constante O(1)

Dizemos que uma operação leva tempo constante quando independente do input, ela leva a mesma quantidade de tempo ou a diferença não é grande o suficiente para importar.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

/* Testa se um número é par */
bool is_even(int number)
{
  return number % 2 == 0;
}

bool is_first_element_even(std::vector<int> const& array)
{
  return is_even(array[0]);
}

int main()
{
  std::cout << std::boolalpha << is_even(2) << '\n'; // true
  std::cout << std::boolalpha << is_even(9) << '\n'; // false
  std::cout << std::boolalpha << is_even(1000000) << '\n'; // true
  std::cout << std::boolalpha << is_even(-482717) << '\n'; // false
  std::cout << std::boolalpha << is_even(33) << '\n'; // false
  // Descobrir se um número é par leva tempo constante

  std::vector<int> array(100);
  std::iota(array.begin(), array.end(), 1);
  is_first_element_even(array);

  /*
   * Descobrir se o primeiro elemento do array é par leva tempo constante
   * já que a função não executa nenhuma operação relacionada com o tamanho do array.
  */
}
```

# Tempo logaritmico O(log n)

Um exemplo de um algoritmo que leva O(log n) é binary search.

```cpp
int binary_search(std::vector<int> const &array, int start, int end, int element)
{
  if (end >= start)
  {
    int mid = start + (end - start) / 2;

    if (array[mid] == element)
      return mid; // retorna a index caso o elemento seja encontrado

    if (array[mid] > element)
      return binary_search(array, start, mid - 1, element);
    /** Chama a função enquanto o elemento não for encontrado e
      * a condição parada não for atingida
    **/

    return binary_search(array, mid + 1, end, element);
  }

  return -1; // -1 caso não encontre o elemento
}
```

Esse algoritmo leva O(log n) por que a cada chamada da função binary_search, o campo de busca é cortado pela metade.

# Tempo linear O(n)

Em um algoritmo O(n) o tempo de execução aumenta de forma idêntica ao tamanho do input, ou seja, de forma linear.

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

/**
  * O tempo necessário para somar todos os elementos do array depende do tamanho do array.
  * Sendo assim, conforme o tamanho do array cresce,
  * o tempo de execução da função também cresce.
  * Por esse motivo, o tempo de execução de sum_elements() pode ser considerado O(n)
*/
int sum_elements(std::vector<int> const& array) {
  int sum = 0;

  for(int element: array){
    sum += element;
  }

  return sum;
}

int main()
{
  std::vector<int> array(100);
  std::iota(array.begin(), array.end(), 1); // prenche o array com 1, 2, 3...n

  std::cout << sum_elements(array); // soma todos elementos do array
}
```

# O(n log n)

Um exemplo de algoritmo O(n log n) é o famoso quicksort, usado para ordenar vetores.

```cpp
#include <algorithm> // pra poder usar std::swap

void quicksort(std::vector<int>& array, int start, int end)
{
  if (start >= end)
    return;

  int pivot_index = start;
  int const pivot_value = array[end];

  for (int i = start; i < end; ++i)
  {
    if (array[i] < pivotValue)
    {
      std::swap(array[i], array[pivot_index]);
      ++pivot_index;
    }
  }

  std::swap(array[pivot_index], array[end]);

  quicksort(array, start, pivot_index - 1, fn);
  quicksort(array, pivot_index + 1, end, fn);
}
```

O(n log n) é o tempo médio que um quicksort leva, mas isso não é uma regra,
um quicksort pode levar O(n²) no pior dos casos e O(n) no melhor.

# Tempo quadrático O(n²)

Em um algoritmo O(n²) o tempo de execução aumenta de forma quadrática.

```cpp
#include <iostream>
#include <vector>

int main()
{
  std::array<std::array<int, 5>, 5> matrix; // matrix 5x5

  /* Prenchendo a matriz */
  for(int i = 0; i < 5; ++i){
    for(int j = 0; j < 5; ++j){
      matrix[i][j] = i + j;
    }
  }
}
```

Uma matriz de 5 linhas e 5 colunas precisa de dois loops para prenche-la, o loop interior roda 5 vezes para cada vez que o exterior roda, logo, o tempo que leva para prencher uma matriz 5x5 é 5 \* 5 ou 5². Podemos assumir que o tempo que levaria para prencher uma matriz 10x10 seria 10², uma matriz 100x100 100², resumindo, o tempo que leva para preencher uma matriz é O(n²)

Um algoritmo pode ser O(n³), O(n⁴), O(n⁵), etc.

Big O Notation não para por aqui, isso foi apenas uma introdução.

Alguns que não foram mencionados: O(n^c), O(c^n), O(n^n), O(n!)
