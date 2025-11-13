import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    #rendimento;

    constructor(id, saldo, titular, rendimento = 0.1) {
        super(id, saldo, titular);
        this.#rendimento = rendimento;
    }

    viraMes(){
        super.depositar(super.saldo * this.#rendimento);
    }


    toString() {
        return (super.toString() +
            "\nTarifa: " + this.#rendimento);
    }

//não sei como vai funcionar a questao de rendimento e vira mes

}