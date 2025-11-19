import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    #tarifa;
    #limiteCredito;
    #juros;
    #saldoDevedor;

    constructor(id, saldo, titular, tarifa = 17.5, limiteCredito = 100, juros = 0.1, saldoDevedor = 0) {
        super(id, saldo, titular);
        this.#tarifa = tarifa;
        this.#limiteCredito = limiteCredito;
        this.#juros = juros;
        this.#saldoDevedor = saldoDevedor;
    }

    get limiteCredito() {
        return this.#limiteCredito;
    }

    get saldoDevedor(){
        return this.#saldoDevedor
    }

    depositar(valor) {
        if (valor >= this.#saldoDevedor) {
            const sobra = valor - this.#saldoDevedor;
            this.#saldoDevedor -= this.#saldoDevedor;
            super.depositar(sobra);
            return true;
        } else {
            valor += super.saldo;
            super.depositar(super.depositar);
            this.saldo += saldo;
        }
        return false;
    }

    sacar(valor) {
        if (valor <= (super.saldo + this.#limiteCredito - this.#saldoDevedor)) {
            if (!super.sacar(valor)) {
                valor -= super.saldo;
                super.sacar(super.saldo)
                this.#saldoDevedor += valor;
            }
            return true;
        }
        return false;
    }

    limiteDisponivel(){
        if(this.#saldoDevedor >= this.limiteCredito){
            return (-this.#saldoDevedor);
        }else{
            return super.saldo + (this.#limiteCredito - this.#saldoDevedor);
        }

    }


    viraMes(){
        const somaDebito = this.#juros * this.#saldoDevedor + this.#tarifa;
        if(super.saldo <= somaDebito){
            const sobra = somaDebito - super.saldo;
            super.sacar(super.saldo);
            this.#saldoDevedor += sobra;
        }else{
            super.sacar(somaDebito);
        }
    }


    toString() {
        return (super.toString() +
            "\nTarifa: " + this.#tarifa +
            "\nLimite de Crédito: " + this.#limiteCredito +
            "\nJuros: " + this.#juros +
            "\nSaldo Devedor: " + this.#saldoDevedor);
    }
}
