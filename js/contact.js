function sendMail(){
    document.getElementById('contact-form').addEventListener('submit', function(event){
        event.preventDefault();

        emailjs.sendForm('service_36iz9e6', "template_u4y8ij2", '#contact-form')
        .then(function(){
            console.log('SUCCES!');
            // Get buttn element
            let success = document.getElementById("sendButton");
            // Get contact-form
            let contactForm = document.getElementById('contact-form');
            // Reset the form
            contactForm.reset();
            // 
            success.innerHTML = "Berhasil dikirim!";
            // Within 3 seconds, the page will reload
            setInterval(() => window.location.reload(true), 3000)
        }, function(error){
            console.log('Gagal...', error);
        });
    });
}