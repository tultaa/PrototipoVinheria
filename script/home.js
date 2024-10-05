var maiorDeIdade = JSON.parse(localStorage.getItem("MaiorDeIdade"));
if (maiorDeIdade == null){
    localStorage.setItem("MaiorDeIdade", JSON.stringify("N"));
};

if (maiorDeIdade != "S"){
    window.location.href = "../index.html";
};

