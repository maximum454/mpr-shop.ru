document.addEventListener('click', function (e) {
        const overflowSearch = document.querySelector('.overflow-search');
        const serachForm = document.getElementById('search-form');
        const target = e.target;
        if (target.id != 'js-input-search') {
            console.log(serachForm);
            serachForm.classList.remove('active');
            overflowSearch.classList.remove('active');
            document.body.classList.remove('lock');

        } else {
            target.closest('.search-form').classList.add('active');
            overflowSearch.classList.add('active');
            document.body.classList.add('lock');
        }
    }
)