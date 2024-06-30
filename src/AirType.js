const gameBox = document.querySelector('.box');
const random_wordsContainer = document.querySelector('.random-words');
const airInput = document.querySelector('.airTypingInput');
const lesgoButton = document.querySelector('.letsgoo');
const Counter = document.querySelector('.counter span');

// const randomWords = ["box", "comedy", "lol", "hello", "bye", "lion", "babar azam", "Australia", "nothing" ];
const randomWords = ["lol"];
let scoreCount = 0;

function getRandomWord() {
    return randomWords[Math.floor(Math.random() * randomWords.length)];
}

function makeRandom_words() {
    const word = document.createElement('div');
    word.classList.add('word');
    word.textContent = getRandomWord();
    word.style.left = Math.random() * (gameBox.clientWidth - 50) + 'px';
    word.style.animationDuration = Math.random() * 3 + 2 + 's';
    random_wordsContainer.appendChild(word);

    word.addEventListener('animationend', () => {
        word.remove();
        GameFinish();
    });
}

function GameFinish() {
    alert('Your game has been over! score: ' + scoreCount);
    scoreCount = 0;
    Counter.textContent = scoreCount;
    random_wordsContainer.innerHTML = '';
    airInput.value = '';
    lesgoButton.style.display = 'block';
    location.reload();
}

function checkInput() {
    const typedWord = airInput.value.trim();
    const fallingWords = document.querySelectorAll('.random-words .word');
    
    fallingWords.forEach(word => {
        if (word.textContent === typedWord) {
            word.remove();
            scoreCount++;
            Counter.textContent = scoreCount;
            airInput.value = '';
        }
    });
}

lesgoButton.addEventListener('click', () => {
    scoreCount = 0;
    Counter.textContent = scoreCount;
    airInput.value = '';
    airInput.disabled = false;
    airInput.focus();
    lesgoButton.style.display = 'none';
    gameInterval = setInterval(makeRandom_words, 1000);
});

airInput.addEventListener('input', checkInput);

