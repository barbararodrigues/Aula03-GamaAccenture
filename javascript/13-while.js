function getInteiroAleatorioEntre(max, min){
    const value = Math.random() * (min - max) + min;
    return Math.floor(value);
}

let option = 0;

while (option != -1) {
    option = getInteiroAleatorioEntre(-1, 10);
    console.log(`A opção escolhida foi: ${option}`);
}

console.log("Saiu do laço");