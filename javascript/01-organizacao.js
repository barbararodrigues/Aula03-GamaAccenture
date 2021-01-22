console.log('Sentença 01');

{ //bloco
    {
        console.log('Bloco 01')
    }
    {
        console.log('Bloco 02')
    }
}

function Teste(){
    console.log('Resposta da função');
}

console.log('Sentença 02');


Teste();

function TransformaParaMaisculo( parametro ) {
    console.log(parametro.toUpperCase());
}

let UserName = 'João da Silva';

TransformaParaMaisculo(UserName);