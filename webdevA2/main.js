/* ======================================================
Top Header Button Logic
====================================================== */

// Element 
const topHeader = document.querySelector("#top_header");
const buttons = topHeader.querySelectorAll("ul li button");

// Array containing the pages
const pages = [
    document.querySelector("#home_page"),
    document.querySelector("#history_page"),
    document.querySelector("#technique_page"),
    document.querySelector("#team_page"),
    document.querySelector("#minigame_page"),
    document.querySelector("#quiz_page")
];

// Function To Hide All Pages
function hideAll()
{
    // Loops Through All The Pages
    for (let page of pages)
    {
        page.style.display = "none";
    }
}

// Function To Show A Page Based On Index
function show(index)
{
    pages[index].style.display = "block";
}

// Add Events To All The Buttons For Page Navigation
for (let i = 0; i < buttons.length; i++)
{
    buttonListenerEvent(i);
}

function buttonListenerEvent(i) // To Prevent A Validator Warning (Functions declared within loops referencing an outer scoped variable may lead to confusing semantics.)
{
    buttons[i].addEventListener("click", function(){
        hideAll();
        show(i);

        // To Hide The Hamburger Menu Overlay Whenever User Goes To A Different Page
        if (menuOverlay.classList.contains("show") && pageList.classList.contains("show"))
        {
            showMenuOverlay();
        }
    });
}

/* ======================================================
Start Button Logic
====================================================== */

// Element
const startButton = document.querySelector("#start_button");

// Add Event To The Button
startButton.addEventListener("click", function(){
    hideAll();
    show(1); // To History Page
});


/* ======================================================
Card Flip Logic
====================================================== */

// Element
const cards = document.querySelectorAll(".card");

// Function To Toggle (Add/Remove) Flip Class Animation
function flip() {
    this.classList.toggle("flipped");
}

// Add Flip Event To The Cards
for (let card of cards)
{
    card.addEventListener("click", flip);
}

/* ======================================================
Technique Next Back Logic
====================================================== */

// Element
const techniqueH2 = document.querySelector("#technique_h2");
const techniqueP = document.querySelector("#technique_p");
const techniqueImg = document.querySelector("#technique_img");
const techniqueBack = document.querySelector("#technique_back");
const techniqueNext = document.querySelector("#technique_next");

// Array Containing All The Content
const techniques = [
    {
        h2: "Passing",
        p: "Passing is used to maintain possession, create attacking opportunities, and move the ball efficiently between teammates. It is performed by striking the ball with the inside of the foot for accuracy or the laces for longer passes. Players plant their non-kicking foot beside the ball and follow through toward their target.",
        src: "images/passing.jpg",
        title: "passing",
        alt: "passing"
    },
    {
        h2: "Dribbling",
        p: "Dribbling allows players to advance the ball, evade defenders, and create space for themselves or their teammates. It is carried out by taking small, controlled touches with the inside and outside of the foot while keeping the ball close. Players stay balanced, change direction quickly, and keep their heads up to maintain possession.",
        src: "images/dribbling.jpg",
        title: "dribbling",
        alt: "dribbling"
    },
    {
        h2: "Shooting",
        p: "Shooting is used to score goals by directing the ball into the opponent's net. It is performed by planting the non-kicking foot beside the ball and striking it with either the laces for power or the inside of the foot for accuracy. Proper balance and follow-through improve both power and precision.",
        src: "images/shooting.jpg",
        title: "shooting",
        alt: " shooting"
    },
    {
        h2: "Heading",
        p: "Heading is used to pass, clear, or shoot the ball when it is airborne. It is performed by jumping into position and making contact with the forehead while using the neck and upper body to generate power and direct the ball accurately.",
        src: "images/heading.jpg",
        title: "heading",
        alt: "heading"
    },
    {
        h2: "Cross",
        p: "Crossing is used to deliver the ball from wide areas of the field into the penalty box, creating goal-scoring opportunities for teammates. It is performed by striking the ball with the inside of the foot for accuracy or the laces for greater power. Players aim to send the ball into dangerous areas where teammates can finish with a shot or header.",
        src: "images/cross.jpg",
        title: "cross",
        alt: "cross"
    }
];

let currentIndex = 0; // Always Starts At The First Technique

