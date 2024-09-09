const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card_number");

const cardName = document.getElementById("name");
const nameInp = document.getElementById("card_name");

const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card_month");

const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card_year");

const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");

const submitBtn = document.getElementById("submit_btn");

const completed = document.querySelector(".thank");
const form = document.querySelector("form");

function limitInputLength(element, maxLength) {
    if (element.value.length > maxLength) {
        element.value = element.value.slice(0, maxLength);
    }
}

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}

function setCardName(e) {
    cardName.innerText = e.target.value;
}

function setCardMonth(e) {
    cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
    cardYear.innerText = e.target.value;
}

function setCardCvc(e) {
    cardCvc.innerText = e.target.value;
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}
function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;

    // Validar nombre
    if (!nameInp.value) {
        nameInp.classList.add("error");
        nameInp.parentElement.classList.add("error_message");
        isValid = false;
    } else {
        nameInp.classList.remove("error");
        nameInp.parentElement.classList.remove("error_message");
    }

    // Validar número de tarjeta
    if (!numberInp.value || numberInp.value.length < 16) {
        numberInp.classList.add("error");
        numberInp.parentElement.classList.add("error_message");
        isValid = false;
    } else {
        numberInp.classList.remove("error");
        numberInp.parentElement.classList.remove("error_message");
    }

    // Validar mes de expiración
    if (!monthInp.value || monthInp.value.length < 2) {
        monthInp.classList.add("error");
        monthInp.parentElement.classList.add("error_message");
        isValid = false;
    } else {
        monthInp.classList.remove("error");
        monthInp.parentElement.classList.remove("error_message");
    }

    // Validar año de expiración
    if (!yearInp.value || yearInp.value.length < 2) {
        yearInp.classList.add("error");
        yearInp.parentElement.classList.add("error_message");
        isValid = false;
    } else {
        yearInp.classList.remove("error");
        yearInp.parentElement.classList.remove("error_message");
    }

    // Validar CVC
    if (!cvcInp.value || cvcInp.value.length < 3) {
        cvcInp.classList.add("error");
        cvcInp.parentElement.classList.add("error_message");
        isValid = false;
    } else {
        cvcInp.classList.remove("error");
        cvcInp.parentElement.classList.remove("error_message");
    }

    // Si todos los campos son válidos, ocultar el formulario y mostrar el mensaje de agradecimiento
    if (isValid) {
        form.classList.add("hidden");  // Ocultar el formulario
        completed.classList.remove("hidden");  // Mostrar la sección de "thank you"
    }
}


numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
