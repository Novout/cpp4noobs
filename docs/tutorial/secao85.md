# 8.5 - Keyword Static

::: tip

A keyword que iremos falar agora, a `static` possui funcionamentos diferentes dependendo da situação, mas iremos falar dela exclusivamente dentro de funções fora de classe.

Se é uma variável em uma função, ela não pode ser acessada de fora da função, como qualquer outra variável local. 

Antes que qualquer função em uma unidade de tradução seja executada (possivelmente após a execução inicial iniciada), as variáveis com duração de armazenamento estático (escopo de namespace) nessa unidade de tradução serão "constante inicializadas".

O efeito disso se resume que uma variavel estática em uma função continua "existindo" na função.

Exemplo:
```cpp{0}
#include<iostream> 

void stc() 
{
    static int i = 0;
    i++;

    std::cout << i << std::endl;
}

int main() 
{ 
    int a = 0;

    while(true)
    {
        if(a >= 10) { break; };
        stc();
        a++;
    }
} 
```
:::