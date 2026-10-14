
/* =================================
   1. WELCOME MESSAGE
================================= */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Uma's Personal Portfolio!");
});


/* =================================
   2. NAVIGATION ACTIVE LINK
================================= */

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.style.color = "#00d4ff";
        link.style.fontWeight = "bold";
    }
});


/* =================================
   3. CONTACT FORM VALIDATION
================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent =
            "Thank you, " + name +
            "! Your form has been validated successfully.";

        formMessage.style.color = "green";

        contactForm.reset();
    });
}


/* =================================
   4. CURRENT YEAR IN FOOTER
================================= */

const footerParagraph = document.querySelector("footer p");

if (footerParagraph) {
    footerParagraph.innerHTML =
        "&copy; " + new Date().getFullYear() +
        " Uma Mallappa Malli. All Rights Reserved.";
}


/* =================================
   5. PROJECT CARD EFFECT
================================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.borderTopColor = "#00d4ff";
    });

    card.addEventListener("mouseleave", function () {
        card.style.borderTopColor = "#007bff";
    });
});


/* =================================
   6. HOME PAGE BUTTON MESSAGE
================================= */

const homeButtons = document.querySelectorAll(".home-buttons .btn");

homeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("You selected: " + button.textContent.trim());
    });
});
