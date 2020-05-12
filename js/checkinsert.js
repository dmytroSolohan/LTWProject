$(document).ready(function(){

    function validateName(input){
        if(input.trim().match(/^([a-zA-Z0-9_\-\.\s]+)$/) == null) {
                return false;
        }
        return true;
    }
    
    /* */
    $(document).on("submit" , "#sub-data", function(event){
        event.preventDefault();

        var nome_prof = $('#nome_prof').val();
        var materia = $('#materia').val();
        var voto = $('#voto').val();
        var aula = $('#aula').val();
        var date = $('#date').val();
        var descrizione = $('#descrizione').val();
        
        console.log(nome_prof);
        console.log(materia);
        console.log(voto);
        console.log(aula);
        console.log(date);
        console.log(descrizione);

        if(validateName(nome_prof) && validateName(materia)){
            var ajaxRequest =$.ajax({
                    type:'POST',
                    url:'./updatevotes.php',
                    dataType:'json',
                    data:{nome_prof:nome_prof, materia:materia, voto:voto, aula:aula, date:date, descrizione:descrizione, id:sessionStorage.getItem("userId")}
            });
            
            ajaxRequest.done(function(return_data){
                if(return_data.success){
                    alert("Dati inseriti correttamente");
                }
                else{
                    alert(return_data.posted);
                }
            });
            ajaxRequest.fail(function(return_data){
                alert("Errore con il server, riprovare!");
            });
        }
        else{
            alert("Dati non corretti!");
        }

    });

});