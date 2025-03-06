function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    
    emailjs
        .sendForm(
            'service_5nufpuf',
            'template_q56h19q',
            event.target,
            '5A7nE4A9eKeospPJF'
    ).then(() => {
        loading.classList.remove("modal__overlay--visble")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visble")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on dennq16@gmail.com"
        )
     })
}