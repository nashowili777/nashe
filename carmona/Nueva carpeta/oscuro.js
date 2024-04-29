let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
let body = document.querySelector('body');

toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    body.classList.toggle('dark');
    if (checked) {
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});