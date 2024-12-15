document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    const overlay = document.querySelector('.overlay');
    const nameParts = document.querySelectorAll('.name-part');
    const nameContainer = document.querySelector('.name-container');
    const openBtn = document.getElementById('openBtn');
    // const closeBtn = document.querySelector('.closebtn');
    const navLinks = document.querySelectorAll('.overlay-content a');

    // Adiciona a classe para ocultar a barra de rolagem
    document.body.classList.add('no-scroll');

    // Animação de entrada para "Gabriel" e "Melo"
    nameParts.forEach((namePart, index) => {
        setTimeout(() => {
            namePart.classList.add('animate-in');
        }, index * 200);
    });

    const AnimationDuration = nameParts.length * 200 + 1000;

    setTimeout(() => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('animate-in');
            }, index * 70);
        });

        const welcomeAnimationDuration = letters.length * 90 + 1000;

        setTimeout(() => {
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.classList.remove('animate-in');
                    letter.classList.add('animate-out');
                }, index * 100);
            });

            nameParts.forEach((namePart, index) => {
                setTimeout(() => {
                    namePart.classList.remove('animate-in');
                    namePart.classList.add('animate-out');
                }, index * 100);
            });

            setTimeout(() => {
                overlay.classList.add('animate-up');
            }, 1000);

            setTimeout(() => {
                nameContainer.style.opacity = 1;
                openBtn.style.display = 'block';    
            }, 2000);

            //tempo de exibição da classe no-scroll
            setTimeout(() => {  
                document.body.classList.remove('no-scroll');
            }, AnimationDuration + welcomeAnimationDuration); 
        }, welcomeAnimationDuration);
    }, AnimationDuration);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeNav();
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    const nameParts = document.querySelectorAll('.name-part'); 
    const largeNameLetters = document.querySelectorAll('.large-name .name-letter'); 

    nameParts.forEach((namePart, index) => {
        setTimeout(() => {
            namePart.classList.add('animate-in');
        }, index * 200); 
    });

    // Tempo da animação para "Melo" e "Gabriel"
    const nameAnimationDuration = nameParts.length * 200 + 1000;

    setTimeout(() => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('animate-in');
            }, index * 70); // Atraso entre as letras de "Welcome"
        });

        // Define o tempo da animação de "Welcome"
        const welcomeAnimationDuration = letters.length * 90 + 2200;

        setTimeout(() => {
            animateLargeName();
        }, welcomeAnimationDuration);

    }, nameAnimationDuration);
});

// Função para animar as letras de "MELO" e "GABRIEL"
function animateLargeName() {
    const largeNameLetters = document.querySelectorAll('.large-name .name-letter');
    
    largeNameLetters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('animate-in');
        }, index * 100); 
    });
}

const projects = document.querySelectorAll('.info-section');
const projectImages = document.querySelectorAll('.project-preview img');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.classList.remove('animate-out');
        } else {
            entry.target.classList.remove('animate-in');
            entry.target.classList.add('animate-out');
        }
    });
}, {
    threshold: 0.2 
});

// Aplica cima projeto
projects.forEach(project => {
    observer.observe(project);
});

// Aplica baixo projetos
projectImages.forEach(image => {
    observer.observe(image);
});



// cursor rato video 
const customCursor = document.getElementById('custom-cursor');
const videoElement = document.querySelector('.project-preview video');

videoElement.addEventListener('mousemove', (event) => {
    customCursor.style.display = 'block';
    customCursor.style.top = `${event.clientY + 15}px`; 
    customCursor.style.left = `${event.clientX + 15}px`;
});

videoElement.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.project-preview video');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in'); 
            }
        });
    }, { threshold: 0.5 }); 

    videos.forEach(video => observer.observe(video));
});
