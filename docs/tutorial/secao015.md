# 15 - Auto Keyword

A keyword `auto` pode ser usada em variáveis e funções.

Uma variável declarada com auto possui tipo, e esse tipo é deduzido a partir do valor que é dado à ela.

Para usar auto durante a declaração de uma variável, essa variável deve ser inicializada para que o tipo possa ser
deduzido.

```cpp
auto a = 10; // o tipo de a é int.

auto b = (int)10; // o mesmo que o de cima, só que de forma explicita.

auto c; // inválido pois o tipo de c não póde ser deduzido.
```

Em funções com retorno do tipo auto, o tipo do retorno é deduzido através do valor retornado.

```cpp
auto sum(int a, int b) { return a + b; } // auto é deduzido como int

auto sum(int a, int b) -> int { return a + b + 3.14; } // forçando auto a ser deduzido como int

auto sum(int a, int b) { return a + b + 3.14; } // auto é deduzido como double
```

Podemos usar parâmetros do tipo `auto` em lambdas.

```cpp
#include <iostream>
#include <numeric>  // std::iota e std::accumulate
#include <vector>

auto main() -> int
{
    std::vector<int> array(5);
    std::iota(array.begin(), array.end(), 1);

    auto const factorial = std::accumulate(
        array.begin(),
        array.end(),
        1,
        [](auto accum, auto current) -> int { return accum * current; });

    std::cout << factorial; // 120
}
```

`auto` em loops

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

auto main() -> int
{
    std::vector<int> array(5);
    std::generate(array.begin(), array.end(), [i = 1]() mutable -> int { return i++; });

    for (auto element : array)
    {
        std::cout << element << '\n';
    }
}
```
