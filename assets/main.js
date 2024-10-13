$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#input-nome-tarefa').val().trim();

        if (nomeTarefa) {
            const novoItem = $(`
                <li>
                    <input type="checkbox" class="check" title="Marcar como feita"> <span>${nomeTarefa}</span>
                </li>
            `).hide();

            $('#tarefas').append(novoItem);
            novoItem.fadeIn(500);

            novoItem.find('.check').on('change', function() {
                $(this).next('span').toggleClass('completed');
            });

            $('#input-nome-tarefa').val('');
        }
    });
});