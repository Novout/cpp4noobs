# 6 - Condições

Agora iremos falar sobre condições,mas iremos te mostrar a tabela de comparação para se utilizar em conjunto com condições.

Operadores de comparação: 

| Operadores   |      Descrição        |                  Exemplos                    |
| ------------ | --------------------- | -------------------------------------------- |
| `==`         |   Igual a             |      4 == 4  `<true>`   4 == 5 `<false>`     |
| `!=`         |   Diferente de        |      4 != 4  `<false>`  4 != 5  `<true>`     |
| `>`          |   Maior que           |      4 > 5   `<false>`  4 > 3   `<true>`     |
| `<`          |   Menor que           |      4 < 5   `<true>`   4 < 3  `<false>`     |
| `>=`         |   Maior ou igual a    |      5 >= 5  `<true>`   6 >= 5  `<true>`     |
| `<=`         |   Menor ou igual a    |      6 <= 5  `<false>`  6 <= 6  `<true>`     |
| `&&`         |   E lógico            |2 < 5 `<true>` `&&` 2 <= 4  `<true>`  = `<true>`|
| `||`         |   Ou lógico           |2 < 5 `<true>` `||` 5 <= 4  `<false>` = `<true>`|

Condições são comparações que retornam `verdadeiro` ou `falso` para executar ou não um `bloco(escopo)`.

`if` (se) `else if` (se senão) `else` (senão)

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

    char sexo = 'M';    // Declaramos a variável `sexo` do tipo `char` e inicializamos com o caractere `M`

    // Queremos comparar para saber se `sexo` é masculino(M) ou feminino(F)
    if(sexo == 'M')     // Verificando se sexo é igual ao caractere M
    {
        // Se a comparação for `verdadeira`, que é o nosso caso, entrará neste escopo
        std::cout << sexo << " e masculino" << std::endl;
    } 
    // if, else if e else são uma sequência, então assim que o escopo de uma condição acabar podemos colocar em sequência
    else // Como se tem apenas duas opções `M` e `F`, não precisamos usar o `else if`, em caso de precisar fazer outras comparações em uma mesma cadeia, teríamos que usar `else if` e `else` apenas para a última opção que não necessita de comparação
    {
        std::cout << sexo << " e feminino" << std::endl;
    }
}


```

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

    float nota; // Declaramos a variável `nota` do tipo `float`

    std::cout << "Digite a sua nota: " << std::endl;// Saida de dados
    std::cin >> nota;// Entrada de dados

    if(nota >= 6.0f)  // Se a nota for maior ou igual a 6, o aluno está aprovado
    {
        std::cout << "Aprovado!" << std::endl;
    } else if(nota >= 5.0f) // Se a nota do aluno for maior ou igual a 5 poderá fazer a prova de recuperação (Não precisamos utilizar nota < 6.0f neste caso pois o programa irá ler essa condição APENAS se a primeira comparação retornar false)
    {
        std::cout << "Prova de recuperacao!" << std::endl;
    } else { // Se a nota do aluno for abaixo de 5, ele esta reprovado
        std::cout << "Reprovado!" << std::endl;
    }
}
```

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

    /* 
     * Poderíamos ter utilizado `else if` na ultima condição, mas não tem 
     * necessidade por conta que se o aluno não tem nota acima de 5,
     * todo outro tipo de resultado é a reprovação.
     */
    float nota; 

    std::cout << "Digite a sua nota: " << std::endl;
    std::cin >> nota;

    if(nota >= 6.0f)  
    {
        std::cout << "Aprovado!" << std::endl;
    } else if(nota >= 5.0f) 
    {
        std::cout << "Prova de recuperacao!" << std::endl;
    } else if(nota < 5.0f) { 
        std::cout << "Reprovado!" << std::endl;
    }
}

```

# Operadores Lógicos

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

    std::string nome;

    std::cout << "Digite seu nome: " << std::endl;
    std::getline(std::cin, nome); // Não tem necessidade do std::cin.ignore() pois não tem entrada de dados de outro tipo anteriormente.

    if(nome.size() < 0) // Verificando se a quantidade de caracteres for menor que 0,ou seja, ERRO
        std::cout << "ERRO!" << std::endl; // Quando temos apenas uma linha, podemos omitir o escopo
    else if(nome.size() >= 0 && nome.size() <= 5) // Quantidade de caracteres maior que 0 E menor que 5
        std::cout << "Existe entre 0 e 5 caracteres nesta string" << std::endl;
    else if(nome.size() > 5 && nome.size() <= 10)
        std::cout << "Existe entre 6 e 10 caracteres nesta string" << std::endl;
    else 
        std::cout << "Existe mais de 10 caracteres nesta string" << std::endl;

    // std::string é uma classe e possui funções próprias para manipular,no caso o size(), na seção de funções você irá entender este conceito.
}
```

# Switch

Para facilitar a utilização de `if/else if/else` temos o `switch`, que executa um certo bloco dependendo da `condição no switch`

A utlização do `switch` e totalmente opcional e é útil apenas para certos casos
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
     
    int numero1, numero2, resultado;
    char opcao;

    std::cout << "Digite um numero: \n";
    std::cin >> numero1;

    std::cout << "Digite um segundo numero: \n";
    std::cin >> numero2;

    std::cout << "Digite uma opção: (A) Soma / (B) Subtracao / (C) Multiplicacao / (D) Divisao \n";
    std::cin >> opcao;

    switch(opcao) // Switch de opcao
    {
        case 'A': // condição: true = executa o bloco / false = pula para o próximo caso e seu bloco
        {
            resultado = numero1 + numero2;
            break; // Em switch, precisamos utilizar o break para nao carregar as outras condicoes em sequencia,falaremos mais sobre o break na secao de loop
        }
        case 'B': 
        {
            resultado = numero1 - numero2;
            break;
        }
        case 'C': 
        {
            resultado = numero1 * numero2;
            break;
        }
        case 'D': 
        {
            resultado = numero1 / numero2;
            break;
        }
    }

    std::cout << "O resultado da operacao e: " << resultado << std::endl;
}
```