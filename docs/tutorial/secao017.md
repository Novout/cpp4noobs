# 17 - Orientação a Objetos (OOP)

Como vimos até agora, na programação tradicional (o que estamos fazendo antes deste ponto), os programas são basicamente listas de instruções para o computador que definem dados (por meio de objetos) e depois trabalham com esses dados (por meio de instruções e funções). Os dados e as funções que trabalham nesses dados são entidades separadas que são combinadas para produzir o resultado desejado. Devido a essa separação, a programação tradicional geralmente não fornece uma representação muito intuitiva da realidade. Cabe ao programador gerenciar e conectar as propriedades (variáveis) aos comportamentos (funções) de maneira adequada. Isso leva ao código que se parece com isso:

```cpp{0}
vaAte(voce, casa);
```

Então, o que é programação orientada a objetos? Tal como acontece com muitas coisas, talvez seja entendido mais facilmente através do uso de uma analogia. Dê uma olhada ao seu redor, em todos os lugares que você olha são objetos: livros, prédios, comida e até você. Os objetos têm dois componentes principais: 
- Uma lista de propriedades relevantes (por exemplo, peso, cor, tamanho, solidez, forma, etc)
- Algum número de comportamentos que eles podem exibir (por exemplo, serem abertos, fazer outra coisa, quente, etc) 
- Essas propriedades e comportamentos são inseparáveis

A programação orientada a objetos (OOP) fornece a capacidade de criar objetos que unem propriedades e comportamentos em um pacote reutilizável e independente. Isso leva a um código que se parece mais com isso:

```cpp{0}
voce.vaAte(casa);
```

Isso não apenas lê com mais clareza, como também deixa mais claro quem é o sujeito (você) e qual comportamento está sendo chamado (dirigindo até algum lugar, e pelo parâmetro, sua casa). Em vez de focarmos nas funções de escrita, estamos focados na definição de objetos com um conjunto bem definido de comportamentos. É por isso que o paradigma é chamado de "orientado a objetos".

Isso permite que os programas sejam escritos de uma maneira mais modular, o que os torna mais fáceis de escrever e entender e também oferece um maior grau de reutilização de código. Esses objetos também fornecem uma maneira mais intuitiva de trabalhar com nossos dados, permitindo-nos definir como interagimos com os objetos e como eles interagem com outros objetos.

Observe que OOP não substitui os métodos de programação tradicionais. Em vez disso, fornece ferramentas adicionais no seu cinto de ferramentas de programação para gerenciar a complexidade quando necessário.

A programação orientada a objetos também traz vários outros conceitos úteis para a tabela: herança, encapsulamento, abstração e polimorfismo (os designers de linguagem têm uma filosofia: nunca use uma palavra pequena onde uma palavra grande funcionará). Abordaremos todos esses conceitos nos próximos tutoriais nos próximos capítulos. É um monte de material novo, mas depois de se familiarizar com o OOP e clicar nele, talvez você nunca mais queira voltar à programação tradicional pura.

Observe que o termo "objeto" está sobrecarregado um pouco, e isso causa uma certa confusão. Na programação tradicional, um objeto é um pedaço de memória para armazenar valores. E é isso. Na programação orientada a objetos, um "objeto" implica que ele é um objeto no sentido tradicional de programação e que combina propriedades e comportamentos. A partir deste momento, quando usarmos o termo "objeto", nos referiremos a "objetos" no sentido orientado a objetos.