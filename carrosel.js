let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-image");
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
    });
}

// Função para passar automaticamente
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Mudar slide a cada 3 segundos
setInterval(autoSlide, 10000);

// Mostrar o primeiro slide ao carregar a página
showSlide(slideIndex);

// Adicionando funcionalidade dos botões (caso ainda não tenha)
document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});