// Display The Technique
function displayTechnique()
{
    techniqueH2.innerHTML = (currentIndex + 1) + ". " + techniques[currentIndex].h2;
    techniqueP.innerHTML = techniques[currentIndex].p;
    techniqueImg.src = techniques[currentIndex].src;
    techniqueImg.title = techniques[currentIndex].title;
    techniqueImg.alt = techniques[currentIndex].alt;
}

// Function To Go To The Next Technique For techniqueNext
function nextTechnique()
{
    currentIndex++; // Increment

    // Goes Back To First Technique When User Clicks Next On The Last Technique
    if (currentIndex >= techniques.length)
    {
        currentIndex = 0;
    }
    displayTechnique();
}

// Function To Go Back To The Previous Technique for techniqueBack
function backTechnique()
{
    currentIndex--; // Decrement

    if (currentIndex < 0)
    {
        currentIndex = techniques.length - 1;
    }
    displayTechnique();
}

// Add The Events To The Buttons
techniqueNext.addEventListener("click", nextTechnique);
techniqueBack.addEventListener("click", backTechnique);

// Show The First Technique
displayTechnique();

/* ======================================================
Fun Button In Reowned Team Page Logic
====================================================== */

// Element
const funButton = document.querySelector("#fun_button");
const realMadrid = document.querySelector("#real_madrid");
const barcelona = document.querySelector("#barcelona");
const liverpool = document.querySelector("#liverpool");
const realMadridImg = document.querySelector("#sprite-real_madrid");

let reversed = false; // Default not reversed

// Reverse The Background Color Of The Teams
function reverseColor()
{
    let audio = new Audio("audio/fart.mp3");
    audio.play();

    // Reverses All The Color And Add Animations
    if (!reversed)
    {
        realMadrid.style.backgroundColor = "#7a7a7a";
        barcelona.style.backgroundColor = "#0A2A66";
        liverpool.style.backgroundColor = "#cc8500";

        barcelona.style.rotate = "180deg";
        realMadridImg.classList.add("fun_animation");
        liverpool.classList.add("fun_animation2");

        reversed = true;
    }

    // Reverses Back To Normal
    else
    {
        realMadrid.style.backgroundColor = "#0A2A66";
        barcelona.style.backgroundColor = "#cc8500";
        liverpool.style.backgroundColor = "#7a7a7a";

        barcelona.style.rotate = "0deg";
        realMadridImg.classList.remove("fun_animation");
        liverpool.classList.remove("fun_animation2");

        reversed = false;
    }
}

funButton.addEventListener("click", reverseColor);

/* ======================================================
Hamburger Menu Logic (FOR RESPONSIVE)
====================================================== */

// Element
const hamButton = document.querySelector("#hamburger_menu");
const pageList = document.querySelector("#top_header ul");
const menuOverlay = document.querySelector("#menu_overlay");

// Toggles The Navigation Bar and Blurred Background Overlay
function showMenuOverlay()
{
    pageList.classList.toggle("show");
    menuOverlay.classList.toggle("show");
}

hamButton.addEventListener("click", showMenuOverlay);

/* ======================================================
Minigame Logic
====================================================== */

// Elements
const goalkeeper = document.querySelector("#goalkeeper");
const ball = document.querySelector("#ball");
const field = document.querySelector("#inner");
const leftGoal = document.querySelector("#left_goal");
const scoreboard = document.querySelector("#scoreboard");
const resetButton = document.querySelector("#reset_button");
const fsButton = document.querySelector("#fs_button");

// Store Positions
var goalkeeperPos = {
    x: 0,
    y: 0,
    originalX: 0,
    originalY: 0
};

var ballPos = {
    x: 0,
    y: 0,
    originalX: 0,
    originalY: 0
};

// Constants & Variables & Gamestate
var GOALKEEPER_SPEED = 25; // In %
var BALL_SPEED = 35; // In %

const ballVel = {
    x: 0,
    y: 0
};

var highest = 0;
var score = 0;

let direction = 1;
let paused = false;
let wasPaused = false;
let lastTime = 0;
let goalkeeperStopMoving = false;
let playerShoot = false;
let resetting = false;
let fullscreen = false;

// goalkeeper AI To Move Up and Down
function goalkeeperMove(deltaTime)
{
    if (goalkeeperStopMoving) return;

    goalkeeperPos.y += direction * GOALKEEPER_SPEED * deltaTime;

    // Moves Back Up When It Reaches Too Low
    if (goalkeeperPos.y <= 30)
    {
        direction = 1;
    }

    // Moves Up Back Down When It Reaches Too High
    if (goalkeeperPos.y >= 62)
    {
        direction = -1;
    }
}

