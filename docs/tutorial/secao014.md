# 14 - Stack e Heap

A memória que um programa usa é normalmente dividida em algumas áreas diferentes, chamadas segmentos:

- O segmento de código (também chamado de segmento de texto), onde o programa compilado fica na memória. O segmento de código normalmente é somente leitura.
- O segmento bss (também chamado de segmento de dados não inicializado), onde variáveis globais e estáticas inicializadas com zero são armazenadas.
- O segmento de dados (também chamado de segmento de dados inicializado), onde as variáveis globais e estáticas inicializadas são armazenadas.
- O heap, de onde variáveis alocadas dinamicamente são alocadas.
- A stack(pilha) de chamadas, onde são armazenados os parâmetros da função, variáveis locais e outras informações relacionadas à função.
Nesta lição, focaremos principalmente a heap e a stack, pois é aí que a maioria das coisas interessantes ocorre.

O segmento de heap (também conhecido como "armazenamento gratuito") controla a memória usada para alocação dinâmica de memória. Utilizamos ela na seção passada:

```cpp{0}
int *ponteiro = new int; // ptr is assigned 4 bytes in the heap
int *vetor = new int[10]; // array is assigned 40 bytes in the heap

delete ponteiro;
delete vetor;
```

Quando uma variável alocada dinamicamente é excluída, a memória é "retornada" para o heap e pode ser reatribuída à medida que futuras solicitações de alocação forem recebidas. Lembre-se de que excluir um ponteiro não exclui a variável, apenas retorna a memória no endereço associado ao sistema operacional.

A stack tem vantagens e desvantagens:

- A alocação de memória no heap é comparativamente lenta.
- A memória alocada permanece alocada até que seja desalocada especificamente (cuidado com vazamentos de memória) ou o aplicativo termina (nesse ponto, o SO deve limpá-la).
- A memória alocada dinamicamente deve ser acessada por meio de um ponteiro. Desreferenciar um ponteiro é mais lento do que acessar diretamente uma variável.
Como o heap é um grande pool de memória, matrizes, estruturas ou classes grandes podem ser alocadas aqui.

# A stack de chamadas

A stack de chamadas (geralmente chamada de "a pilha") tem um papel muito mais interessante a desempenhar. A pilha de chamadas controla todas as funções ativas (aquelas que foram chamadas, mas ainda não foram finalizadas) desde o início do programa até o ponto de execução atual e lida com a alocação de todos os parâmetros de função e variáveis locais.

A pilha de chamadas é implementada como uma estrutura de dados da pilha. Portanto, antes de podermos falar sobre como a pilha de chamadas funciona, precisamos entender o que é uma estrutura de dados da pilha.

Uma estrutura de dados é um mecanismo de programação para organizar dados, para que possam ser usados com eficiência. Você já viu vários tipos de estruturas de dados, como matrizes e estruturas. Ambas as estruturas de dados fornecem mecanismos para armazenar dados e acessar esses dados de maneira eficiente. Existem muitas estruturas de dados adicionais que são comumente usadas em programação, algumas das quais são implementadas na biblioteca padrão e uma pilha é uma delas.

# Funcionamento de uma Pilha

- Olhe para o item superior da pilha(geralmente feito através de uma função chamada top(), mas às vezes chamada de peek())
- Retire o item principal da pilha(feito por meio de uma função chamada pop())
- Coloque um novo item no topo da pilha(feito através de uma função chamada push())

| Pilha | Saida |
| ----- | ----- |
| Stack | Vazia |
| Push  | 1     |
| Stack | 1     |
| Push  | 2     |
| Stack | 1 2   |
| Push  | 3     |
| Stack | 1 2 3 |
| Pop   |       |
| Push  | 1 2   |
| Pop   |       |
| Stack | 1     |

# O segmento da stack de chamadas

O segmento da pilha de chamadas mantém a memória usada para a pilha de chamadas. Quando a aplicação é iniciada, a função main () é pressionada na pilha de chamadas pelo sistema operacional. Então o programa começa a executar.

Quando uma chamada de função é encontrada, a função é enviada para a pilha de chamadas. Quando a função atual termina, essa função é retirada da pilha de chamadas. Assim, observando as funções pressionadas na pilha de chamadas, podemos ver todas as funções que foram chamadas para chegar ao ponto de execução atual.

