/*
function comparar() {
    let a = parseFloat(window.document.getElementById('campo-a').value);
    let b = parseFloat(window.document.getElementById('campo-b').value); 

    if (a >= b) {
        alert('Erro, o campo A deve ser menor que o campo B, verifique os dados e tente novamente!');
    } else {
        let success = window.document.getElementById('retorno')

        success.innerHTML = `<p>Sucesso! O valor do campo A é menor que o valor do campo B!</p>`;
    }
}
*/

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    let a = parseFloat(document.getElementById('campo-a').value);
    let b = parseFloat(document.getElementById('campo-b').value);

    if (isNaN(a) || isNaN(b)) {
        alert('Por favor, insira valores válidos em ambos os campos.');
        return;
    }

    if (a >= b) {
        alert('Erro, o campo A deve ser menor que o campo B, verifique os dados e tente novamente!');
    } else {
        let success = document.getElementById('retorno');
        success.innerHTML = `<p>Sucesso! O valor do campo A é menor que o valor do campo B!</p>`;
    }
});

console.log()