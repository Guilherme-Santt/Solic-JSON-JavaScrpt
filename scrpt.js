function procurar(){
   let input = document.getElementById("CEP").value

   const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/?callback=callback_name');
    ajax.send();
    ajax.onload = function(){
        document.getElementById("infoCEP").innerHTML = this.responseText;
        
    }
}

