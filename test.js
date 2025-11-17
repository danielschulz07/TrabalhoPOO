import {Funcionario} from "./Funcionario.js";
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { Pessoa } from "./Pessoa.js";

const vetContas = [];


console.log("\nNomes das Pessoas:\n");
for (let i = 0; i < vetContas.length; i++) {

    const contas = vetContas[i];


    console.log(contas)

}

var pessoa1 = new Pessoa("Renato", "12334567789","10/10/2010");
var pessoa2 = new Pessoa("Daniel", "34239482374", "09/09/2009");

var vetClientesBanco = [pessoa1, pessoa2];
var vetContasBanco = [contaCorrente1, contaPoup1];
