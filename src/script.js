function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(peso) || isNaN(altura) || altura === 0) {
      resultado.innerHTML = "<strong>Erro:</strong> Preencha os campos corretamente.";
      return;
    }
  
    const imc = peso / (altura * altura);
    let classificacao = "";
  
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade grau I";
    } else if (imc < 39.9) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }
  
    resultado.innerHTML = `<strong>Resultado:</strong><br>
      Seu IMC é ${imc.toFixed(1)}<br>
      Classificação: ${classificacao}`;
  }
  