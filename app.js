$('#homebtn').on('click', () => {
    $('.aboutMe').css("display","none")
    $('.projects').css("display","none")
    $('.resume').css("display","none")
    $('.home').css("display","block"),
})

$('#aboutMebtn').on('click', () => {
        $('.aboutMe').css("display","block")
        $('.projects').css("display","none")
        $('.resume').css("display","none")
        $('.home').css("display","none"),
    
})
$('#resumebtn').on('click', () => {
    $('.aboutMe').css("display","none")
    $('.projects').css("display","none")
    $('.resume').css("display","block")
    $('.home').css("display","none")

})

$('#projectsbtn').on('click', () => {
    $('.aboutMe').css("display","none")
    $('.projects').css("display","block")
    $('.resume').css("display","none")
    $('.home').css("display","none")

})



