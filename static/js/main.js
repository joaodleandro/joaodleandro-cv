
document.addEventListener("DOMContentLoaded", (event) => {

    let navItems = document.querySelectorAll('.nav-item a');

    navItems.forEach((navItem) => {
        navItem.addEventListener('click', function (e) {
            let current = document.getElementsByClassName('active');

            if (current.length > 0) {
                current[0].className = current[0].className.replace(' active', '');
            }

            this.className += ' active';
        });
    });

});
