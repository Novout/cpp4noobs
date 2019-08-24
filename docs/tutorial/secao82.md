# 8.2 - Argumentos da função main

Também podemos passar argumentos para a função main, como vimos ela é uma função como qualquer outra

Temos várias formas de receber argumentos, mas o tipo mais utilizado é `<int argc, char *argv[]>`

```cpp{0}
#include <iostream>

int main(int argc,char *argv[]) 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    // Argc é a quantidade de argumentos recebidos, argc já inicia com um argumento, o proprio nome do .exe

    // Argv são os nomes dos argumentos em si, em um vetor de string's

    std::cout << argc << std::endl; // 1 como padrão

    std::cout << argv[0] << std::endl; // argv[0] sempre tera o nome do .exe
}

```

Para passar argumentos para ela, precisa abrir o .exe pelo cmd, e na sua frente os argumentos, separados por espaço

`nome_do_programa.exe argumento1 argumento2 ...`

Assim podemos modificar a forma de execução do nosso códico

```cpp{0}
#include <iostream>
#include <cstdlib>

int main(int argc, char **argv) 
{
    /*|--------------------------------------|
     *|                                      |
     *|           He4rt Developers           |
     *|                                      |
     *|--------------------------------------|
     */

    int a = 5, b = 2;

    if(argc > 1) // Recebeu argumentos além da inicial
    {
        std::cout << (a + b) << std::endl;
    }
    else 
    {
        std::cout << a << " " << b << std::endl;
    }

    return EXIT_SUCCESS;
}
```

::: danger

Dependendo de sua IDE você pode ter problemas na hora de comparar argumentos da função main, recomendamos a utilização do <a href="https://github.com/KoltesDigital/cli.cpp" target="_blank" rel="noreferrer">cli.cpp</a>

:::