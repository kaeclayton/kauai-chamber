function formatDate(dateString) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

export function initDates() {
    const copyrightYear = document.querySelector('#currentYear');
    const lastModifiedElement = document.querySelector('#lastModified');

    if (copyrightYear) {
        const currentYear = new Date().getFullYear();
        copyrightYear.textContent = currentYear;
    }

    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${formatDate(document.lastModified)}`;
    }
}