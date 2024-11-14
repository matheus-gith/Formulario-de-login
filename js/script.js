const sky = document.querySelector('.sky');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    star.style.opacity = Math.random();
    sky.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 4000);
}

setInterval(createStar, 500);
