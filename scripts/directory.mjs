import { getBusinessData, createBusinessCard } from "./businesses.mjs";

const cards = document.querySelector('#businessDirectory');
const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');
const directoryContainer = document.querySelector('.directoryCards');

export function initDirectory() {
    getBusinessData().then(members => {
        members.forEach(member => {
            const card = createBusinessCard(member, 'large');
            cards.appendChild(card);
        });
    });
    
    directoryContainer.classList.add('grid-view');
    gridButton.addEventListener('click', () => {
        directoryContainer.classList.remove('list-view');
        directoryContainer.classList.add('grid-view');
        gridButton.classList.add('active');
        listButton.classList.remove('active');
    });

    listButton.addEventListener('click', () => {
        directoryContainer.classList.remove('grid-view');
        directoryContainer.classList.add('list-view');
        listButton.classList.add('active');
        gridButton.classList.remove('active');
    });

        gridButton.classList.add('active');
    
}