// Shoot Ball Logic (Involves Math From CGM)
function pointerdownfunction(event)
{
    // Gets Rectangle Values Of The Field
    const fieldRect = field.getBoundingClientRect();

    // Prevents The Player From Shooting Again Or During Reset
    if (playerShoot || resetting) return;

    // Plays Kick Sound
    let audio = new Audio("audio/kick.mp3");
    audio.play();

    // Calculates Click Position On The Field
    let clickX = ((event.clientX - fieldRect.left) / fieldRect.width) * 100; // In %
    let clickY = ((event.clientY - fieldRect.top) / fieldRect.height) * 100; // In %

    // Find Delta Positions And Length
    let dx = clickX - ballPos.x;
    let dy = clickY - ballPos.y;

    let length = Math.hypot(dx, dy);
    
    // Find The Direction Vectors Of The Ball To Click
    let dirX = dx / length;
    let dirY = dy / length;

    // Calculates Velocity Of The Ball To Click Direction
    ballVel.x = dirX * BALL_SPEED;
    ballVel.y = dirY * BALL_SPEED;

    playerShoot = true;
}

field.addEventListener("pointerdown", pointerdownfunction);


// Updates Ball Position Every deltaTime As A Shooting Animation
function shootBall(deltaTime)
{
    ballPos.x += ballVel.x * deltaTime;
    ballPos.y += ballVel.y * deltaTime;
}

// Check Collision or For Goal Between Ball And The goalkeeper
function checkCollisionOrGoal()
{
    const leftGoalRect = leftGoal.getBoundingClientRect();
    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();
    const goalkeeperRect = goalkeeper.getBoundingClientRect();

    let checkGoalCollision = ballRect.left < goalkeeperRect.right &&
                        ballRect.right > goalkeeperRect.left &&
                        ballRect.top < goalkeeperRect.bottom &&
                        ballRect.bottom > goalkeeperRect.top;

    let checkTopInnerCollision = ballRect.right > leftGoalRect.left &&
                        ballRect.left < leftGoalRect.right &&
                        ballRect.bottom >= leftGoalRect.top &&
                        ballRect.top < leftGoalRect.top &&
                        ballVel.y < 0;

    let checkBotInnerCollision = ballRect.right > leftGoalRect.left &&
                        ballRect.left < leftGoalRect.right &&
                        ballRect.top <= leftGoalRect.bottom &&
                        ballRect.bottom > leftGoalRect.bottom &&
                        ballVel.y > 0;

    let checkFieldWallCollision = ballRect.left <= fieldRect.left ||
                        ballRect.right >= fieldRect.right ||
                        ballRect.top <= fieldRect.top ||
                        ballRect.bottom >= fieldRect.bottom;

    let checkGoal = ballRect.left <= leftGoalRect.left &&
                        ballRect.bottom > leftGoalRect.top &&
                        ballRect.top < leftGoalRect.bottom;

    // Between Goalkeeper
    if (checkGoalCollision)
    {
        resetting = true; // To Ensure That Timeout Only Happen Onces (Due To Checking Per Frame) To Prevent Jiggling

        ballVel.x = 0;
        ballVel.y = 0;
        goalkeeperStopMoving = true;

        setTimeout(resetPos, 500);
    }

    // Between Inner Goal Top Wall
    if (checkTopInnerCollision)
    {
        ballVel.y = -ballVel.y;
    }

    // Between inner Goal Bottom Wall
    if (checkBotInnerCollision)
    {
        ballVel.y = -ballVel.y;
    }

    // Between The Field Walls
    if (checkFieldWallCollision)
    {
        resetting = true;

        ballVel.x = 0;
        ballVel.y = 0;
        goalkeeperStopMoving = true;

        setTimeout(resetPos, 500);
    }

    // Hit Back Of The Net (Goal)
    if (checkGoal)
    {
        // Prevents checkGoal spam
        if (resetting) return;

        resetting = true;

        // Plays Goal Audio
        let audio = new Audio("audio/goal.mp3");
        audio.play();

        // Stops All Movements
        ballVel.x = 0;
        ballVel.y = 0;
        goalkeeperStopMoving = true;

        score++; // Increment Score

        // Saves Highest Score
        if (score > highest)
        {
            highest = score;
        }

        // Update Score
        scoreboard.innerHTML = `${score} (Highest: ${highest})`;

        // Increases Goalkeeper Speed And Reset Position For The Next Round
        GOALKEEPER_SPEED *= 1.15;
        setTimeout(resetPos, 900);
    }
}

