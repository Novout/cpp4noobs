# 5 - Variáveis

Um programa pode adquirir dados para trabalhar de várias maneiras: de um arquivo ou banco de dados, através de uma rede, do usuário fornecendo entrada em um teclado ou do programador colocando dados diretamente no código-fonte do próprio programa. Na seção 3, fizemos o programa exibir um `Hello World`, o texto `"Hello World"` Foi inserido diretamente no código-fonte do programa, fornecendo dados para o programa usar. O programa então manipula esses dados enviando-os ao monitor para exibir para o usuário.Os dados em um computador são normalmente armazenados em um formato que é eficiente para armazenamento ou processamento, sendo não-legíveis por humanos.

Todos os computadores têm memória, chamada RAM (abreviação de memória de acesso aleatório), que está disponível para uso pelos seus programas. Você pode pensar na RAM como uma série de caixas de correio que podem ser usadas para armazenar dados enquanto o programa está em execução. Um único dado, armazenado na memória em algum lugar, é chamado de valor.

Em C++, o acesso direto à memória não é permitido. Em vez disso, acessamos a memória indiretamente por meio de um objeto. Um objeto é uma região de armazenamento (geralmente memória) que possui um valor e outras propriedades associadas (que serão abordadas em seções futuras). Quando um objeto é definido, o compilador determina automaticamente onde o objeto será colocado na memória. Como resultado, em vez de dizer para obter o valor armazenado em um local específico, podemos dizer para obter o valor armazenado por este objeto e o compilador sabe onde na memória procurar esse valor. Isso significa que podemos nos concentrar no uso de objetos para armazenar e recuperar valores e não ter que nos preocupar com o local da memória em que eles estão sendo colocados.

Objetos podem ser nomeados ou não nomeados. Um objeto nomeado é chamado de variável e o nome do objeto é chamado de identificador. Em nossos programas, a maioria dos objetos que criamos serão variáveis.

# Tipos

- CPP é uma linguagem fortemente tipada:

| Tipos  |            Características            |             Exemplos |
| ------ | :-----------------------------------: | -------------------: |
| void   | não é associado a nenhum tipo de dado |      Tipo incompleto |
| int    |            número inteiro             |       1, 2, 3, 6, -2 |
| float  |   número fracionário (range curto)    | 2.34f, 23.544f, 3.1f |
| double |   número fracionário (range longo)    |    2.343223232322321 |
| char   |               caractere               |        'c', 'A', ' ' |
| bool   |               booleano                |          true, false |

Existem mais tipos, mas no momento vamos trabalhar apenas com estes.

Para criar uma variável, usamos um tipo especial de declaração chamado de definição

Veja um exemplo de como definir uma variável do tipo `int`chamada `inteiro`:

```cpp{0}
int main ()
{
    int inteiro;
}
```

Também podemos criar a variável já com um valor,no caso o valor `5`

```cpp{0}
int main ()
{
    int inteiro = 5; // Como vimos na tabela acima, int aceita números inteiros, então 5 poderia ser -212, 40242, etc...
}
```

- Nesse caso, estamos atribuindo pelo operador `=` o valor de `5` para a nossa variável chamada `inteiro` do tipo `int`

Em tempo de compilação, quando o compilador vê esta declaração, ele faz uma nota para si mesmo que estamos definindo uma variável, dando a ela o nome `inteiro`, e que é do tipo `int` (mais em tipos em um momento). Desse ponto em diante (com algumas limitações sobre as quais falaremos em uma lição futura), sempre que o compilador vir o identificador `inteiro`, saberá que estamos fazendo referência a essa variável.

Quando o programa é executado (chamado runtime), a variável será instanciada. A instanciação é uma palavra sofisticada que significa que o objeto será criado e atribuído a um endereço de memória. As variáveis devem ser instanciadas antes de poderem ser usadas para armazenar valores. Por exemplo, digamos que a variável `inteiro` é instanciada no local da memória 23. Sempre que o programa usar a variável `inteiro`, ele acessará o valor no local da memória 23. Um objeto instanciado às vezes também é chamado de instância. Na seção de ponteiros iremos aprender a manipular diretamente pelo endereço de memória.

# Comentários

- Podemos escrever conteúdo no nosso código apenas para visualização utlizando `//` e `/* */`

```cpp{0}
int main ()
{
    int numero = 3 // variavel numero de tipo inteiro que recebe o valor '3'

    /*
    Podemos também comentar trechos de código
    que não quisermos utilizar em um
    determinado momento
    */
}
```

- Exemplos de declaração de variáveis e utilizações gerais:

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

    int inteiro = 5;
    char caractere = 'a';
    float fracionario = 5.2f;
    bool booleano = true;

    int inteiro_vazio;

    std::cout << inteiro << caractere << fracionario << std::endl; // Exibição: 5a5.2
    std::cout << inteiro << " " << caractere << " " << fracionario << std::endl; // Exibição: 5 a 5.2

    std::cout << inteiro_vazio << std::endl; // Exibição: 0

    std::cout << booleano << std::endl // Exibição: true

    // É possivel quebrar linha também com a string "\n"
    std::cout << inteiro << "\n" << caractere << "\n" << fracionario << "\n";
}
```

# Curiosidades

```cpp{0}
int main ()
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    int a, b; // Correto
    int a, int b; // Errado

    int a, double b; // Errado
    int a; double b; // Correto

    // Recomendados utilizar este padrão:

    int a;
    double b;
}

```
# Entrada de Dados com `std::cin`

Agora iremos falar do `std::cin` da biblioteca `<iostream>`, ela permite a entrada de dados,sendo sua sintaxe parecida com a do `std::cout`

```cpp{0}
std::cin >> <variavel>;
```

Note que como estamos entrando com dados, temos que indicar pelo operador `>>`, sendo o inverso do operador de saída `std::cout` que utilizamos `<<`.
# Exemplos

- Entrada e saída de dados de um determinado aluno

```cpp{0}
#include <iostream>

int main ()
{
    int idade; // Declarando a idade do aluno

    // Saida de dados, perguntando para o utilizador do programa a idade do aluno
    std::cout << "Digite a idade do aluno: " << std::endl;

    //Entrada de dados com o nome do aluno
    std::cin >> idade; // Entrada de dados para a variável idade,ou seja,o que o utilizador digitar irá ir para o inteiro `idade`

    // Saida de dados de uma string e em sequência a idade do aluno
    std::cout << "A idade do aluno e: " << idade << std::endl;
}

```

- Lembrando que `std::cout << "Digite a idade do aluno: " << std::endl;` é apenas visual para a interação de programa-usuário.

- Existem outras formas de inicialização:

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

    //Tipos de inicialização

    int a = 5, A = 6; // Inicialização por cópia
    int b( 7 ), B( 8 ); // Inicialização direta
    int c{ 9 }, C{ 10 }; // Inicialização uniforme

    std::cout << a << std::endl;
    std::cout << A << std::endl;
    std::cout << b << std::endl;
    std::cout << B << std::endl;
    std::cout << c << std::endl;
    std::cout << C << std::endl;

    int a, b( 5 );
    std::cout << a << " " << b << std::endl; // Saída: 0 5

}
```