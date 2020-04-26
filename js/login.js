
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
  });
  
    /* psw lettura nel campo password da hover *O*  */
    $('#checkpsw').hover(function () {
      $('#psw-l').attr('type', 'text');
  }, function () {
      $('#psw-l').attr('type', 'password');
  });
  
  /* da rivederla, ancora non conclusa*/
  function validateName(input){
    if(input.trim().match(/^\[A-za-z0–9_]\s\[A-za-z0–9_]\$/) == null) {
            return false;
    }
    return true;
    }
    function validateMail(input){
        if(input.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
        }
        return true;
    }
    /* semplice password vuota o min 8 caratteri*/
    function validatePass(input){
        if(input.trim() == '' || input.trim().length < 8){
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
            $('.invalid-mail-l').toggleClass('hide');
            $('.email-l').toggleClass('margine');
        }
            
        if(!validatePass(password)){
            $('.invalid-psw-l').toggleClass('hide');
            $('.password-l').toggleClass('margine');
        }
            
    });

$(document).ready(function(){
    $('#registra').submit(function(event){
        event.preventDefault();

        var nome = $('#nome-r').val();
        var mail = $('#email-r').val();
        var psw = $('#psw-r').val();
        
        if(!validateName(nome)){
            $('.invalid-mail-l').toggleClass('hide');
            $('.email-l').toggleClass('margine');
        }

        if(!validateMail(mail)){
            $('.invalid-mail-l').toggleClass('hide');
            $('.email-l').toggleClass('margine');
        }
            
        if(!validatePass(psw)){
            $('.invalid-psw-l').toggleClass('hide');
            $('.password-l').toggleClass('margine');
        }
            
    });
});

    