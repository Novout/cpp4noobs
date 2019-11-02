# 17.2 - Inicialização de Construtores

Ao escrever uma classe que possui vários construtores (que é a maioria deles), ter que especificar valores padrão para todos os membros em cada construtor resulta em código redundante. Se você atualizar o valor padrão para um membro, precisará tocar em cada construtor.

A partir do C ++ 11, é possível atribuir diretamente às variáveis normais dos membros da classe (aquelas que não usam a palavra-chave estática) um valor padrão de inicialização:

```cpp{0}
class Retangulo
{
private:
    double m_altura{ 1.0 }; 
    double m_largura{ 1.0 }; 
 
public:
    Retangulo()
    {
        // O Construtor padrão ira inicializar com os valores colocar acima nas variaveis
    }
 
    void print()
    {
        std::cout << "altura: " << m_altura << ", largura: " << m_largura << '\n';
    }
};
 
auto main() -> int
{
    Retangulo r{}; // x.m_altura = 1.0, x.m_largura = 1.0
    r.print();
 
    return 0;
}
```

A inicialização de membro não estático (também chamada de inicializadores de membro da classe) fornece valores padrão para suas variáveis de membro que seus construtores usarão se os construtores não fornecerem valores de inicialização para os próprios membros (por meio da lista de inicialização de membros).

No entanto, observe que os construtores ainda determinam que tipo de objetos podem ser criados. 

Então se não tiver construtor padrão, não é possivel fazer isso.

Se um valor de inicialização padrão for fornecido e o construtor inicializar o membro por meio da lista de inicializadores de membros, a lista de inicializadores de membros terá precedência. O exemplo a seguir mostra isso:

```cpp{0}
class Retangulo
{
private:
    double m_altura{ 1.0 };
    double m_largura{ 1.0 };
 
public:
 
    Retangulo(double altura, double largura)
        : m_altura{ altura },
          m_largura{ largura }
    {
        // m_length and m_width are initialized by the constructor (the default values aren't used)
    }
 
    void print()
    {
        std::cout << "altura: " << m_altura << ", largura: " << m_largura << '\n';
    }
 
};
 
int main()
{
    Retangulo r{ 2.0, 3.0 };
    r.print();
 
    return 0;
}
```

```cpp{0}
#include <string>
#include <iostream>
 
class Employee
{
private:
    int m_id;
    std::string m_name;
 
public:
    Employee(int id=0, const std::string &name=""):
        m_id(id), m_name(name)
    {
        std::cout << "Employee " << m_name << " criado.\n";
    }
 
    // Use a delegating constructors to minimize redundant code
    Employee(const std::string &name) : Employee(0, name) { }
}
```

# Construtores com funcionalidade sobreposta

Quando você instancia um novo objeto, o construtor do objeto é chamado implicitamente pelo compilador C ++. Não é incomum ter uma classe com vários construtores com funcionalidade sobreposta.

# Delegando construtores em C++11 >

A partir do C ++ 11, os construtores agora podem chamar outros construtores. Esse processo é chamado de delegação de construtores (ou encadeamento de construtores).

Para que um construtor chame outro, basta chamar o construtor na lista de inicializadores de membros. Este é um caso em que chamar outro construtor diretamente é aceitável.

Exemplo:

```cpp{0}
#include <string>
#include <iostream>
 
class Empregado
{
private:
    int m_id;
    std::string m_nome;
 
public:
    Empregado(int id=0, const std::string &nome=""):
        m_id(id), m_nome(nome)
    {
        std::cout << "Empregado " << m_nome << " criado.\n";
    }
 
    // Delegando construtor 
    Empregado(const std::string &nome) : Empregado(0, nome) { }
```