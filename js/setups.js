    
    /*nascondi mostra menu*/
$(document).ready(function(){

  $("#sidebarCollapse").click(function(e){
      e.preventDefault();
      $("#wrapper").toggleClass("menuDisplayed");
    });
  
  
    /**spostamento davanti col dietro*/
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

  //cambio elementi nella pagina
  $('#home').on('click', function(e) {
    e.preventDefault();
    $('#homepage').removeClass('hide');
    $('#dati').addClass('hide');
    $('#voti').addClass('hide');
  });

  $('#data').on('click', function(e) {
    e.preventDefault();
    $('#homepage').addClass('hide');
    $('#dati').removeClass('hide');
    $('#voti').addClass('hide');
  });

  $('#grades').on('click', function(e) {
    e.preventDefault();
    $('#homepage').addClass('hide');
    $('#dati').addClass('hide');
    $('#voti').removeClass('hide');
  });

  $('#exit').on('click', function(e){
    e.preventDefault();
    $(location).attr('href',"../index.html");
    sessionStorage.removeItem("userId");
  });

});