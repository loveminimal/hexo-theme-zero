let totopblock = document.querySelector('.totop');


totopblock.onclick = toTop;
function toTop() {
    window.scrollTo({ top: 0, behavior: 'auto' });    // instant, smooth, auto
    totopblock.style.visibility = 'hidden';
}


window.addEventListener('scroll', () => {

    if (window.scrollY >= 800) {
        totopblock.style.visibility = 'visible';
    }

    if(window.scrollY == 0) {
        totopblock.style.visibility = 'hidden';
    }
})
