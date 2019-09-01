# 11.2 - Smart Pointers

Na seção 11, vimos que um ponteiro é um tipo que pode conter um endereço de memória.

Infelizmente quando se aprende ponteiros, a maioria dos cursos não mostra a forma correta de usá-los.

Como vimos na seção 11, podemos alocar um espaço de memória usando a keyword new e sempre que à usamos,
precisamos usar a keyword delete para liberar tal espaço de memória.

```cpp{0}
#include <iostream>

int main()
{
  /* Alocando 4 bytes de memória e salvando o endereço dessa memória na variável a */
  int *a = new int;

  /* De-referênciando o endereço que está salvo na variável a e atribuindo o valor 10 */
  *a = 10;

  /** De-referênciando o endereço que está salvo na variável a e,
    * mostrando o valor que está salvo nesse endereço
   */
  std::cout << *a << '\n; // 10

  /* Liberando a memória que foi alocada */
  delete a;
}
```

Existem casos onde essa é a forma correta de lidar com ponteiros, mas uma boa regra para se seguir é a seguinte:

Nunca use new e delete, sempre que possível, use smart pointers.

## O problema

Conforme a complexidade de um programa aumenta, memory leaks(Vazamentos de memória) começam a aparecer.

O que é memory leak? Veja a seguinte situação:

```cpp{0}
#include <iostream>

void memory_leak() {
  /* Alocando 4 bytes de memória e salvando o endereço dessa memória na variável a */
  int *a = new int;

  /* De-referênciando o endereço que está salvo na variável a e atribuindo o valor 10 */
  *a = 10;

  /** De-referênciando o endereço que está salvo na variável a e,
    * mostrando o valor que está salvo nesse endereço
   */
  std::cout << *a << '\n; // 10

  /**
    * Aqui deveriamos usar a keyword delete para liberar a memória que foi alocada.
    * Mas por algum motivo, esquecemos de fazer isso.
    * Assim que a variável a sair do escopo da função, não teremos mais como acessá-la,
    * sendo assim, não será possível liberar a memória.
  */
}

int main()
{
  for(int i = 0; i < 1000; ++i){
    memory_leak();
  }
}
```

Isso é um memory leak, já percebeu que certos programas consumem mais e mais memória
depois de certo tempo de execução? Esse pode ser um dos motivos.

## A solução

Felizmente, existem soluções para que você nunca tenha que se preocupar com a liberação de memória alocada.

Uma dessas soluções se chama Smart Pointers.

O que são:

Smart pointers são ponteiros, dentro de uma estrutura que é responsável por liberar a memória
alocada assim que a variável sair do escopo.

Quem são:

std::unique_ptr</br>
std::shared_ptr</br>
std::weak_ptr

Para usá-los precisamos incluir o header `<memory>`

Usando std::unique_ptr

Syntax para criar um std::unique_ptr

Ao invés de usar new TIPO, chamamos a função std::make_unique\<TIPO\>() para criar um ponteiro.

```cpp{0}
#include <iostream>
#include <memory>

void no_memory_leak()
{
  /**
    * Da mesma forma que um ponteiro aloca 4 bytes de memória para o tipo int,
    * um unique_ptr também irá alocar 4 bytes.
  */
  std::unique_ptr<int> a = std::make_unique<int>();

  /** Embora smart pointers sejam estruturas por volta de um ponteiro, podemos tratá-los
    * como se fossem ponteiros normais, na maior parte dos casos.
    * Uma das diferenças é que não precisamos deletá-los, pois,
    * são deletados automaticamente assim que saem do escopo em que foram criados.
  */
  *a = 10;

  std::cout << *a << '\n'; // 10;

  /* Smart pointers não precisam ser deletados manualmente */
}

int main()
{
  for(int i = 0; i < 1000; ++i){
    no_memory_leak();
  }
}
```

Usando std::shared_ptr

Syntax para criar um std::shared_ptr

Ao invés de usar new TIPO, chamamos a função std::make_shared\<TIPO\>() para criar um ponteiro.

```cpp{0}
#include <iostream>
#include <memory>

void no_memory_leak()
{
  /* Criando um std::shared_ptr do tipo float */
  std::shared_ptr<int> a = std::shared<float>();

  *a = 2.71828;

  std::cout << *a << '\n'; // 2.71828;

  /* Smart pointers não precisam ser deletados manualmente */
}

int main()
{
  for(int i = 0; i < 1000; ++i){
    no_memory_leak();
  }
}
```

Usando std::weak_ptr

Syntax para criar um std::weak_ptr

Ao invés de usar new TIPO, chamamos a função std::make_weak\<TIPO\>() para criar um ponteiro.

```cpp{0}
#include <iostream>
#include <memory>

void no_memory_leak(std::weak_ptr<float> pointer)
{
  /* Antes de de-referênciar um std::weak_ptr precisamos transforma-lo em um std::shared_ptr */
  std::cout << *std::shared_ptr<float>(pointer) << '\n'; // 2.71828;

  /* Smart pointers não precisam ser deletados manualmente */
}

int main()
{
  std::shared_ptr<float> a = std::make_shared<float>(2.71828);

  for (int i = 0; i < 1000; ++i)
  {
    no_memory_leak(a);
  }
}
```

# Diferença entre std::unique_ptr, std::shared_ptr e std::weak_ptr

std::UNIQUE_ptr como o nome diz, é único.

Um unique_ptr não pode ser copiado.

```cpp{0}
#include <memory>

int main()
{
  /* Criando um unique_ptr do tipo int com o valor 10 */
  std::unique_ptr<int> a = std::make_unique<int>(10);

  std::unique_ptr<int> b = a; // erro: call to deleted constructor of std::unique_ptr<int>
}
```

Devemos usar unique_ptr quando sabemos que uma entidade irá pertencer somente, e somente a uma
outra entidade.

O unique_ptr é deletado assim que a entidade que o possui sair do escopo.

std::SHARED_ptr como o nome diz, pode ser compartilhado.

Ao contrário do unique_ptr, um shared_ptr pode ser copiado.

```cpp{0}
#include <memory>

int main()
{
  /* Criando um shared_ptr do tipo float com o valor 1.30357 */
  std::shared_ptr<float> a = std::make_shared<float>(1.30357);

  std::shared_ptr<float> b = a; // sem erros
}
```

Devemos usar shared_ptr quando sabemos que uma entidade irá pertencer a mais
de uma entidade ao mesmo tempo.

O shared_ptr é deletado assim que todas a entidades que o possuem sairem do escopo.

std::WEAK_ptr

Um weak_ptr funciona de forma parecida com o shared_ptr.

```cpp{0}
#include <memory>

int main()
{
   /* Criando um shared_ptr do tipo int com o valor 10 */
   std::shared_ptr<int> a = std::make_shared<int>(10);

   /* Criando um weak_ptr que aponta pra um shared_ptr do tipo int */
   std::weak_ptr<int> b = a;

   /* Copiando um weak_ptr */
   std::weak_ptr<int> c = b;

   /* Transformando um weak_ptr em shared_ptr para poder de-referência-lo. */
   std::cout << *std::shared_ptr<int>(c) << '\n';
}
```

Ao contrário do shared_ptr, um weak_ptr não implica que uma entidade possui um ponteiro,
ele serve somente para o uso temporário de um shared_ptr, quando temos um algo que
deve ser acessado somente se existir e não nos importamos se aquela entidade deixar de existir
a qualquer momento.
