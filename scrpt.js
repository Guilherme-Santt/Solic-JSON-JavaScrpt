function procurar(){
   let input = document.getElementById("CEP").value

   const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/?callback=callback_name');
    ajax.send();

    ajax.onload = function(){
        document.getElementById("infoCEP").innerHTML = this.responseText;
        // let obj = JSON.parse(this.responseText);
        // let logradouro = obj.logradouro;
        // let cidade = obj.localidade;
        // let estado = obj.uf;
        // document.getElementById("infoResumida").innerHTML = "Lougradouro: " + logradouro + "<br>Cidade: " + cidade + "<br>Estado: " + estado;

    }
}

