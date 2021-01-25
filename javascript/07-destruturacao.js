let Pessoa = {
    nome : 'Ana',
    idade: 22,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}


const {nome, idade} = Pessoa;
console.log(nome);

const{nome: n, idade: i} = Pessoa;

console.log( `${n} tem ${i} anos` );

const { endereco: {logradouro, numero}} = Pessoa;
console.log(logradouro, numero);