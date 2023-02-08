import chalk from "chalk";
import readlinesync from "readline-sync";

const lista = [];
console.log(chalk.green("Digite 'lista', para mostrar a lista." + "\nDigite 'sair', para encerrar o programa."));

while (true) {
    const css = readlinesync.question(chalk.green("Digite uma propriedade css: "))
    if(css == 'sair'){
        console.log(chalk.magenta(lista.sort().join("\n")))
        break;
        
    }else if(css == 'lista'){
        console.log(chalk.magenta(lista.sort().join("\n")))
    }else{
        lista.push(css)
    }
}