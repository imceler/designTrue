const arrowBack = document.querySelector('.arrow-back img')
const tl = new TimelineMax();

tl.fromTo('.table', .6, { x: '0'}, { x: '100px',  ease: Power1.easeInOut})
.fromTo('.table', .8, { height: '10%' }, { height: '100%', ease: Power1.easeInOut })
.fromTo('.table-body', 1.2, { opacity: '.3'}, { opacity: '1', ease: Power1.easeInOut}, '-=1')
.fromTo('.table-body div', 2, { opacity: '0'}, { opacity: '1', ease: Power1.easeInOut }, '-=1')
.fromTo('.table-body button', 1, { opacity: '0'}, { opacity: '1', ease: Power1.easeInOut}, '-=2')
.fromTo('.table-body div', 1, {display: 'none'}, {display: 'block', ease: Power1.easeInOut }, '-=4')
.fromTo('.table-body button', 1, {display: 'none'}, {display: 'block', ease: Power1.easeInOut }, '-=4')

var backHome = () => {
    location.replace("./index.html");
}
arrowBack.addEventListener('click', () => {
    backHome()
})