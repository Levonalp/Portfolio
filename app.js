// $('#homebtn').on('click', () => {
//     $('.aboutMe').css("display","none")
//     $('.projects').css("display","none")
//     $('.resume').css("display","none")
//     $('.home').css("display","block")
// })

// $('#aboutMebtn').on('click', () => {
//         $('.aboutMe').css("display","block")
//         $('.projects').css("display","none")
//         $('.resume').css("display","none")
//         $('.home').css("display","none")
    
// })
// $('#resumebtn').on('click', () => {
//     $('.aboutMe').css("display","none")
//     $('.projects').css("display","none")
//     $('.resume').css("display","block")
//     $('.home').css("display","none")

// })

// $('#projectsbtn').on('click', () => {
//     $('.aboutMe').css("display","none")
//     $('.projects').css("display","block")
//     $('.resume').css("display","none")
//     $('.home').css("display","none")

// })


var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")
function  opentab(tabName){
    for (tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
        for (tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabName).classList.add("active-tab")
    }


const scriptURL = 'https://script.google.com/macros/s/AKfycbwywb27MUSQUx0jJQpxD1TPBQGro7mW9AVg09wc_wiiIDRghc-Lq87MwoJUv0_7KAEC/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})