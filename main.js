$(document).ready(function() {
    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endPoint = `https://viacep.com.br/ws/${cep}/json/`;
        const buscar = $(this)

        $(buscar).find('i').addClass('d-none');
        $(buscar).find('span').removeClass('d-none');

        fetch(endPoint)
            .then(function(resposta) {
                if (!resposta.ok) {
                    throw new Error('Erro ao buscar CEP!');
                }
                return resposta.json();
            })
            .then(function(json) {
                if(json.erro){
                    throw new Error('CEP inválido!')
                }
                
                const logradouro = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.localidade;
                const estado = json.uf;
                const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`
                $('#endereco').val(endereco);
            })
            .catch(function(erro) {
                alert('Ocorreu um erro ao buscar o endereço, tente nomamente mais tarde!')
            })
            .finally(function() {
                setTimeout(function() {
                    $(buscar).find('i').removeClass('d-none');
                    $(buscar).find('span').addClass('d-none');
                }, 700)
            })
    });

    $('#formulario-pedido').submit(function(evento) {
        evento.preventDefault();

        try {
            let nome = $('#nome').val();
            let sobrenome = $('input[placeholder="Sobrenome"]').val();
            let email = $('input[placeholder="E-mail"]').val().trim();
            let cep = $('#cep').val().trim();
            let endereco = $('#endereco').val().trim();
            let numero = $('input[placeholder="Número"]').val().trim();

            if (nome.length == 0) {
                throw new Error('Digite o nome');
            }

            if (sobrenome.length == 0) {
                throw new Error('Digite o sobrenome');
            }

            if (email.length == 0 || !email.includes('@')) {
                throw new Error('Digite um e-mail válido');
            }

            if (cep.length != 9) {
                throw new Error('Digite um CEP válido (00000-000)');
            }

            if (endereco.length == 0) {
                throw new Error('Preencha o endereço');
            }

            if (numero.length == 0 || parseInt(numero) <= 0) {
                throw new Error('Digite um número válido');
            }

            alert('Formulário enviado com sucesso!');
        } catch (erro) {
            alert(erro.message);
        }
    });
});