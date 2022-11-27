let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'Blue';
        } else if (count < 0) {
            value.style.color = 'Red';
        } else {
            value.style.color = 'Black';
        }

        value.textContent = count;
    })
})