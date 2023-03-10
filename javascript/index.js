const play = document.getElementById("play");

play.addEventListener('click', function () {
    play.classList.add("d-none");
    ball.classList.remove("d-none");
    player1();
});

const ball = document.getElementById("ball");
const container = document.getElementById("gameScreen");

let x = container.offsetWidth / 2 - ball.offsetWidth / 2;
let y = container.offsetHeight / 2 - ball.offsetHeight / 2;
ball.style.transform = `translate(${x}px, ${y}px)`;
let isMovingLeft = false;
let isMovingRight = false;
let isMovingUp = false;
let isMovingDown = false;

function player1() {
    document.addEventListener("keydown", function (event) {
        if (event.code === "ArrowLeft") {
            isMovingLeft = true;
        }
        if (event.code === "ArrowRight") {
            isMovingRight = true;
        }
        if (event.code === "ArrowUp") {
            isMovingUp = true;
        }
        if (event.code === "ArrowDown") {
            isMovingDown = true;
        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.code === "ArrowLeft") {
            isMovingLeft = false;
        }
        if (event.code === "ArrowRight") {
            isMovingRight = false;
        }
        if (event.code === "ArrowUp") {
            isMovingUp = false;
        }
        if (event.code === "ArrowDown") {
            isMovingDown = false;
        }
    });

    setInterval(function () {
        const ballRect = ball.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        let newX = x;
        let newY = y;

        if (isMovingLeft) {
            newX -= 4;
        }
        if (isMovingRight) {
            newX += 4;
        }
        if (isMovingUp) {
            newY -= 4;
        }
        if (isMovingDown) {
            newY += 4;
        }

        // check if the new position of the ball is within the container bounds
        if (
            newX >= 0 &&
            newX + ballRect.width <= containerRect.width &&
            newY >= 0 &&
            newY + ballRect.height <= containerRect.height
        ) {
            x = newX;
            y = newY;
            ball.style.transform = `translate(${x}px, ${y}px)`;
        }
    }, 10);
}


// function moveBall() {
//     document.addEventListener("keydown", function (event) {
//         const ballRect = ball.getBoundingClientRect();
//         const containerRect = container.getBoundingClientRect();

//         let newX = x;
//         let newY = y;

//         if (event.code === "ArrowLeft") {
//             newX -= 10;
//         }
//         if (event.code === "ArrowRight") {
//             newX += 10;
//         }
//         if (event.code === "ArrowUp") {
//             newY -= 10;
//         }
//         if (event.code === "ArrowDown") {
//             newY += 10;
//         }

//         // check if the new position of the ball is within the container bounds
//         if (
//             newX >= 0 &&
//             newX + ballRect.width <= containerRect.width &&
//             newY >= 0 &&
//             newY + ballRect.height <= containerRect.height
//         ) {
//             x = newX;
//             y = newY;
//             ball.style.transform = `translate(${x}px, ${y}px)`;
//         }
//     });
// }


