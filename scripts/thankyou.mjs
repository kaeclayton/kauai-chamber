export function initThankYou() {
    const userDataDiv = document.querySelector('#user-data');
    if (!userDataDiv) {
        return;
    }

    const getString = window.location.search;
    const info = new URLSearchParams(getString);

    let timestamp = info.get('timestamp');
    let displayTime;

    if (!timestamp) {
        displayTime = new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } else {
        const formTime = new Date(timestamp);
        displayTime = formTime.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    const lines = [
        `Thank you ${info.get('fname')} ${info.get('lname')}`,
        `Your email is ${info.get('email')}`,
        `Your phone number is ${info.get('phone')}`,
        `Your company name is ${info.get('busname')}`,
        `You chose the ${info.get('membership')} membership level`,
        `Your application was submitted ${displayTime}`
    ];

    lines.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        userDataDiv.appendChild(paragraph);
    });
}