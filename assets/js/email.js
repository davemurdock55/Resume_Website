const btn = document.getElementById('sendemail');

document.getElementById('emailform')
   .addEventListener('submit', function (event)
   {
      event.preventDefault();

      btn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_ehtadrt';

      emailjs.sendForm(serviceID, templateID, this)
         .then(() =>
         {
            btn.value = 'Send Email';
            // alert('Alright, your email has been sent!');
            document.getElementById('success-msg').classList.remove('d-none');
         }, (err) =>
         {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
         });
   });