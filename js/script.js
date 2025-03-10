document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".animated-title");
    title.style.opacity = "0";
    setTimeout(() => {
        title.style.opacity = "1";
    }, 1000);
});
