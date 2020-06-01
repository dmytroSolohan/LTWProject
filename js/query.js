
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

                $.each(return_data.data, function (i, item)
                {   
                    /* nuovo  metodo */
                    for(var j = 0; j < item.length; j++)
                    {
                        if(j==0)
                            trHTML += '<tr><td>' + item[j];
                        else if (j==item.length-1)
                            trHTML += '</td><td>' + item[j] + '</td></tr>';
                        else
                            trHTML += '</td><td>' + item[j];
                    }
                });

                    switch(input)
                    {
                        case 'list-tutto-l':
                            $('#records_tutto td').remove();
                            $('#records_tutto').append(trHTML);
                        break;
                        case 'list-professori-l':
                            $("#records_prof td").remove();
                            $('#records_prof').append(trHTML);
                        break;
                        case 'list-materia-l':
                            $("#records_materia td").remove();
                            $('#records_materia').append(trHTML);
                        break;
                        case 'list-voti-l':
                            $("#records_voti td").remove();
                            $('#records_voti').append(trHTML);
                        break;
                        case 'list-dati-l':
                            $("#records_dati td").remove();
                            $('#records_dati').append(trHTML);
                        break;
                        default:
                            alert("Errore richiesta !");
                        break;
                    }
                /* vecchio metodo
                 switch(input)
                {
                    case 0:
                        trHTML = "<table class='table' id='records_tutto'>"
                                    + "<tr>" 
                                        + "<th scope='col'>Materia</th>"
                                        + "<th scope='col'>Professore</th>"
                                        + "<th scope='col'>Aula</th>"
                                        + "<th scope='col'>Data</th>"
                                        + "<th scope='col'>Voto</th>"
                                        + "<th scope='col'>Commento</th>"
                                    + "</tr>";
                        $.each(return_data.data, function (i, item) {
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1]
                                + '</td><td>' + item[2]
                                + '</td><td>' + item[3]
                                + '</td><td>' + item[4]
                                + '</td><td>' + item[5] + '</td></tr>';
                        });
                        trHTML += "</table>";
                        $('#records_tutto').remove();
                        $('#list-tutto').append(trHTML);
                    break;

                    case 1:
                        trHTML = "<table class='table' id='records_prof'>"
                                    + "<tr>" 
                                        + "<th scope='col'>Nome</th>"
                                        + "<th scope='col'>Materia</th>"
                                        + "<th scope='col'>Aula</th>"
                                    + "</tr>"; 
                        $.each(return_data.data, function (i, item) {                            
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1]
                                + '</td><td>' + item[2] + '</td></tr>';
                        });
                        trHTML += "</table>";
                        $("#records_prof").remove();
                        $('#list-professori').append(trHTML);
                    break;

                    case 2:
                        trHTML = "<table class='table' id='records_materia'>"
                                    + "<tr>" 
                                        + "<th scope='col'>Materia</th>"
                                        + "<th scope='col'>Voto</th>"
                                    + "</tr>"; 
                        $.each(return_data.data, function (i, item) {
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1] + '</td></tr>';
                        });
                        trHTML += "</table>";
                        $("#records_materia").remove();
                        $('#list-materia').append(trHTML);
                    break;

                    case 3:
                        trHTML = "<table class='table' id='records_voti'>"
                                    + "<tr>" 
                                        + "<th scope='col'>Materia</th>"
                                        + "<th scope='col'>Voto</th>"
                                    + "</tr>"; 
                        $.each(return_data.data, function (i, item) {
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1] + '</td></tr>';
                        });
                        trHTML += "</table>";
                        $("#records_voti").remove();
                        $('#list-voti').append(trHTML);
                    break;

                    case 4:
                        trHTML = "<table class='table' id='records_dati'>"
                                        + "<tr>" 
                                            + "<th scope='col'>Username</th>" 
                                            + "<th scope='col'>Nome</th>" 
                                            + "<th scope='col'>Cognome</th>"
                                            + "<th scope='col'>Data di nascita</th>"
                                            + "<th scope='col'>Indirizzo</th>"
                                            + "<th scope='col'>Citta'</th>"
                                            + "<th scope='col'>Paese</th>"
                                            + "<th scope='col'>Telefono</th>"
                                            + "<th scope='col'>E-mail</th>"
                                        + "</tr>";
                        $.each(return_data.data, function (i, item) {
                            trHTML += '<tr><td>' + item[0]
                                + '</td><td>' + item[1]
                                + '</td><td>' + item[2]
                                + '</td><td>' + item[3]
                                + '</td><td>' + item[4]
                                + '</td><td>' + item[5]
                                + '</td><td>' + item[6]
                                + '</td><td>' + item[7]
                                + '</td><td>' + item[8] 
                                + '</td></tr>';
                        });
                        trHTML += "</table>";
                        $("#records_dati").remove();
                        $('#list-dati').append(trHTML);
                    break;

                    default:
                        alert("Errore richiesta !");
                    break; */

            }
            else
            {
                alert(return_data.posted);
            }
        });

        ajaxRequest.fail(function(){
            alert("Errore con il server, riprovare!");
        });
    };


    $(".iterabili").each(function() {
        $($(this).attr('id')).click( set($(this).attr('id')));
    });

    $('#list-tutto-l').click(function(event){
        event.preventDefault();
        set('list-tutto-l');
    });

    $('#list-professori-l').click(function(event){
        event.preventDefault();
        set('list-professori-l');
    });

    $('#list-materia-l').click(function(event){
        event.preventDefault();
        set('list-materia-l');
    });

    $('#list-voti-l').click(function(event){
        event.preventDefault();
        set('list-voti-l');
    });

    $('#list-dati-l').click(function(event){
        event.preventDefault();
        set('list-dati-l');
    });

});