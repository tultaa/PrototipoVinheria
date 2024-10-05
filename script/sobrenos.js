var emailRegExp = /\S+@\S+\.\S{3,}/;

var map = L.map('map').setView([-23.503370, -47.147703], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([-23.503370, -47.147703]).addTo(map)
    .bindPopup("Aqui estou!")
    .openPopup();
window.addEventListener('resize', function() {
    map.invalidateSize();
});


const email = document.querySelector('.form-nome');
const texto = document.querySelector('.form-text');
const botao = document.querySelector('.form-botao');

botao.addEventListener('click', function() {
    if (email.value == "" || texto.value == "") {
        event.preventDefault()
        alert("Preencha todos os campos!");
        return false;
    } else if (!emailRegExp.test(email.value)){
        event.preventDefault()
        alert("Por favor, informe um e-mail válido.")
    }else{
        alert("Mensagem enviada com sucesso!");
    }
});