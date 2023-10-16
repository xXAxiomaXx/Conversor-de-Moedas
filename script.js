const btn = document.getElementById("button")
btn.addEventListener("click",function() {
    var valor = document.getElementById("valor").value;

    if(document.getElementById('moeda').value == "dolar"){
        valor = valor * 5.05
        console.log(valor)
    }
    else if(document.getElementById('moeda').value == "euro"){
        valor = valor * 5.31
    }
    else if(document.getElementById('moeda').value == "libra"){
        valor = valor * 6.13
    }
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é R$ " + (valor.toFixed(2));
    elementoValorConvertido.innerHTML = valorConvertido;
  }


)
  