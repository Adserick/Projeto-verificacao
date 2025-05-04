
function calcularMedia(){ 

   const n1 = parseFloat (document.getElementById('valor').value);
   const n2 =parseFloat( document.getElementById('valor2').value);
   const n3 =parseFloat( document.getElementById('valor3').value);
   const n4 =parseFloat( document.getElementById('valor4').value);
   const redacao =parseFloat( document.getElementById('valor5').value);
   const res = document.getElementById('Resultado');
   const regiaoNorte = document.getElementById('norte');
   let mediaFinal;
  
   if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) || isNaN(redacao)) {
   res.innerHTML = `Por favor, insira apenas números válidos em todos os campos.`;
   res.style.color = 'red'
   return;
  }
  
  
  
  let soma = n1 + n2 + n3 + n4 + redacao;
  let media = soma / 5;
  mediaFinal = media;
  
  if (regiaoNorte.checked) {
    mediaFinal = media * 1.10; //Adiciona 10% se a região Norte estiver selecionada
  }

  if (mediaFinal >= 450) {
    res.innerHTML = `A sua nota de corte é ${mediaFinal.toFixed(2)}, você pode concorrer no sisu e prouni !!`;
     res.style.color = 'green'

  } else { 
    res.innerHTML = `A sua nota de corte é ${mediaFinal.toFixed(2)}, você precisa melhorar para concorrer no sisu e prouni.`;
    res.style.color = 'red'
  }
 
}

function limpaNotas(){

  document.getElementById('valor').value = ''
  document.getElementById('valor2').value = ''
  document.getElementById('valor3').value = ''
  document.getElementById('valor4').value = ''
  document.getElementById('valor5').value = ''
  document.getElementById('Resultado').innerHTML = ''
  document.getElementById('norte').checked = false
}

function norte() {
    console.log("Usuário da região Norte selecionado.");
}