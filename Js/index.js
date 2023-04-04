$(document).ready(() => {


    $("body").hover(function () {
        $("body").css(    "background-color", "red"
            )
    });

    $("#ok").on('click', () => {
        back()
    })

})

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

