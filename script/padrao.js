const stylesheet = document.styleSheets[0];
if (window.innerWidth < 700){
    x = 2.3
}
else{
    x = 1
}

adaptar(x)

window.addEventListener('resize',()=>{
    if (window.innerWidth < 700){
        x = 2.3
    }
    else{
        x = 1
    }
    adaptar(x)
});

function adaptar (x){
    for(let i = 9; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].cssText.includes( "min(")) {
            var matches = stylesheet.cssRules[i].cssText.match(/min\([^)]*\)/g);
            antes = stylesheet.cssRules[i].cssText
            memoria = ""
            for (let j = 0; j < matches.length; j++){
                if (j != 0){
                    antes = memoria
                }
                depois = antes.replace(matches[j] , matches[j].replace(((matches[j].split(", "))[1]).slice(0, -3), (calcularProporcao(((matches[j].split(", "))[0]).slice(4)))))
                memoria = depois
    
            }
            stylesheet.cssRules[i].cssText = memoria
    
            stylesheet.deleteRule(i)
            stylesheet.insertRule(memoria, i)
        }
    }
    function calcularProporcao(tamanhoPX){
            tamanhoVW = ((parseFloat(tamanhoPX) * 100) / 1920) * x;
            return tamanhoVW;
    }
};


const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
const entrarSair = document.querySelector('.entrar-sair');
const areaLoginSingin = document.querySelector('.lista-login-singnin');

if (usuarioLogado != null){
    entrarSair.innerHTML = "Sair";
    areaLoginSingin.innerHTML ="<li id='logout'><a>" + usuarioLogado.nome + " <i class='fas fa-sign-out-alt'></i></a></li>";

    document.querySelector('#logout').addEventListener('click', () => {
        localStorage.removeItem('usuarioLogado');
        window.location.reload();
    });
    
}else{
    entrarSair.innerHTML = "Entrar";
    areaLoginSingin.innerHTML =
   " <li><a href='../pages/login-singin.html'><i class='fas fa-sign-in-alt'></i> Login</a></li>" +
    "<li><a href='../pages/login-singin.html'><i class='fas fa-user-plus'></i> Singn-in</a></li>";
};


const menuLateralCompleto = document.querySelector('.menu-lateral-completo');
const abrirMenu = document.querySelector('.hamburguer');
const fecharMenu = document.querySelector('.menu-lateral-close');

abrirMenu.addEventListener('click', () => {
  menuLateralCompleto.classList.toggle('open');
  menuLateralCompleto.style.animation = 'entrar 0.5s ease-in-out';
});

fecharMenu.addEventListener('click', () => {
  menuLateralCompleto.style.animation = 'sair 0.5s ease-in-out';
  setTimeout(() => {
    menuLateralCompleto.classList.toggle('open');
  }, 500);
});

function calch(px){
    var valor = (px*100)/1080;
    return valor;
  };
  
function calcw(px){
    var valor = (px*100)/1920;
    return valor;
  };
  




