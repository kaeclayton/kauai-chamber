import { getBusinessData, createBusinessCard } from "./businesses.mjs";

export function displayHomeBusinesses(container, limit = 3) {
    getBusinessData().then(members => {
        const goldSilverMembers = members.filter(member =>
            member.membershipLevel === 'Gold' || member.membershipLevel === 'Silver'
        );

        const shuffled = shuffleArray(goldSilverMembers);

        const featured = shuffled.slice(0, limit);

        container.innerHTML = '';

        featured.forEach(member => {
            const card = createBusinessCard(member, 'small');
            container.appendChild(card);
        });
    });
}
        
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
        return shuffled;
}