import { Funcionario } from "./Funcionario.js";
import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Pessoa } from "./Pessoa.js";

const inFiltrNome = document.getElementById("inFiltrNome");
const btOk = document.getElementById("btOk");
const btViraMes = document.getElementById("btViraMes");
const outSaida = document.getElementById("outSaida");

btOk.addEventListener('click', filtrarPorNome);
btViraMes.addEventListener('click', viraMes);

var pessoa1 = new Pessoa("Renato", "12334567789", "10/10/2010");
var pessoa2 = new Pessoa("Daniel", "34239482374", "09/09/2009");
//var conta = new Conta("Bruno", 100, undefined, undefined, undefined, undefined)
var contaCorrente1 = new ContaCorrente("Daniel", 200, undefined, undefined, undefined, undefined);
var contaCorrente2 = new ContaCorrente("Archimedes", 2, undefined, undefined, undefined, undefined);
var contaPoup1 = new ContaPoupanca("Renatovisk", 200, undefined, 0.5);
var contaPoup2 = new ContaPoupanca("Heloisa", 100, undefined, 1.0);

var vetClientesBanco = [pessoa1, pessoa2];
var vetContasBanco = [contaCorrente1, contaCorrente2, contaPoup1, contaPoup2];

//conta.transferir(1, contaCorrente1);
contaCorrente1.transferir(100, contaCorrente2);

function filtrarPorNome(titular) {
    const nomeFiltrado = inFiltrNome.value.toUpperCase();
    const resultado = vetContasBanco.filter(vetContasBanco => vetContasBanco.titular.toUpperCase().includes(nomeFiltrado)).join("\n");
    outSaida.innerHTML = resultado;
}

function viraMes() {
    outSaida.innerHTML = "";
    vetContasBanco.forEach((conta) => conta.viraMes());
    vetContasBanco.forEach((conta) => {
    outSaida.innerHTML += (`${conta.titular} tem o novo saldo de: ${conta.saldo.toFixed(2)} reais` + "<br>");
    });
}

console.log("\nNomes das Pessoas:\n");
vetClientesBanco.forEach((pessoa) => {
    console.log(pessoa.toString());
    //objPessoa.categoria = "VIP";
    //console.log(objPessoa.categoria + " - " + objPessoa.constructor.name);
});

console.log("\nContas Banco:\n");
vetContasBanco.forEach((conta) => {
    console.log(conta.toString());
});