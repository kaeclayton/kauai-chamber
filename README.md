# Kaua'i Chamber of Commerce

A responsive website for a chamber of commerce on the island of Kaua'i, featuring a member business directory, a membership application, live weather, and a guide to local attractions.

**Live site:** https://kaeclayton.github.io/kauai-chamber/

> This is a portfolio project and is not affiliated with any real chamber of commerce. Business names and logos are used for demonstration only.

> This site started as a project for a web development course with BYU-Pathway Worldwide and has been enhanced and added to in order to showcase more skills, including the items under Technical highlights.

## Features

- **Member directory** loaded from JSON, with a toggle between grid and list views
- **Member spotlights** on the homepage, randomly featuring Gold and Silver members on each visit
- **Current weather and 5-day forecast** for Kaua'i, refreshed every 3 hours by a GitHub Actions workflow
- **Membership application** with form validation, membership-level details in modal dialogs, and a confirmation page
- **Discover page** of local attractions, with a welcome-back message based on the visitor's last visit
- **Responsive design** with mobile navigation and sized hero images for different screens

## Technical highlights

- **API key kept out of the browser.** Instead of calling the OpenWeather API from the page, a scheduled GitHub Actions workflow fetches the weather using an encrypted repository secret and saves it to `data/weather.json`, which the site reads.
- **Safe handling of form data.** The confirmation page displays submitted values with `textContent` rather than `innerHTML`, preventing cross-site scripting through the URL.
- **Accessibility.** Semantic HTML, labeled form fields, descriptive alt text, and keyboard-accessible controls.

## Built with

- HTML, CSS (Grid, Flexbox, media queries), and JavaScript (ES modules)
- [OpenWeather API](https://openweathermap.org/api)
- GitHub Actions and GitHub Pages