// ==========================================
// SSJ AI - Website JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ------------------------------------------
    // 1. Welcome message
    // ------------------------------------------
    console.log("SSJ AI website loaded successfully!");

    // ------------------------------------------
    // 2. Smooth scrolling
    // ------------------------------------------
    document.querySelectorAll("a[href^='#']").forEach(link => {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // ------------------------------------------
    // 3. Add fade-in animation while scrolling
    // ------------------------------------------
    const sections = document.querySelectorAll(
        "h1, h2, h3, p, img"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });

    // ------------------------------------------
    // 4. Create "Back to Top" button
    // ------------------------------------------
    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";
    topButton.id = "backToTop";

    document.body.appendChild(topButton);

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            topButton.classList.add("active");
        } else {
            topButton.classList.remove("active");
        }
    });

    // ------------------------------------------
    // 5. Launch countdown
    // ------------------------------------------
    const launchTitle = document.querySelector(
        "h3"
    );

    // Change these values when your actual
    // SSJ AI launch date is decided.
    const launchDate = new Date("2027-01-01T00:00:00");

    const countdown = document.createElement("div");

    countdown.id = "countdown";
    countdown.innerHTML = "SSJ AI Launch Countdown Loading...";

    document.body.insertBefore(
        countdown,
        document.body.firstChild
    );

    function updateCountdown() {

        const now = new Date();
        const difference = launchDate - now;

        if (difference <= 0) {
            countdown.innerHTML =
                "🚀 SSJ AI IS NOW LIVE!";
            return;
        }

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );

        countdown.innerHTML =
            `🚀 SSJ AI LAUNCHING IN: 
            ${days}D ${hours}H ${minutes}M ${seconds}S`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ------------------------------------------
    // 6. Interactive images
    // ------------------------------------------
    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("click", () => {

            image.classList.toggle("image-active");

        });

    });

    // ------------------------------------------
    // 7. Typewriter effect for main heading
    // ------------------------------------------
    const mainHeading = document.querySelector("h1");

    if (mainHeading) {

        const originalText = mainHeading.textContent;

        mainHeading.textContent = "";

        let index = 0;

        function typeWriter() {

            if (index < originalText.length) {

                mainHeading.textContent +=
                    originalText.charAt(index);

                index++;

                setTimeout(typeWriter, 80);
            }
        }

        typeWriter();
    }

    // ------------------------------------------
    // 8. SSJ AI voice greeting
    // ------------------------------------------
    function speakSSJAI() {

        if (!("speechSynthesis" in window)) {
            return;
        }

        const message = new SpeechSynthesisUtterance(
            "Welcome to SSJ AI. Artificial intelligence for the future."
        );

        message.rate = 0.9;
        message.pitch = 0.9;
        message.volume = 1;

        window.speechSynthesis.speak(message);
    }

    // Uncomment this if you want automatic voice:
    // speakSSJAI();

    // ------------------------------------------
    // 9. Current year
    // ------------------------------------------
    const footerYear = document.createElement("p");

    footerYear.style.textAlign = "center";

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} SSJ AI`;

    document.body.appendChild(footerYear);

});
