export function initVisit() {
    function getDaysBetweenDates(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
        return diffDays;
    }

    function displayVisitMessage() {
        const visitMessageElement = document.getElementById('visit-message');
        const lastVisit = localStorage.getItem('lastVisit');
        const currentVisit = Date.now();

        let message = '';

        if (!lastVisit) {
            message = 'Welcome! We are so glad you are here!';
        } else {
            const daysBetween = getDaysBetweenDates(currentVisit, parseInt(lastVisit));

            if (daysBetween < 1) {
                message = 'Back again so soon! Fantastic!';
            } else {
                if (daysBetween === 1) {
                    message = 'You last visited 1 day ago.';
                } else {
                    message = `You last visited ${daysBetween} days ago`;
                }
            }
        }

        visitMessageElement.innerHTML = `
            ${message}
            <button class="close-btn" onclick="this.parentElement.style.display='none'">&times;</button>
        `;

        localStorage.setItem('lastVisit', currentVisit.toString());
    }

    displayVisitMessage();
}