(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{419:function(t,e,a){"use strict";a.r(e);var n=a(42),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_6-2-teste-de-mesa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-teste-de-mesa"}},[t._v("#")]),t._v(" 6.2 - Teste de Mesa")]),t._v(" "),a("p",[t._v("O Teste de Mesa é um processo manual que é utilizado para validar a lógica de um determinado algoritmo. Ele é utilizado principalmente em algoritmos quando a linguagem utilizada não possui nenhuma ferramenta automatizada de depuração.")]),t._v(" "),a("p",[t._v("Existe testes bem mais elaborados, mas para começar-mos a entender o fluxo de um programa pode ser útil.")]),t._v(" "),a("p",[t._v("Não há uma forma padrinizada para a elaboração de um Teste de Mesa, pois dependerá muito do que pretende verificar no algoritmo e do seu nível de entendimento. No geral, você deverá criar no papel uma tabela com todas as variáveis do programa e executar passo a passo seu código, anotando sempre os valores das variáveis. Assim você será capaz de identificar se os valores condizem com o esperado ou localizar a exata linha de código onde o valor da variável passa a ficar errado.")]),t._v(" "),a("p",[t._v("Em nosso curso, iremos considerar os seguintes passos:")]),t._v(" "),a("p",[t._v("1 - Elaborar uma tabela onde cada coluna se refere a cada variável envolvida e o resultado de uma operação em particular (ou observação pertinente).")]),t._v(" "),a("p",[t._v("2 - Executar os passos previstos no algoritmo.")]),t._v(" "),a("p",[t._v("3 - Verificar se os resultados obtidos são coerentes com os previstos.")]),t._v(" "),a("p",[t._v("4 - Encerrar o teste após um número razoável de resultados corretos obtidos.")]),t._v(" "),a("p",[t._v("Utilizaremos a sequência:")]),t._v(" "),a("p",[t._v("1 - Identifique todas as variáveis no seu programa.")]),t._v(" "),a("p",[t._v('2 - Crie uma tabela onde a primeira coluna se chama "Passo", a segunda de chama "Linha". A partir disto, crie uma coluna para cada variável do programa.')]),t._v(" "),a("p",[t._v('3 - Na primeira linha da tabela, preencha a coluna "Passo" com "Início", pode deixar a coluna "Linha" em branco e preencha cada coluna das variáveis com os respectivos valores iniciais.')]),t._v(" "),a("p",[t._v('4 - Percorra seu código linha a linha, preenchendo a tabela. A coluna "Passo" deverá ser incrementada a cada nova linha na tabela; a coluna "Linha" deve indicar o número da linha no código que está sendo analisada e em cada coluna das variáveis deve constar o respectivo valor para cada variável após a linha de código ser executada.')]),t._v(" "),a("p",[t._v("5 - Execute o passo 4 até o programa finalizar.")]),t._v(" "),a("p",[t._v("Vamos utilizar de exemplo o seguinte algoritmo:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n    D "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 7")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n            A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 11")]),t._v("\n            A "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12")]),t._v("\n            B "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 13")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Passo 1")]),t._v(": Identificar todas as variáveis e as condições do programa")]),t._v(" "),a("p",[t._v("No nosso caso, temos os inteiros A, B e C")]),t._v(" "),a("p",[t._v("Temos também a condição do loop na linha 5")]),t._v(" "),a("p",[a("strong",[t._v("Passo 2")]),t._v(": Criar a tabela")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Linha")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Condição")])])]),t._v(" "),a("tbody")]),t._v(" "),a("p",[a("strong",[t._v("Passo 3")]),t._v(": Preencher a primeira linha da tabela")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Linha")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Condição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])])])]),t._v(" "),a("p",[a("strong",[t._v("Passo 4")]),t._v(": Percorrer cada linha do programa, preenchendo a tabela")]),t._v(" "),a("p",[t._v("Apenas escreveremos algo na tabela quando tiver alguma mudança, como no caso pulamos a linha 2")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Linha")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Condição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])])])]),t._v(" "),a("p",[t._v("Na linha 5, temos uma condição, que no caso retorna true")]),t._v(" "),a("p",[t._v("A > B => true && C > A => true resulta em: true")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Linha")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Condição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])])])]),t._v(" "),a("p",[t._v("Temos outra condição na linha 7,no caso A é maior que B,então retorna true")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Linha")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Condição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])])])]),t._v(" "),a("ul",[a("li",[t._v("Se preferir, separe as condições")])]),t._v(" "),a("p",[t._v("Na linha 8, temos mudanças em A")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Linha")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Condição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])])])]),t._v(" "),a("p",[t._v("Agora, o loop será repetido novamente,e novamente retornara true,e o loop continua")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Linha")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Condição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])])])]),t._v(" "),a("p",[t._v("Dessa vez, o loop principal irá retornar false, por conta que A não é maior ou igual a C")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Linha")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("B")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Condição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("--")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")])])])]),t._v(" "),a("p",[t._v("Pronto, finalizamos nosso teste de mesa")]),t._v(" "),a("ul",[a("li",[t._v("Em caso de testes com saída de dados, faça uma tabela separada apenas para a saída.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);