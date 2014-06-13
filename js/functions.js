$(window).load(function(){
    $("#navigation").sticky({
        topSpacing: 0, 
        getWidthFrom: '#navigation',
        wrapperClassName: 'sticky'
    });
    $('.dropdown li ul').hide().removeClass('fallback');
    $('.dropdown li').hover(
      function () {
        $('ul', this).stop().slideDown(100);
      },
      function () {
        $('ul', this).stop().slideUp(100);
      }
    );
    $('.carousel').carousel()
});