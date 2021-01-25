

function PersonalizarErro(err) {
    throw new Error('Ops, algo deu errado!!')
}

function ImprimeNomeMaiusculo(objErr) {
    try{
        console.log(objErr.name.toUpperCase() + '!!!');
    } catch (e) {
        PersonalizarErro(e);
    } finally {
        console.log('Final')
    }

}


// const objName = {
//     name: 'Ana'
// }
ImprimeNomeMaiusculo();