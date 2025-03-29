const script_do_google = "SUA_URL_DO_GOOGLE_APPS_SCRIPT";
const dados_do_formulario_HTML = document.forms["formulario-contato"];

dados_do_formulario_HTML.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(dados_do_formulario_HTML);

    fetch(script_do_google, { 
        method: "POST",
        body: formData 
    })
    .then(response => response.text()) // Converte a resposta para texto
    .then(data => {
        console.log("Resposta do servidor:", data); // Exibe a resposta do servidor no console
        if (data.includes("sucesso")) { 
            alert("Dados enviados com sucesso!");
            dados_do_formulario_HTML.reset();
        } else {
            alert("Houve um problema no envio. Verifique o console.");
        }
    })
    .catch(error => {
        alert("Erro no envio dos dados! Tente novamente.");
        console.error("Erro no envio dos dados:", error);
    });
});