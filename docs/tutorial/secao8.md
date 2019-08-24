# 8 - Funções

::: tip

Você já sabe que todo programa deve ter uma função chamada main (que é onde o programa inicia a execução quando é executado). No entanto, à medida que os programas começam a ficar cada vez mais longos, a colocação de todo o código dentro da função principal torna-se cada vez mais difícil de gerir. As funções fornecem uma maneira de dividir nossos programas em pequenos blocos modulares que são mais fáceis de organizar, testar e usar. A maioria dos programas usa muitas funções. A biblioteca padrão C ++ vem com muitas funções já escritas para você usar - no entanto, é tão comum escrever as suas próprias. As funções que você escreve são chamadas de funções definidas pelo usuário.

Considere um caso que pode ocorrer na vida real: você está lendo um livro quando lembra que precisa fazer uma ligação telefônica. Você coloca um marcador em seu livro, faz a ligação e, quando termina a ligação, volta ao local marcado e continua seu livro exatamente onde parou.

Programas C ++ podem funcionar da mesma maneira. Um programa estará executando instruções seqüencialmente dentro de uma função quando encontrar uma chamada de função. Uma chamada de função é uma expressão que informa a CPU para interromper a função atual e executar outra função. A CPU “coloca um marcador” no ponto atual de execução e, em seguida, chama (executa) a função nomeada na chamada de função. Quando a função chamada termina, a CPU retorna ao ponto marcado e retoma a execução.

:::

::: tip

Primeiro, vamos começar com a sintaxe mais básica para definir uma função definida pelo usuário. Para esta lição, todas as funções definidas pelo usuário (exceto main) terão o seguinte formato:

```cpp{0}
void nome_função ()
{
    // codico aqui
}
```

`void` são funções que retornam `nada`, também conhecidas como `procedimento`

Exemplos:

```cpp{0}
#include <iostream>

void MostrarMensagem() 
{
    std::cout << "Hello World" << std::endl;
}

int main () 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */
    MostrarMensagem(); // Chamando a função
}
```

```cpp{0}
#include <iostream>

void CalcularSoma() 
{
    int a, b;

    std::cout << "Digite dois numeros em sequencia" << std::endl;
    std::cin >> a >> b;

    std::cout << "A soma e: "<< (a + b) << std::endl;
}

int main () 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */
    CalcularSoma(); // Chamando a função
}
```

Considerado o exemplo anterior, podemos passar variáveis para funções por meio de `parâmetros` direto do `main`

```cpp{0}
#include <iostream>

void CalcularSoma(int a, int b) // Parâmetros a e b, recebidos em sequência no main
{
    std::cout << "A soma e: "<< (a + b) << std::endl;
}

int main () 
{
    int a, b;

    std::cout << "Digite dois numeros em sequencia" << std::endl;
    std::cin >> a >> b;

    CalcularSoma(a, b); // Chamando a função
}
```

Como já discutimos em seções anteriores, quando declaramos `tipo a` ou `tipo a = valor` ele existe apenas no escopo onde foi criado, e que chamamos de declaração na memória `stack`(teremos uma seção especificamente para memória `stack` e `heap`)

Então os parâmetros existem `APENAS` nas funções, no caso a função `CalcularSoma()` não reconhece os inteiros declarados no `main()`

Por conta disso, parâmetros podem ter nomes diferentes em relação ao o que passamos para ela, já que não possuem relação nenhuma

Exemplo:

```cpp{0}
#include <iostream>

void CalcularSoma(int a, int b) 
{
    a += b;
    std::cout << "A soma e: "<< a << std::endl;
}

void CalcularSubtracao(int a, int b) 
{
    a -= b;
    std::cout << "A subtracao e: "<< a << std::endl;
}

void CalcularMultiplicacao(int a, int b) 
{
    a *= b;
    std::cout << "A multiplicacao e: "<< a << std::endl;
}

void CalcularDivisao(int a, int b) 
{
    a /= b;
    std::cout << "A divisao e: "<< a << std::endl;
}

int main () 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    int n1, n2;
    char opcao;

    std::cout << "Digite dois numeros em sequencia: \n";
    std::cin >> n1 >> n2;

    do 
    {
    std::cout << "Digite a opcao: (A) Soma / (B) Subtracao / (C) Multiplicacao / (D) Divisao \n";
    std::cin >> opcao;

    switch(opcao) 
    {
        case 'A': 
        {
            CalcularSoma(n1, n2);
            break;
        }
        case 'B':
        {
            CalcularSubtracao(n1, n2);
            break;
        }
        case 'C': 
        {
            CalcularMultiplicacao(n1, n2);
            break;
        }
        case 'D':
        {
            CalcularDivisao(n1, n2);
            break;
        }
        default: 
        {
            break;
        }
    }

    }while(opcao != 'A' && opcao != 'B' && opcao != 'C' && opcao != 'D'); // Evita de ter um input errado no std::cin >> opcao;
}
```
Mas, temos um porém:

`n1` continua com o mesmo valor, pois `a` só existe dentro da função

Da mesma forma que funções void's retornam nada, temos também funções int,float,char... que retornam o seu tipo

```cpp{0}
#include <iostream>

int CalcularSoma(int a, int b) 
{
    a += b;
    return a; // Precisamos usar o return no que queremos retornar
}

int CalcularSubtracao(int a, int b) 
{
    a -= b;
    return a;
}

int CalcularMultiplicacao(int a, int b) 
{
    a *= b;
    return a;
}

int CalcularDivisao(int a, int b) 
{
    a /= b;
    return a;
}

int main () 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    int n1, n2, resultado;
    char opcao;

    std::cout << "Digite dois numeros em sequencia: \n";
    std::cin >> n1 >> n2;

    do 
    {
    std::cout << "Digite a opcao: (A) Soma / (B) Subtracao / (C) Multiplicacao / (D) Divisao \n";
    std::cin >> opcao;

    switch(opcao) 
    {
        case 'A': 
        {
            resultado = CalcularSoma(n1, n2); // resultado recebe o retorno da função
            break;
        }
        case 'B':
        {
            resultado = CalcularSubtracao(n1, n2);
            break;
        }
        case 'C': 
        {
            resultado = CalcularMultiplicacao(n1, n2);
            break;
        }
        case 'D':
        {
            resultado = CalcularDivisao(n1, n2);
            break;
        }
        default: 
        {
            break;
        }
    }

    }while(opcao != 'A' && opcao != 'B' && opcao != 'C' && opcao != 'D'); // Evita de ter um input errado no std::cin >> opcao;

    std::cout << "O resultado e: " << resultado << std::endl;
}
```
:::

::: tip

Como você já deve ter notado, a função main retorna um inteiro e podemos explicitar isso
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

    std::cout << "Hello World" << std::endl;

    return 0;
}
```

Podemos retornar a função main para indicar que tudo ocorreu bem por conseguir chegar no final do escopo da função principal

Temos a biblioteca `<cstdlib>` que possui `EXIT_SUCCESS`, considerado uma convensão para programas em C++

```cpp{0}
#include <iostream>
#include <cstdlib>

int main () 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    std::cout << "Hello World" << std::endl;

    return EXIT_SUCCESS;
}
```
:::

::: warning

Como já falamos, recomendamos fortemente que leia a documentação das bibliotecas que vamos apresentar durante o curso, assim conseguindo extrair ao máximo o que a linguagem C++ fornece ao desenvolvedor.

:::