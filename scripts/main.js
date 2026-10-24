import { initNavigation } from "./navigation.mjs";
import { initDates } from "./dates.mjs";

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('discover.html')) return 'discover';
    if (path.includes('directory.html')) return 'directory';
    if (path.includes('join.html')) return 'join';
    if (path.includes('thankyou.html')) return 'thankyou';
    return 'home';
}

document.addEventListener('DOMContentLoaded', () => {
    const page = getCurrentPage();
    console.log(`Initializing ${page} page`);

    // Always initialize these
    initNavigation();
    initDates();

    // Set timestamp if exists
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Load page-specific modules
    if (page === 'home') {
        import("./home-businesses.mjs")
            .then(module => {
                const container = document.querySelector('#home-business-spotlight');
                if (container) module.displayHomeBusinesses(container, 3);
            });
        import("./weather.mjs")
            .then(module => module.initWeather());
    }

    if (page === 'discover') {
        import("./places.mjs")
            .then(module => {
                const places = document.querySelector('#places');
                if (places) module.initPlaces();
            });
        import("./visit.mjs")
            .then(module => {
                const visitMsg = document.querySelector('#visit-message');
                if (visitMsg) module.initVisit();
            });
    }

    if (page === 'join') {
        import("./modal.mjs")
            .then(module => module.initModals());
    }

    if (page === 'thankyou') {
        import("./thankyou.mjs")
            .then(module => {
                const userData = document.querySelector('#user-data');
                if (userData) module.initThankYou();
            });
    }
});

window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time:', loadTime + 'ms');
});