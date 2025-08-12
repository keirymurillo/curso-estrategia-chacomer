let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function showExtraInfo(id) {
    document.getElementById(id).classList.toggle('hidden');
}

function submitQuiz() {
    const q1 = document.getElementById('q1').value.trim().toLowerCase();
    const q2 = document.getElementById('q2').value.trim().toLowerCase();
    let score = 0;

    if (q1.includes('satisfacer las necesidades') || q1.includes('productos de calidad')) score++;
    if (q2.includes('espíritu innovador') || q2.includes('innovación')) score++;

    document.getElementById('quizResult').textContent = "Puntaje: " + score + "/2";
}

// Mostrar la primera diapositiva
slides[currentSlide].classList.add('active');
