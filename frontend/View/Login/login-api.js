
function fazerLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, senha })
  })
  .then(res => {
    if (!res.ok) throw new Error("Credenciais inválidas");
    return res.json();
  })
  .then(data => {
    mensagem.innerText = data.mensagem;
    mensagem.style.color = "green";
  })
  .catch(err => {
    mensagem.innerText = err.message;
    mensagem.style.color = "red";
  });
}
