function Veiculo(modelo, variante, fabricante, anoModelo) {
    this.modelo = modelo;
    this.variante = variante;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.acelerar = function() {
        return 'Vruuuuuum';
    };
    this.buzinar = function() {
        return "Bi biiiiiiiiii"
    };
    this.getTipoVeiculo = function() {
        return this.tipo;
    };
};

Veiculo.prototype.getDescricao = function() {
    return `O veículo ${this.modelo} ${this.variante}, é um(a) ${this.getTipoVeiculo()}.`;
};

function Carro(modelo, variante, fabricante, anoModelo) {
    Veiculo.call(this, modelo, variante, fabricante, anoModelo);
    this.tipo = "Carro";

};

Carro.prototype.getDescricao = function() {
    return `O veículo ${this.modelo} ${this.variante}, é um ${this.getTipoVeiculo()}.`;
};

function Moto(modelo, variante, fabricante, anoModelo) {
    Veiculo.call(this, modelo, variante, fabricante, anoModelo);
    this.tipo = "Moto";
};

Moto.prototype.getDescricao = function() {
    return `Essa moto é uma ${this.modelo} ${this.variante}, da ${this.fabricante}.`;
};

const carroDoJose = new Carro("Corsa", "Wind", "Chevrolet", 1998);
const motoDoJose = new Moto("Titan", "160", "Honda", 2020);
const carroNovoJose = new Carro("Ônix", "Joy", "Chevrolet", 2018);

console.log(carroDoJose);
console.log(motoDoJose); 
console.log(carroNovoJose);

console.log(motoDoJose.getDescricao());
console.log(carroDoJose.getDescricao());
console.log(carroNovoJose.getDescricao());
