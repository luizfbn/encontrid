// activates header current page 
function activateHeaderLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add('active');
    }
}

const links = document.querySelectorAll('.header-menu a');
links.forEach(activateHeaderLink);

// checks product form based on url params
function activateRegistrationProduct(param) {
    const element = document.querySelector(`[value=${param}]`);
    if (element) {
        element.checked = true;
    }
}

const params = new URLSearchParams(location.search);
params.forEach(activateRegistrationProduct);

// opens/closes question accordion
function activateQuestion(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const answer = document.getElementById(controls);

    answer.classList.toggle('active');
    const active = answer.classList.contains('active');
    question.setAttribute('aria-expanded', active);
}

const questions = document.querySelectorAll('.questions button');
questions.forEach((question) => {
    question.addEventListener('click', activateQuestion);
});
