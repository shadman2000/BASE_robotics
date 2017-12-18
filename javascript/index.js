/*global $*/
/*global ready*/
$(document).ready(function(){
    $('.scrolla').scrolla({
        mobile:true,
    });
    $("#typeIt").typeIt({
        speed: 170,
        lifeLike: true,
        startDelay: 3000
    });
})