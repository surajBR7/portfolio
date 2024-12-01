// JavaScript for "Read More" functionality
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".read-more-btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const readMoreText = button.previousElementSibling;

            // Toggle visibility of the "Read More" content
            if (readMoreText.style.display === "none" || !readMoreText.style.display) {
                readMoreText.style.display = "block";
                button.textContent = "Read Less";
            } else {
                readMoreText.style.display = "none";
                button.textContent = "Read More";
            }
        });
    });
});
