    /*nascondi mostra menu*/
$(document).ready(function(){
    $("#sidebarCollapse").click(function(e){
      e.preventDefault();
      $("#wrapper").toggleClass("menuDisplayed");
    });
  });