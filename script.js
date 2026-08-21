const openHeart = document.getElementById("openHeart");
const mainContent = document.getElementById("mainContent");

openHeart.addEventListener("click", () => {

    // Reveal the main website
    mainContent.classList.add("show");

    // Hide the opening screen
    document.querySelector(".hero").style.display = "none";

    // Move to the first section
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Start the heart animation
    startHearts();
});


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 18 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}


function startHearts() {

    // Create hearts continuously
    setInterval(() => {
        createHeart();
    }, 500);

}
