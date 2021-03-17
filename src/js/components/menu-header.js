
document.addEventListener('click', function (e) {
    const popup = document.querySelector('.menu-header__down');
    const menuDrop = document.getElementById('js-menu-dropdown')
        const target = e.target;
        if (target.id != 'js-menu-dropdown') {
            popup.classList.remove("active");
            menuDrop.classList.remove('active');
        } else {
            popup.classList.toggle("active");
            target.classList.add('active');
        }
    }
)