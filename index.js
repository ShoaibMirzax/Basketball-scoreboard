// HOME score logic
let homeScore = 2;
let homeElement = document.getElementById("homeScore");
homeElement.textContent = homeScore;

function homeOne() {
    homeScore += 1;
    homeElement.textContent = homeScore;
}

function homeTwo() {
    homeScore += 2;
    homeElement.textContent = homeScore;
}

function homeThree() {
    homeScore += 3;
    homeElement.textContent = homeScore;
}

function homeFour() {
    homeScore -= 1;
    homeElement.textContent = homeScore;
}

// GUEST score logic
let guestScore = 0;
let guestElement = document.getElementById("guestScore");
guestElement.textContent = guestScore;

function guestOne() {
    guestScore += 1;
    guestElement.textContent = guestScore;
}

function guestTwo() {
    guestScore += 2;
    guestElement.textContent = guestScore;
}

function guestThree() {
    guestScore += 3;
    guestElement.textContent = guestScore;
}

function guestFour() {
    guestScore -= 1;
    guestElement.textContent = guestScore;
}
