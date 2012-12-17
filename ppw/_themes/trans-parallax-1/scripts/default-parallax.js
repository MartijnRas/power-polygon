PPW.parallax= (function(){
    
    
    
    return {
        
    };
})();

PPW.addListener('onstart', function(data){
    $(PPW.getCurrentSlide().el.parentNode).fadeIn();
    
    $('.parallax-set').each(function(){
        //$(this).find('.far');
        //console.log(this);
    });
    
});

PPW.addListener('onslidechange', function(data){
    
    var currentSlide= PPW.getCurrentSlide();
    
    $(currentSlide.el).find('.parallax-set').find('.far, .close, .medium').addClass('active');
    
    if(data.current != data.previous){
        $(currentSlide.el.parentNode).fadeIn(function(){
            console.log($(currentSlide.el).find('.parallax-set').find('.far, .close, .medium'))
            
            
            $(data.previous.el.parentNode).fadeOut();
            $(data.previous.el).find('.parallax-set').find('.far, .close, .medium').removeClass('active');
        });
        
    }
    
});