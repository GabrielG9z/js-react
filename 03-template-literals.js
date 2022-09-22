// Concatenação
const nome = "Gabriel";
const sobrenome = "Genovez";
let idade = 22;
let cidade = "São Paulo";
let estado = "SP";

// Meu nome é Gabriel Genovez, tenho 22 anos e moro atualmente na cidade de São Paulo - SP.

let mensagem = "Meu nome é "+nome+ " "+sobrenome+", tenho "+idade+" anos e atualmente moro na cidade de "+cidade+ " - "+ estado+"."
console.log(mensagem);


// Método template literal/string
let mensagem2 = `Meu nome é ${nome.toUpperCase()} ${sobrenome}, tenho ${idade} anos e moro atualmente na cidade de ${cidade} - ${estado}.
Sou ${idade >= 18 ? 'maior' : 'menor '} de idade.`;
console.log(mensagem2);