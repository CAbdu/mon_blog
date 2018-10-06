
$( document ).ready(function() {
 $('.arrow-img').on('click',function(){
  $('html,body').animate({
    scrollTop: $('.profil').offset().top
  }, 600, 'swing');
 });
});
