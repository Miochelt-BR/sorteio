document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sortear-button").addEventListener("click", function() {
        var minimo = parseInt(document.getElementById('minimo').value);
        var maximo = parseInt(document.getElementById('maximo').value);

        if (isNaN(minimo) || isNaN(maximo)) {
            alert("Por favor, insira valores numéricos válidos para o mínimo e o máximo.");
            return;
        }

        if (minimo >= maximo) {
            alert("O valor mínimo deve ser menor que o valor máximo.");
            return;
        }

        var numeroSorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        document.getElementById('resultado').innerText = "Número Sorteado: " + numeroSorteado;
    });
});
