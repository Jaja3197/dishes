(function($) {
    var gallery = $(".gallery"),
        overlay = $("<div/>", {class: 'overlay'});

        overlay.appendTo('body').hide();

gallery.on("click", "a", function(event){
    event.preventDefault();

    var href = $(this).attr("href"),
        image = $("<img/>", {src: href});
        overlay.html(image).fadeIn(300);

    });

overlay.on('click', function(event) {
    event.preventDefault();
    overlay.fadeOut(300);
    });

    $(document).on('keyup', function(event) {
        event.preventDefault();
        if (event.which === 27) overlay.fadeOut(300);
        });
    
        })(jQuery);
    

