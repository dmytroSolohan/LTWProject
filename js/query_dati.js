
$(document).ready(function(){
    
            var ajaxRequest =$.ajax({
            type:'POST',
            url:'./query_dati.php',
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
            'data' => array( insieme di variabili);
            
        */
        ajaxRequest.done(function(return_data){
            if(return_data.success){

                var trHTML = '';
                        $.each(return_data.data, function (i) {
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1]
                                + '</td><td>' + item[2]
                                + '</td><td>' + item[3]
                                + '</td><td>' + item[4]
                                + '</td><td>' + item[5]
                                + '</td><td>' + item[6]
                                + '</td><td>' + item[7]
                                + '</td><td>' + item[8]
                                + '</td><td>' + item[9]
                                + '</td><td>' + item[10] + '</td></tr>';
                        });
                        $('#records_dati').append(trHTML);
                    
                }else{
                alert(return_data.posted);};
            
        ajaxRequest.fail(function(return_data){
            alert("Errore con il server, riprovare!");
        });

        $('list-dati-l').click(function(event){
        event.preventDefault();
        if(num[0])
            set(0);
    });

    });

});

});