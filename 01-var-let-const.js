// Jeito antigo de usar variáveis
// var menuNome = 'Gabriel';

/* Jeito Atual de usar variáveis e constantes */
// let meuNome = 'Gabriel';
const meuNome = 'Gabriel';

// console.log(meuNome);

console.log('=============================')

let idade = 20;
if(idade>= 18){
    // Escopo local a variável é definida aqui e o console também é executado localmente dentro da condicional.
    let mensagem = 'É maior de idade!';
    console.log(mensagem);
} else {
    let mensagem = 'É menor de idade!';
    console.log(mensagem);
}

"========================================================="

let idade1 = 20;
/* Aqui declaramos a variável MENSAGEM vazia antes da condicional ser executada e só atribuimos valor a ela conforme a condicional verdadeira. */
let mensagem; //ESCOPO GLOBAL
if(idade>= 18){
     mensagem = 'É maior de idade!';
    console.log(mensagem);
} else {
     mensagem = 'É menor de idade!';
    console.log(mensagem);
}

/* let e const: possuem escopo de BLOCO quando declarados dentro de blocos (condicionais, loops), e escopo GLOBAL quando declarados fora dos blocos.

Uma variável/constante em escopo de BLOCO só existe e é aceitável DENTRO do bloco em que foi criada. */