/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.home_title, .services_container, .subscribe_container, .footer_container')
sr.reveal('.home_description, .footer_info', {delay: 500})
sr.reveal('.home_email', {delay: 600})
sr.reveal('.home_value', {delay: 700})
sr.reveal('.home_images', {delay: 800, origin: 'bottom'})
sr.reveal('.logos_img', {interval: 100})
sr.reveal('.value_images, .contact_content', {origin: 'left'})
sr.reveal('.value_content, .contact_images', {origin: 'right'})

/*============= services expanding flex card ============= */
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    //when the scroll is > 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    if (this.scrollY <= 50) header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER services ===============*/
var swiperPopular = new Swiper(".services_container", {
    spaceBetween: 32,
    centerSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*=============== SWIPER technicians services ===============*/

  var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      grabCursor: true,
      centerSlide: true,
      fade: true,
      spaceBetween: 25,
      loop: true,
      pagination: {
        el:".swiper-pagination",
        clickable:true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView:3,
        },
      },

  });