// Reset Position Function
function resetPos()
{
    ballVel.x = 0;
    ballVel.y = 0;

    ballPos.x = ballPos.originalX;
    ballPos.y = ballPos.originalY;

    goalkeeperPos.x = goalkeeperPos.originalX;
    goalkeeperPos.y = goalkeeperPos.originalY;

    direction = Math.random() < 0.5 ? -1 : 1;
    // Wait Until Original Position Is Set
    goalkeeperStopMoving = false;
    playerShoot = false;

    // Render The Positions
    render();

    // For The Jiggling Issue
    resetting = false;
}

// Pauses Whenever User Tabs Out From The Website (Fixes Anything Moving Outside Of Their Range)
document.addEventListener("visibilitychange", function(){
    paused = document.hidden;

    // Reset When Tab Back In
    if (!paused)
    {
        lastTime = performance.now(); // Reset lastTime to current time to keep up with timestamp
    }
});

// Update Starting Positions Depending On Layout
function updateStartingPos()
{
    // On Phone
    if (window.innerWidth <= 800)
    {
        // Goalkeeper Position
        goalkeeperPos.x = 18;
        goalkeeperPos.y = 46.8;

        goalkeeperPos.originalX = 18;
        goalkeeperPos.originalY = 46.8;

        // Ball Position
        ballPos.x = 43.3;
        ballPos.y = 48.3;

        ballPos.originalX = 43.3;
        ballPos.originalY = 48.3;

        // Change Ball Speed
        BALL_SPEED = 70;
    }
    // On Desktop
    else
    {
        // Goalkeeper Position
        goalkeeperPos.x = 6;
        goalkeeperPos.y = 46.8;

        goalkeeperPos.originalX = 6;
        goalkeeperPos.originalY = 46.8;

        // Ball Position
        ballPos.x = 21.65;
        ballPos.y = 48.3;

        ballPos.originalX = 21.65;
        ballPos.originalY = 48.3;

        // Change Ball Speed
        BALL_SPEED = 35;
    }
}

// Update Per deltaTime
function update(deltaTime)
{
    if (resetting) return; // Stops Updating Everything When Resetting

    goalkeeperMove(deltaTime);
    shootBall(deltaTime);
    checkCollisionOrGoal(deltaTime);
}

// Render Function To Render Everything
function render()
{
    goalkeeperRender();
    ballRender();
} 

// Start Game Loop
function application(timestamp)
{
    // Pauses everything from running (except for timestamp)
    if (paused || field.offsetParent == null)
    {
        wasPaused = true;
        requestAnimationFrame(application);
        return;
    }

    // If unpaused then reset lastTime without looping it (Only Off Page)
    if (wasPaused)
    {
        lastTime = timestamp; // Reset lastTime to current time to keep up with timestamp
        wasPaused = false;
    }

    // Calculates Deltatime for smooth animations
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    // Game Logic
    update(deltaTime);
    render();

    // Loops back per Frame
    requestAnimationFrame(application);
}

// To Render Objects On The Field
function goalkeeperRender()
{
    goalkeeper.style.left = goalkeeperPos.x + '%'; // X
    goalkeeper.style.top = goalkeeperPos.y + '%'; // Y
}

function ballRender()
{
    ball.style.left = ballPos.x + '%';
    ball.style.top = ballPos.y + '%';
}

// Update Starting Pos Depending On The Device
updateStartingPos();

window.addEventListener("resize", updateStartingPos);

// Render The Objects On The Field
render();

// Loop The Game
requestAnimationFrame(application);

// Reset Button
function resetGame()
{
    GOALKEEPER_SPEED = 25;
    score = 0;
    scoreboard.innerHTML = `${score} (Highest: ${highest})`;
    
    resetPos();
}

