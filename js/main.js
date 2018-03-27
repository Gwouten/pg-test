'use strict';

document.addEventListener("DOMContentLoaded", function () {

    var inputs = document.querySelectorAll('input[name="poll__option"]');
    var submitBtn = document.querySelector('.btn--poll');

    inputs.forEach(function (item) {
        item.parentNode.onchange = function () {
            submitBtn.disabled = false;
        };
    });
});