$(document).ready(function(){

    // Replace SVG images with SVG element

    $(".svg-background-img").each(function(){
        let imgSrc = $(this).css("background-image","data:image/svg+xml");
        console.log(imgSrc);
    });

    $(".svg-img img").each(function(){
        let img = $(this);
        let imgSrc = img.attr("src");

        $.get(imgSrc, function(data){
            let svg = $(data).find("svg");
            img.replaceWith(svg);
        }, "xml");
    });

    // Show Full Screen Nav

    $(".navbar-toggler").on("click", function(){
        $(".navbar-nav").toggleClass("show-menu");
        $("header").toggleClass("show-full-screen-nav");
        $(".navbar-toggler-icon").toggleClass("icon-close");
        $("header .navbar svg path").toggleClass("white-color");
    });

});