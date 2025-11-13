import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    #tarifa;
    #limiteCredito;
    #juros;
    #saldoDevedor;

    constructor(id, saldo, titular, tarifa = 17.5, limiteCredito = 0, juros = 3.12, saldoDevedor = 0) {
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
        } else if (this.#limiteCredito == undefined) {
            this.#limiteCredito = 0;
        }
    }

    get saldoDevedor(){
        return this.#saldoDevedor
    }

    set saldoDevedor(novoLimiteDevedor){
        if(novoLimiteDevedor > this.#saldoDevedor){
            this.#saldoDevedor = novoLimiteDevedor;
        } else if(this.#saldoDevedor == undefined){
            this.#saldoDevedor = 0;
        }
    }





    depositar(valor) {
        if (valor >= (super.saldo)) {
            if (!super.depositar(valor)) {
                valor += super.saldo;
                super.depositar(super.depositar);
                this.saldo += saldo;
            }
        }
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
        if(this.#limiteCredito > this.#saldoDevedor){
            
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