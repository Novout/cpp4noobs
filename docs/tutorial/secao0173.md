# 17.3 - Classes no Header

Todas as classes que escrevemos até agora são simples o suficiente para podermos implementar as funções de membros diretamente dentro da própria definição de classe.

No entanto, à medida que as classes ficam mais longas e mais complicadas, ter todas as definições de função de membro dentro da classe pode tornar a classe mais difícil de gerenciar e trabalhar. O uso de uma classe já escrita requer apenas a compreensão de sua interface pública (as funções públicas de membro), não como a classe funciona por baixo do capô. Os detalhes de implementação da função membro apenas atrapalham.

Felizmente, o C ++ fornece uma maneira de separar a parte "declaração" da classe da parte "implementação". Isso é feito definindo as funções de membro da classe fora da definição de classe. Para fazer isso, basta definir as funções de membro da classe como se fossem funções normais, mas prefixe o nome da classe à função usando o operador de resolução de escopo (: :) (o mesmo que para um espaço para nome).

Exemplo:

```cpp{0}
// .hpp
#ifndef <nome_do_arquivo>_H
#define <nome_do_arquivo>_H
 
class Dia
{
private:
    int m_ano;
    int m_mes;
    int m_dia;
 
public:
    Dia(int ano, int mes, int dia);
 
    void SetDia(int ano, int mes, int dia);
 
    int getAno() { return ano; }
    int getMes() { return m_mes; }
    int getDia()  { return m_dia; }
};
 
#endif
```
```cpp{0}
// .cpp
#include "<nome_do_arquivo>.hpp"
 
// 
Dia::Dia(int ano, int mes, int dia)
{
    SetDia(ano, mes, dia);
}
 
void Dia::SetDia(int ano, int mes, int dia)
{
    m_mes = mes;
    m_dia = dia;
    m_ano = ano;
}
```