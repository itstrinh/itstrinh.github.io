$(document).ready(function(){

    $(".flash-underline").hover(
        function() {
            $(this).children(".flash-underline-indicator")
                .removeClass("flash-underline-indicator-inactive")
                .addClass("flash-underline-indicator-active");
        },
        function() {
            $(this).children(".flash-underline-indicator")
                .removeClass("flash-underline-indicator-active")
                .addClass("flash-underline-indicator-inactive");
        }
    );


});
