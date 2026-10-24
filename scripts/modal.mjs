export function initModals() {  
    const npModal = document.querySelector('#np-modal');
    const bronzeModal = document.querySelector('#bronze-modal');
    const silverModal = document.querySelector('#silver-modal');
    const goldModal = document.querySelector('#gold-modal');

    if (!npModal && !bronzeModal && !silverModal && !goldModal) {
        console.log('No modals found on this page - skipping modal initialization');
        return;
    }

    document.querySelector('#close-np').addEventListener('click', () => {
        npModal.close();
    });
    document.querySelector('#close-bronze').addEventListener('click', () => {
        bronzeModal.close();
    });
    document.querySelector('#close-silver').addEventListener('click', () => {
        silverModal.close();
    });
    document.querySelector('#close-gold').addEventListener('click', () => {
        goldModal.close();
    });

    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.showModal();
        });
    });
}    