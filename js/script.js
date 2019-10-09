$(".inputEmail").on("focus", function () {

    $('.focusEmail').addClass('focusMuncul')
    $('.focusPassword').removeClass('focusMuncul')
    $('.judulPassword').removeClass('judulMuncul')
    $('.judulEmail').addClass('judulMuncul')

});

$(".inputPassword").on("focus", function () {

    $('.focusPassword').addClass('focusMuncul')
    $('.focusEmail').removeClass('focusMuncul')
    $('.judulEmail').removeClass('judulMuncul')
    $('.judulPassword').addClass('judulMuncul')

});