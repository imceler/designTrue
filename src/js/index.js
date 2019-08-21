const arrowBack = document.querySelector('.arrow-back img')
const grid = document.querySelector('.works-grid')
let timesFadeIn = 1;
const tl = new TimelineMax();

var backHome = () => {
    location.replace("./index.html");
}
if (location.href.endsWith('/prices.html') === true)
arrowBack.addEventListener('click', () => {
    backHome()
})

const options = {
    // root: document.querySelector('.'), 
    rootMargin: '0px 0px 100px 0px',
    threshold: .5,
}
function callback (entries, observer) {
        if (entries[0].isIntersecting) {
            if (timesFadeIn <= 1) {
                tl.fromTo('.item', 1, {x: 0, opacity: '.2'}, {x: 120, opacity: '1'});
                timesFadeIn++
                console.log(i)
            }
    } 
}
const observer = new IntersectionObserver(callback, options)
observer.observe(grid)