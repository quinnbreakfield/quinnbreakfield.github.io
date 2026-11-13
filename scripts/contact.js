if(typeof emailjs !== "undefined") emailjs.init({publicKey: "y8XC2vuzcCDoNg7CA"});

const form = document.getElementById("contact-form");
const submit = document.getElementById("ip-send");
const stat = document.getElementById("ex-msg");
let clrTimer;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearTimeout(clrTimer);

    if(typeof emailjs === "undefined") {
        stat.textContent = "Couldn't send that. Try again later";
        clrTimer = setTimeout(()=>{stat.textContent = "";},3000);
        return;
    }

    submit.disabled = true;
    stat.textContent = "Sending...";

    try {
        await emailjs.send("service_u790jhb", "template_f3kn8vp", {
            name: form.elements.name.value,
            email: form.elements.email.value,
            time: new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}),
            message: form.elements.message.value,
            title: "New Message!"
        });

        form.reset();
        stat.textContent = "Message sent!";
        clrTimer = setTimeout(()=>{stat.textContent = "";},3000);
    } catch (error) {
        console.error('FAILED...', error);
        stat.textContent = "Couldn't send that. Try again later";
        clrTimer = setTimeout(()=>{stat.textContent = "";},3000);
    } finally {
        submit.disabled = false;
    }

});