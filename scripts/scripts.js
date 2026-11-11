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
    if (e.target.closest('input, textarea')) return;
    const handler = KEY_HANDLERS[e.code];
    if (handler && debug) { handler(); }
});