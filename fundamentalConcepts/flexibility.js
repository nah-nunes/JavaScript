//15 exercícios para praticar os conceitos de escopo em JavaScript, closures, funções de alta ordem e currying:


// **Escopo Global e Escopo Local**:

  // - Crie uma variável global e uma função que a modifique.
  var globalVar = 10;
  function modificarVariavelGlobal(novoValor){
    globalVar = novoValor;
  }

  // - Declare uma variável dentro de uma função e tente acessá-la fora dessa função.
function frase(){
  let string = 'Função que modifica a variável global';
  
}
//string = 'Nova string'

  //- Escreva uma função que receba um número como parâmetro e retorne o dobro desse número.
function dobro(number){
  return number*2;

}
//2. **Closures**:

 //  - Crie uma função externa que defina uma variável e uma função interna que acesse essa variável.
 function funcaoExterna() {
  var variavelExterna = "Variável externa"
  function funcaoInterna() {
      console.log("Acesso à variável externa:", variavelExterna);
  }
  funcaoInterna();
}
funcaoExterna();


 //  - Utilize um closure para criar uma função que armazene e acumule um valor interno.

  // - Escreva uma função de contador que retorne uma função para incrementar e outra para decrementar um valor interno.

/*3. **Funções de Alta Ordem**:
   - Implemente uma função map que aplique uma função a cada elemento de um array e retorne um novo array com os resultados.
   - Escreva uma função filter que retorne um novo array apenas com os elementos que passam em um teste especificado por uma função.
   - Crie uma função reduce que combine todos os elementos de um array em um único valor, utilizando uma função fornecida.

4. **Currying**:
   - Implemente uma função curried que multiplique dois números, mas aceite apenas o primeiro como argumento inicial e retorne uma função que espere o segundo argumento.
   - Escreva uma função curried para calcular a área de um retângulo, onde você primeiro fornece a largura e depois a altura.
   - Crie uma função curried que concatene duas strings, onde a primeira string é fornecida inicialmente e a segunda é passada como argumento para a função retornada.

Esses exercícios devem ajudá-lo a praticar e solidificar seus conhecimentos sobre esses conceitos fundamentais do JavaScript. */
