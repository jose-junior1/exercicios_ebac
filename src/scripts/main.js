//Código do projeto anterior

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();

        // Obtém o número máximo e gera um número aleatório
        let numeroMaximo = document.getElementById('numero-maximo');
        numeroMaximo = parseInt(numeroMaximo.value);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        const resultadoDiv = document.querySelector('.resultado');

        resultadoDiv.style.display = 'block';
        requestAnimationFrame(() => {
            resultadoDiv.classList.add('show');
        });

        setTimeout(() => {
            resultadoDiv.classList.remove('show');
            resultadoDiv.addEventListener(
                'transitionend',
                function handler() {
                    resultadoDiv.style.display = 'none';
                    resultadoDiv.removeEventListener('transitionend', handler);
                }
            );
        }, 8000);
    });
});
