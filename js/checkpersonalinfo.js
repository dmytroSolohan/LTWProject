$(document).on("submit" , "#modifica-dati", function(event){
        event.preventDefault();

        var ID = sessionStorage.getItem("userId")
        var username = $('#username').val();
        var nome = $('#nome').val();
        var cognome = $('#cognome').val();
        var data_nascita = $('#data_nascita').val();
        var indirizzo = $('#indirizzo').val();
        var citta = $('#citta').val();
        var paese = $('#paese').val();
        var telefono = $('#telefono').val();
        var email = $('#email').val();



        console.log(ID);
        console.log(username);
        console.log(nome);
        console.log(cognome);
        console.log(data_nascita);
        console.log(indirizzo);
        console.log(citta);
        console.log(paese);
        console.log(telefono);
        console.log(email);

        
            var ajaxRequest =$.ajax({
                    type:'POST',
                    url:'./updatepersonalinfo.php',
                    dataType:'json',
                    data:{ID:ID,username:username,nome:nome,cognome:cognome,data_nascita:data_nascita,indirizzo:indirizzo,citta:citta,
                        paese:paese, telefono:telefono, email:email}
            });
            
            ajaxRequest.done(function(return_data){
                if(return_data.success){
                    alert("Dati modificati correttamente");
                }
                else{
                    alert(return_data.posted);
                }
            });
            ajaxRequest.fail(function(return_data){
                alert("Errore con il server, riprovare!");
            });
        
        
    });
