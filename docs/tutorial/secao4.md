# 4 - Introdução ao compilador e vinculador

Para compilar um programa em C++, usamos um compilador C++. O compilador percorre cada arquivo de código-fonte (.cpp) em seu programa e executa duas tarefas importantes:

Primeiro, ele verifica seu código para garantir que ele siga as regras da linguagem C++. Se isso não ocorrer, o compilador fornecerá um erro (e o número da linha correspondente) para ajudar a identificar o que precisa ser corrigido. O processo de compilação também será abortado até que o erro seja corrigido.

Segundo, ele converte seu código-fonte em um arquivo de linguagem de máquina chamado arquivo de objeto. Os arquivos de objetos são normalmente chamados de name.o ou name.obj, em que name é o mesmo nome do arquivo .cpp do qual foi produzido.

Por exemplo,se você tem seu `main.cpp`, ele irá gerar um arquivo objeto `main.o`

![Compilador_pt1](../.vuepress/assets/compilador_pt1.png)

# Vinculador

- Depois que o compilador cria um ou mais arquivos de objeto, outro programa chamado vinculador(linker) entra em ação. O trabalho do linker e dividido em três etapas:

- Primeiro, pegue todos os arquivos de objetos gerados pelo compilador e combine-os em um único programa executável.

![Compilador_pt2](../.vuepress/assets/compilador_pt2.png)

- Em segundo lugar, além de poder vincular arquivos de objeto, o vinculador também é capaz de vincular arquivos de biblioteca. Um arquivo de biblioteca é uma coleção de código pré-compilado que foi “empacotado” para reutilização em outros programas, como o já usado `<iostream>`.

- Em terceiro lugar, o vinculador garante que todas as dependências entre arquivos sejam resolvidas corretamente. Por exemplo, se você definir algo em um arquivo .cpp e usá-lo em outro arquivo .cpp, o vinculador conectará os dois juntos. Se o vinculador não conseguir conectar uma referência a algo com sua definição, você receberá um erro de vinculador e o processo de vinculação será interrompido.