document.addEventListener("DOMContentLoaded", function () {
    const rulesBtn = document.getElementById("rulesBtn");
    const rulesPopup = document.getElementById("rulesPopup");
    const closePopup = document.getElementById("closePopup");

    rulesBtn.addEventListener("click", () => {
        rulesPopup.style.display = "block";
    });

    closePopup.addEventListener("click", () => {
        rulesPopup.style.display = "none";
    });

});

 // Function to toggle dark mode
 function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar a');

    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    
    for (let link of navbarLinks) {
        link.classList.toggle('dark-mode');
    }
}

// Show navbar popup
document.getElementById("popup-trigger").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

// Close navbar popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}


/*feed back script*/
const feedbackButton = document.getElementById('feedback-button');
const feedbackPopup = document.getElementById('feedback-popup');
const submitButton = document.getElementById('submit-feedback');

// Toggle the feedback popup
feedbackButton.addEventListener('click', () => {
    feedbackPopup.classList.toggle('show');
});

// Close the feedback popup
submitButton.addEventListener('click', () => {
    feedbackPopup.style.display = 'none';
});