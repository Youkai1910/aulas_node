'use strict'

function soma(valor1, valor2) {
   return valor1 + valor2 
}
function subtrai(valor1, valor2) {
   return valor1 - valor2
}
function multiplica(valor1, valor2) {
    return valor1 * valor2
}
function divide(valor1, valor2) {
    return valor1 / valor2
};

// exportando um recurso
//export default soma;

// exportando diversos recursos ao mesmo tempo
// export { soma, subtrai, multiplica, divide };

// forma antiga de exportar módulos (não precisa do package.json)
module.exports = { soma, subtrai, multiplica, divide };

// exportando para reaproveitar via CommonJS  (padrão)
//const operacoes = {soma, subtrai, multiplica, divide};
//export default operacoes 
