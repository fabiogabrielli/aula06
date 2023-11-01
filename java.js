

function calcularEmprestimo() {
    var valorEmprestimo = parseFloat(document.getElementById("valorEmprestimo").value);
    var numeroParcelas = parseInt(document.getElementById("numeroParcelas").value);

    var montante = valorEmprestimo * Math.pow((1 + 0.1), numeroParcelas);
    var valorParcela = montante / numeroParcelas;
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = ""; // Limpa o conteúdo anterior

        for (let i = 1; i <= numeroParcelas; i++) {
            resultado.innerHTML += "Parcela " + i + ": R$ " + valorParcela.toFixed(2) + "<br>";
        }


    var modal = document.getElementById("modalEmprestimo");
    modal.style.display = "block";


    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        var modal = document.getElementById("modalEmprestimo");
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        var modal = document.getElementById("modalEmprestimo");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}