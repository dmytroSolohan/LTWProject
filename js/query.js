
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
        set(0);
    });

    $('#list-professori-l').click(function(event){
        event.preventDefault();
        set(1);
    });

    $('#list-materia-l').click(function(event){
        event.preventDefault();
        set(2);
    });

    $('#list-voti-l').click(function(event){
        event.preventDefault();
        set(3);
    });

    $('#list-dati-l').click(function(event){
        event.preventDefault();
        set(4);
    });

});