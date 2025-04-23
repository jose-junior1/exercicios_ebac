const alunos = [
    {nome: 'João', nota: 6},
    {nome: 'Maria', nota: 9},
    {nome: 'José', nota: 10},
    {nome: 'Patrick', nota: 5},
    {nome: 'Elisângela', nota: 7},
    {nome: 'Ademir', nota: 9},
    {nome: 'Pedro', nota: 3},
    {nome: 'Renato', nota: 4}
];

function alunosAprovados(array) {
    return array.filter(aluno => aluno.nota >= 6);
};

console.log(alunosAprovados(alunos));