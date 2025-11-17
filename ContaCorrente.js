import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    #tarifa;
    #limiteCredito;
    #juros;
    #saldoDevedor;

    constructor(id, saldo, titular, tarifa = 17.5, limiteCredito = 100, juros = 3.12, saldoDevedor = 0) {
        super(id, saldo, titular);
        this.#tarifa = tarifa;
        this.limiteCredito = limiteCredito;
        this.#juros = juros;
        this.saldoDevedor = saldoDevedor;
    }

    get limiteCredito() {
        return this.#limiteCredito;
    }

    set limiteCredito(novoLimite) {
        if (novoLimite >= 0) {
            this.#limiteCredito = novoLimite;
        } else if (this.#limiteCredito == null) {
            this.#limiteCredito = 0;
        }
    }

    get saldoDevedor(){
        return this.#saldoDevedor
    }

    /*set saldoDevedor(novoLimiteDevedor){
        if(novoLimiteDevedor > this.#saldoDevedor){
            this.#saldoDevedor = novoLimiteDevedor;
        } else if(this.#saldoDevedor == undefined){
            this.#saldoDevedor = 0;
        }
    }*/

    depositar(valor) {
        if (valor > 0) {
            if (!super.depositar(valor)) {
                valor += super.saldo;
                super.depositar(super.depositar);
                this.saldo += saldo;
            }
            return true;
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
        if(this.#saldoDevedor >= this.#limiteCredito){
            return "Seu débito ultrapassou seu limite de crédito, você deve " + this.#saldoDevedor;
        }else{
            return super.saldo + this.#limiteCredito;
        }

    }


    viraMes(){
        //const somaDebito = this.#juros * this.#saldoDevedor + this.#tarifa;
        const somaDebito = this.#juros + this.#tarifa; // está errado
        if(super.saldo <= somaDebito){
            const sobra = somaDebito - super.saldo;
            super.sacar(super.saldo);//super.sacar(somaDebito - sobra);
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
