import {Pessoa} from "./Pessoa.js";

export class Conta {
    static #qtdContas = 0;
    #id;
    #saldo;
    #titular;

    constructor(cliente, saldo = 0.0){
        this.titular = cliente;

        if(saldo < 0){
            this.#saldo = 0;
        } else {
            this.#saldo = saldo;
        }

        Conta.#qtdContas++;
        this.#id = ""+ new Date().getFullYear() + Conta.#qtdContas;
    }

    static get qtdContas(){
        return Conta.#qtdContas;
    }

    get id(){
        return this.#id;
    }

    get titular(){
        return this.#titular
    }

    set titular(cliente){
        if(cliente != undefined || cliente instanceof Pessoa){
            this.#titular = cliente;
        }
    }


    depositar(valor) {
        if(valor > 0){
            this.#saldo += valor;
            return true;
        }
        return false;
    }

    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
            return true;
        }
        return false;
    }

    transferir(valor, contaDestino){
        if(contaDestino instanceof Conta && this.sacar(valor)){
            //this.sacar(valor);
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }

    toString() {
        return ("\nID: " + this.#id +
        "\nSaldo: " + this.#saldo +
        "\nTitular: " + this.#titular);
    }
}