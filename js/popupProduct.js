var check1 = true;
var check2 = true;
var check3 = true;
var check4 = true;
var check5 = true;
var check6 = true;
// When the user clicks on div, open the popup
    function phoneIcon() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");}
       
    function Popup_1() {
        var popup1 = $("#myPopup1");
        if (check1) {
            $(popup1).css('visibility', 'visible');
            $(popup1).fadeIn(200);
            $('body').css('overflow-y', 'hidden');
            check1 = false;}
        else{
            $(popup1).css('visibility', 'hidden');
            $('body').css('overflow-y', 'scroll');
            $(popup1).fadeOut(0);
            check1 = true;}
    }
    function Popup_2() {
        var popup2 = $("#myPopup2");
        if (check2) {
            $(popup2).css('visibility', 'visible');
            $(popup2).fadeIn(200);
            $('body').css('overflow-y', 'hidden');
            check2 = false;}
        else{
            $(popup2).css('visibility', 'hidden');
            $('body').css('overflow-y', 'scroll');
            $(popup2).fadeOut(0);
            check2 = true;}
    }
    function Popup_3() {
        var popup3 = $("#myPopup3");
        if (check3) {
            $(popup3).css('visibility', 'visible');
            $(popup3).fadeIn(200);
            $('body').css('overflow-y', 'hidden');
            check3 = false;}
        else{
            $(popup3).css('visibility', 'hidden');
            $('body').css('overflow-y', 'scroll');
            $(popup3).fadeOut(0);
            check3 = true;}
    }
    function Popup_4() {
        var popup4 = $("#myPopup4");
        if (check4) {
            $(popup4).css('visibility', 'visible');
            $(popup4).fadeIn(200);
            $('body').css('overflow-y', 'hidden');
            check4 = false;}
        else{
            $(popup4).css('visibility', 'hidden');
            $('body').css('overflow-y', 'scroll');
            $(popup4).fadeOut(0);
            check4 = true;}
    }
    function Popup_5() {
        var popup5 = $("#myPopup5");
        if (check5) {
            $(popup5).css('visibility', 'visible');
            $(popup5).fadeIn(200);
            $('body').css('overflow-y', 'hidden');
            check5 = false;}
        else{
            $(popup5).css('visibility', 'hidden');
            $('body').css('overflow-y', 'scroll');
            $(popup5).fadeOut(0);
            check5 = true;}
    }
    function Popup_6() {
        var popup6 = $("#myPopup6");
        if (check6) {
            $(popup6).css('visibility', 'visible');
            $(popup6).fadeIn(200);
            $('body').css('overflow-y', 'hidden');
            check6 = false;}
        else{
            $(popup6).css('visibility', 'hidden');
            $('body').css('overflow-y', 'scroll');
            $(popup6).fadeOut(0);
            check6 = true;}
    };