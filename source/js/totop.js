// Doubly click the body to top

let atc = document.querySelector('.article');
// atc.setAttribute('ondblclick', 'toTop()');
atc.ondblclick = function() {
    document.documentElement.scrollTop = 0;
}