const songContainer = document.getElementById("songContainer");

function generateSong() {
    for (let i = 99; i >= 0; i--) {
        let colorClass = '';
        let songLine = '';

        if (i > 25) {
            colorClass = 'green';
        } else if (i <= 25 && i > 10) {
            colorClass = 'yellow';
        } else if (i <= 10 && i > 0) {
            colorClass = 'red';
        } else {
            colorClass = 'final';
        }

        if (i > 1) {
            songLine = `${i} bottles of milk on the wall, ${i} bottles of milk!<br>Take one down, pass it around…<br>${i-1} bottles of milk on the wall!`;
        } else if (i === 1) {
            songLine = `1 bottle of milk on the wall, 1 bottle of milk!<br>Take it down, pass it around…<br>No more bottles of milk on the wall!`;
        } else {
            songLine = `‼️ There's no more bottles of milk on the wall, there's no more bottles of milk.<br>Help me now, running to the store to buy 99 bottles of milk!`;
        }

        let paragraph = document.createElement("p");
        paragraph.innerHTML = songLine;
        paragraph.classList.add(colorClass);

        songContainer.appendChild(paragraph);
    }
}

window.onload = generateSong;
