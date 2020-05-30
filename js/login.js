
$(document).ready(function () {

    /* psw lettura nel campo password da hover *O*  */
    $('#checkpsw').hover(function () {
        $('#psw-l').attr('type', 'text');
    }, function () {
        $('#psw-l').attr('type', 'password');
    });

    function validateName(input) {
        if (input.trim().match(/^([a-zA-Z0-9_\-\.\s]+)$/) == null || input.trim().length <= 5) {
            return false;
        }
        return true;
    }
    
    /* valida mail*/
    function validateMail(input) {
        if (input.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
        }
        return true;
    }

    /* semplice password vuota o min 8 caratteri*/
    function validatePass(input) {
        if (input.trim().length < 8) {
            return false;
        }
        return true;
    }

    /* */
    $(document).on("submit", "#logga", function (event) {
        event.preventDefault();

        var mail = $('#mail-l').val();
        var password = $('#psw-l').val();

        if (!validateMail(mail)) {
            $('.invalid-mail-l').show();
            $('.email-l').removeClass('margine');
        }
        else {
            $('.invalid-mail-l').hide();
            $('.email-l').addClass('margine');
        }

        if (!validatePass(password)) {
            $('.invalid-psw-l').show();
            $('.password-l').removeClass('margine');
        }
        else {
            $('.invalid-psw-l').hide();
            $('.password-l').addClass('margine');
        }
        /*   qui codice per acccedere */

        //prove
        if (validateMail(mail) && validatePass(password)) {
            var ajaxRequest = $.ajax({
                type: 'POST',
                url: './server/checklogin.php',
                dataType: 'json',
                data: { mail: mail, password: password }
            });

            /*
                se success == false
                error(
                'db' => true/false, 
                'mail' => true/false, 
                'psw' => true/false)

                se success == true
                form_data
                'success' => true,
                'posted' => 'Stringa',
                'userId' => 'ID';
            */
            ajaxRequest.done(function (return_data) {
                if (return_data.success) {
                    sessionStorage.removeItem("userId");
                    sessionStorage.setItem("userId", JSON.stringify(return_data.userId));
                    $(location).attr('href', "./server/login.html");
                }
                else {
                    $('#email-l').val("");
                    $('#pasword-l').val("");
                    alert(return_data.posted);
                }
            });
            ajaxRequest.fail(function () {
                alert("Errore con il server, riprovare!");
            });
        }

    });

    $(document).on("submit", "#registra", function (event) {
        event.preventDefault();

        var username = $('#username-r').val();
        var email = $('#email-r').val();
        var passw = $('#pasw-r').val();

        if (!validateName(username)) {
            $('.invalid-username-r').show();
            $('.username-r').removeClass('margine');
        }
        else {
            $('.invalid-username-r').hide();
            $('.username-r').addClass('margine');
        }

        if (!validateMail(email)) {
            $('.invalid-mail-r').show();
            $('.email-r').removeClass('margine');
        }
        else {
            $('.invalid-mail-r').hide();
            $('.email-r').addClass('margine');
        }

        if (!validatePass(passw)) {
            $('.invalid-psw-r').show();
            $('.pasw-r').removeClass('margine');
        }
        else {
            $('.invalid-psw-r').hide();
            $('.pasw-r').addClass('margine');
        }

        /*   qui codice per registrarsi */
        //prove
        if (validateName(username) && validateMail(email) && validatePass(passw)) {
            var ajaxRequest = $.ajax({
                type: 'POST',
                url: './server/verifyregist.php',
                dataType: 'json',
                data: { username: username, mail: email, password: passw }
            });

            ajaxRequest.done(function (return_data) {
                if (return_data.status) {
                    sessionStorage.removeItem("userId");
                    alert("Utente registrato con successo!");
                }
                else {
                    $('#username-r').val("");
                    $('#email-r').val("");
                    $('#pasw-r').val("");
                    alert(return_data.posted);
                }
            });

            ajaxRequest.fail(function () {
                alert("Errore con il server, riprovare!");
            });
        }

    });

});