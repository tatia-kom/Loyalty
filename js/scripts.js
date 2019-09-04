// profile menu

const profileBlock = document.getElementById('header-profile');
const profileMenu = document.getElementById('header-profile-menu');

profileBlock.onmouseover = function(event) {
    profileMenu.classList += ' page__profile-menu--visible';
}

profileBlock.onmouseout = function(event) {
    profileMenu.classList.remove('page__profile-menu--visible');
}

// edit form

document.addEventListener('DOMContentLoaded', function() {
    const edits = document.getElementsByClassName('create-block__clear-input');

    for (let i=0; i < edits.length; i++) {
        edits[i].addEventListener('click', function(event) {
            this.previousElementSibling.value = '';
        });
    }
});