(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "y8XC2vuzcCDoNg7CA",
    });
})();

const form = document.getElementById("contact-form");
const submit = document.getElementById("ip-send");
const status = document.getElementById("ex-msg");
let clrTimer;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearTimeout(clrTimer);

    submit.disabled = true;
    status.textContent = "Sending...";

    try {
        await emailjs.send("service_u790jhb", "template_f3kn8vp", {
            name: form.elements.name.value,
            email: form.elements.email.value,
            time: new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}),
            message: form.elements.message.value,
            title: "New Message!"
        });

        form.reset();
        status.textContent = "Message sent!";
        clrTimer = setTimeout(()=>{status.textContent = "";},3000);
    } catch (error) {
        console.log('FAILED...', error);
        status.textContent = "Couldn't send that. Try again later";
    } finally {
        submit.disabled = false;
    }

});