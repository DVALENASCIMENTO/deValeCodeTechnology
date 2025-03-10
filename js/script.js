document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".animated-title");
    title.style.opacity = "0";
    setTimeout(() => {
        title.style.opacity = "1";
    }, 1000);
});

    document.addEventListener("DOMContentLoaded", function() {
        const audio = document.getElementById("background-audio");

        // Ativar o som após interação do usuário
        document.body.addEventListener("click", function() {
            if (audio.muted) {
                audio.muted = false;
                audio.play();
            }
        });
    });
