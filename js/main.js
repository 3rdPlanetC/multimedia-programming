function mainWebsite() {
    // All Elements Hiding
    $('#bottom-nav, #intro, #home, #about, #shop, #logo, #logoPage, #tips').hide(function() {
        setTimeout(function() {
            var number = document.getElementById("number_loading");
            var word = document.getElementById("word_loading");
            var width = 1;
            var set = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    word.innerHTML = "FINISHED !!!";
                    clearInterval(set);} 
                else {
                    width++; 
                    number.innerHTML = width + '%';}
            }   
        },600);
        // Website Loading
        delayShowing();
        navBarEachMedia();
        smoothScroll();
    });

    
}

// Website Show
function delayShowing() {
    setTimeout(websiteShowing, 2500)
}

function websiteShowing(){
    $('#progress_loading').fadeOut(1100);
    if (window.matchMedia("(max-width: 740px)").matches) {
        $('#intro, #home, #about, #shop, #tips, #logoPage').fadeIn(2800);}
    else{
        $('#intro, #home, #about, #shop, #tips, #logoPage').fadeIn(2800);}
}

// Scroll Page with Nav-bar for each Medias.
function navBarEachMedia() {
    if (window.matchMedia("(max-width: 720px)").matches) {  //max-width: 720px
        $(window).scroll(function(event){
            var scroll = $(window).scrollTop();
            if (scroll > screen.width) {
                $('#bottom-nav').fadeIn(300);}
            else{
                $('#bottom-nav').fadeOut(300);}
        });
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if (scroll > 146) {
                $('#logoPage').fadeOut(200);}
            else {
                $('#logoPage').fadeIn(200);}
        });} 
    else {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if (scroll > 600) {
                $('#logoPage').fadeOut(250);
                $('#logo, #bottom-nav').fadeIn(250);}
            else {
                $('#logo, #bottom-nav').fadeOut(250);
                $('#logoPage').fadeIn(250);}
        });
    }
}

// Smooth Section Scroll
function smoothScroll() {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) {
                                return false;} 
                            else {
                                $target.attr('tabindex','-1');
                                $target.focus();};
                });
            }
        }
    })
}

mainWebsite();