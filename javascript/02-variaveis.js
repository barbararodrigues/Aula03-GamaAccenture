var StrVar = 'String';
var IntVar = 22;
var FloatVar = 22.0;
var BooleanVar = false;

var ObjVar = {};
var ArrVar = [];

console.log(StrVar);
console.log( typeof IntVar.toString());

StrVar = 'Gama';

console.log(StrVar);

// const VarConst = 'Const';
// VarConst = 'Alterado';

// console.log(VarConst);


console.log(typeof IntVar.toString());

const Valor1 = 1.0;
const Valor2 = Number('1.0');

console.log(Number.isInteger(Valor1));

if (Valor1 == Valor2){
    console.log('Sim!');
} else {
    console.log('Não');
}