import {Funcionario} from "./Funcionario.js";
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { Pessoa } from "./Pessoa.js";

var pessoa1 = new Pessoa("Renato", "12334567789","10/10/2010");
var pessoa2 = new Pessoa("Daniel", "34239482374", "09/09/2009");

var contaCorrente1 = new ContaCorrente("Dadiel", 100, undefined, undefined, undefined, undefined);
var contaPoup1 = new ContaPoupanca("Rentovisk", 200, undefined, 0.5);


var vetClientesBanco = [pessoa1, pessoa2];
var vetContasBanco = [contaCorrente1, contaPoup1];

vetContasBanco.forEach((conta)=>conta.viraMes());

//contaCorrente1.depositar(1000)













console.log("\nPessoas:\n");
vetClientesBanco.forEach( (pessoa) => {
    console.log(pessoa.toString());
    //objPessoa.categoria = "VIP";
    //console.log(objPessoa.categoria + " - " + objPessoa.constructor.name);
});

console.log("\nContas Banco:\n");
vetContasBanco.forEach( (conta) => {
    console.log(conta.toString());
});