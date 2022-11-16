let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move');
};
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove('move');
}
//portfolio
$(document).on('click','.project-filter li',function(){
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
});



//portfolio-filter
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.project-box').show('1000');
        }
        else{
            $('.project-box').not('.'+value).hide('1000');
            $('.project-box').filter('.'+value).show('1000');
        }
    });
});


//email js
function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click',(e) => {
         e.preventDefault();
         if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
         }else{
            sendmail (name.value, email.value, msg.value);
            success(); 
         }
    })
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_2irpqgw","template_rc3d98m",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title: "Oh no Bro...!",
        text: "Fields cannot be empty!",
        icon: "error",
        
      });
}
function success() {
    swal({
        title: "Email sent successfully",
        text: "We try to replay in 24 hours",
        icon: "success",
        
      });
}
// Header Background change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll' , () => {
    header.classList.toggle('header-active',window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll' , () => {
    scrollTop.classList.toggle('scroll-active',window.scrollY >= 400);
});