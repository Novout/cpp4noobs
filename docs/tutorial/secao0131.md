# 13.1 - Instâncias de Modelo de Função

Vamos dar uma olhada rápida por funções de modelo e como implementá-las em C++.

Acontece que o C ++ não compila diretamente a função de modelo. Em vez disso, no momento da compilação, quando o compilador encontra uma chamada para uma função de modelo, ele replica a função de modelo e substitui os parâmetros de tipo de modelo por tipos reais. A função com tipos reais é chamada de instância de modelo de função.

Vamos dar uma olhada em um exemplo desse processo. Primeiro, temos uma função de modelo: 

```cpp{0}
template <typename T> // Declaração do template
const T& max(const T& foo, const T& bar) // Argumentos
{
  return (foo > bar) ? foo : bar; // ternário retornando o maior valor
}
```

Ao compilar seu programa, o compilador encontra uma chamada para a função de modelo:

```cpp{1}
int i = max(2, 10); // calls max(int, int)
```

O compilador chama max(int, int) e replica o modelo da função e cria a instância do modelo max (int, int):

```cpp{0}
const int& max(const int &foo, const int &bar)
{
    return (foo > bar) ? foo : bar;
}
```

Ele irá identificar o tipo de retorno e dos parâmetros para criar a função

# Operadores, chamadas de função e modelos de função

As funções de modelo funcionarão com os tipos internos (por exemplo, char, int, double, etc ...) e classes, com uma ressalva. Quando o compilador compila a instância do modelo, ele a compila exatamente como uma função normal. Em uma função normal, todos os operadores ou chamadas de função que você usa com seus tipos devem ser definidos ou você receberá um erro do compilador. Da mesma forma, quaisquer operadores ou chamadas de função na função de modelo devem ser definidos para quaisquer tipos para os quais o modelo de função é instanciado. Vamos dar uma olhada nisso com mais detalhes.

Olhe o seguinte exemplo:

```cpp{0}
#include <iostream>
#include <string>
#include <memory>

template <typename T> // Declaração do template
const T& maior(const T& foo, const T& bar) // Argumentos
{
  return (foo > bar) ? foo : bar; // ternário retornando o maior valor
}

struct Funcionario 
{
    std::string m_nome;
    int m_idade;

    Funcionario(std::string nNome, int nIdade) 
    {
        this->m_nome = nNome;
        this->m_idade = nIdade;
    }
};


int main() 
{
  Funcionario *funcionario1 = new Funcionario("Joao", 18);
  Funcionario *funcionario2 = new Funcionario("Jose", 23);

  Funcionario *maior_idade = maior(funcionario1, funcionario2);

  std::cout << maior_idade->m_idade;

  delete funcionario1;
  delete funcionario2;
  delete maior_idade;
}
```

Esse exemplo funciona, por se tratar de struct's, MAIS CUIDADO! Se for utilizar classes,você irá ter que fazer overload de operador para o template entender a comparação.

Na seção de Orientação a Objetos, iremos deixar isso bem claro.

