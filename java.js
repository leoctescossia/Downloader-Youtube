const botao = document.getElementById('click')
const link = document.getElementById('url-1')


botao.addEventListener("click", clicou)
//console.log(link.value)


function clicou(){
    console.log(`URL : ${link.value}`);
    sendURL(link.value);
}

function sendURL(URL){
    window.location.href = `http://localhost:3000/download?URL=${URL}`;
}


const direcionamentos = document.querySelectorAll('.cabecalho a')


direcionamentos[0].onclick = function (){
    window.open('/pagina-web/html/home.html', '_blank')
}
direcionamentos[1].onclick = function (){
    window.open('https://www.youtube.com/watch?v=gwAuvX9i8yQ', '_blank')
}
direcionamentos[2].onclick = function (){
    window.open('https://www.youtube.com/watch?v=gwAuvX9i8yQ', '_blank')
}
direcionamentos[3].onclick = function (){
    window.open('https://www.youtube.com/watch?v=gwAuvX9i8yQ', '_blank')
}
direcionamentos[4].onclick = function (){
    window.open('https://www.youtube.com/watch?v=gwAuvX9i8yQ', '_blank')
}


const direcionamentos_segundo = document.querySelectorAll('.rodape span')

direcionamentos_segundo[0].onclick = function (){
    window.location.href = '/pagina-web/index.html'
}
direcionamentos_segundo[1].onclick = function (){
    window.open('/pagina-web/html/creditos.html', '_blank')
}
direcionamentos_segundo[2].onclick = function (){
    window.open('https://www.youtube.com/watch?v=gwAuvX9i8yQ', '_blank')
}
direcionamentos_segundo[3].onclick = function (){
    window.open('https://www.youtube.com/watch?v=gwAuvX9i8yQ', '_blank')
}



