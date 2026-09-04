// ===== LETTER TEXT =====
const letterContent = `I still remember the first time I saw you, and honestly, every moment with you feels like a dream. Today is your special day, and I wanted to create something unique just for you.

You bring light into my life that I never knew was missing. Your smile makes everything better, your laugh is my favorite song, and your presence is my favorite place to be.

Thank you for being you. Thank you for all the memories we've created together, for every laugh, every hug, and every moment we've shared. 

As I watch this beautiful life with you unfold, I realize that you're not just my girlfriend—you're my best friend, my adventure, and my home.

I love you more than words could ever express. Happy birthday, my love. You deserve all the happiness in the world, and I promise to spend every day making sure you smile.

Forever yours,
Your Love 💕`;

// ===== CONFETTI ANIMATION =====
class ConfettiParticle {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight - window.innerHeight;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 5 + 5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
        this.color = ['#ff6ec7', '#d946a6', '#c2a9d9', '#ffd4e5', '#ffff00'][Math.floor(Math.random() * 5)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += 0.1; // gravity
        this.rotation += this.rotationSpeed;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

let confetti = [];
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            confetti.push(new ConfettiParticle());
        }
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = confetti.length - 1; i >= 0; i--) {
            confetti[i].update();
            confetti[i].draw(ctx);

            if (confetti[i].y > window.innerHeight) {
                confetti.splice(i, 1);
            }
        }

        if (confetti.length > 0) {
            requestAnimationFrame(animateConfetti);
        }
    }

    window.triggerConfetti = () => {
        createConfetti();
        animateConfetti();
    };

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== CANDLE BLOW DETECTION =====
let isBlown = false;
const flame = document.getElementById('flame');
const backgroundMusic = document.getElementById('background-music');

// Blow detection using device motion/audio
function setupBlowDetection() {
    // Method 1: Tap to blow (for mobile compatibility)
    document.querySelector('.cake-container')?.addEventListener('click', blowCandle);
    document.querySelector('.cake')?.addEventListener('click', blowCandle);
    document.querySelector('.candle')?.addEventListener('click', blowCandle);

    // Method 2: Double tap
    let lastTap = 0;
    document.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            blowCandle();
        }
        lastTap = currentTime;
    });
}

function blowCandle() {
    if (isBlown) return;

    isBlown = true;
    flame.classList.add('blown');

    // Play background music
    if (backgroundMusic) {
        backgroundMusic.play().catch(err => console.log('Audio playback failed:', err));
    }

    // Trigger confetti
    if (window.triggerConfetti) {
        window.triggerConfetti();
    }

    // Add a message
    const instructionText = document.querySelector('.instruction-text');
    if (instructionText) {
        setTimeout(() => {
            instructionText.innerHTML = `
                <p class="fade-in">🎉 Make a wish! 🎉</p>
                <p class="small-text fade-in">Let me show you something special...</p>
                <button onclick="nextSection()" style="
                    margin-top: 30px;
                    padding: 12px 30px;
                    background: linear-gradient(135deg, #ff6ec7 0%, #d946a6 100%);
                    color: white;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    font-size: 1rem;
                    letter-spacing: 1px;
                    box-shadow: 0 10px 30px rgba(255, 110, 199, 0.4);
                    transition: all 0.3s ease;
                ">
                    Open Your Gift 💝
                </button>
            `;
        }, 1000);
    }
}

// ===== SECTION NAVIGATION =====
let currentSection = 1;

function nextSection() {
    const sections = document.querySelectorAll('.section');
    
    if (currentSection === 1 && !isBlown) {
        alert('Blow the candle first! 💨');
        return;
    }

    // Hide current section
    sections[currentSection - 1].style.display = 'none';

    // Move to next section
    currentSection++;

    // Show next section
    if (sections[currentSection - 1]) {
        sections[currentSection - 1].style.display = 'flex';

        // Perform section-specific actions
        if (currentSection === 2) {
            typeLetterText();
        } else if (currentSection === 4) {
            setupAudioPlayer();
        }
    } else {
        currentSection--; // Stay on last section
    }
}

// ===== TYPE LETTER ANIMATION =====
function typeLetterText() {
    const letterBody = document.getElementById('letter-text');
    if (!letterBody) return;

    letterBody.innerHTML = '';
    let index = 0;
    const speed = 30; // milliseconds between characters

    function typeCharacter() {
        if (index < letterContent.length) {
            letterBody.innerHTML += letterContent[index];
            index++;
            setTimeout(typeCharacter, speed);
        }
    }

    typeCharacter();
}

// ===== AUDIO PLAYER =====
function setupAudioPlayer() {
    const voiceNote = document.getElementById('voice-note');
    const playBtn = document.getElementById('play-btn');
    const progressBar = document.getElementById('progress-bar');

    if (!voiceNote || !playBtn || !progressBar) return;

    voiceNote.addEventListener('timeupdate', () => {
        if (voiceNote.duration) {
            const progress = (voiceNote.currentTime / voiceNote.duration) * 100;
            progressBar.style.width = progress + '%';
        }
    });

    voiceNote.addEventListener('ended', () => {
        playBtn.querySelector('.play-icon').textContent = '▶';
    });
}

function toggleAudio() {
    const voiceNote = document.getElementById('voice-note');
    const playBtn = document.getElementById('play-btn');

    if (voiceNote.paused) {
        voiceNote.play();
        playBtn.querySelector('.play-icon').textContent = '⏸';
    } else {
        voiceNote.pause();
        playBtn.querySelector('.play-icon').textContent = '▶';
    }
}

// ===== PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    setupBlowDetection();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Prevent zooming on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});

// ===== INSTRUCTIONS =====
console.log('%c🎂 Birthday Gift Website 🎂', 'font-size: 20px; color: #ff6ec7; font-weight: bold;');
console.log('%cClick or tap on the cake to blow the candle and start the experience! 💕', 'font-size: 14px; color: #d946a6;');
console.log('%cMake sure to have speakers on for background music! 🎵', 'font-size: 12px; color: #c2a9d9;');
