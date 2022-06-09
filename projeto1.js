var prompt = require('prompt-sync')();

console.clear();

let pergunta1;
let pergunta2;
let pergunta3;
let pergunta4;
let pergunta5;

console.log(`A jornada de Rayssa
Rayssa é uma mãe de 23 anos com duas filhas e tem o sonho de ser Fisioterapeuta.
Sua grande ambição é se tornar Fisioterapeuta para poder dar uma vida melhor a sua familia,
Só que para isso acontecer ela terá que passar por algumas dificuldades.
Diante dessa situação, Rayssa você seria capaz de...`);

console.log()

do {
    pergunta1 = +prompt(`Assistir a pelo menos 90% das aulas? [1 - Sim / 0 - Não]: `);
        if (pergunta1 == 1) {
            resultado1 = 1;
        } else if (pergunta1 == 0) {
            resultado1 = 0;
        } else {
            console.log(`Digite uma resposta válida`);
        } 
} while (pergunta1 != 1 && pergunta1 != 0);

do {
     pergunta2 = +prompt(`Criar uma rotina de estudos regrada? [1 - Sim / 0 - Não]: `);
        if (pergunta2 == 1) {
            resultado2 = 1
        } else if (pergunta2 == 0) {
            resultado2 = 0
        } else {
            console.log(`Digite uma resposta válida`)
        }
} while (pergunta2 != 1 && pergunta2 != 0);

do {
    pergunta3 = +prompt(`Abdicar de algumas horas de sono para estudar um pouco mais? [1 - Sim / 0 - Não]: `);
        if (pergunta3 == 1) {
            resultado3 = 1
        } else if (pergunta3 == 0) {
            resultado3 = 0
        } else {
            console.log(`Digite uma resposta válida`)
        }
} while (pergunta3 != 1 && pergunta3 != 0);

do {
    pergunta4 = +prompt(`Abdicar de tempo com sua familia para focar mais nos estudo? [1 - Sim / 0 - Não]: `);
        if (pergunta4 == 1) {
            resultado4 = 1
        } else if (pergunta4 == 0) {
            resultado4 = 0
        } else {
            console.log(`Digite uma resposta válida`)
        }
} while (pergunta4 != 1 && pergunta4 != 0);

do {
    pergunta5 = +prompt(`Mediante seu esforço suas notas estão acima da média? [1 - Sim / 0 - Não]: `)
        if (pergunta5 == 1) {
            resultado5 = 1
        } else if (pergunta5 == 0) {
            resultado5 = 0
        } else {
            console.log(`Digite uma resposta válida`)
        }
} while (pergunta5 != 1 && pergunta5 != 0);

const resultadoFinal = resultado1 + resultado2 + resultado3 + resultado4 + resultado5

console.log(``)
console.log(`De acordo com suas respostas...`)
console.log(``)

if (resultadoFinal == 0) {
        console.log(`Você não conseguirá se formar.`)
    } else if (resultadoFinal == 1 || resultadoFinal == 2){
        console.log(`Você ficará muito tempo na faculdade, talvez não consiga terminar.`)
    } else if (resultadoFinal == 3) {
        console.log(`Você irá se formar mas não será uma boa profissional.`)
    } else if (resultadoFinal == 4) {
        console.log(`Você irá terminar e será uma boa profissional.`)
    } else {
        console.log(`Você será uma excelente profissional, será inspiração para várias pessoas da sua área.`)
}