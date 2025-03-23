
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// Função para alternar as classes ativas no menu
function toggleActiveMenuItem(event) {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
}

// Adicionando o evento de clique no botão de menu
document.getElementById('menu-button').addEventListener('click', toggleMenu);

// Adicionando os eventos de clique nos itens do menu
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', toggleActiveMenuItem);
});

const script_do_google ="https://script.google.com/macros/s/AKfycbxd1w7oR2dsQ_6mOOtLPIYtMIc7sy7K5ofyNjaICestunksisOTWNvK1Me1NWSabG0l/exec" ;
const dados_do_formulario_HTML = document.forms["formulario-contato"];

dados_do_formulario_HTML.addEventListener('submit',function (e) {
e.preventDefault();

fetch (script_do_google, { method:"post",body:new FormData(dados_do_formulario_HTML)})
.then (response => {  
    //se os dados forem gravados corretamente ,será enviada uma mensagem de sucesso//
    alert ('dados enviados com sucesso!'),
dados_do_formulario_HTML. reset();
})
.catch (error=>
    //se houver erro  no envio,a mensagem abaixo sera exibida
    console.error('error no envio dos dados !',error))
});





