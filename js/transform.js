const images = [
    "images/яхта.png",
    "images/yacht2.jpg",
    "images/yacht3.jpg"
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    const backgroundImage = document.getElementById('backgroundImage');
    const fadeOverlay = document.getElementById('fadeOverlay');

    // Начинаем вращение вправо и увеличение
    backgroundImage.style.transition = 'transform 1s ease, opacity 1s ease'; // Плавный переход
    backgroundImage.style.transform = 'rotate(360deg) scale(5)'; // Вращение на 360 градусов и увеличение

    // Затухаем в белый
    fadeOverlay.style.opacity = '1'; // Увеличиваем непрозрачность до 1 (белый)

    // Меняем изображение во время вращения
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Переход к следующему изображению
        backgroundImage.src = images[currentImageIndex]; // Устанавливаем новое изображение
        
        // Сбрасываем вращение и масштаб
        backgroundImage.style.transform = 'rotate(0deg) scale(1)'; // Сбрасываем вращение и размер
        fadeOverlay.style.opacity = '0'; // Убираем белый фон (возвращаем прозрачность)
    }, 1000); // Смена изображения через 1 секунду (время вращения)

    setTimeout(changeBackgroundImage, 10000); // Задержка перед следующей сменой изображения (10 секунд)
}

// Запускаем функцию при загрузке страницы
window.onload = () => {
    changeBackgroundImage();
};