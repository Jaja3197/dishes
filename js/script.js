(function($) {
    
    $(".pages a").on("click",function(event){
        event.preventDefault();
        var link = $(this);        // link na ktory klikneme
    });  

// načítanie stránky 
var href = link.attr('href'), // url adresa, z ktorej budeme nacitavat novy obsah
var request=$.ajax({url: href, type: "GET", dataType: "html"});

request.done (function (data){
     href.addClass('selected')
    .siblings().removeClass('selected');

});

var selected = $(".pages a:visible");

$(".next").on("click",function(event){
    event.preventDefault();
    selected.next().attr("href");
});  



        })(jQuery);
    