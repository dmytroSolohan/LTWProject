
$(document).ready(function(){

    function set(input){

        var ajaxRequest =$.ajax({
            type:'POST',
            url:'./querydb.php',
            dataType:'json',
            data:{id:sessionStorage.getItem('userId'), in:input}
            });

        ajaxRequest.done(function(return_data){
            if(return_data.success){

                var trHTML = '';

                switch(input)
                {
                    case 'list-tutto-l':
                        trHTML = "";
                        $.each(return_data.data, function (i, item) {

                            /* nuovo  metodo */
                            for(var j = 0; j <= 5; j++)
                            {
                                if(j==0)
                                    trHTML += '<tr><td>' + item[j];
                                else if (j==5)
                                    trHTML += '</td><td>' + item[j] + '</td></tr>';
                                else
                                    trHTML += '</td><td>' + item[j];
                            }
                            /* vecchio metodo
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1]
                                + '</td><td>' + item[2]
                                + '</td><td>' + item[3]
                                + '</td><td>' + item[4]
                                + '</td><td>' + item[5] + '</td></tr>';*/
                        });
                        $('#records_tutto td').remove();
                        $('#records_tutto').append(trHTML);
                    break;

                    case 'list-professori-l':
                        trHTML = "";
                        $.each(return_data.data, function (i, item) {

                            /* nuovo  metodo */
                            for(var j = 0; j <= 2; j++)
                            {
                                if(j==0)
                                    trHTML += '<tr><td>' + item[j];
                                else if (j==2)
                                    trHTML += '</td><td>' + item[j] + '</td></tr>';
                                else
                                    trHTML += '</td><td>' + item[j];
                            }
                            /*                         
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1]
                                + '</td><td>' + item[2] + '</td></tr>';*/
                        });
                        $("#records_prof td").remove();
                        $('#records_prof').append(trHTML);
                    break;

                    case 'list-materia-l':
                        trHTML = "";
                        $.each(return_data.data, function (i, item) {
                            /* nuovo  metodo */
                            for(var j = 0; j <= 1; j++)
                            {
                                if(j==0)
                                    trHTML += '<tr><td>' + item[j];
                                else if (j==1)
                                    trHTML += '</td><td>' + item[j] + '</td></tr>';
                                else
                                    trHTML += '</td><td>' + item[j];
                            }
                            /* vecchio metodo
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1] + '</td></tr>';*/
                        });
                        $("#records_materia td").remove();
                        $('#records_materia').append(trHTML);
                    break;

                    case 'list-voti-l':
                        trHTML = ""; 
                        $.each(return_data.data, function (i, item) {
                            /* nuovo  metodo */
                            for(var j = 0; j <= 1; j++)
                            {
                                if(j==0)
                                    trHTML += '<tr><td>' + item[j];
                                else if (j==1)
                                    trHTML += '</td><td>' + item[j] + '</td></tr>';
                                else
                                    trHTML += '</td><td>' + item[j];
                            }
                            /*  vecchio metodo
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1] + '</td></tr>';*/
                        });
                        $("#records_voti td").remove();
                        $('#records_voti').append(trHTML);
                    break;

                    case 'list-dati-l':
                        trHTML = "";
                        $.each(return_data.data, function (i, item) {
                            /* nuovo metodo */
                            for(var j = 0; j <= 8; j++)
                            {
                                if(j==0)
                                    trHTML += '<tr><td>' + item[j];
                                else if (j==8)
                                    trHTML += '</td><td>' + item[j] + '</td></tr>';
                                else
                                    trHTML += '</td><td>' + item[j];
                            }                            
                            /* vecchio metodo
                            trHTML += '<tr><td>' + item[0] + '</td><td>' + item[1] + '</td><td>' + item[2] + '</td><td>' + item[3]
                                   + '</td><td>' + item[4] + '</td><td>' + item[5] + '</td><td>' + item[6] + '</td><td>' + item[7]
                                   + '</td><td>' + item[8] + '</td></tr>'; */
                        });
                        $("#records_dati td").remove();
                        $('#records_dati').append(trHTML);
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

        /* upgrade function */
    $(".iterabili").each(function() {
        $($(this).attr('id')).click( set($(this).attr('id')));
    });


    /* vecchio modo uguale a quello sopra sostituito da 1 riga
    $('#list-tutto-l').click(function(event){
        event.preventDefault();
        set('list-tutto-l');
    });

    $('#list-professori-l').click(function(event){
        event.preventDefault();
        set('list-professori-l);
    });

    $('#list-materia-l').click(function(event){
        event.preventDefault();
        set('list-materia-l);
    });

    $('#list-voti-l').click(function(event){
        event.preventDefault();
        set('list-voti-l);
    });

    $('#list-dati-l').click(function(event){
        event.preventDefault();
        set('list-dati-l');
    });
    */

});