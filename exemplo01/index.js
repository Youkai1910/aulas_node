"use strict"

console.log("ola mundo")

let aluno = "Alexandre";
let nota1 = 9.8;
let nota2 = 8.1;
let media = Math.round((nota1 + nota2) / 2);

console.log( `O aluno ${aluno} teve média: ${media}`);
console.log(nota1, nota2, media);
console.log('Nota 1:' + nota1 + ' Nota 2:' + nota2 +  ' Média:' + media);
console.log('--------------------------');

const dados = {
    nome : "Chaves" ,
    idade : 74,
    profissao : "Comediante",
};
console.table(dados);
console.log(dados.nome);
console.log('---------------------------');

if(media >= 7){
        console.log(`O ${aluno} está Aprovado`);
    } else if (media < 7){
       console.log(`O ${aluno} está Reprovado`);}
        
      
    





