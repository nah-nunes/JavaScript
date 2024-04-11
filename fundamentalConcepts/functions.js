// **************** 15 exercícios para treinar funções *******************

//1. Crie uma função de soma que recebe dois numeros como parametros e retorna a soma
function soma(a,b){
  return a + b;

}

//2 Escreva uma função chamada ehPar que recebe um numero como parametro e retorna true ou false 
function ehPar(num){
  return num %2==0? true: false;
}
//3 Defina uma função chamada contarLetras que recebe uma string como parâmetro e retorna o número de letras na string.
function contarLetras(string){
  return string.length;
}
//console.log(contarLetras('elefante'))

//4 Crie uma função chamada maiorNumero que recebe uma lista de números como parâmetro e retorna o maior número da lista.
let lista = [2,3,4,12,98, 0, 76, 22]

function maiorNumero(lista){
  let maior = Number.MIN_VALUE;

  for(let i = 0; i < lista.length; i++){

    if(lista[i] > maior ){
    

     maior = lista[i]
      
    }
  }
  return maior
}
//console.log(maiorNumero(lista))


//5. Escreva uma função chamada multiplicarPorDois que recebe um número como parâmetro e retorna o dobro desse número.
function multiplicarPorDois(number){
  return number*2;
}

//6. Defina uma função chamada inverterString que recebe uma string como parâmetro e retorna a string invertida.
function inverterString(string){
  let newString = "";
  for(let i = string.length - 1; i>=0; i--){
    newString += string[i];

  }
  return newString;

}
//console.log(inverterString('Erick'))

// 7. Crie uma função chamada calcularMedia que recebe uma lista de números como parâmetro e retorna a média dos números.
let notas = [6.5, 7.5, 9, 3.4, 9, 8]

function calcularMedia(notas){
  let soma = 0;
  for(let i = 0; i< notas.length; i++){

     soma += notas[i];
  }
  return ((soma/notas.length).toFixed(2));

}


//console.log(calcularMedia(notas))

//8. Defina uma função chamada exponenciacao que recebe dois números como parâmetros, base e expoente, e retorna o resultado da base elevada ao expoente.
 function exponenciacao(base, expoente){
  return Math.pow(base, expoente)
 }

 //console.log(exponenciacao(2,3))

 // 9. Crie uma função chamada contarPalavras que recebe uma string como parâmetro e retorna o número de palavras na string.
 let str = "Crie uma função chamada contarPalavras que recebe uma string como parâmetro e retorna o número de palavras na string"
 function contaPalavras( str){
  return str.split(" ").length;
 }
 //console.log(contaPalavras(str))



 // 10. Escreva uma função chamada fatorial que recebe um número como parâmetro e retorna o fatorial desse número.
 function fatorial (n){
  let result = 1;
  for(let i = n; i > 0; i--){
            result *= i
  }
  return result;
 }
//console.log(fatorial(5))


 //11. Defina uma função chamada ehPrimo que recebe um número como parâmetro e retorna true se o número for primo e false caso contrário.

 function ehPrimo(numero) {
  // Caso o número seja menor ou igual a 1, não é primo
  if (numero <= 1) {
      return false;
  }

  // Verifica se o número é divisível por algum número inteiro de 2 até sua raiz quadrada
  for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
          // Se o número for divisível por algum número, não é primo
          return false;
      }
  }

  // Se não foi divisível por nenhum número, é primo
  return true;
}

// Exemplo de uso:
console.log(ehPrimo(7)); // true
console.log(ehPrimo(14)); // false




 //12.  crie uma função chamada concatenarArrays que recebe dois arrays como parâmetros e retorna um novo array que é a concatenação dos dois arrays fornecidos.
 let array01 = [1,2,3,4,5];
 let array02 =[6,7,8,9,10]
 function concatenarArrays (array01, array02){
  return array01.concat(array02)

 }
//console.log(concatenarArrays(array01, array02))



 
//13. Escreva uma função chamada ehPalindromo que recebe uma string como parâmetro e retorna true se a string for um palíndromo (ou seja, se ela for igual quando lida de trás para frente) e false caso contrário.




//Escreva uma função chamada contarVogais que recebe uma string como parâmetro e retorna o número de vogais na string.
function ehPalindromo(string) {
  // Remove espaços em branco e converte para minúsculas
  string = string.toLowerCase().replace(/\s/g, '');

  // Percorre a string até a metade
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
      // Compara o caractere atual com o caractere correspondente no final
      if (string[i] !== string[string.length - 1 - i]) {
          // Se os caracteres não forem iguais, não é um palíndromo
          return false;
      }
  }
  // Se todos os caracteres correspondentes forem iguais, é um palíndromo
  return true;
}

// Exemplo de uso:
console.log(ehPalindromo("radar")); // true
console.log(ehPalindromo("reler")); // true
console.log(ehPalindromo("asa")); // true
console.log(ehPalindromo("hello")); // false



//14. Escreva uma função que conte as vogais de uma string
function contarVogais(str){
  let cont =0; 
  str = str.toLowerCase();

  for(let i = 0; i< str.length; i++){

    if(str[i] ==='a' || str[i]== 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
      cont+=1;
   
    }
  }
  return cont;
}
//console.log(contarVogais('passaro'))


// Defina uma função chamada converterParaMaiusculas que recebe uma string como parâmetro e retorna a string com todas as letras em maiúsculas.
function converterParaMaiusculas(str){
  return str.toUpperCase()
}