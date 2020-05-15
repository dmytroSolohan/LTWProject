
$(document).on("submit" , "#modifica-dati", function(event){
        event.preventDefault();

        var ID = sessionStorage.getItem("userId")
        var nome = $('#nome').val();
        var cognome = $('#cognome').val();
        var data_nascita = $('#data_nascita').val();
        var indirizzo = $('#indirizzo').val();
        var citta = $('#citta').val();
        var paese = $('#paese').val();
        var telefono = $('#telefono').val();
        
        var ajaxRequest =$.ajax({
                type:'POST',
                url:'./updatepersonalinfo.php',
                dataType:'json',
                data:{ID:ID, nome:nome, cognome:cognome, data_nascita:data_nascita, indirizzo:indirizzo, citta:citta, paese:paese, telefono:telefono}
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
