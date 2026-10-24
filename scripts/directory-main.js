import { initNavigation } from './navigation.mjs';
import { initDirectory } from './directory.mjs';
import { initDates } from './dates.mjs';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDates();
    initDirectory();
});