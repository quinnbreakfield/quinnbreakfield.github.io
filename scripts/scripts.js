document.getElementById("copyright-year").textContent = new Date().getFullYear().toString();

/* ------------ */

const r = document.querySelector(':root');
let n = 2;

let debug = true;

const KEY_HANDLERS = {
    KeyE: () => {
        r.style.setProperty('--debug', `${n}px`);
        n = 2-n;
    },
};

document.addEventListener('keydown', (e) => {
    const handler = KEY_HANDLERS[e.code];
    if (handler && debug) { handler(); }
});