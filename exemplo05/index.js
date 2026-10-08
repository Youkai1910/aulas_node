'use strict'

import chalk from 'chalk';

console.log("Perenciando Pacotes com NPM");

const nome = "Yusuke";
let idade =  15;

if(idade < 18){
    console.log( chalk.red(nome + " é menor de idade"));
} else{
    console.log( chalk.blue(nome + " é maior de idade"));
}