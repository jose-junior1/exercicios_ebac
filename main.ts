function multiplicaNumero(numeroA: number, numeroB: number): number {
    return numeroA * numeroB;
};

function saudacao(nome: string) {
    return `Olá ${nome}`;
};

const resultadoMultiplicao = multiplicaNumero(10, 5);
console.log(resultadoMultiplicao);

const saudando = saudacao('Maria');
console.log(saudando);