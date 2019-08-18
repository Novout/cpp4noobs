# 2 - Um pouco de teoria

::: tip

A CPU de um computador é incapaz de falar em C++. O conjunto limitado de instruções que uma CPU pode entender diretamente é chamado de código de máquina (ou linguagem de máquina ou um conjunto de instruções).

Aqui está uma instrução de linguagem de máquina de amostra: 101101010.

Quando os computadores foram inventados pela primeira vez, os programadores tinham que escrever programas diretamente em linguagem de máquina, o que era uma coisa muito difícil e demorada de se fazer.

Como essas instruções estão organizadas está além do escopo desta introdução, mas é interessante notar duas coisas. Primeiro, cada instrução é composta por uma sequência de 1 e 0. Cada indivíduo 0 ou 1 é chamado de dígito binário ou bit para abreviar. O número de bits que compõem um único comando varia - Por exemplo, algumas CPUs processam instruções que são sempre de 32 bits, enquanto algumas outras CPUs (como a família x86, que você provavelmente está usando) têm instruções que podem ser comprimento variável.

Cada conjunto de dígitos binários é interpretado pela CPU em um comando para fazer um trabalho muito específico, como comparar esses dois números, ou colocar esse número nesse local de memória. No entanto, como CPUs diferentes têm conjuntos de instruções diferentes, instruções que foram escritas para um tipo de CPU não puderam ser usadas em uma CPU que não compartilhava o mesmo conjunto de instruções. Isso significava que os programas geralmente não eram portáveis ​​(utilizáveis ​​sem grandes retrabalhos) para diferentes tipos de sistema e precisavam ser escritos novamente.

Para resolver as questões de legibilidade e portabilidade, novas linguagens de programação, como C, C ++, Pascal (e mais tarde, linguagens como Java, Javascript e Perl) foram desenvolvidas. Essas linguagens são chamadas de linguagens de alto nível, pois são projetadas para permitir que o programador escreva programas sem ter que se preocupar com o tipo de computador no qual o programa será executado.

:::

# O que é C++?

::: tip

C++ (pronunciado como C plus plus) foi desenvolvido por Bjarne Stroustrup no Bell Labs como uma extensão para C, começando em 1979. C++ adiciona muitos recursos à linguagem C, e pode ser considerado um "superconjunto" do C.

O C++ tem uma enorme variedade de códigos, pois alem de seus códigos, pode contar com vários da linguagem C. Esta variedade possibilita a programação em alto e baixo níveis. O C++ apresenta grande flexibilidade, embora seja bom, este fato faz com que a programação seja muito mais cuidadosa para não terem erros.

:::


