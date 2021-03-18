document.addEventListener('click', function (e) {
        const menuMobile = document.querySelector('.menu-mobile');
        const target = e.target;
        if (target.id != 'header-burger') {
            menuMobile.classList.remove("active");
            document.body.classList.remove('lock');
        } else {
            menuMobile.classList.toggle("active");
            document.body.classList.add('lock');

        }
    console.log(target);
    }
)