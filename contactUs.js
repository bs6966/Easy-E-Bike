function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const url = `mailto:sabisingh230@gmail.com?subject=New Contact Form Submission&body=Name: ${name}%0A%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = url;
  }