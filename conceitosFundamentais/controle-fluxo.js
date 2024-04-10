/*20 exercícios para praticar estruturas de controle de fluxo em JavaScript:
 */

//1. Crie um programa que verifique se um número é positivo, negativo ou zero.

let checkPositiveNegative= (number) =>{
  if(number > 0){
    console.log("Numero positivo")
  }else if(number < 0){
    console.log("Numero negativo")
  } else{
    console.log("Zero")
  }
}

checkPositiveNegative(12)
checkPositiveNegative(-3)
checkPositiveNegative(0)

//2. Escreva um programa que determine se um número é par ou ímpar.
let checkEvenOdd = (number) =>{
  number % 2==0? console.log("par"): console.log("impar")
}
checkEvenOdd(23)
checkEvenOdd(24)

//3. Faça um programa que determine se um ano é bissexto ou não.
let checkLeap = (year) =>{
  if((year % 4 ===0  && year % 100 !== 0 ) || (year % 400 ===0)){

    return true;
  }else{
    return false;
  }
}
console.log(checkLeap(2000))
console.log(checkLeap(1900))
console.log(checkLeap(2024))

//4. Crie um programa que verifique se uma pessoa pode dirigir com base na idade (18 anos ou mais).
function checkCanDrive(age){
  age >= 18 ? console.log("Pode dirigir"): console.log("Não pode dirigir");


}
checkCanDrive(17)
checkCanDrive(20)


//5. Escreva um programa que determine se um número é primo ou não.
function ehPrimo(number){
  if(number <=1){
    return false;
  } 
  for(let divisor = 2; divisor <= Math.sqrt(number); divisor++){
    if(number % divisor ===0){
      return false;
    }

  }
  return true;
}
console.log(ehPrimo(13))
console.log(ehPrimo(18))

//6. Faça um programa que calcule o IMC (Índice de Massa Corporal) com base no peso e altura de uma pessoa e exiba uma mensagem com base no resultado (abaixo do peso, peso normal, sobrepeso, obesidade).
function Imc(weight,height){
  let bmi = weight/(height*height);
  
  if (bmi < 18.5) {
    console.log("Abaixo do peso");
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log("Peso normal");
  } else if (bmi >= 25 && bmi < 30) {
    console.log("Sobrepeso");
  } else if (bmi >= 30 && bmi < 35) {
    console.log("Obesidade grau I");
  } else if (bmi >= 35 && bmi < 40) {
    console.log("Obesidade grau II");
  } else {
    console.log("Obesidade grau III");
  }
}
Imc(120, 1.75)
Imc(60, 1.75)
Imc(70, 1.75)
Imc(80, 1.75)

// 7. Crie um programa que classifique um aluno com base em sua nota em A (90-100), B (80-89), C (70-79), D (60-69) ou F (abaixo de 60).
 function checkApproval(grade){
  if(grade < 60){
    console.log("F")
  } else if( grade >= 60    && grade <=69 ){
    console.log("D")
  }
  else if( grade >= 70    && grade <=79 ){
    console.log("C")
  }
  else if( grade >= 80    && grade <=89 ){
    console.log("B")
  }
  else if( grade >= 90    && grade <=100 ){
    console.log("A")
  } else {
    console.log("Nota invalida")
  }
 }


 checkApproval(59)
 checkApproval(65)
 checkApproval(75)
 checkApproval(85)
 checkApproval(95)

 //8. Escreva um programa que determine se uma string é um palíndromo ou não.

//9. Faça um programa que determine se um número é múltiplo de 3 e 5.
function checkMultiple(number){
  if((number % 3== 0) && (number % 5==0)){
    console.log(" O numero é múltiplo de 3 e 5")
  } else{
    console.log("O numero não é múltiplo de 3 e 5 ")
  }

}
checkMultiple(10)
checkMultiple(15)
//10. Crie um programa que calcule a média de três números e determine se a média é aprovativa (maior ou igual a 6) ou não.
 function checkAverageApproval(num1, num2, num3){
  let result = (num1 + num2 + num3)/3
  result >= 6 ? console.log("Aprovado"): console.log("Reprovado")

}
checkAverageApproval(2, 5, 9)
checkAverageApproval(6, 5, 10)

//11. Escreva um programa que determine o maior de três números.


//13. Crie um programa que determine se um número é positivo e múltiplo de 2 ao mesmo tempo.
function checkEvenOddAndPositive(number){
  if((number % 2 == 0) && (number > 0)){
    console.log(" Numero positivo e múltiplo de 2")
  }else{
    console.log("Não é positivo e multiplo de 2")
  }
}

