$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true});
    $('.parallax').parallax();
    $('.myCarousel').carousel({
        numVisible: 90,
        shift: 55,
        padding: 55,
    });
    $('.tap-target').tapTarget();
    $('.collapsible').collapsible();
    $('.fixed-action-btn').floatingActionButton();
    $('.tabs').tabs();
  });

  function toogleModel()
  {
      var instance = M.modal.instance($('#modal3'));
      instance.open();
  }
