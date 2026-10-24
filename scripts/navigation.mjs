export function initNavigation() {
    const navButton = document.querySelector('#ham-button');
    const navBar = document.querySelector('#nav-bar');

    // toggle the show class off and on
    navButton.addEventListener('click', () => {
        navButton.classList.toggle('show');
        navBar.classList.toggle('show');
    });
}
