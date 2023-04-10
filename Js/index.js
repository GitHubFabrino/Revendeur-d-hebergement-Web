$(document).ready(() => {


    $("body").hover(function () {
        var div = $("#grid-1-img");
        i = 0;
        while (i < 10) {
            div.animate({ height: '300px'}, 1500);
            div.animate({ width: '400px'}, 1500);
            div.css({ "border-radius": " 10px" });
            div.animate({ height: '200px'}, 1500);
            div.animate({ width: '200px'}, 1500);
            i++;
        }
    });
    $("body").hover(function () {
        var div = $("#grid-2-img");
        i = 0;
        while (i < 10) {
            div.animate({ height: '200px', opacity: '0.4' }, 1500);
            div.animate({ width: '200px', opacity: '0.8' }, 1500);
            div.animate({ height: '300px', opacity: '0.4' }, 1500);
            div.animate({ width: '400px', opacity: '0.8' }, 1500);
            i++;
        }
    });
    $("body").hover(function () {
        var div = $("#grid-3-img");
        i = 0;
        while (i < 10) {
            div.animate({ height: '200px', opacity: '0.4' }, 1500);
            div.animate({ width: '200px', opacity: '0.8' }, 1500);
            div.animate({ height: '300px', opacity: '0.4' }, 1500);
            div.animate({ width: '400px', opacity: '0.8' }, 1500);
            i++;
        }


    });
    $("body").hover(function () {
        var div = $("#grid-4-img");
        i = 0;
        while (i < 10) {
            div.animate({ height: '300px', opacity: '0.4' }, 1500);
            div.animate({ width: '400px', opacity: '0.8' }, 1500);
            div.css({ "border-radius": " 10px" });
            div.animate({ height: '200px', opacity: '0.4' }, 1500);
            div.animate({ width: '200px', opacity: '0.8' }, 1500);
            i++;
        }
    });

    /* $(window).scroll(function(){
        $("#teste").animate({left : "500px"})
    }) */
    $(window).scroll(function () {
        // $("#teste1").animate({top : "500px"})
        // $("#teste1").animate({top : "50px"})
        $("#teste1").fadeIn();
        $("#teste1").fadeOut(3000);
        $("#teste1").fadeIn("slow");
        $("#teste2").fadeIn();
        $("#teste2").fadeOut(3000);
        $("#teste2").fadeIn("slow");

    })
    $(window).scroll(function () {
        // $("#teste1").animate({top : "500px"})
        // $("#teste1").animate({top : "50px"})
        

    })
    $(window).scroll(function () {
        // $("#teste3").animate({top : "500px"})
        // $("#teste3").animate({top : "50px"})
        $("#teste3").fadeIn();
        $("#teste3").fadeOut(3000);
        $("#teste3").fadeIn("slow");

    })
    $(".title-svp").hover(function() {
        i = 0
        while (i < 100) {
            $(".title-savoir-plus").fadeIn();
            $(".title-savoir-plus").fadeOut(1000);
            $(".title-savoir-plus").fadeIn("slow");
            i++;
        }
    })

    // $("#section1").hover(function(){
    //     $(".text-service").css({ "font-size": " 20px" });
    //     $(".text-service").css({ "font-size": " 100px" });
    //     $(".text-service").css({ "font-size": " 50px" });
    //     $(".text-service").css({ "font-size": " 10px" });

    //     // $(".text-service").css({ "font-size": " 50px" });
    // })

    /*  $(window).scroll(function(){
         $("#teste2").animate({left : "500px"})
     })
     $(window).scroll(function(){
         $("#teste3").animate({left : "-500px"})
     })
  */



})


// $("#teste").animate({
//     left: '-500px',
//     /* opacity: '0.5',
//     height: '400px',
//     width: '400px' */
// },"slow");
// $("#grid-1-img").animate({
//    /*  left: '500px',
//     opacity: '0.5', */
//     height: '400px',
//     width: '400px'
// },"slow");
const preparData = () => {
    let email = $('#email').val()
    let pwd = $('#pwd').val()
    let msg = ""

    if (!email || !pwd) {
        msg = "Tous les devront etre remplis"
    } else {
        msg = "Votre email : " + email + " ,votre mdp : " + pwd
    }
    let msg_box = $('#msg')
    msg_box.text(msg)

    // chagement dans html pour un seul valeur a modifier dans css
    $('#alert-box').css("display", "flex")

    // changement dans html pour des plusieur valeur a modifier dans css

    // $('#alert-box').css({
    //     display : "flex",
    //     height : "val"
    // })


}

const back = () => {
    $('#alert-box').css("display", "none")
}

