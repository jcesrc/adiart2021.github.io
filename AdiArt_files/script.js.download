
var scrollTop = 0;
var galleries;
var found = false;
$(document).ready(function(){
   
   galleries = $(".gallery");
   
   $(document).on("scroll", function(){
       
       scrollTop = window.pageYOffset ;
     
     found = false;
     $(galleries).each(function(i, o){
         
        if ($(o)[0].getBoundingClientRect().top <= 0)
        {
            $(o).addClass("fadeout");
            //$(".g_1").css("opacity", "0");
            var i = $(o).attr("img");
            $(".background").css("background-image", "url('" + i + "')")
            found = true;
        }
        else
        {
            $(o).removeClass("fadeout");
            if(!found)
            {
                //$(".g_1").css("opacity", "1");
                var i = $(".bgimage").attr("img");
                $(".background").css("background-image", "url('" + i + "')")                
            }

        }     
     });
     
    
     
   })
   
   
    
});