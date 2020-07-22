(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{430:function(a,s,e){"use strict";e.r(s);var t=e(42),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_9-1-protetores-de-cabecalho"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-protetores-de-cabecalho"}},[a._v("#")]),a._v(" 9.1 - Protetores de Cabeçalho")]),a._v(" "),e("p",[a._v("Em seções anteriores observamos que um identificador de variável ou função pode ter apenas uma definição (a regra de uma definição). Assim, um programa que define um identificador de função mais de uma vez causará um erro de compilação:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("<iostream>")])]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("num")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Definição da função num")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("num")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Erro de compilação / Funções duplicadas")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    std"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),a._v("cout "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("num")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Embora esses programas sejam fáceis de corrigir (remova a definição duplicada), com arquivos de cabeçalho, é muito fácil acabar em uma situação em que uma definição em um arquivo de cabeçalho é incluída mais de uma vez. Isso pode acontecer quando um arquivo de cabeçalho "),e("code",[a._v("#include")]),a._v(" outro arquivo de cabeçalho (o que é comum).")]),a._v(" "),e("p",[a._v("Considere o seguinte exemplo acadêmico:")]),a._v(" "),e("p",[e("code",[a._v("a.hpp")])]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("teste")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[e("code",[a._v("b.hpp")])]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a.hpp"')])]),a._v("\n")])])]),e("p",[e("code",[a._v("main.cpp")])]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a.hpp"')])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"b.hpp"')])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Este programa aparentemente inocente não será compilado! Aqui está o que está acontecendo. Primeiro, main.cpp inclui a.hpp, que copia a definição da função "),e("code",[a._v("teste()")]),a._v(" para main.cpp. Então main.cpp inclui b.hpp, que inclui a.hpp em si. Isso copia o conteúdo de a.h (incluindo a definição da função teste()) para b.hpp, que é copiada para main.cpp.")]),a._v(" "),e("p",[a._v("Assim, depois de resolver todos os "),e("code",[a._v("#include")]),a._v(", o main.cpp acaba assim:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("teste")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("teste")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Definições duplicadas e um erro de compilação. Cada arquivo, individualmente, está bem. No entanto, como o main.cpp acaba incluindo o conteúdo de a.h duas vezes, encontramos problemas. Se b.hpp precisar de teste() e main.cpp precisar de b.hpp e a.hpp, como você resolveria esse problema?")]),a._v(" "),e("h1",{attrs:{id:"protetores-de-cabecalho"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#protetores-de-cabecalho"}},[a._v("#")]),a._v(" Protetores de Cabeçalho")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("ifndef")]),a._v(" NOME_UNICO")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" NOME_UNICO")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Declarações")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("endif")])]),a._v("\n")])])]),e("p",[a._v("Quando esse cabeçalho é incluido, o pré-processador verifica se NOME_UNICO foi definido anteriormente. Se for a primeira vez que incluímos o cabeçalho, NOME_UNICO não será definido. Consequentemente, "),e("code",[a._v("#define NOME_UNICO")]),a._v(" e inclui o conteúdo do arquivo. Se o cabeçalho for incluído novamente no mesmo arquivo, NOME_UNICO já terá sido definido desde a primeira vez em que o conteúdo do cabeçalho foi incluído e o conteúdo do cabeçalho será ignorado (graças ao #ifndef).")]),a._v(" "),e("p",[a._v("Todos os seus arquivos de cabeçalho devem ter proteções de cabeçalho neles. NOME_UNICO pode ser o nome que você quiser, mas por convenção é definido como o nome completo do arquivo de cabeçalho, digitado em maiúsculas, usando sublinhados para espaços ou pontuação. Por exemplo, a.hpp teria o protetor de cabeçalho:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("ifndef")]),a._v(" A_H")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" A_H")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("teste")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("endif")])]),a._v("\n")])])]),e("p",[a._v("Vamos voltar ao exemplo a.hpp, usando o a.hpp com protetores de cabeçalho. Para uma boa forma, também adicionaremos protetores de cabeçalho em b.hpp")]),a._v(" "),e("p",[e("code",[a._v("a.hpp")])]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("ifndef")]),a._v(" A_H")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" A_H")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("teste")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("endif")])]),a._v("\n")])])]),e("p",[e("code",[a._v("b.hpp")])]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("ifndef")]),a._v(" B_H")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" B_H")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a.hpp"')])]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("endif")])]),a._v("\n")])])]),e("p",[e("code",[a._v("main.cpp")])]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a.hpp"')])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("include")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"b.hpp"')])]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Depois que o pré-processador resolve todas as inclusões, este programa fica assim:")]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("ifndef")]),a._v(" A_H ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// a.hpp incluido de main.cpp,")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" A_H ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// A_H foi definido aqui")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Todo esse conteudo foi colocado aqui")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("teste")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n \n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("endif")]),a._v(" ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// A_H")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("ifndef")]),a._v(" B_H ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// b.hpp incluido de main.cpp")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" B_H")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("ifndef")]),a._v(" B_H ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// a.hpp incluido de b.hpp, A_H foi incluido")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("define")]),a._v(" A_H ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Resto do conteudo foi incluido")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("float")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("teste")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" \n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2f")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("endif")]),a._v(" ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// A_H")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("endif")]),a._v(" ")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// B_H")]),a._v("\n \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Geralmente, pedimos que você não inclua definições de função em seus cabeçalhos. Então, você deve estar se perguntando por que deve incluir protetores de cabeçalho se eles o protegem de algo que você não deve fazer.")]),a._v(" "),e("p",[a._v("Existem alguns casos em que mostraremos no futuro onde é necessário colocar definições de não função em um arquivo de cabeçalho. Por exemplo, o C++ permitirá que você crie seus próprios tipos. Esses tipos definidos pelo usuário geralmente são definidos nos arquivos de cabeçalho, portanto, a definição pode ser propagada para os arquivos de código que precisam usá-los. Sem uma proteção de cabeçalho, seus arquivos de código podem acabar com várias cópias idênticas dessas definições, o que causará um erro de compilação de definição duplicada.")]),a._v(" "),e("p",[a._v("Portanto, mesmo que não seja estritamente necessário ter proteções de cabeçalho neste ponto da série de tutoriais, estamos estabelecendo bons hábitos agora, para que você não precise desaprender os maus hábitos mais tarde.")]),a._v(" "),e("p",[a._v("#pragma once")]),a._v(" "),e("p",[a._v("Muitos compiladores suportam uma forma mais simples e alternativa de proteção de cabeçalho usando a diretiva #pragma:")]),a._v(" "),e("p",[e("code",[a._v("exemplo.hpp")])]),a._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[a._v("#"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[a._v("pragma")]),a._v(" once")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// codico")]),a._v("\n")])])]),e("p",[a._v("O #pragma já serviu ao mesmo objetivo que os protetores de cabeçalho e tem o benefício adicional de ser mais curto e menos propenso a erros.")]),a._v(" "),e("p",[a._v("No entanto, o #pragma não é uma parte oficial da linguagem C ++ e nem todos os compiladores o suportam (embora a maioria dos compiladores modernos o faça).")]),a._v(" "),e("p",[a._v("Para fins de compatibilidade, recomendamos a aderência aos protetores de cabeçalho tradicionais. Eles não são muito mais trabalhosos e têm garantia de suporte em todos os compiladores compatíveis.")])])}),[],!1,null,null,null);s.default=r.exports}}]);