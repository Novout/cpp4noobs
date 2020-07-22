# 2 - Um pouco de teoria

A CPU de um computador é incapaz de diretamente entender C++. O conjunto limitado de instruções que uma CPU pode entender é chamado de código (ou linguagem) de máquina, e é composto de diversos códigos de operação (_opcodes_). 

Um exemplo de uso de _opcode_ se encontra em `imul    eax, eax`, que efetua a multiplicação em arquiteturas X86, e é tradicionalmente representado por 0x0FAF ou 111110101111.

Durante muitos anos programadores haviam de escrever programas diretamente em linguagem de máquina, o que era algo muito difícil e demorado de se fazer, por diversos motivos.

Como essas instruções estão organizadas está além do escopo desta introdução, mas é interessante notar duas coisas. Primeiro, cada instrução é composta por uma sequência de 1 e 0. Cada indivíduo 0 ou 1 é chamado de dígito binário ou bit para abreviar. O número de bits que compõem um único comando varia - Por exemplo, algumas CPUs processam instruções que são sempre de 32 bits, enquanto algumas outras CPUs (como a família x86, que você provavelmente está usando) têm instruções que podem ser comprimento variável.

Cada conjunto de dígitos binários é interpretado pela CPU em um comando para fazer um trabalho muito específico, como comparar esses dois números, ou colocar esse número nesse local de memória. No entanto, como CPUs diferentes têm conjuntos de instruções diferentes, instruções que foram escritas para um tipo de CPU não puderam ser usadas em uma CPU que não compartilhava o mesmo conjunto de instruções. Isso significava que os programas geralmente não eram portáveis ​​(utilizáveis ​​sem grandes retrabalhos) para diferentes tipos de sistema e precisavam ser escritos novamente.

Para resolver as questões de legibilidade e portabilidade, novas linguagens de programação, como C, C ++, Pascal foram desenvolvidas, com compiladores que permitem executar um mesmo código em diversas arquiteturas diferentes.

 Linguagens são classificadas pelos seus níveis de abstração. Por exemplo, C é uma linguagem de baixo nível, pois é sintáticamente próxima de linguagem de máquina, necessitando do programador controles mais manuais ao _hardware_, como controle de memória, evitar acessos e escritas indevidas de memória, e etc. Linguagems alto nível, como Java, são mais fáceis de se codificar, mas tradicionalmente sofrem em performance, assim como muitas vezes dificultam maior controle ao hardware.

A grande vantagem do C++ é sua flexibilidade, isto é, a possibilidade de criar programas de baixo nível, assim como abstrações de mais alto nível, mantendo ainda performance similar à do C. Por este motivo, C++ é tradicionalmente usado em engenharia de sistemas, em programas com necessidade de performance, como em computação gráfica, inteligência artificial, etc.


## O que é C++?

C++ (pronunciado como C plus plus) foi desenvolvido por Bjarne Stroustrup no Bell Labs como uma extensão para C, começando em 1979. C++ adiciona muitos recursos à linguagem C, e pode ser considerado um "superconjunto" do C.