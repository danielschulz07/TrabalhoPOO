import {Funcionario} from "./Funcionario.js";
import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";


const inCliente = document.getElementById("inCliente");
const inValor = document.getElementById("inValor");
const btOk = document.getElementById("btOk");
const outResultado = document.getElementById("outResultado");
const selectOpcao = document.getElementById("selectOpcao");
const sectionResultado = document.querySelector(".sectionResultado");

//btOk.addEventListener('click', executarFunc);

selectOpcao.addEventListener("change", function () {
    let opcao = selectOpcao.value;

    if (opcao != "") {
        verificarOpcao(opcao);
    }
});

function executarFunc(){

}












let func = new Funcionario("12345", "Rivaldo", "123.456.789-12", "01/01/2001", 1200.00);
//Executando no debug, observe como funciona o método constructor da classe Funcionario


let cli1 = new Cliente("Roberto Carlos", "987.654.321-00", "02/02/2002");
let cli2 = new Cliente("Zico", "654.321.987-11", "03/03/2003", 500, -500.0, "VIP");



let test = new ContaCorrente("DAdiel", 2000, undefined, undefined, "0", undefined, "-20000")



let vetPessoas = [func, cli1, cli2, test/*conta1, conta2*/];



console.log("Dados do Funcionario:\n" + func);//("Dados do Funcionario:\n" + func.toString());
//Observe com o debug, que a instrução acima executa o método toString() da subclasse Funcionario,
//que sobrescreve (override) o método de mesmo nome da superclasse Pessoa


console.log("\nNomes das Pessoas:\n");
vetPessoas.forEach( (objPessoa) => {
    console.log(objPessoa.toString());
    //objPessoa.categoria = "VIP";
    //console.log(objPessoa.categoria + " - " + objPessoa.constructor.name);
});