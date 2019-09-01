# 10 - Namespace

Agora imagine uma situação que você possua duas funções em header com o mesmo nome. Esse tipo de abordagem não pode ser possível sem a utilização de espaço de nome(namespace).

Um espaço para nome define uma área de código na qual todos os identificadores são garantidos como exclusivos. Por padrão, variáveis globais e funções normais são definidas no espaço para nome global. Apesar de não ser necessário, podemos acessá-lo manualmente, colocando `::` antes do nome da variável ou da função.

`main.cpp`

```cpp{0}
#include <iostream>

#include "a.hpp"
#include "b.hpp"

int A = 5;

int soma(int a, int b)
{
    return a + b;
}

int main(int, char**)
{
    /* Usando :: antes da função soma para indicar que ela está no namespace global */
    std::cout << ::soma(1, 2);
}
```

`a.hpp`

```cpp{0}
int soma(int a)
{
    return (a + a);
}
```

`b.hpp`

```cpp{0}
int soma(int a, int b, int c)
{
    return (a + b + c);
}
```

A variável global `A` e a função `soma()` são definidas no espaço para nome global.

No programa de exemplo acima que teve a colisão de nomenclatura, quando main.cpp # incluiu a.h e b.h, as duas versões de soma () foram incluídas no espaço de nomes global, motivo pelo qual a colisão de nomenclatura resultou.

Para ajudar a evitar problemas nos quais dois trechos de código independentes têm colisões de nomes entre si quando usados juntos, o C++ nos permite declarar nossos próprios namespaces por meio da palavra-chave namespace. Qualquer coisa declarada dentro de um espaço para nome definido pelo usuário pertence a esse espaço para nome, não ao espaço para nome global.

Aqui está um exemplo dos cabeçalhos no primeiro exemplo reescritos usando namespaces:

`main.cpp`

```cpp{0}
#include <iostream>

#include "a.hpp"
#include "b.hpp"

int A = 5;

int soma(int a, int b)
{
    return a + b;
}

int main(int, char**)
{
    std::cout << soma(1, 2);
}
```

`a.hpp`

```cpp{0}
namespace A
{

int soma(int a)
{
    return (a + a);
}
}
```

`b.hpp`

```cpp{0}
namespace B
{
int soma(int a, int b, int c)
{
    return (a + b + c);
}
}
```

O que aconteceu foi que, quando tentamos chamar a função soma(), o compilador procurou no espaço de nomes global para ver se poderia encontrar uma definição de soma (). No entanto, como nenhuma das nossas funções soma () vive mais no espaço de nomes global, ele considerou a função soma() do escopo global!

A primeira maneira de dizer ao compilador para procurar um identificador em um espaço de nome específico é usar o operador de resolução de escopo (: :). Esse operador permite prefixar um nome de identificador com o espaço para nome que você deseja usar.

```cpp{0}
#include <iostream>

#include "a.hpp"
#include "b.hpp"

int A = 5;

int soma(int a, int b)
{
    return a + b;
}

int main(int, char**)
{
    std::cout << A::soma(4, 3) << '\n'; // soma que pertence ao namespace A
    std::cout << B::soma(4, 3, 6) << '\n'; // soma que pertence ao namespace B
}
```

Também podemos ter namespaces dentro de namespaces:

```cpp{0}
#include <iostream>

namespace A
{
namespace B
{
    auto soma = [](int a, int b) { return a + b; };
}
}

int main(int, char**)
{
    std::cout << A::B::soma(1,2);
}

```

Vale ressaltar que os namespaces em C++ não foram projetados como uma maneira de implementar uma hierarquia de informações - eles foram projetados principalmente como um mecanismo para evitar colisões de nomes. Como prova disso, observe que a totalidade da biblioteca de modelos padrão reside no espaço de nome singular `std::` . Algumas linguagens mais recentes (como C#) diferem do C++ nesse sentido.

Em geral, evite aninhar espaços para nome, se possível, e existem poucas boas razões para aninhar neles com mais de 2 níveis de profundidade. No entanto, nas lições posteriores, veremos outros casos relacionados em que o operador de resolução do escopo precisa ser usado mais de uma vez.
