

function MudarHeader() {
    
    let valorAnterior = document.querySelector("#HeaderPrincipal").innerText;

    valorAnterior = valorAnterior + ' / ' + document.getElementById("InputHeader").value;

    document.querySelector("#HeaderPrincipal").innerText = valorAnterior;
}