import { places } from "../data/places.mjs";

export function initPlaces() {
    const showHere = document.querySelector('#places');

    function displayPlaces(places) {
        places.forEach(x => {
            const myCard = document.createElement('div');
            
            const myPhoto = document.createElement('img');
            myPhoto.src = x.photo;
            myPhoto.alt = x.name;
            
            
            const myTitle = document.createElement('h2');
            myTitle.innerText = x.name;

            const myAddress = document.createElement('address');
            myAddress.innerText = x.address;

            const myDescription = document.createElement('p');
            myDescription.innerText = x.description;

            myCard.appendChild(myPhoto);
            myCard.appendChild(myTitle);
            myCard.appendChild(myAddress);
            myCard.appendChild(myDescription);

            showHere.appendChild(myCard);
        });
    }

    displayPlaces(places);
}    