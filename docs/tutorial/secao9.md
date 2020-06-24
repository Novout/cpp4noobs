# 9 - Header

A medida que os programas aumentam (e fazem uso de mais arquivos), torna-se cada vez mais entediante declarar todas as funções que você deseja usar definidas em um arquivo diferente. Não seria legal se você pudesse colocar todas as suas declarações encaminhadas em um único local e importá-las quando precisar?

Arquivos de código C++ (.cpp) não são os únicos arquivos comumente vistos em programas C++. O outro tipo de arquivo é chamado de arquivo de cabeçalho. Os arquivos de cabeçalho geralmente têm uma extensão .h, mas você os verá ocasionalmente com uma extensão .hpp ou nenhuma extensão. O objetivo principal de um arquivo de cabeçalho é propagar declarações para arquivos de código.

Considere a inclusão do cabeçalho `<iostream>` em um programa utilizando `std::cout`. No entanto, esse programa nunca forneceu uma definição ou declaração para `std::cout`, então como o compilador sabe o que é `std::cout`?

A resposta é que `std::cout` foi declarado a seguir no arquivo de cabeçalho `iostream`. Quando #incluímos `<iostream>`, solicitamos que o pré-processador copie todo o conteúdo (incluindo declarações de encaminhamento para `std::cout`) do arquivo chamado `iostream` para o arquivo que faz o `#include`.

Considere o que aconteceria se o cabeçalho iostream não existisse. Onde quer que você use `std::cout`, você deverá digitar ou copiar manualmente todas as declarações relacionadas a std :: cout na parte superior de cada arquivo que usou `std::cout`! Isso exigiria muito conhecimento sobre como o `std::cout` foi implementado e seria uma tonelada de trabalho. Pior ainda, se um protótipo de função for alterado, teremos que atualizar manualmente todas as declarações de encaminhamento. É muito mais fácil #incluir o iostream!

Quando se trata de funções vale lembrar que os arquivos de cabeçalho geralmente contêm apenas declarações de função e objeto, não definições de função e objeto (caso contrário, pode resultar em uma violação da regra de uma definição). `std::cout` é declarado para a frente no cabeçalho do `iostream`, mas definido como parte da biblioteca padrão C++, que é automaticamente vinculada ao seu programa durante a fase do vinculador.

Agora vamos trabalhar com mais arquivos, execute o exemplo a seguir:

`media.cpp`
```cpp{0}
int media(int a, int b, int c) 
{
    return (a + b + c)/3;
}
```

`main.cpp`
```cpp{0}
#include <iostream>
 
int media(int a, int b, int c) ; // declaração direta usando protótipo de função
 
int main()
{
    std::cout << "A media e: " << media(1, 4, 3) << std::endl;
    return 0;
}
```

(Não se esqueça de adicionar o arquivo media.cpp ao seu projeto para que ele seja compilado).

::: warning
No `Falcon C++` você pode criar um projeto, e isso irá facilitar na hora de trabalhar com múltiplos arquivos.
:::

Neste exemplo, usamos uma declaração de encaminhamento para que o compilador saiba qual é o identificador adicionado ao compilar main.cpp. Como mencionado anteriormente, a adição manual de declarações avançadas para todas as funções que você deseja usar que residem em outro arquivo pode ser entediante rapidamente.

Vamos escrever um arquivo de cabeçalho para nos livrar desse fardo. Escrever um arquivo de cabeçalho é surpreendentemente fácil, pois os arquivos de cabeçalho consistem apenas em duas partes:

O conteúdo real do arquivo de cabeçalho, que deve ser a declaração de encaminhamento de todos os identificadores que queremos que outros arquivos possam ver.

Adicionar um arquivo de cabeçalho a um projeto funciona de forma análoga à adição de um arquivo de origem. Se estiver usando um IDE, siga as mesmas etapas e escolha “Cabeçalho” em vez de “Origem” quando solicitado. Se estiver usando a linha de comando, basta criar um novo arquivo no seu editor favorito.

`media.hpp`
```cpp{0}
int media(int a, int b, int c); // protótipo de função para add.h
```

`media.cpp`
```cpp{0}
#include "media.h"

int media(int a, int b, int c) 
{
    return (a + b + c) /3;
}
```

`main.cpp`
```cpp{0}
#include <iostream>
 
int media(int a, int b, int c) ; // declaração direta usando protótipo de função
 
int main()
{
    std::cout << "A media e: " << media(1, 4, 3) << std::endl;
    return 0;
}
```

Quando o pré-processador processa a linha #include `media.hpp`, ele copia o conteúdo de media.h no arquivo atual naquele momento. Como nosso `media.hpp` contém uma declaração direta para a função `media`, essa declaração direta será copiada para main.cpp. O resultado final é um programa funcionalmente igual ao em que adicionamos manualmente a declaração de encaminhamento no topo do arquivo main.cpp.

Consequentemente, nosso programa será compilado e vinculado corretamente.

Se você receber um erro do compilador indicando que media.h não foi encontrado, verifique se o arquivo está realmente com o nome add.h. Dependendo de como você o criou e o nomeou, é possível que o arquivo tenha sido nomeado como add (sem extensão) ou media.h.txt ou media.hpp. Verifique também se ele está no mesmo diretório que o restante dos seus arquivos de código.

Se você receber um erro do vinculador sobre a adição de função não ser definida, inclua media.cpp em seu projeto para que a definição de adição de função possa ser vinculada ao programa.

## Aviso 

O pré-processador *não* checa se o arquivo a ser incluindo está sendo incluindo mais de uma vez. Isto pode se tornar um problema
em projetos maiores, com diversos `.cpp`, visto que uma inclusão dupla de _header_ causará um problema de compilação.

Para contornar este problema, podemos usar uma estratégia chamada de _header guard_, que consiste em criar uma macro que registra se aquele arquivo já foi incluido previamente.

Exemplo:

Em `media.hpp`
```cpp{0}

#ifndef __MEDIA                     // Caso __MEDIA não for definido ..
#define __MEDIA                     // .. definiremos __MEDIA e incluiremos o header
int media(int a, int b, int c);

    // ...

#endif                              // Finalizando o ifndef
```

Ou seja, quando o arquivo for incluído uma vez, `__MEDIA` será definido. Quando o arquivo for incluído novamente, o pré-processador verá que `__MEDIA` já foi definido e não incluirá o _header_.

Uma outra alternativa menos portátil é usar um *pragma*.
```cpp{0}

#pragma once                        // Garante que o arquivo seja incluido apenas uma vez.
int media(int a, int b, int c);
```