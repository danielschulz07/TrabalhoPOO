import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    #rendimento;

    constructor(id, saldo, titular, rendimento) {
        super(id, saldo, titular);
        this.#rendimento = rendimento;
    }

//não sei como vai funcionar a questao de rendimento e vira mes

}