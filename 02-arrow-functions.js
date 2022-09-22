/* Formas de trabalhar com funções  */

//Sintaxe Tradicional
function nomeDaFuncao(){
    console.log('Função de sintaxe tradicional...');
}

//Sintaxe de função anônima
var outraFuncao = function(){
    console.log('Outra forma de declarar função...');
}

//Chamadas de função
// nomeDaFuncao();
// outraFuncao();

//1) Crie uma função que receba dois valores numéricos, calcule a diferença entre eles e retorne o resultado para uma variável externa.

//2)Mostre no console o resultado.

function continha(numero1, numero2){
resultado = numero1 - numero2;

return resultado
}

//console.log(continha(62, 11));

/* Arrow Function (Função flecha)
Possibilita diversas sintaxes, e até simplificação */

const exemplo1 = () => {
    console.log('Uma flecha foi lançada...');
};

//exemplo1();

//Arrow Function com parâmetro
/* const ola = (nome) => {// Podemos omitir os parênteses {} no caso de 1 param.
    console.log('Olá' + nome)
} */


// ARROW FUNCTION one line (só pode ser realizada quando a função é objetiva, ou seja realiza apenas uma tarefa.)
const ola = nome => console.log('Olá '+ nome)

ola(' Gabirel');

"=============================================="

/* const metade = (valor) => {
    return valor / 2;
} */

// Arrow Function com retorno IMPLÍCITO
const metade = valor => valor/2;

console.log(metade(41))

// Parâmetro com valor padrão (fator = 2)
const multiplicaValores = (valor, fator) =>  valor * fator;

console.log(multiplicaValores(12, 3));
console.log(multiplicaValores(41, 6));


/* Exercício
- Monte uma arrow function que receba um nome de pessoa e a converta para letras maiúsculas.

- Chame a função 3x (passando nomes diferentes) e exibindo no console os resultados 
*/
let uper = nome => nome.toUpperCase();

console.log(uper("gabriel"));
console.log(uper("thiaguinho do pagode"));
console.log(uper("joá"));