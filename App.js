



// --------------------------Nav-buttons-------------------
$('#homebtn').on('click', () => {
    $('.aboutMe').css("display","none")
    $('.projects').css("display","none")
    $('.resume').css("display","none")
    $('.home').css("display","block")
})

$('#aboutMebtn').on('click', () => {
        $('.aboutMe').css("display","block")
        $('.projects').css("display","none")
        $('.resume').css("display","none")
        $('.home').css("display","none")

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





// ----------Carousel--------------

$(() => {



    let currentImgIndex = 0;

    let numOfImages = $('.carousel-images').children().length - 1

    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if(currentImgIndex < numOfImages) {
            currentImgIndex ++
        } else {
            currentImgIndex = 0
        }
        $('.carousel-images').children().eq(currentImgIndex).css('display','block')
    })

	$('.previous').on('click', () => {

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

        if(currentImgIndex > 0) {
            currentImgIndex --
        } else {
            currentImgIndex = numOfImages
        }
        

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')

    })

})



// --------------MODAL----------------

const modal = document.querySelector(".modal");
    const trigger = document.querySelector(".trigger");
    const closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);




// --------------Bonus-Game------------------


$(document).ready(function(){
	let x = "x";
	let o = "o";
	let turns = 0;
    
	let spot1 = $('#spot1');
	let spot2 = $('#spot2');
	let spot3 = $('#spot3');
	let spot4 = $('#spot4');
	let spot5 = $('#spot5');
	let spot6 = $('#spot6');
	let spot7 = $('#spot7');
	let spot8 = $('#spot8');
	let spot9 = $('#spot9');
	
	$('#board li').on('click', function(){
		if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
		){
			alert('Winner: O');
			$('#board li').text('+');
			$('#board li').removeClass('disable');
			$('#board li').removeClass('o');
			$('#board li').removeClass('x');
		} else if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
		){
			alert('Winner: X');
			$('#board li').text('+');
			$('#board li').removeClass('disable');
			$('#board li').removeClass('o');
			$('#board li').removeClass('x');
		} else if(turns == 9){
			alert('Tie Game');
			$('#board li').text('+');
			$('#board li').removeClass('disable');
			$('#board li').removeClass('o');
			$('#board li').removeClass('x');
			turns = 0;
		} else if($(this).hasClass('disable')){
			alert('This spot is already filled');
		} else if(turns%2 == 0){
			turns++;
			$(this).text(o);
			$(this).addClass('disable o');
			if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
				spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
				spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
				spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
				spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
				spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
				spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
				spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
			){
				alert('Winner: O');
				turns = 0;
			}
		} else {
			turns++;
			$(this).text(x);
			$(this).addClass('disable x');
			if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
				spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
				spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
				spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
				spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
				spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
				spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
				spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
			){
			alert('Winner: X');
			turns = 0;
			}
		}
	});
		// Reset Handler
		$("#reset").click(function(){
		$("#board li").text("+");
		$("#board li").removeClass('disable');
		$("#board li").removeClass('o');
		$("#board li").removeClass('x');
		turns = 0;
	});
});