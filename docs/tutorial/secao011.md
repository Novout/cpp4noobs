# 11 - Introdução a Ponteiros

Na seção 5, vimos que uma variável é um nome para um espaço de memória que contem um valor. quando nosso programa instancia uma variável, um endereço de memória livre eh automaticamente interligado a variável, e qualquer valor que definimos para a variavel eh armazenado nesse endereço de memória.

Por exemplo:

```cpp{0}
int x;
```

Quando esta declaração é executada pela CPU, uma parte da memória da RAM será atribuida a variavel x. Por exemplo, digamos que a variável x tenha a localização de memória 140. Sempre que o programa vir a variável x em uma expressão ou instrução, ela saberá que deve procurar no local da memória 140 para obter o valor.

O bom das variáveis ​​é que não precisamos nos preocupar com o endereço de memória específico atribuído. Nós apenas nos referimos à variável por seu identificador dado, e o compilador traduz este nome para o endereço de memória apropriadamente designado.

No entanto, essa abordagem tem algumas limitações, que discutiremos nesta e nas próximas lições.

## Operador de endereço - (&)

O operador de endereço (&) nos permite ver qual endereço de memória esta atribuído a uma variável. Isso fica mais claro a diante:

```cpp{0}
#include <iostream>

int main()
{
    int x = 5;
    std::cout << x << '\n'; // exibe o valor da variavel x
    std::cout << &x << '\n'; // exibe o endereco de memória da variavel x

    return 0;
}
```

O programa acima imprimiu:

```
5
0027FEA0
```

## Operador de de-referência - (\*)

Obter o endereço de uma variável não é muito útil por si só.

O operador de remoção de referência (\*) nos permite acessar o valor em um determinado endereço:

```cpp{0}
#include <iostream>

int main()
{
    int x = 5;
    std::cout << x << '\n'; // exibe o valor da variavel x
    std::cout << &x << '\n'; // exibe o endereco de memória da variavel x
    std::cout << *(&x) << '\n'; // exibe o valor presente no endereco de memória davariavel x

    return 0;
}
```

O programa acima imprimiu:

```
5
0027FEA0
5
```

## Ponteiros

Com o operador de endereço e os operadores de referência, podemos falar sobre ponteiros. Um ponteiro é uma variável que contém um endereço de memória como seu valor.

Os ponteiros costumam ser vistos como uma das partes mais confusas da linguagem C++, mas são surpreendentemente simples quando explicados corretamente.

### Declarando um ponteiro

As variáveis ​​de ponteiro são declaradas como variáveis ​​normais, apenas com um asterisco entre o tipo de dados e o nome da variável. Note que este asterisco não é um operador de de-referência. Faz parte da sintaxe de declaração do ponteiro.

```cpp{0}
int *iPtr; // um ponteiro para um valor de tipo int
double *dPtr; // um ponteiro para um valor do tipo double

int *iPtr4, *iPtr5; // declarar mais de um ponteiro em uma linha
```

### Definindo um valor para um ponteiro

Como os ponteiros só contêm endereços, quando atribuímos um valor a um ponteiro, esse valor precisa ser um endereço. Uma das coisas mais comuns a fazer com ponteiros é que eles mantenham o endereço de uma variável diferente.

Para obter o endereço de uma variável, usamos operador de endereço (&) que vimos anteriormente:

```cpp{0}
int value = 5;
int *ptr = &value; // inicializa ptr com o endereço de memória da variavel value
```

Para demonstrar que ptr tem o mesmo endereço de memória de value use o codigo a seguir:

```cpp{0}
#include <iostream>

int main()
{
    int value = 5;
    int *ptr = &value; // inicializa ptr com o endereço de memória da variavel value

    std::cout << &value << '\n'; // exibe o edereco da variavel value
    std::cout << ptr << '\n'; // exibe o endereco que ptr esta armazenando

    return 0;
}
```

O programa acima imprimiu:

```
0012FF7C
0012FF7C
```

### De-referênciando ponteiros

Quando temos uma variável de ponteiro apontando para algo, a outra coisa comum a fazer com ela é cancelar o ponteiro para obter o valor do que está apontando. Um ponteiro de-referênciado avalia o conteúdo do endereço para o qual está apontando.

```cpp{0}
int value = 5;
std::cout << &value; // exibe o endereco de value
std::cout << value; // exibe o conteudo

int *ptr = &value; // ptr aponta para value
std::cout << ptr; // exibe o conteudo de ptr, que eh o endereco de value
std::cout << *ptr; // de-referência ptr, retornando o valor contido no endereco
```

O programa acima imprimiu:

```
0012FF7C
5
0012FF7C
5
```

### Mais sobre ponteiros

Essa sessão tem o objetivo de introduzir os ponteiros, por isso não houve nenhum conceito mais complexo envolvendo eles.

As aplicações, casos de uso, vantagens e desvantagens da utilização de ponteiros são tratadas em sessões adiante.
