# 6.1 - Loops

Loops em C++ são condições que irão ser repetidas até que uma condição retorne `false`

Em C++,temos três loop's padrões: `while` (enquanto), `do while` (faz ... enquanto) e for(for é uma versão com recursos extras do `while`,iremos falar sobre o `for` na seção de vetores).

Exemplo:

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

    int i = 0;

    while(i < 10) // Enquanto i for menor que 10, ele irá repetir este escopo
    {
        std::cout << i << " "; // Exibição de i com um espaçamento
        i++; // A cada repetição, irá iterar 1 em i,ou seja: 0 1 2 3 4 5.. até a condição do while retornar falso
    }

    std::cout << std::endl << "O numero final de i e: " << i << std::endl;

    // Exibição: 0 1 2 3 4 5 6 7 8 9
    //           O numero final de i e: 10

    // Após a exibição de 9, i é iterado e se torna 10, mas 10 < 10 é uma condição falsa, então o loop acaba saindo de seu escopo.
}
```

# Do while

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

    int i { 0 } , j = { 0 };
    std::string st = "Oi!";

    do // Faz
    {
        std::cout << "i: "<< i++ << " / j: " << ++j << std::endl; // Interaçoes
    }while(i < 10);// Enquanto

    std::cout << std::endl; // Até aqui tem o mesmo efeito do que se utilizando apenas o while

    do 
    {
        std::cout << st << std::endl;
    }while(st == "Ola!"); // Neste caso, st ainda sim será mostrado pois está anteriormente a condição, e o loop apenas retorna falso na condição.
}
```

Com estes conhecimentos, já podemos fazer algoritmos mais rebuscado,como por exemplo:

Construir um programa que leia o peso e o sexo masculino e feminino, de um conjunto de várias pessoas. O usuário irá informar a quantidade exata de pessoas. Calcular e escrever o menor peso do grupo de pessoas, maior peso dos homens e média de peso das mulheres

```cpp{0}
#include <iostream>

int main () 
{
    int peso, menor_peso, maior_peso_homens, media_peso_mulheres = 0, quantidade_mulheres = 0;
    std::string sexo;

    int pessoas;

    int i = 0;

    std::cout << "Digite o numero de pessoas: \n";
    std::cin >> pessoas;

    while(i < pessoas) 
    {
        std::cout << "Digite o peso da pessoa " << (i + 1) << ":\n";
        std::cin >> peso;

        std::cout << "Digite o sexo da pessoa " << (i + 1) << ":\n";

        std::cin.ignore();

        std::getline(std::cin, sexo);

        if(menor_peso > peso || i == 0) // (|| i == 0) Para sempre entrar de primeira
        {
            menor_peso = peso;
        }

        if((maior_peso_homens < peso && sexo == "masculino") || i == 0) // Primeiramente ira verificar a condição entre (), e depois o || i == 0
        {
            maior_peso_homens = peso;
        }

        if(sexo == "feminino") 
        {
            media_peso_mulheres += peso; // Somar todos os pesos de mulheres
            quantidade_mulheres++; // Quantas mulheres tem
        }

        i++; // Iteracao necessaria
    }

    media_peso_mulheres /= quantidade_mulheres; // Dividir pela quantidade de mulheres, lembrado que fora do loop pois precisamos de toda a entrada necessária para calcular a media.

    std::cout << "O menor peso e: " <<  menor_peso << std::endl;
    std::cout << "O maior peso entre homens e: " <<  menor_peso << std::endl;
    std::cout << "A media de peso entre mulheres e: " <<  media_peso_mulheres << std::endl;
}
```

Para não precisar usar (|| i == 0) você poderia inicializar o menor_peso com 999999 e maior_peso_homens com 0, por exemplo.
