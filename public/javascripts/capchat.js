function captcha(event){
    let response = grecaptcha.getResponse();
    if (response.length === 0){
        alert("Por favor, complete el captcha.")
        event.preventDefault();
    }
}
     document.getElementById("contacto-form").addEventListener("submit", captcha);    