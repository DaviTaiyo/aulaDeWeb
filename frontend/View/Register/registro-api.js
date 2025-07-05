
function registrarUsuario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  fetch("http://localhost:3000/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, email, senha })
  })
  .then(res => res.json())
  .then(data => {
    if (data.mensagem) {
      mensagem.innerText = data.mensagem;
      mensagem.style.color = "green";
    } else {
      mensagem.innerText = "Erro inesperado.";
      mensagem.style.color = "red";
    }
  })
  .catch(err => {
    mensagem.innerText = "Erro ao conectar com a API.";
    mensagem.style.color = "red";
  });
}
