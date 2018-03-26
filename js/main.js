document.addEventListener("DOMContentLoaded", () => {

    const inputs = document.querySelectorAll('input[name="poll__option"]');
    const submitBtn = document.querySelector('.btn--poll');

    inputs.forEach((item) => {
        item.parentNode.onchange = () => {
            submitBtn.disabled = false;
        }
    });


});