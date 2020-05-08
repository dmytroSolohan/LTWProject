    
    /*nascondi mostra menu*/
$(document).ready(function(){
    $("#sidebarCollapse").click(function(e){
      e.preventDefault();
      $("#wrapper").toggleClass("menuDisplayed");
    });
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
