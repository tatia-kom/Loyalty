const profileBlock = document.getElementById('header-profile');
const profileMenu = document.getElementById('header-profile-menu');

profileBlock.onmouseover = function(event) {
    profileMenu.classList += ' page__profile-menu--visible';
}

profileBlock.onmouseout = function(event) {
    profileMenu.classList.remove('page__profile-menu--visible');
}