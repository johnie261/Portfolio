// form validation

const formVal = document.getElementById('form');
const inputEmail = document.getElementById('email');

formVal.addEventListener('submit', (e) => {
  const validate = inputEmail.value.toLowerCase();
  if (inputEmail.value === validate) {
    inputEmail.classList.remove('error');
    formVal.removeChild(document.querySelector('.error-box'));
    formVal.submit();
  } else {
    e.preventDefault();
    inputEmail.classList.add('error');

    formVal.insertAdjacentHTML('beforeend',
      `<div class="error-box">
      <span class="error-txt">Email must be lowercase - form not submitted!</span>
      <span class="suggest-msg">Try <span class="correct-email">"${validate}"</span></span>
    </div>`);
  }
});
