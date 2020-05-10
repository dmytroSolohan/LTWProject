
$(document).ready(function(){

    var num = [true, true, true, true];

    function set(input){
        
        num[input] = false;

        var ajaxRequest =$.ajax({
            type:'POST',
            url:'./querydb.php',
            dataType:'json',
            data:{id:sessionStorage.getItem('userId'), in:input}
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

                switch(input)
                {
                    case 0:
                        $.each(return_data.data, function (i, item) {
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1]
                                + '</td><td>' + item[2]
                                + '</td><td>' + item[3]
                                + '</td><td>' + item[4]
                                + '</td><td>' + item[5] + '</td></tr>';
                        });
                        $('#records_tutto').append(trHTML);
                        num[0] = false;
                    break;

                    case 1:
                        $.each(return_data.data, function (i, item) {
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1]
                                + '</td><td>' + item[2] + '</td></tr>';
                        });
                        $('#records_prof').append(trHTML);
                        num[1] = false;            
                    break;

                    case 2:
                        $.each(return_data.data, function (i, item) {
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1] + '</td></tr>';
                        });
                        $('#records_materia').append(trHTML);
                        num[2] = false;           
                    break;

                    case 3:
                        $.each(return_data.data, function (i, item) {
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1] + '</td></tr>';
                        });
                        $('#records_voti').append(trHTML);
                        num[3] = false;          
                    break;

                    default:
                        alert("Errore richiesta !");
                    break;
                }
            }
            else{
                alert(return_data.posted);
            }
        });

        ajaxRequest.fail(function(return_data){
            alert("Errore con il server, riprovare!");
        });
    
    }

    $('#list-tutto-l').click(function(event){
        event.preventDefault();
        if(num[0])
            set(0);
    });

    $('#list-professori-l').click(function(event){
        event.preventDefault();
        if(num[1])
            set(1);
    });

    $('#list-materia-l').click(function(event){
        event.preventDefault();
        if(num[2])
            set(2);
    });

    $('#list-voti-l').click(function(event){
        event.preventDefault();
        if(num[3])
            set(3);
    });

});