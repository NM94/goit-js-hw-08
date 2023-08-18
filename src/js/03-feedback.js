import throttle from "lodash.throttle"
const form = document.querySelector(".feedback-form")
const storageLocal = "feedback-form-state"
form.addEventListener('input', throttle(handlerInput, 500))
form.addEventListener('submit', handlerSubmit)
console.log(form.elements)
function handlerInput() {
    const dataBase = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
        
    localStorage.setItem("feedback-form-state", JSON.stringify(dataBase))
}
const autoInput = JSON.parse(localStorage.getItem(storageLocal));
form.elements.email.value = autoInput.email,
form.elements.message.value = autoInput.message;

function handlerSubmit(evt) {
    evt.preventDefault();
    form.reset();
    console.log(JSON.parse(localStorage.getItem(storageLocal)))
    localStorage.removeItem(storageLocal)

}

