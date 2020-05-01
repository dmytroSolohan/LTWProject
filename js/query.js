
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
            'data' => array($materia, $prof, $aula, $data, $voto, $descrizione);
            
        */
        ajaxRequest.done(function(return_data){
            if(return_data.success){
                
                var trHTML = '';
                $.each(return_data.data, function (i, item) {
                trHTML += '<tr><td>' + item.materia 
                        + '</td><td>' + item.prof 
                        + '</td><td>' + item.aula 
                        + '</td><td>' + item.data 
                        + '</td><td>' + item.voto 
                        + '</td><td>' + item.descrizione + '</td></tr>';
                });
                $('#data').append(trHTML);

            }
            else{
                alert("Errore con il database, riprovare!");
            }
        });

        ajaxRequest.fail(function(return_data){
            alert("Errore con il server, riprovare!");
        });
    
});