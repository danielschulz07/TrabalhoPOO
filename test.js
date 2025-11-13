import {Funcionario} from "./Funcionario.js";
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";

let func = new Funcionario("12345", "Rivaldo", "123.456.789-12", "01/01/2001", 1200.00);
//Executando no debug, observe como funciona o método constructor da classe Funcionario

/*
let test = new Conta("dadiel", "10")
let test1 = new Conta("imundo", "20")

let conta1 = new Conta(test, 2000)
let conta2 = new Conta(test1)

console.log(Conta.qtdContas)

conta2.depositar(2000)
let trans = 10000


conta1.transferir(trans, conta1)
*/


let test = new ContaCorrente("DAdiel", "2000", "22222222", "20", "", "",)

console.log (func);

if(func.nome == "Pedro"){
    console.log ("Pedro é o funcionário!");
} else {
    console.log("O funcionário não é o Pedro!");
}

func.nome = "Maradona";
//Perceba com o debug, que a instrução acima executa o método set nome(...) da superclasse Pessoa.

console.log("Dados do Funcionario:\n" + func);//("Dados do Funcionario:\n" + func.toString());
//Observe com o debug, que a instrução acima executa o método toString() da subclasse Funcionario,
//que sobrescreve (override) o método de mesmo nome da superclasse Pessoa

let cli1 = new Cliente("Roberto Carlos", "987.654.321-00", "02/02/2002");
let cli2 = new Cliente("Zico", "654.321.987-11", "03/03/2003", 500, -500.0, "VIP");

let vetPessoas = [func, cli1, cli2, test/*conta1, conta2*/];

console.log("\nNomes das Pessoas:\n");
vetPessoas.forEach( (objPessoa) => {
    console.log(objPessoa.toString());
    //objPessoa.categoria = "VIP";
    //console.log(objPessoa.categoria + " - " + objPessoa.constructor.name);
});

console.log(vetPessoas[0]);
