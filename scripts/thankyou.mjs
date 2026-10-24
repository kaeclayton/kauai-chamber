export function initThankYou() {
    const userDataDiv = document.querySelector('#user-data');
    if (!userDataDiv) {
        console.log('Not on thank you page - skipping');
        return;
    }

    const getString = window.location.search;
    const info = new URLSearchParams(getString);

    console.log('All URL parameters:');
    for (let [key, value] of info) {
        console.log(`${key}: ${value}`);
    }

    let timestamp = info.get('timestamp');
    let displayTime;

    if (!timestamp) {
        displayTime = new Date().toLocaleString;
        console.log('No timestamp from form, using current time:', displayTime);
    } else {
        const formTime = new Date(timestamp);
        displayTime = formTime.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        console.log('Converted for timestamp to local time:', displayTime);
    }

    document.querySelector('#user-data').innerHTML = `
        <p>Thank you ${info.get('fname')} ${info.get('lname')}</p>
        <p>Your email is ${info.get('email')}</p>
        <p>Your phone number is ${info.get('phone')}</p>
        <p>Your company name is ${info.get('busname')}</p>
        <p>You chose the ${info.get('membership')} membership level</p>
        <p>Your application was submitted ${displayTime}</p>
    `;
}