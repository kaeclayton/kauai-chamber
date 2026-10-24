
export async function getBusinessData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    return (data.members);
}

export function createBusinessCard(member, size = 'small') {
    const memberCard = document.createElement('section');
    const memberName = document.createElement('h2');
    const logo = document.createElement('img');
    const address = document.createElement('div');
    const phone = document.createElement('p');
    const website = document.createElement('a');
    const email = document.createElement('p');

    memberCard.className = `business-card business-card--${size}`;

    logo.setAttribute('src', member.imageFile);
    logo.setAttribute('alt', `Logo for ${member.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('decoding', 'async');
    logo.setAttribute('class', 'business-logo');
    logo.setAttribute('width', size === 'small' ? 80 : 150);

    memberName.textContent = member.name;
    memberName.className = 'business-name';

    address.innerHTML = `
        <span>${member.address.street}</span><br>
        <span>${member.address.city}, ${member.address.state} ${member.address.zipcode}</span>
        `;
    address.className = 'business-address';
    phone.textContent = member.phone;
    phone.className = 'business-phone';
    email.textContent = member.email;
    email.className = 'business-email';
    website.href = member.websiteUrl;
    website.target = '_blank';
    website.textContent = member.websiteUrl;
    website.className = 'business-website';

    if (size === 'small') {
        memberCard.style.minHeight = '200px';
        memberCard.append(memberName, logo, email, phone, website);
    } else {
        memberCard.style.minHeight = '300px';
        const type = document.createElement('p');
        const status = document.createElement('p');

        type.textContent = member.businessType;
        type.className = 'business-type';

        status.textContent = member.membershipLevel;
        status.className = 'business-status';

        memberCard.append(logo, memberName, address, phone, website, type, status);
    }

    return memberCard;
}