Nossa analogia da caixa de correio acima é bastante semelhante à maneira como a pilha de chamadas funciona. A própria pilha é um pedaço de tamanho fixo de endereços de memória. As caixas de correio são endereços de memória e os "itens" que estamos empurrando e popping na pilha são chamados de quadros de pilha. Um quadro de pilha controla todos os dados associados a uma chamada de função. Falaremos mais sobre os quadros de pilha em breve. O "marcador" é um registro (um pequeno pedaço de memória na CPU) conhecido como ponteiro da pilha (às vezes abreviado como "SP"). O ponteiro da pilha controla onde está atualmente a parte superior da pilha de chamadas.

A única diferença entre nossa pilha hipotética de caixa de correio e a pilha de chamadas é que, quando retiramos um item da pilha de chamadas, não precisamos apagar a memória (o equivalente a esvaziar a caixa de correio). Podemos apenas deixá-lo sobrescrito pelo próximo item enviado para esse pedaço de memória. Como o ponteiro da pilha estará abaixo desse local da memória, sabemos que o local da memória não está na pilha.

# A pilha de chamadas em ação

Vamos examinar mais detalhadamente como a pilha de chamadas funciona. Aqui está a sequência de etapas que ocorre quando uma função é chamada:

- O programa encontra uma chamada de função.
- Um quadro de pilha é construído e empurrado na pilha. O quadro da pilha consiste em:
- O endereço da instrução além da chamada da função (chamado endereço de retorno). É assim que a CPU se lembra para onde retornar após a saída da função chamada.
- Todos os argumentos da função.
- Memória para quaisquer variáveis ​​locais.
- Cópias salvas de quaisquer registros modificados pela função que precisam ser restauradas quando a função retornar
- A CPU pula para o ponto inicial da função.
- As instruções dentro da função começam a ser executadas.

Quando a função termina, ocorrem as seguintes etapas:

- Os registros são restaurados da pilha de chamadas
- O quadro da pilha é retirado da pilha. Isso libera a memória para todas as variáveis ​​e argumentos locais.
- O valor de retorno é tratado.
- A CPU retoma a execução no endereço de retorno.
- Os valores de retorno podem ser manipulados de várias maneiras diferentes, dependendo da arquitetura do computador. Algumas arquiteturas incluem o valor de retorno como parte do quadro da pilha. Outros usam registradores de CPU.

Normalmente, não é importante conhecer todos os detalhes sobre como a pilha de chamadas funciona. No entanto, o entendimento de que as funções são efetivamente colocadas na pilha quando são chamadas e ativadas quando retornam fornece os fundamentos necessários para entender a recursão, além de alguns outros conceitos úteis na depuração.

Uma observação técnica: em algumas arquiteturas, a pilha de chamadas cresce para longe do endereço de memória 0. Em outras, cresce para o endereço de memória 0. Como conseqüência, os novos quadros de pilha enviados podem ter um endereço de memória maior ou menor que os anteriores.

Exemplo: 

```cpp{0}
int foo(int x)
{
    // b
    return x;
} // foo is popped off the call stack here
 
int main()
{
    // a
    foo(5); // a função foo foi chamada no push() para a pilha
    // c
 
    return 0;
}
```

Estouro de pilha(Não é piada com o site. juro.)

A pilha tem um tamanho limitado e, consequentemente, pode conter apenas uma quantidade limitada de informações. No Windows, o tamanho padrão da pilha é de 1 MB. Em algumas máquinas unix, pode ter até 8 MB. Se o programa tentar colocar muitas informações na pilha, resultará um excesso de pilha. O estouro de pilha acontece quando toda a memória da pilha foi alocada - nesse caso, alocações adicionais começam a transbordar para outras seções da memória.

O estouro de pilha geralmente é o resultado da alocação de muitas variáveis na pilha e / ou de muitas chamadas de funções aninhadas (onde a função A chama a função B chama a função C chama a função D etc ...) Nos sistemas operacionais modernos, o excesso da pilha geralmente faça com que seu sistema operacional emita uma violação de acesso e encerre o programa.

Aqui está um exemplo de programa que provavelmente causará um estouro de pilha. Você pode executá-lo em seu sistema e assisti-lo travar:

```cpp{0}
#include <iostream>
 
int main()
{
    int stack[10000000];
    std::cout << "He4rt Developers" << std::endl;
    return 0;
}
```

A classe `std::vector` faz muito bem do uso da pilha, recomendado a se utilizar em vés do vetor normal, assim como a classe `std::array`