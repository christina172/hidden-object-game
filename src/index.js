import "./styles.css";
import differenceInSeconds from 'date-fns/differenceInSeconds'

const formContainer = document.querySelector(".form-container");
const screen = document.querySelector(".screen");
const win = document.querySelector(".win");

let chosenObject;
let player;

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
    img.addEventListener("click", (e) => {
        console.log("clicked", e.target.className);
        chosenObject = e.target.className;
        formContainer.style.display = "block";
        formContainer.style.left = e.pageX + 12 + "px";
        formContainer.style.top = e.pageY + 12 + "px";
    });
});

document.addEventListener("click", (e) => {
    const imageContainer = document.querySelector(".image-container");
    if (!imageContainer.contains(e.target) && !formContainer.contains(e.target)) {
        formContainer.style.display = "none";
    };
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
    formContainer.style.display = "none";
});

function countTime(time) {
    if (time > 60) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (minutes == 1) {
            if (seconds == 1) {
                return `1 minute 1 second`
            };
            return `1 minute ${seconds} seconds`
        };
        if (seconds == 1) {
            return `${minutes} minutes 1 second`
        };
        return `${minutes} minutes ${seconds} seconds`
    };
    return `${time} seconds`;
};

const selectObjectForm = document.querySelector(".select-object");
selectObjectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const select = document.getElementById("hidden-object");
    console.log("selected", select.value);
    formContainer.style.display = "none";
    if (chosenObject == select.value && player[chosenObject] == false) {
        const hidden = document.querySelector(`.${chosenObject}`);
        hidden.style.border = "solid rgb(116, 255, 81) 2px";
        hidden.style.borderRadius = "6px";

        player[chosenObject] = true;
        player.score += 1;
        console.log(player);

        if (player.score == 2) {
            console.log("You won!");
            win.style.display = "flex";

            player.finish = Date.now();
            player.time = differenceInSeconds(player.finish, player.start);
            console.log(player.time);
            const timeString = countTime(player.time);

            const timeMessage = document.querySelector(".time-message");
            timeMessage.textContent = `You found all items in ${timeString}.`;
        };
    };
});

function createNewPlayer() {
    player = {
        saxophone: false,
        fan: false,
        butterfly: false,
        bug: false,
        key: false,
        turtle: false,
        hourglass: false,
        hat: false,
        lamp: false,
        card: false,
        milk: false,
        scallions: false,
        cheese: false,
        brooch: false,
        start: Date.now(),
        finish: undefined,
        time: 0,
        score: 0,
    };
}

const start = document.querySelector(".start");
start.addEventListener("click", () => {
    screen.style.display = "none";
    createNewPlayer();
});

function startANewGame() {
    win.style.display = "none";
    formContainer.style.display = "none";
    imgs.forEach((img) => {
        img.style.border = "none";
        img.style.borderRadius = "0";
    });
    createNewPlayer();
    console.log(player);
};

const restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
    screen.style.display = "none";
    startANewGame();
});

const enterNameForm = document.querySelector(".enter-name");
enterNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    startANewGame();
    screen.style.display = "flex";
    enterNameForm.reset();
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    startANewGame();
    screen.style.display = "flex";
    enterNameForm.reset();
});
