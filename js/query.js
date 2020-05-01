
$('#query').click(function(event){
    event.preventDefault();
    
    var ajaxRequest =$.ajax({
        type:'POST',
        url:'./querydb.php',
        dataType:'json',
        data:{id:sessionStorage.getItem('userId')}
    });

        /*
            se success == false
            error(
            'db' => true, 

            se success == true
            form_data
            'success' => true,
            'posted' => 'Stringa',
            'data' => materia, nome_prof, aula, data, voto, descrizione.
            
        */
        ajaxRequest.done(function(return_data){
            if(return_data.success){
                console.log(return_data.data);
            }
            else{
                alert("Errore con il database, riprovare!");
            }
        });

        ajaxRequest.fail(function(return_data){
            alert("Errore con il server, riprovare!");
        });
    
});