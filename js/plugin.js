;(function($, window, document, undefined) {
    
    var Lightbox = {
        image: null,
        overlay: null,
        element:null,
        
        init: function(e){ //V každom kole sa do funkcie init pošle nový a element 
    
            this.element = e;
            this.overlay = e;

            if ( this.overlay.length) //ak existuje overlay
            this.image = this.overlay.find("img"); //nájdeme v ňom img
            else
            this.createoverlay(); //inak vytvoríme overlay
            this.attachHandlers();
        },

        show:function(){
            this.overlay.fadeIn();
        },

        hide: function(){
            this.overlay.fadeOut();
        },

        createOverlay: function(){
            this.overlay = $("<div/>", {id:"overlay"}).hide();
            this.image = $("<img/>", {src:"", alt:"" }).appendTo(this.overlay);
            this.overlay.appendTo("body");
        },

        attachHandlers: function(){
            //skrytie po kliku na overlay
            this.overlay.on("click", function(){
               Lightbox.hide();
            });
            //skryť po stalčení ESC
            $(document).on("keyUp", function(event){
               if (event.which===27) Lightbox.hide();
            });
            //zobraziť lightbox po kliknutí na element
            this.element.on("click", function(event){
                event.preventDefault();
                Lightbox.setImage($(this).attr("href"));
                Lightbox.show();
             });
        },
        //metoda na zmenenie zdroja obrázku
        setImage: function(url){
            this.image.attr("src", url); //url je href hodnota
        }
    };

    $.fn.lightbox = function(element){

       return this.each(function(){ 
           Lightbox.init($(this))
         
    });  
}
        })(jQuery, window, document);
    