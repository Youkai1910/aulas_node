'use strict'

// importando módulos
// importando um unico recurso
//import soma from './src/calculadora.js';

// importando multiplos recursos/módulos - maneira atual
//import {soma, subtrai, multiplica, divide} from './src/calculadora.js'

// importando módulo commonJS
const {soma, subtrai, multiplica, divide} = require ('./src/calculadora')

let resultadoSoma = soma(4, 8);
let resultadoSubtrai = subtrai(8, 4);
let resultadoMultiplica = multiplica(8, 4);
let resultadoDivide = divide(8, 4);

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtrai: ${resultadoSubtrai}`);
console.log(`Multiplica: ${resultadoMultiplica}`);
console.log(`Divide: ${resultadoDivide}`);