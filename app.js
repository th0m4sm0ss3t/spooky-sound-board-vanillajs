/* BUTTONS */
const catBtn = document.getElementById('meow');
const crowBtn = document.getElementById('crow');
const ghostBtn = document.getElementById('ghost');
const witchBtn = document.getElementById('witch');

/* LISTENERS */
catBtn.addEventListener("click", playSound);
crowBtn.addEventListener("click", playSound);
ghostBtn.addEventListener("click", playSound);
witch.addEventListener("click", playSound);

function playSound(button) {
    const buttonId = this.id;
    // console.log(this.id);

    switch (buttonId) {
        // If pressed button is meow
        case 'meow':
            // play this audio file
            new Audio("./sounds/meow.mp3").play();
            break;
        
        case 'crow':
            new Audio("./sounds/crow.mp3").play();
            break;

        case 'ghost':
            new Audio("./sounds/ghost.mp3").play();
            break;
        
        case 'witch':
            new Audio("./sounds/witch.mp3").play();
            break;
    }
};