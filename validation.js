const form = document.querySelector("#formulario")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const mensaje = document.querySelector("#mensaje")
const mensajeHelp = document.querySelector("#mensajeHelp")

form.addEventListener("submit", (event) => {
  event.preventDefault()
   if (email.value == "" || asunto.value === "" || mensaje.value ==="")
    if (email.value === ""){
    emailHelp.innerText = "¡completar este espacio por favor!"
	}
    if (mensaje.value === ""){
    mensajeHelp.innerText = "¡completar este espacio por favor!"
	}
 	else{
	form.submit();
	}
})
