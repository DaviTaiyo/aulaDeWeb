document.getElementById("loginForm").addEventListener("submit" , function(event) {
    event.preventDefault();

    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    const mensagem = document.getElementById("mensagem");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        mensagem.textContent = "Login bem-sucedido";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Usuario ou senha incorreta";
        mensagem.style.color = "red";
    }
});