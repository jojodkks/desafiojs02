function nome(){

   let nome = window.prompt('Digite seu Nome;')
   let n1 = Number(window.prompt('Digite a nota 1;'))
   let n2 = Number(window.prompt('Digite a nota 2;'))
   let n3 = Number(window.prompt('Digite a nota 3;'))
   somarMedia = (n1+n2+n3)/3
   document.getElementById('media').innerHTML = `${nome} sua média foi ${somarMedia}` 
   


if(somarMedia>= 6){
alert ('PARABÉNS, PARECE QUE VOCÊ FOI APROVADO');
}
else{
alert ('Parece que voce foi reprovado')
}

}