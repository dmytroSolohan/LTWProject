
$('#list-tutto-l').click(function(event){
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
                trHTML += '<tr><td>' + item[0]
                    + '</td><td>' + item[1]
                    + '</td><td>' + item[2]
                    + '</td><td>' + item[3]
                    + '</td><td>' + item[4]
                    + '</td><td>' + item[5] + '</td></tr>';
            });
            $('#records_tutto').append(trHTML);

            }
            else{
                alert("Errore con il database, riprovare!");
            }
        });

        ajaxRequest.fail(function(return_data){
            alert("Errore con il server, riprovare!");
        });
    
});