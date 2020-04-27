
/**spostamento davanti col dietro*/
 $(document).ready(function(){
  
    var $accMsg = $('.acc-Msg'),
    $accedi = $('.accedi'),
    $regMsg = $('.reg-Msg'),
    $registrati = $('.registrati'),
    $davanti = $('.davanti');
  
  $('#puls-sin').on('click', function() {
    $accMsg.toggleClass("visibility");
    $davanti.addClass("moving");
    $regMsg.toggleClass("visibility");
  
    $('#puls-sin').attr("disabled", true);
    $('#puls-des').attr("disabled", false);
  
    $registrati.toggleClass('hide');
    $accedi.toggleClass('hide');
  });
  
  $('#puls-des').on('click', function() {
    $accMsg.toggleClass("visibility");
    $davanti.removeClass("moving");
    $regMsg.toggleClass("visibility");
  
    $('#puls-des').attr("disabled", true);
    $('#puls-sin').attr("disabled", false);
  
    $registrati.toggleClass('hide');
    $accedi.toggleClass('hide');
  });

  
    /* psw lettura nel campo password da hover *O*  */
    $('#checkpsw').hover(function () {
      $('#psw-l').attr('type', 'text');
  }, function () {
      $('#psw-l').attr('type', 'password');
  });
  
  /* da rivederla, ancora non conclusa*/
  function validateName(input){
    if(input.trim().match(/^([a-zA-Z0-9_\-\.]+)\s([a-zA-Z0-9_\-\.]+)$/) == null) {
            return false;
    }

    return true;
    }
    /* valida mail*/
    function validateMail(input){
        if(input.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
        }
        return true;
    }
    
    /* semplice password vuota o min 8 caratteri*/
    function validatePass(input){
        if(input.trim().length < 8){
            return false;
        }
        return true;
    }

    /* */
    $('#logga').submit(function(event){
        event.preventDefault();

        var mail = $('#mail-l').val();
        var password = $('#psw-l').val();
        
        if(!validateMail(mail)){
            $('.invalid-mail-l').removeClass('hide');
            $('.email-l').removeClass('margine');
        }
        else {
            $('.invalid-mail-l').addClass('hide');
            $('.email-l').addClass('margine');
        }
            
        if(!validatePass(password)){
            $('.invalid-psw-l').removeClass('hide');
            $('.password-l').removeClass('margine');
        }
        else {
            $('.invalid-psw-l').addClass('hide');
            $('.password-l').addClass('margine');
        }
            /*   qui codice per acccedere */

                //prove
        if(validateMail(mail) && validatePass(password)){
            var ajaxRequest =$.ajax({
                    type:'POST',
                    url:'server/checklogin.php',
                    dataType:'json',
                    data:{mail:mail, password:password},
                    success: function(data) {
                        if (!data.success) { 
                            if (data.errors.name) { 
                                $('.throw_error').fadeIn(1000).html(data.errors.name); 
                            }
                        }
                        else {
                            //sessionStorage.setItem({mail:mail, id: '1111'}, JSON.stringify(data));
                            $(location).attr('href',"server/login.html");
                            }
                        }
            });

        }
    });


    $('#registra').submit(function(event){
        event.preventDefault();

        var nome = $('#nome-r').val();
        var email = $('#email-r').val();
        var passw = $('#pasw-r').val();
        
        if(!validateName(nome)){
            $('.invalid-nome-r').removeClass('hide');
            $('.nome-r').removeClass('margine');
        }
        else {
            $('.invalid-nome-r').addClass('hide');
            $('.nome-r').addClass('margine');
        }

        if(!validateMail(email)){
            $('.invalid-mail-r').removeClass('hide');
            $('.email-r').removeClass('margine');
        }
        else {
            $('.invalid-mail-r').addClass('hide');
            $('.email-r').addClass('margine');
        }
                    
        if(!validatePass(passw)){
            $('.invalid-psw-r').removeClass('hide');
            $('.pasw-r').removeClass('margine');
        }
        else {
            $('.invalid-psw-r').addClass('hide');
            $('.pasw-r').addClass('margine');
        }
            
        /*   qui codice per registrarsi */

    });

});