### Dia 1-5: Conceitos Fundamentais Intermediários


- Dia 02
    - [ ]  Funções avançadas: declaração de função, expressões de função, funções de seta e funções de callback.
- Dia 03
    - [ ]  Escopo em JavaScript: escopo global, escopo local, closures, funções de alta ordem, currying
- Dia 04
    - [ ]  Arrays: métodos avançados como map(), filter(), reduce() e forEach().
- Dia 05
    - [ ]  Objetos em JavaScript: propriedades, métodos, prototipagem e herança.
- Dia 06
    - [ ]  Introdução ao ES6(módulos, classes, arrow functions, promises)

<hr>

### Conceitos fundamentais 

#### Variáveis
Em Js pode-se declarar variáveis usando as palavras chaves 'var', 'let' ou 'const'.

  - `var` (antigo) tem o escopo global
  - `let` é usada para variáveis que podem ser reatribuídas
  - `const` usada para variáveis com valores constantes, que não podem ser reatribuídas.
#### Tipos de Dados
JavaScript é uma linguagem dinamicamente tipada, ou seja o tipo de dado é determinado automaticamente pelo valor atribuído a ela.Os principais tipos de dados em JS são:
  - **String**
  Sequência de caracteres, definida por aspas simples ou duplas.
  - **Number**
  Números inteiros ou decimais 
  - **Boolean**
  Representa um valor verdadeiro ou falso 
  - **Array**
  Coleção ordenada de valores, acessada por índice numérico.
  - **Object**
  Coleção de pares de chave/valor
  - **Undefined**
  Valor atribuído automaticamente a variáveis que ainda não foram inicializados
  - **Null**
  Representa a ausência intencional de qualquer valor
  - **Symbol**
  Um tipo primitivo novo, único e imutável, usado como chave de propriedade de objeto. 
```javascript
//string
let nome = "João";

//number
let idade = 25;
let preco = 10.99;

// boolean
let isTrue = true;
let isFalse = false;

//array
let numeros = [1, 2, 3, 4, 5];

//object
let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
};

//undefined
let valorIndefinido;
console.log(valorIndefinido); // Saída: undefined

//null
let valorNulo = null;

//symbol
const sym = Symbol('descricao');

//usando o operador typeof que retorna uma string indicando o tipo de dado da expressão fornecida.
console.log(typeof nome); // Saída: string
console.log(typeof idade); // Saída: number
console.log(typeof isTrue); // Saída: boolean
console.log(typeof numeros); // Saída: object
console.log(typeof pessoa); // Saída: object
console.log(typeof valorIndefinido); // Saída: undefined
console.log(typeof valorNulo); // Saída: object (esquisitamente, null é retornado como "object")
console.log(typeof sym); // Saída: symbol

```
<hr>


 ### Estruturas de controle de fluxo

 #### if, else:
- A estrutura `if` é usada para executar um bloco de código se uma condição especificada for verdadeira.
- A estrutura `else` é usada para executar um bloco de código se a condição especificada no `if` for falsa.
```javascript
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
//if else if 
let nota = 85;

if (nota >= 90) {
    console.log("Aprovado com A");
} else if (nota >= 80) {
    console.log("Aprovado com B");
} else if (nota >= 70) {
    console.log("Aprovado com C");
} else if (nota >= 60) {
    console.log("Aprovado com D");
} else {
    console.log("Reprovado");
}

```
#### switch:
- A estrutura `switch` é usada para selecionar um dos muitos blocos de código para serem executados.
- É semelhante a uma série de declarações `if...else`.


```javascript
let diaSemana = 3;
let nomeDia;

switch (diaSemana) {
    case 1:
        nomeDia = "Segunda-feira";
        break;
    case 2:
        nomeDia = "Terça-feira";
        break;
    // E assim por diante...
    default:
        nomeDia = "Dia inválido";
}
console.log("Hoje é " + nomeDia);
```

### Loops:

#### for:
- O loop `for` é usado para repetir um bloco de código um número específico de vezes.
- É frequentemente usado quando o número de iterações é conhecido.


```javascript
for (let i = 0; i < 5; i++) {
    console.log("O valor de i é: " + i);
}
```

#### while:
- O loop `while` é usado para repetir um bloco de código enquanto uma condição especificada for verdadeira.
- É útil quando o número de iterações não é conhecido antecipadamente.

```javascript
let contador = 0;
while (contador < 5) {
    console.log("O contador é: " + contador);
    contador++;
}
```

#### do...while:
- Similar ao loop `while`, exceto que a condição é verificada após a execução do bloco de código, garantindo que o bloco de código seja executado pelo menos uma vez.


```javascript
let contador = 0;
do {
    console.log("O contador é: " + contador);
    contador++;
} while (contador < 5);
```

<hr>





 