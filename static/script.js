const $ = (selector) => document.querySelector(selector);
let code = $('#code')
let iframe = $('#show');
let btn = $('#clickme');
btn.addEventListener('click', event => { iframe.classList.toggle('showme'), btn.classList.toggle('upButton') });
var chargeCode = () => {
    let resp = new XMLHttpRequest();
    resp.open('GET', 'code.html', false), resp.send(null);
    return resp.responseText
};
code.innerText = chargeCode()