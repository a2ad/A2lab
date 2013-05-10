jQuery(document).ready(function($) {
   // IE
   if( $('html').hasClass('ie8') || $('html').hasClass('ie7') ) {
      function alertBrowser() {
         $('<div>', {
            "class": "alert"
         }).prependTo('body');
         $('<p>', {
            "html": "O seu navegador está <strong>desatualizado</strong>. Por isso, pode ser que você não consiga visualizar essa página corretamente! Por favor, <strong>atualize-o</strong>!"
         }).appendTo('.alert');
         $('<a>', {
            "text": "x",
            "class": "close"
         }).appendTo('.alert');

         $('.close').click(function(event){
            event.preventDefault();
            $(this).closest('.alert').fadeOut('slow', function() {
               $(this).remove();
            });
         });
      }
      alertBrowser();
   }
});
