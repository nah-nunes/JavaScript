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
## Índice
- [1. Variáveis](#variáveis)
- [2.Estruturas de controle de fluxo](#estruturas-de-controle-de-fluxo)
- [3. Funções](#funções)
- [4. Escopo](#escopo)
- [5. Arrays](#arrays)
- [6. Objetos](#objetos)
- [7. Introdução ao ES6](#introdução-ao-es6)
<hr>

## Conceitos fundamentais 

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

#### Funções

- ##### Declaração 
Consiste em usar a palavra-chave `function`, seguida pelo nome da função, uma lista de parâmetros entre parênteses e o corpo da função entre  chaves`{}`.
```javascript
function soma(a,b){
    return a + b;
}
```
- ##### Expressão de função
É uma forma de definir uma função como parte de uma expressão JS. Isso significa que a função pode ser atribuída a uma variável, passada como argumento para outra função ou retornada de outra função. 
```javascript
const soma = function(a,b){
    return a+b;
};
```
- ##### Funções de seta (Arrow functions)
Forma mais concisa de definir funções em JS. 
```javascript
const soma = (a+ b ) => a+b;
```

- ##### Callbacks
Uma função callback é uma função passada como argumento para outra função. Ela é executada após a conclusão de uma determinada operação assíncrona ou evento. 
```javascript

setTimeout(() => {
  console.log('A função de callback foi executada!');
}, 1000);

```
 - ##### Funções de alta ordem
 São funções que aceitam outras funções como argumentos ou retornam outras funções. Úteis para abstrair operações comuns e promover a reutilização de código.
 ```javascript
const dobrar = (x) => x * 2;

const aplicarFuncao = (funcao, valor) => funcao(valor);

console.log(aplicarFuncao(dobrar, 5)); // Saída: 10
```
<hr>

##### Escopo Global e Escopo Local 

- Escopo Global: Refere-se ao contexto geral do seu código. As variáveis definidas de qualquer função têm escopo global e podem ser acessadas de qualquer lugar no seu código.
- Escopo Local: Refere-se ao contexto dentro de uma função. As variáveis definidas dentro de uma função têm escopo local e só podem ser acessadas dentro dessa função.
```javascript
// Escopo global
var globalVar = "Eu sou global";

function minhaFuncao() {
    // Escopo local
    var localVar = "Eu sou local";
    console.log(globalVar); // Acesso a uma variável global
}

minhaFuncao();
console.log(globalVar); // Acesso a uma variável global fora da função
// console.log(localVar); // Isso resultaria em um erro, porque localVar é local à função minhaFuncao
```

##### Closures:
- Um closure em js é uma função que "lembra" do escopo em que foi criada, mesmo depois de ter saído desse escopo.
- Isso permite que a função tenha acesso às variáveis que estavam disponíveis no momento em que foi criada.

```javascript
function saudacao(nome) {
    var mensagem = "Olá, " + nome + "!";
    return function() {
        console.log(mensagem);
    };
}

var saudacaoParaJoao = saudacao("João");
saudacaoParaJoao(); // Irá imprimir "Olá, João!"

```
##### Currying 
- técnica onde uma função com vários argumentos é transformada em que uma sequência de funções que levam apenas um argumento.
- útil porque permite que você crie funções mais especializadas a partir de funções mais genéricas. 

```javascript 
function somaCurried(a) {
    return function(b) {
        return a + b;
    };
}

var soma5 = somaCurried(5);
console.log(soma5(3)); // Retorna 8

```

