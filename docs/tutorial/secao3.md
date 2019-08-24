# 3 - Primeiro Hello World

Vamos começar com o primeiro Hello World!

- 1 : Crie um projeto em sua IDE escolhida

- 2 : Digite o seguinte código:

```cpp{0}
#include <iostream>

int main ()
{
    std::cout << "Hello World" << std::endl;
}
```

- 3 : Compile e execute

- Pronto! Você fez o seu primeiro Hello World!

- Mas,como?

- A seguir, iremos explicar todos os conceitos por trás deste `Hello World`:

# Sequência

- O procedimento de código é de cima para baixo e com conteúdos em sequência, separados por `;`

- Será melhor explicado na seção de variáveis.

# Bibliotecas

```cpp{0}
#include <iostream>
```

* Uma biblioteca padrão é uma coleção de classes, funções e variáveis escritas na própria linguagem para facilitar o desenvolvimento de aplicações.

* Utilizando `#include <nome_da_biblioteca>` é possível chamar bibliotecas.

* Em termos simples, todo o conteúdo que está na localização da biblioteca é copiado e colado em apenas uma linha de código no seu projeto.

* Bibliotecas são incluidas sempre no começo do arquivo.

# Função main

```cpp{0}
int main() {}
```

- Cada programa C++ tem uma função principal que deve ser nomeada <strong>main</strong>.

- Todo o procedimento do seu código inicia-se nesta função.

- `{}` é o que chamamos de <strong>escopo</strong>, o que for declarado des de seu início `{` até seu fim `}` irá existir apenas dentro dele.

- Como `main` é uma função, precisamos colocar `()` após a declaração de seu nome.

- Os conceitos sobre o que é uma função será explicado na seção de Funções, por enquanto não se preocupe com isso.

- Vamos aprender a como manipular o nosso conteúdo para que ele continue existindo mesmo fora do escopo futuramente.

# Saída de Dados e Biblioteca `<iostream>`

```cpp{0}
    std::cout << "Hello World" << std::endl;
```

- `std::cout` (out de saída) pertence a biblioteca `<iostream>` significa que queremos exibir algo na tela, ou seja, uma saída de algum dado que passarmos para o `std::cout`.

- O operador << significa que estamos passando algo para 'a direção', no caso para o std::cout, sendo também um operador da `<iostream>`.

- Para passarmos um conjunto de caracteres(chamado de string) precisamos colocar entre "",no caso a string `Hello World`.
  Espaços `" "` também contam como caracteres.

- `std::endl` também pertence a `<iostream>` que executa a quebra de linha,ou seja, sempre quando chamada irá mandar todo o conteúdo sucessor para uma nova linha.

- Todo o final de linha de código precisamos colocar `;` para indicarmos pro compilador que pode executar o proximo conteúdo.

- `std::` é um espaço de nome para as bibliotecas padrões do C++, para acessarmos o seu conteúdo precisamos usar `std::` e entrar neste espaço de nome reservado `std`, com `::` indicando a entrada.

```cpp{0}
#include <iostream>

int main()
{
    std::cout << "A" << std::endl;
    std::cout << "B";
}
```

Irá ser exibido:

A

B

```cpp{0}
#include <iostream>

int main()
{
    std::cout << "A" << "B";
}
```

Irá ser exibido:
AB

- Algumas IDE's faz a quebra de linha automaticamente sem a necessidade do `std::endl`.

- Todos os conceitos passado será utilizado ao longo do curso, então não se assuste que com a prática estes conceitos serão facilmente fixados,e estaremos disponibilizando listas de exercícios com gabarito para melhor fixação.
