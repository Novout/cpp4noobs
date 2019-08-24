# 11 - Ponteiros

Na seção 5, vimos que uma variável eh um nome para um espaço de memoria que contem um valor. quando nosso programa instancia uma variável, um endereço de memoria livre eh automaticamente interligado a variável, e qualquer valor que definimos para a variavel eh armazenado nesse endereço de memoria.

Por exemplo:
```cpp{0}
int x;
```

Quando esta declaração é executada pela CPU, uma parte da memória da RAM será atribuida a variavel x. Por exemplo, digamos que a variável x tenha a localização de memória 140. Sempre que o programa vir a variável x em uma expressão ou instrução, ela saberá que deve procurar no local da memória 140 para obter o valor.

O bom das variáveis ​​é que não precisamos nos preocupar com o endereço de memória específico atribuído. Nós apenas nos referimos à variável por seu identificador dado, e o compilador traduz este nome para o endereço de memória apropriadamente designado.

No entanto, essa abordagem tem algumas limitações, que discutiremos nesta e nas próximas lições.

## Operador de endereço - (&)

O operador de endereço (&) nos permite ver qual endereço de memoria esta atribuído a uma variável. Isso fica mais claro a diante:

```cpp{0}
#include <iostream>
 
int main()
{
    int x = 5;
    std::cout << x << '\n'; // exibe o valor da variavel x
    std::cout << &x << '\n'; // exibe o endereco de memoria da variavel x
 
    return 0;
}
```

O programa acima imprimiu:
```
5
0027FEA0
```

## Operador de de-referência - (*)

Obter o endereço de uma variável não é muito útil por si só.

O operador de remoção de referência (*) nos permite acessar o valor em um determinado endereço:

```cpp{0}
#include <iostream>
 
int main()
{
    int x = 5;
    std::cout << x << '\n'; // exibe o valor da variavel x
    std::cout << &x << '\n'; // exibe o endereco de memoria da variavel x
    std::cout << *(&x) << '\n'; // exibe o valor presente no endereco de memoria davariavel x
 
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