const Celular = {
    model: 'Iphone',
    description: 'Descrição do telefone',
    value: 9000.00
}

const{ model, description, value} = Celular;

//console.log(value);

let ValorFinal = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

console.log(ValorFinal);