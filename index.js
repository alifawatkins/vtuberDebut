// Create a vTuber Class
class VTuber {
    constructor(name, gender, species, birthday, age, modelType, streamerType) {
        this.name = name;
        this.gender = gender;
        this.species = species;
        this.birthday = birthday;
        this.age = age;
        this.modelType = modelType;
        this.streamerType = streamerType;
    }
}

// Create a mascot Class
class Mascot {
    constructor(name, gender, species) {
        this.name = name;
        this.gender = gender;
        this.species = species;
    }
}

function createVtuberPrompts() {
    // Player Prompted Class Instance
    let playerName = prompt(`What is the name of your VTuber?`)
    let playerGender = prompt(`What is the gender of your VTuber?`)
    let playerSpecies = prompt(`What is the species of your VTuber?`)
    let playerBirthday = prompt(`What your VTuber's birthday? (Enter a month and day)`)
    let playerAge = prompt(`How many years old is your VTubers? (Enter a whole number)`)
    let playerModelType = prompt(`What type of VTuber model would you like? 2D Model or 3D Model?`)
    let playerModelStreamerType = prompt(`What type of content do you want to stream? Examples: Video Games, Cooking, Watch-a-longs, Karaoke, Hobby/Art, Just Chatting, or Variety (mixture of everything)`)

    let playerVtuber = new VTuber(playerName, playerGender, playerSpecies, playerBirthday, playerAge, playerModelType, playerModelStreamerType)

    alert(`Hello, ${playerName}! Your VTuber is a ${playerGender} ${playerSpecies} and ${playerAge} years old. Their birthday is ${playerBirthday}. You are using a ${playerModelType} and want to stream ${playerModelStreamerType}.`)

    return playerVtuber
}

function createMascotPrompts() {
    // Player Prompted Class Instance
    let mascotName = prompt(`What is the name of your mascot?`)
    let mascotGender = prompt(`What is the gender of your mascot?`)
    let mascotSpecies = prompt(`What is the species of your mascot?`)

    let playerMascot = new Mascot(mascotName, mascotGender, mascotSpecies)

    alert(`${playerVTuber.name} has a new best friend named ${mascotName}, a ${mascotGender} ${mascotSpecies}.`)
}
function questionOne() {
    alert(`Your VTuber debut is in 7 Days! Each day, you can choose what to work on to make it a roaring success.`)
    document.getElementById('text').innerHTML = `What would you like to work on today?`
    document.getElementById(`option-buttons`).innerHTML = 
    `<button id="one" class="btn">Social media posting</button>
    <button id="two" class="btn">Design stream overlays</button>
    <button id="three" class="btn">Set up streaming software</button>
    <button id="four" class="btn">Set up motion capture software</button>`
    const buttonEls = document.querySelectorAll(`.btn`);
    buttonEls.forEach(buttonEl => {
        buttonEl.addEventListener(`click`, function (evt) {
            if (buttonEl.id == `one`) {
                document.body.style.backgroundImage = `url("socials.jpg")`
                document.getElementById(`text`).innerHTML = `Social media is an important part of VTubing. If the audience doesn't know you exist, then how can they come to your streams?` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionTwo()">Continue</button>`
                
            } else if (buttonEl.id == `two`) {
                document.body.style.backgroundImage = `url("2.png")`
            } else if (buttonEl.id == `three`) {
                alert(`Kiwi`)
            } else if (buttonEl.id == `four`) {
                alert(`Apple`)
            } 
        });
    });
}

function questionTwo() {
    document.body.style.backgroundImage = ``;
    alert(`Good work today! You have 6 days left until your Debut.`)
    document.getElementById('text').innerHTML = `What would you like to work on today?`
    document.getElementById(`option-buttons`).innerHTML = 
    `<button id="one" class="btn">Social media posting</button>
    <button id="two" class="btn">Design stream overlays</button>
    <button id="three" class="btn">Set up streaming software</button>
    <button id="four" class="btn">Set up motion capture software</button>`
    const buttonEls = document.querySelectorAll(`.btn`);
    buttonEls.forEach(buttonEl => {
        buttonEl.addEventListener(`click`, function (evt) {
            if (buttonEl.id == `one`) {
                document.body.style.backgroundImage = `url("socials.jpg")`
                document.getElementById(`text`).innerHTML = `Social media is an important part of VTubing. If the audience doesn't know you exist, then how can they come to your streams?` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionTwo()">Continue</button>`
                
            } else if (buttonEl.id == `two`) {
                document.body.style.backgroundImage = `url("2.png")`
            } else if (buttonEl.id == `three`) {
                alert(`Kiwi`)
            } else if (buttonEl.id == `four`) {
                alert(`Apple`)
            } 
        });
    });
}

function startGame() {
    let becomeVtuber = confirm('While scrolling through YouTube, you come across a VTuber for the first time. After a quick Gaagle search, you learn that a VTuber (or Virtual YouTuber) is an online entertainer who uses a virtual avatar instead of their real world appearance. You think being a VTuber sounds fun. Would you like to give it a shot?');

    if (becomeVtuber == true) {
        // The game officially starts
        alert(`You decide to become a VTuber. Let's get started! ;D`)
        playerVTuber = createVtuberPrompts();
        let wantMascot = confirm(`Some Vtubers like to have a companion that is also their mascot. Would you like to create a mascot?`);

        if (wantMascot == true) {
            alert(`Awesome Possum! Let's create your new best friend~`)
            playerMascot = createMascotPrompts();
        } 

        questionOne();

    } else {
        // The game will end.
        alert('You decide not to become a VTuber and live out the rest of your life as a real, boring human being. The End.')
        return
    } 
}

function playAgain() {
    var playAgain = confirm(`Do you want to play again?`);
    if (playAgain == true) {
        startGame();
    }
}

let playerVTuber = null;
let playerMascot = null;


startGame();