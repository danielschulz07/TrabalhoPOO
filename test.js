import {Funcionario} from "./Funcionario.js";
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { Pessoa } from "./Pessoa.js";

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


let contaCorrente1 = new ContaCorrente("DAdiel", 1, "22222222", undefined, undefined, undefined,)

let contaPoup1 = new ContaPoupanca("bomdia", 200, undefined,0.5);

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

let conta = new Conta("marcos",99999999999);

let vetPessoas = [func, cli1, cli2, contaCorrente1, contaPoup1, conta/*conta1, conta2*/];

//contaPoup1.transferir(100,contaCorrente1);
contaPoup1.viraMes();
contaPoup1.viraMes();
//conta.transferir(1,contaCorrente1);
//contaCorrente1.transferir(202,contaCorrente1);
//test.viraMes();
contaCorrente1.sacar(100);
//contaCorrente1.viraMes();
alert(contaCorrente1.limiteDisponivel());


console.log("\nNomes das Pessoas:\n");
vetPessoas.forEach( (objPessoa) => {
    console.log(objPessoa.toString());
    //objPessoa.categoria = "VIP";
    //console.log(objPessoa.categoria + " - " + objPessoa.constructor.name);
});

console.log(vetPessoas[0]);

var pessoa1 = new Pessoa("Renato", "12334567789","10/10/2010");
var pessoa2 = new Pessoa("Daniel", "34239482374", "09/09/2009");

var vetClientesBanco = [pessoa1, pessoa2];
var vetContasBanco = [contaCorrente1, contaPoup1];

vetContasBanco.forEach((conta)=>conta.viraMes());



console.log("\nNomes das Pessoas:\n");
vetPessoas.forEach( (objPessoa) => {
    console.log(objPessoa.toString());
    //objPessoa.categoria = "VIP";
    //console.log(objPessoa.categoria + " - " + objPessoa.constructor.name);
});