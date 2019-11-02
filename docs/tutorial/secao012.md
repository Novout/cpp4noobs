# 12 - Structs

Uma struct é um tipo que pode conter zero ou mais variáveis que são alocadas de uma forma ordenada.

O tamanho de uma struct depende do tamanho dos elementos que ela contem.

Normalmente o tamanho será o tamanho do maior elemento em bytes \* o número de elementos.

Usamos structs para agrupar valores ou para representar uma entidade.

O tipo dos elementos que uma struct contem não precisam ser o mesmo.

`struct NOME_DA_STRUCT { };`

```cpp{0}
#include <iostream>
#include <string>

struct Pessoa {
  std::string nome;
  int idade;
};

int main()
{
  /* Variáveis são declaradas da mesma forma que com tipos primitivos */
  Pessoa pessoa;

  /* Usamos . para acessar coisas que estão dentro de uma struct */
  pessoa.nome = "John doe";
  pessoa.idade = 30;

  std::cout << "A idade de " << pessoa.nome << " e " << pessoa.idade;
}
```

Structs podem conter funções, além de variáveis.

```cpp{0}
#include <iostream>
#include <string>

struct Pessoa {
  std::string nome;
  int idade;

  void apresentar() {
    std::cout << "Meu nome e " << nome << " e tenho " << idade << " anos";
  }
};

int main()
{
  Pessoa pessoa;
  pessoa.nome = "John doe";
  pessoa.idade = 30;

  pessoa.apresentar();
}
```

Structs possuem uma função especial que é chamada quando uma instância daquela struct é criada. Essa função é chamada de construtor, normalmente usada para dar valores para as variáveis que uma struct possui.

O construtor é uma função normal, exceto pelo fato de que não tem um tipo de retorno e só deve ser chamada uma vez de maneira automática.

Quando acessamos uma variável de uma struct, dentro dela mesmo, podemos usar `this` para deixar explicito que a quem tal variável pertence. Isso não é necessário na maioria dos casos, a não ser por preferência ou por um caso onde existe ambiguidade.

```cpp{0}
#include <iostream>
#include <string>

struct Pessoa {
  std::string nome;
  int idade;

  /* O construtor não precisa de um tipo de retorno
   *
   * Usando this para deixar explicito que estamos copiando o valor das variáveis nome e idade
   * passadas nos construtor, para as variáveis nome e idade da instância da struct.
   **/
  Pessoa(std::string nome, int idade) {
    this->nome = nome;
    this->idade = idade;
  }

  void apresentar() {
    std::cout << "Meu nome e " << nome << " e tenho " << idade << " anos";
  }
};

int main()
{
  Pessoa pessoa("John Doe", 30);

  pessoa.apresentar();
}
```

Caso nenhum construtor seja declarado, o compilador irá criar um construtor vazio.

Por exemplo:

```cpp{0}
#include <iostream>
#include <string>

struct Pessoa {
  std::string nome;
  int idade;

  /* Criado pelo compilador */
  Pessoa() {}

  void apresentar() {
    std::cout << "Meu nome e " << nome << " e tenho " << idade << " anos";
  }
};

int main()
{
  Pessoa pessoa;
}
```

Podemos ter mais de um construtor, com cada um deles fazendo uma coisa diferente.

```cpp{0}
#include <iostream>
#include <string>

struct Pessoa {
  std::string nome;
  int idade;

  /* Primeiro */
  Pessoa(std::string nome, int idade) {
    this->nome = nome;
    this->idade = idade;
  }

  /* Segundo */
  Pessoa(std::string nome) {
    this->nome = nome;
    this->idade = -1 // Vamos considerar -1 como desconhecido
  }

  /* Terceiro */
  Pessoa(int idade) {
    this->nome = "desconhecido";
    this->idade = idade;
  }

  void apresentar() {
    std::cout << "Meu nome e " << nome << " e tenho " << idade << " anos";
  }
};

int main()
{
  Pessoa pessoa("John Doe", 30); // Chama o primeiro construtor

  Pessoa pessoa("John Doe"); // Chama o segundo construtor

  Pessoa pessoa(30); // Chama o teceiro construtor
}
```
