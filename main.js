document.addEventListener('DOMContentLoaded', async function() {
    const element_avatar = document.querySelector('#avatar');
    const element_name = document.querySelector('#name');
    const element_userName = document.querySelector('#username');
    const element_repository = document.querySelector('#repository');
    const element_followers = document.querySelector('#followers');
    const element_following = document.querySelector('#following');
    const element_link = document.querySelector('#link');

    try {
        const response = await fetch('https://api.github.com/users/jose-junior1');
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const json = await response.json();

        if (element_avatar) element_avatar.src = json.avatar_url || "https://placehold.co/180x180";
        if (element_name) element_name.innerText = json.name || "Nome não disponível";
        if (element_userName) element_userName.innerText = json.login || "Usuário não disponível";
        if (element_repository) element_repository.innerText = json.public_repos ?? "0";
        if (element_followers) element_followers.innerText = json.followers ?? "0";
        if (element_following) element_following.innerText = json.following ?? "0";
        if (element_link) {
            element_link.href = json.html_url || "#";
            element_link.innerText = "Ver no GitHub";
        }
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
});
