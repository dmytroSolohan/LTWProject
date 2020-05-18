
$(document).ready(function () {

    function validateName(input) {
        if (input.trim().match(/^([a-zA-Z\s]+)$/) == null)
            return false;
        return true;
    }

    function validateIndirizzo(input) {
        if (input.trim().match(/^([a-zA-Z0-9,.\s]+)$/) == null)
            return false;
        return true;
    }

    function validateDate(input) {
        if (input.trim().match(/^(19[5-9][0-9]|20[0-4][0-9]|2050)-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/) == null)
            return false;
        return true;
    }

    function validateCell(input) {
        if (input.trim().match(/^\+?(39)?([\d+]{9,10})$/) == null)
            return false;
        return true;
    }

    $(document).on("submit", "#modifica-dati", function (event) {
        event.preventDefault();

        var ID = sessionStorage.getItem("userId")
        var nome = $('#nome').val();
        var cognome = $('#cognome').val();
        var data_nascita = $('#data_nascita').val();
        var indirizzo = $('#indirizzo').val();
        var citta = $('#citta').val();
        var paese = $('#paese').val();
        var telefono = $('#telefono').val();

        if (validateName(nome) && validateName(cognome) && validateDate(data_nascita) && validateIndirizzo(indirizzo) && validateName(citta) && validateName(paese) && validateCell(telefono)) {

            var ajaxRequest = $.ajax({
                type: 'POST',
                url: './updatepersonalinfo.php',
                dataType: 'json',
                data: { id: ID, nome: nome, cognome: cognome, data_nascita: data_nascita, indirizzo: indirizzo, citta: citta, paese: paese, telefono: telefono }
            });

            ajaxRequest.done(function (return_data) {
                if (return_data.success) {
                    alert("Dati modificati correttamente");
                }
                else {
                    alert(return_data.posted);
                }
            });
            ajaxRequest.fail(function (return_data) {
                alert("Errore con il server, riprovare!");
            });
        }
        else {
            alert("Dati non corretti!");
        }

    });
});