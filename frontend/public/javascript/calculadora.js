let funcionPredeterminada = () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        let valorPorHora = parseFloat(document.getElementById("valorPorHora").value);
        let interfazHoras = parseFloat(document.getElementById("interfazHoras").value);
        let complejidadHora = parseFloat(document.getElementById("complejidadHoras").value);
        let adicionalesCantidad = parseFloat(document.getElementById("adicionalesCantidad").value);
        let cambiosCantidad = parseFloat(document.getElementById("cambiosCantidad").value);

        let resultado = (valorPorHora * interfazHoras) + (valorPorHora * complejidadHora) + (valorPorHora * (adicionalesCantidad * 0.7)) + (valorPorHora * (cambiosCantidad * 0.5   ));
        document.getElementById("valorTotal").value = resultado;
    }
    )
}

funcionPredeterminada();