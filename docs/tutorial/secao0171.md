# 17.1 - Classes

Embora o C ++ forneça vários tipos de dados fundamentais (por exemplo, char, int, long, float, double, etc ...) que geralmente são suficientes para resolver problemas relativamente simples, pode ser difícil resolver problemas complexos usando apenas esses tipos. Um dos recursos mais úteis do C ++ é a capacidade de definir seus próprios tipos de dados que melhor correspondem ao problema que está sendo resolvido. Você já viu como tipos e estruturas enumerados podem ser usados para criar seus próprios tipos de dados personalizados.

No mundo da programação orientada a objetos, geralmente queremos que nossos tipos não apenas mantenham dados, mas também forneçam funções que funcionem com os dados. Em C ++, isso geralmente é feito através da palavra-chave da classe. O uso da palavra-chave class define um novo tipo definido pelo usuário chamado class.

No C ++, classes e estruturas são essencialmente as mesmas. De fato, a seguinte estrutura e classe são efetivamente idênticas:

```cpp{0}
struct FuncionarioStruct
{
    std::string m_nome;
    int m_idade;
};
 
class FuncionarioClasse
{
public:
    std::string m_nome;
    int m_idade;
};
```

# Keyword public, protected e private

Note a utilização do `public`, quer dizer que tanto membros da classe(ou seja, funções que estão dentro da classe) e membros externos podem acessar esta variável.

Por exemplo:

```cpp{0}
struct FuncionarioStruct
{
    std::string m_nome;
    int m_idade;
};

int main() 
{
  FuncionarioStruct f;
  f.m_nome = "João";
}
```

É possivel modificar diretamente o nome pois struct's não possuem keyword de acesso, e por padrão utilizam `public`

# Setters e Getters

Então para acessar uma variável privada, precisamos de funções na classe para alterar ou retornar esses valores,dando o exemplo:

```cpp{0}
#include <iostream>
#include <memory>

// Requer flag de C++17

namespace FUNCIONARIO // Namespace que irá conter a classe Atendente
{
class Atendente
{
private: // Keyword private
    std::string m_nome;

public:                          // Keyword public
    Atendente(std::string nNome) // Construtor da classe, recebendo um parâmetro nNome
    {
        this->m_nome = nNome;
    }

    ~Atendente() // Destrutor da Classe
    {
    }

    void setNome(std::string nNome) // Setter do nome
    {
        this->m_nome = nNome;
    }

    const std::string getNome() const // Getter do nome
    {
        return this->m_nome;
    }
};
} // namespace FUNCIONARIO

auto main() -> int
{
    auto ul = std::make_unique<FUNCIONARIO::Atendente>("Jose"); // Instanciação da classe Atendente

    std::cout << ul->getNome() << std::endl; // Exibe Jose

    ul->setNome("Claudio"); // Seta o m_nome Claudio

    std::cout << ul->getNome() << std::endl; // Exibe Claudio
}
```

Demos um exemplo de utilização de namespace, agrupando outras variantes de funcionarios possíveis.

Mas, várias classes diferentes de tipos de funcionário terão atributos parecidos e terá uma repetição de código.

Para isso, podemos `herdar` classes para evitar repetição.

A keyword `protected` serve para esse caso, pois classes filhas, ou seja, que herdam de uma classe mãe podem acessar seus métodos, mas ainda sim conteúdos de fora não podem acessar seus métodos.

Exemplo: 

```cpp{0}
class Funcionario
{
protected: // Keyword private
    std::string m_nome;

public:                            // Keyword public
    Funcionario(std::string nNome) // Construtor da classe, recebendo um parâmetro nNome
    {
        this->m_nome = nNome;
    }

    Funcionario()
    {
        this->m_nome = "";
    }

    ~Funcionario() // Destrutor da Classe
    {
    }

    void setNome(std::string nNome) // Setter do nome
    {
        this->m_nome = nNome;
    }

    const std::string getNome() const // Getter do nome
    {
        return this->m_nome;
    }
};
class Atendente : public Funcionario // Herdando funcionario
{
private: // Keyword private
    std::string m_turno;

public:                                              // Keyword public
    Atendente(std::string nNome, std::string nTurno) // Construtor da classe, recebendo um parâmetro nNome
    {
        this->m_nome = nNome; // Se m_nome fosse privado, teria que utilizar typedef
        this->m_turno = m_turno;
    }

    ~Atendente() // Destrutor da Classe
    {
    }

    void setTurno(std::string nTurno) // Setter do turno
    {
        this->m_turno = nTurno;
    }

    const std::string getTurno() const // Getter do turno
    {
        return this->m_turno;
    }
}; // namespace FUNCIONARIO

auto main() -> int
{
    auto ul = std::make_unique<Atendente>("Jose", "Tarde");

    std::cout << ul->getNome() << std::endl; // Exibe Jose

    ul->setTurno("Noite"); // Seta o turno Noite

    std::cout << ul->getTurno() << std::endl; // Exibe Noite

    return EXIT_SUCCESS;
}
```

Getters e Setters possuem padronização, da mesma forma mostrado anteriormente:

```cpp{0}
class Date
{
private:
    int m_month;
    int m_day;
    int m_year;
 
public:
    int getMonth() { return m_month; } // getter do mes
    const void setMonth(int month) const { m_month = month; } // setter do mes
 
    int getDay() { return m_day; } // getter do dia
    const void setDay(int day) const { m_day = day; } // setter do dia
 
    int getYear() { return m_year; } // getter do ano
    const void setYear(int year) const { m_year = year; } // setter do ano
};
```

Os getters devem fornecer acesso "somente leitura" aos dados. Portanto, a melhor prática é que eles retornem por valor ou referência const (não por referência não const). Um getter que retorna uma referência não-const permitiria ao chamador modificar o objeto real que está sendo referenciado, o que viola a natureza somente leitura do getter (e viola o encapsulamento).

Prática recomendada: Getters devem retornar por valor ou referência const