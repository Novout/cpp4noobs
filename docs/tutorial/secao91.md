# 9.1 - Protetores de Cabeçalho

Em seções anteriores observamos que um identificador de variável ou função pode ter apenas uma definição (a regra de uma definição). Assim, um programa que define um identificador de função mais de uma vez causará um erro de compilação:

```cpp{0}
#include <iostream>
 
int num() // Definição da função num
{
    return 5;
}
 
int num() // Erro de compilação / Funções duplicadas
{
    return 5;
}
 
int main()
{
    std::cout << num();
}
```

Embora esses programas sejam fáceis de corrigir (remova a definição duplicada), com arquivos de cabeçalho, é muito fácil acabar em uma situação em que uma definição em um arquivo de cabeçalho é incluída mais de uma vez. Isso pode acontecer quando um arquivo de cabeçalho `#include` outro arquivo de cabeçalho (o que é comum).

Considere o seguinte exemplo acadêmico:

`a.hpp`
```cpp{0}
float teste() 
{
    return 1.2f;
}
```

`b.hpp`
```cpp{0}
#include "a.hpp"
```

`main.cpp`
```cpp{0}
#include "a.hpp"
#include "b.hpp"

int main()
{
    return 0;
}
```

Este programa aparentemente inocente não será compilado! Aqui está o que está acontecendo. Primeiro, main.cpp inclui a.hpp, que copia a definição da função `teste()` para main.cpp. Então main.cpp inclui b.hpp, que inclui a.hpp em si. Isso copia o conteúdo de a.h (incluindo a definição da função teste()) para b.hpp, que é copiada para main.cpp.

Assim, depois de resolver todos os `#include`, o main.cpp acaba assim:

```cpp{0}
float teste()
{
    return 1.2f;
}

float teste()
{
    return 1.2f;
}

int main()
{
    return 0;
}
```

Definições duplicadas e um erro de compilação. Cada arquivo, individualmente, está bem. No entanto, como o main.cpp acaba incluindo o conteúdo de a.h duas vezes, encontramos problemas. Se b.hpp precisar de teste() e main.cpp precisar de b.hpp e a.hpp, como você resolveria esse problema?

# Protetores de Cabeçalho

```cpp{0}
#ifndef NOME_UNICO
#define NOME_UNICO
 
// Declarações
 
#endif
```

Quando esse cabeçalho é incluido, o pré-processador verifica se NOME_UNICO foi definido anteriormente. Se for a primeira vez que incluímos o cabeçalho, NOME_UNICO não será definido. Consequentemente, `#define NOME_UNICO` e inclui o conteúdo do arquivo. Se o cabeçalho for incluído novamente no mesmo arquivo, NOME_UNICO já terá sido definido desde a primeira vez em que o conteúdo do cabeçalho foi incluído e o conteúdo do cabeçalho será ignorado (graças ao #ifndef).

Todos os seus arquivos de cabeçalho devem ter proteções de cabeçalho neles. NOME_UNICO pode ser o nome que você quiser, mas por convenção é definido como o nome completo do arquivo de cabeçalho, digitado em maiúsculas, usando sublinhados para espaços ou pontuação. Por exemplo, a.hpp teria o protetor de cabeçalho:

```cpp{0}
#ifndef A_H
#define A_H

float teste() 
{
    return 1.2f;
}

#endif
```

Vamos voltar ao exemplo a.hpp, usando o a.hpp com protetores de cabeçalho. Para uma boa forma, também adicionaremos protetores de cabeçalho em b.hpp

`a.hpp`
```cpp{0}
#ifndef A_H
#define A_H

float teste() 
{
    return 1.2f;
}

#endif
```

`b.hpp`
```cpp{0}
#ifndef B_H
#define B_H
 
#include "a.hpp"
 
#endif
```

`main.cpp`

```cpp{0}
#include "a.hpp"
#include "b.hpp"
 
int main()
{
    return 0;
}
```

Depois que o pré-processador resolve todas as inclusões, este programa fica assim:

```cpp{0}
#ifndef A_H // a.hpp incluido de main.cpp,
#define A_H // A_H foi definido aqui
 
// Todo esse conteudo foi colocado aqui
float teste() 
{
    return 1.2f;
}

 
#endif // A_H
 
#ifndef B_H // b.hpp incluido de main.cpp
#define B_H
#ifndef B_H // a.hpp incluido de b.hpp, A_H foi incluido
#define A_H // Resto do conteudo foi incluido
 
float teste() 
{
    return 1.2f;
}
 
#endif // A_H
#endif // B_H
 
int main()
{
    return 0;
}
```

Geralmente, pedimos que você não inclua definições de função em seus cabeçalhos. Então, você deve estar se perguntando por que deve incluir protetores de cabeçalho se eles o protegem de algo que você não deve fazer.

Existem alguns casos em que mostraremos no futuro onde é necessário colocar definições de não função em um arquivo de cabeçalho. Por exemplo, o C++ permitirá que você crie seus próprios tipos. Esses tipos definidos pelo usuário geralmente são definidos nos arquivos de cabeçalho, portanto, a definição pode ser propagada para os arquivos de código que precisam usá-los. Sem uma proteção de cabeçalho, seus arquivos de código podem acabar com várias cópias idênticas dessas definições, o que causará um erro de compilação de definição duplicada.

Portanto, mesmo que não seja estritamente necessário ter proteções de cabeçalho neste ponto da série de tutoriais, estamos estabelecendo bons hábitos agora, para que você não precise desaprender os maus hábitos mais tarde.

#pragma once

Muitos compiladores suportam uma forma mais simples e alternativa de proteção de cabeçalho usando a diretiva #pragma:

`exemplo.hpp`
```cpp{0}
#pragma once

// codico
```

O #pragma já serviu ao mesmo objetivo que os protetores de cabeçalho e tem o benefício adicional de ser mais curto e menos propenso a erros.

No entanto, o #pragma não é uma parte oficial da linguagem C ++ e nem todos os compiladores o suportam (embora a maioria dos compiladores modernos o faça).

Para fins de compatibilidade, recomendamos a aderência aos protetores de cabeçalho tradicionais. Eles não são muito mais trabalhosos e têm garantia de suporte em todos os compiladores compatíveis.



