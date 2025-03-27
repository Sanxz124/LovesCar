document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("carousel-image");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const slides = [
        { img: "imagenes/TypesCars.jpg", title: "Tipos de autos" },
        { img: "imagenes/LogosCars.jpg", title: "Marcas de autos" }
    ];

    let currentIndex = 0;

    function updateCarousel() {
        imageElement.src = slides[currentIndex].img;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    updateCarousel();
});
