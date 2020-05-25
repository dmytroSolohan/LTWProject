
/*nascondi mostra menu*/
$(document).ready(function () {

  $("#sidebarCollapse").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
  });

  /**spostamento davanti col dietro*/

  $('#puls-sin').on('click', function () {
    $('.acc-Msg').toggleClass("visibility");
    $('.davanti').addClass("moving");
    $('.reg-Msg').toggleClass("visibility");

    $('#puls-sin').attr("disabled", true);
    $('#puls-des').attr("disabled", false);

    $('.registrati').toggleClass('hide');
    $('.accedi').toggleClass('hide');
  });

  $('#puls-des').on('click', function () {
    $('.acc-Msg').toggleClass("visibility");
    $('.davanti').removeClass("moving");
    $('.reg-Msg').toggleClass("visibility");

    $('#puls-des').attr("disabled", true);
    $('#puls-sin').attr("disabled", false);

    $('.registrati').toggleClass('hide');
    $('.accedi').toggleClass('hide');
  });

  /* upgrade function */
  $(".sidebar-nav li").each(function () {
    $(this).on("click", function () {
      if ($(this).attr('id') == 'home') {
        $('#homepage').show("slow", arguments.callee);
        $('#datas h2').contents().replaceWith('Benvenuto');
        $('#datas p').contents().replaceWith('Ricordati di modificare i dati.');
        $('#dati').hide("slow", arguments.callee);
        $('#voti').hide("slow", arguments.callee);
      }
      else if ($(this).attr('id') == 'data') {
        $('#homepage').hide("slow", arguments.callee);
        $('#datas h2').contents().replaceWith('Dati personali e modifiche');
        $('#datas p').contents().replaceWith('Qui puoi trovare i tuoi dati personali e modificarli.');
        $('#dati').show("slow", arguments.callee);
        $('#voti').hide("slow", arguments.callee);
      }
      else if ($(this).attr('id') == 'grades') {
        $('#homepage').hide("slow", arguments.callee);
        $('#datas h2').contents().replaceWith('Diario dei voti');
        $('#datas p').contents().replaceWith('Qui puoi visualizzare tutti i voti che hai inserito.');
        $('#dati').hide("slow", arguments.callee);
        $('#voti').show("slow", arguments.callee);
      }
      else if ($(this).attr('id') == 'exit') {
        sessionStorage.removeItem("userId");
        $(location).attr('href', "../index.html");
      }
    });
  });

  /* vecchio metodo
  //cambio elementi nella pagina
  $('#home').on('click', function(e) {
    e.preventDefault();
    $('#homepage').show(800);
    $('#datas h2').contents().replaceWith('Benvenuto');
    $('#datas p').contents().replaceWith('Ricordati di modificare i dati.');
    $('#dati').hide(800);
    $('#voti').hide(800);
  });

  $('#data').on('click', function(e) {
    e.preventDefault();
    $('#homepage').hide(800);
    $('#datas h2').contents().replaceWith('Dati personali e modifiche');
    $('#datas p').contents().replaceWith('Qui puoi trovare i tuoi dati personali e modificarli.');
    $('#dati').show(800);
    $('#voti').hide(800);
  });

  $('#grades').on('click', function(e) {
    e.preventDefault();
    $('#homepage').hide(800);
    $('#datas h2').contents().replaceWith('Diario dei voti');
    $('#datas p').contents().replaceWith('Qui puoi visualizzare tutti i voti che hai inserito.');
    $('#dati').hide(800);
    $('#voti').show(800);
  });

  $('#exit').on('click', function(e){
    e.preventDefault();
    sessionStorage.removeItem("userId");
    $(location).attr('href',"../index.html");
  });*/

});