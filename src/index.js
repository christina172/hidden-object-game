import "./styles.css";
import { initializeApp } from "firebase/app";
import { differenceInSeconds, format } from 'date-fns'
import { getFirestore, addDoc, collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCI08IMs-f9aru27NOwTrQjgEheYz4l60k",
    authDomain: "hidden-object-game-2ad83.firebaseapp.com",
    projectId: "hidden-object-game-2ad83",
    storageBucket: "hidden-object-game-2ad83.appspot.com",
    messagingSenderId: "621156816307",
    appId: "1:621156816307:web:e433ae994dd0b2bb51a7c6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const colRef = collection(db, "players");

const formContainer = document.querySelector(".form-container");
const screen = document.querySelector(".screen");
const win = document.querySelector(".win");

let chosenObject;
let player;

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
    img.addEventListener("click", (e) => {
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
    formContainer.style.display = "none";
    if (chosenObject == select.value && player[chosenObject] == false) {
        const hidden = document.querySelector(`.${chosenObject}`);
        hidden.style.border = "solid rgb(116, 255, 81) 2px";
        hidden.style.borderRadius = "6px";

        player[chosenObject] = true;
        player.score += 1;

        if (player.score == 14) {
            win.style.display = "flex";

            player.finish = Date.now();
            player.time = differenceInSeconds(player.finish, player.start);
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
    formContainer.style.display = "none";
    createNewPlayer();
    selectObjectForm.reset();
});

function startANewGame() {
    win.style.display = "none";
    formContainer.style.display = "none";
    imgs.forEach((img) => {
        img.style.border = "none";
        img.style.borderRadius = "0";
    });
    selectObjectForm.reset();
};

const restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
    screen.style.display = "none";
    startANewGame();
    createNewPlayer();
});

const enterNameForm = document.querySelector(".enter-name");
enterNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (enterNameForm.name.value == "") {
        let date = format(new Date(Date.now()), "PPP");
        addDoc(colRef, {
            name: `Somebody on ${date}`,
            time: player.time,
        }).then(() => {
            enterNameForm.reset();
            startANewGame();
        });
    } else {
        addDoc(colRef, {
            name: enterNameForm.name.value,
            time: player.time,
        }).then(() => {
            enterNameForm.reset();
            startANewGame();
        });
    };
    screen.style.display = "flex";
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    startANewGame();
    screen.style.display = "flex";
    enterNameForm.reset();
});

const list = document.querySelector("ol");
const q0 = query(colRef, orderBy("time"), limit(20));
const q = query(q0, orderBy("name"));
onSnapshot(q, (snapshot) => {
    let players = [];
    snapshot.docs.forEach((doc) => {
        players.push({ ...doc.data(), id: doc.id });
    });
    list.innerHTML = "";
    players.forEach((player) => {
        const item = document.createElement("li");
        let time = countTime(player.time);
        item.textContent = `${player.name}: ${time}`;
        list.appendChild(item);
    });
})