// Fullscreen Button
function toggleFullscreen()
{
    if (!fullscreen)
    {
        if (document.documentElement.requestFullscreen)
        {
            document.documentElement.requestFullscreen();
        }
        else if (document.documentElement.mozRequestFullScreen) // Firefox
        {
            document.documentElement.mozRequestFullScreen();
        } 
        else if (document.documentElement.webkitRequestFullscreen) // Chrome, Safari, and Opera
        {
            document.documentElement.webkitRequestFullscreen();
        } 
        else if (document.documentElement.msRequestFullscreen) // IE/Edge
        {
            document.documentElement.msRequestFullscreen();
        }
        fullscreen = true;
    }
    else
    {
        if (document.exitFullscreen) 
        {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) // Firefox
        {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) // Chrome, Safari, and Opera
        { 
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) // IE/Edge
        {
            document.msExitFullscreen();
        }
        fullscreen = false;
    }
}

resetButton.addEventListener("click", resetGame);
fsButton.addEventListener("click", toggleFullscreen);

/* ======================================================
Quiz Logic
====================================================== */

// Element(s)
const submitButton = document.querySelector("#submit_button");
const scoreBox = document.querySelector("#score_box");
const verification = document.querySelector("#verification");
const fieldsets = document.querySelectorAll("#quiz_page fieldset");

// Variable(s)
var score = 0;

// Add Button Event
submitButton.addEventListener("click", function(){
    // Reset Color To Normal
    resetColors();

    if (!isHuman()) return; // If Failed Verification, Don't Check the Answer
    checkAnswer();
});

// The Answer Array
const answers = ["England", "1930", "Dribbling", "Barcelona", "Real Madrid"];

// Check Answer Function
function checkAnswer()
{
    // Reset Score To 0 Before Checking Answer
    score = 0;

    // Check All The Radio Answers
    for (let i = 0; i < 5; i++)
    {
        let selected = document.querySelector(`input[name='q${i + 1}']:checked`);

        // If User Does Not Select The Options
        if (!selected)
        {
            fieldsets[i].style.color = "#ff4f4f";
            fieldsets[i].style.borderColor = "#ff4f4f";
            continue;
        }

        // Checks Selected Options
        if (selected.value == answers[i])
        {
            score++;
            fieldsets[i].style.color = "#00ff00";
            fieldsets[i].style.borderColor = "#00ff00";
        }
        else
        {
            fieldsets[i].style.color = "#ff4f4f";
            fieldsets[i].style.borderColor = "#ff4f4f";
        }
    }

    scoreBox.innerHTML = "Score: " + score + " / 5";
}

// Check Whether User Passed The Verification Function
function isHuman()
{
    if (verification.value == "Not Human")
    {
        fieldsets[5].style.color = "#00ff00";
        fieldsets[5].style.borderColor = "#00ff00";
        return true;
    }
    else
    {
        fieldsets[5].style.color = "#ff4f4f";
        fieldsets[5].style.borderColor = "#ff4f4f";
    }
}

// Reset All Colors
function resetColors()
{
    // Resets The Color For All Fieldsets
    for (let i = 0; i < 6; i++)
    {
        fieldsets[i].style.color = "#ffffff";
        fieldsets[i].style.borderColor = "#ffffff";
    }
}

/* ======================================================
Uses Javascript To Resize The Cards
====================================================== */

// Note: I already got the cards from line 78

// Function To Calculate And Set The Height Of The Cards
function setCardHeight()
{
    const minHeight = window.innerHeight * 0.679;

    for (let card of cards)
    {
        // Get The Front Card and Back Card elements of the respective card
        const frontCard = card.querySelector(".front_card");
        const backCard = card.querySelector(".back_card");

        // Calculate The Height Needed To Fit All The Content
        const frontHeight = frontCard.scrollHeight;
        const backHeight = backCard.scrollHeight;

        // Uses The Highest Height Of The Front Height, Back Height And Min Height
        const finalHeight = Math.max(minHeight, frontHeight, backHeight);

        // Set The Height Of The Cards
        card.style.height = finalHeight + "px";

        console.log(frontHeight);
        console.log(minHeight);
        console.log(backHeight);
    }
}

// Set An Initial Height Which Fits All The Content
setCardHeight();

// Update The Height When Resizing
window.addEventListener("resize", setCardHeight);

/* ======================================================
IMPORTANT (Codes That Run Last)
====================================================== */

// Hide All Pages And Show Only The First Page
hideAll();
show(0);
