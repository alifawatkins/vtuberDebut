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
    let playerModelType = prompt(`What type of VTuber model would you like? PNG, 2D Model, or 3D Model?`)
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
    `<button id="one" class="btn">Post about yourself and your debut on Social Media</button>
    <button id="two" class="btn">Create YouTube and/or Twitch Account</button>
    <button id="three" class="btn">Customize your VTuber avatar</button>
    <button id="four" class="btn">Figure out which motion capture software you want to use (if using a 2D/3d Model)</button>`
    const buttonEls = document.querySelectorAll(`.btn`);
    buttonEls.forEach(buttonEl => {
        buttonEl.addEventListener(`click`, function (evt) {
            if (buttonEl.id == `one`) {
                document.body.style.backgroundImage = `url("./Assets/socialmediacircles.png")`
                document.getElementById(`text`).innerHTML = `Advertising and engaging with your potential audience on Social Media is an important part of VTubing. If the audience doesn't know you exist, then how can they come to your streams?` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionTwo()">Continue</button>`
                
            } else if (buttonEl.id == `two`) {
                document.body.style.backgroundImage = `url("./Assets/twichyoutube.png")`
                document.getElementById(`text`).innerHTML = `There are pros and cons for each streaming platform option. Twitch is the largest platform for live-streaming, with most of the content built around video games with a thriving community atmosphere. On the other hand, while lacking a close-knit community, YouTube was built for uploading lasting content and has a search engine that helps newer streamers find an audience. Lots of streamers produce content for/on both platforms.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionTwo()">Continue</button>`

            } else if (buttonEl.id == `three`) {
                document.body.style.backgroundImage = `url("./Assets/vtubermodels.jpg")`
                document.getElementById(`text`).innerHTML = `There are three options when it comes to your VTuber model: PNG,2D, or 3D. <br> A PNG Model is simply a still image of your avatar (so no movement at all). Using a PNG VTuber model is the most basic and simplest way of VTubing, but also the least engaging and entertaining.<br> Using a 2D model is one of the most popular choices for VTubing among the VTubers because of their pleasing aesthetics (anime look) and uniqueness (because they are highly customizable). They can also be the most expressive models. <br> A 3D VTuber model can be tracked from many angles because it is an three-dimensional object, so it is more immersive and engaging than PNG. However, you must use extra softweare in order to stream with a 3D avatar, unlink with PNGs.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionTwo()">Continue</button>`

            } else if (buttonEl.id == `four`) {
                document.body.style.backgroundImage = `url("./Assets/motioncapture.png")`
                document.getElementById(`text`).innerHTML = `There are numerous options to choice from when it comes to motion capture software depending on if you are using a PC or a Mac. This software uses a webcam to capture your movements and mimick those movements onto your avatar.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionTwo()">Continue</button>`
            } 
        });
    });
}

function questionTwo() {
    document.body.style.backgroundImage = ``;
    alert(`Good work today! You have 6 days left until your Debut.`)
    document.getElementById('text').innerHTML = `What would you like to work on today?`
    document.getElementById(`option-buttons`).innerHTML = 
    `<button id="one" class="btn">Post about yourself and your debut on Social Media</button>
    <button id="two" class="btn">Create YouTube and/or Twitch Account</button>
    <button id="three" class="btn">Customize your VTuber avatar</button>
    <button id="four" class="btn">Figure out which motion capture software you want to use (if using a 2D/3d Model)</button>`
    const buttonEls = document.querySelectorAll(`.btn`);
    buttonEls.forEach(buttonEl => {
        buttonEl.addEventListener(`click`, function (evt) {
            if (buttonEl.id == `one`) {
                document.body.style.backgroundImage = `url("./Assets/socialmediacircles.png")`
                document.getElementById(`text`).innerHTML = `Advertising and engaging with your potential audience on Social Media is an important part of VTubing. If the audience doesn't know you exist, then how can they come to your streams?` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionThree()">Continue</button>`
                
            } else if (buttonEl.id == `two`) {
                document.body.style.backgroundImage = `url("./Assets/twichyoutube.png")`
                document.getElementById(`text`).innerHTML = `There are pros and cons for each streaming platform option. Twitch is the largest platform for live-streaming, with most of the content built around video games with a thriving community atmosphere. On the other hand, while lacking a close-knit community, YouTube was built for uploading lasting content and has a search engine that helps newer streamers find an audience. Lots of streamers produce content for/on both platforms.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionThree()">Continue</button>`

            } else if (buttonEl.id == `three`) {
                document.body.style.backgroundImage = `url("./Assets/vtubermodels.jpg")`
                document.getElementById(`text`).innerHTML = `There are three options when it comes to your VTuber model: PNG,2D, or 3D. <br> A PNG Model is simply a still image of your avatar (so no movement at all). Using a PNG VTuber model is the most basic and simplest way of VTubing, but also the least engaging and entertaining.<br> Using a 2D model is one of the most popular choices for VTubing among the VTubers because of their pleasing aesthetics (anime look) and uniqueness (because they are highly customizable). They can also be the most expressive models. <br> A 3D VTuber model can be tracked from many angles because it is an three-dimensional object, so it is more immersive and engaging than PNG. However, you must use extra softweare in order to stream with a 3D avatar, unlink with PNGs.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionThree()">Continue</button>`

            } else if (buttonEl.id == `four`) {
                document.body.style.backgroundImage = `url("./Assets/motioncapture.png")`
                document.getElementById(`text`).innerHTML = `There are numerous options to choice from when it comes to motion capture software depending on if you are using a PC or a Mac. This software uses a webcam to capture your movements and mimick those movements onto your avatar.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionThree()">Continue</button>`
            } 
        });
    });
}

function questionThree() {
    document.body.style.backgroundImage = ``;
    alert(`Good work today! You have 5 days left until your Debut.`)
    document.getElementById('text').innerHTML = `What would you like to work on today?`
    document.getElementById(`option-buttons`).innerHTML = 
    `<button id="one" class="btn">Post about yourself and your debut on Social Media</button>
    <button id="two" class="btn">Create YouTube and/or Twitch Account</button>
    <button id="three" class="btn">Customize your VTuber avatar</button>
    <button id="four" class="btn">Figure out which motion capture software you want to use (if using a 2D/3d Model)</button>`
    const buttonEls = document.querySelectorAll(`.btn`);
    buttonEls.forEach(buttonEl => {
        buttonEl.addEventListener(`click`, function (evt) {
            if (buttonEl.id == `one`) {
                document.body.style.backgroundImage = `url("./Assets/socialmediacircles.png")`
                document.getElementById(`text`).innerHTML = `Advertising and engaging with your potential audience on Social Media is an important part of VTubing. If the audience doesn't know you exist, then how can they come to your streams?` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionFour()">Continue</button>`
                
            } else if (buttonEl.id == `two`) {
                document.body.style.backgroundImage = `url("./Assets/twichyoutube.png")`
                document.getElementById(`text`).innerHTML = `There are pros and cons for each streaming platform option. Twitch is the largest platform for live-streaming, with most of the content built around video games with a thriving community atmosphere. On the other hand, while lacking a close-knit community, YouTube was built for uploading lasting content and has a search engine that helps newer streamers find an audience. Lots of streamers produce content for/on both platforms.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionFour()">Continue</button>`

            } else if (buttonEl.id == `three`) {
                document.body.style.backgroundImage = `url("./Assets/vtubermodels.jpg")`
                document.getElementById(`text`).innerHTML = `There are three options when it comes to your VTuber model: PNG,2D, or 3D. <br> A PNG Model is simply a still image of your avatar (so no movement at all). Using a PNG VTuber model is the most basic and simplest way of VTubing, but also the least engaging and entertaining.<br> Using a 2D model is one of the most popular choices for VTubing among the VTubers because of their pleasing aesthetics (anime look) and uniqueness (because they are highly customizable). They can also be the most expressive models. <br> A 3D VTuber model can be tracked from many angles because it is an three-dimensional object, so it is more immersive and engaging than PNG. However, you must use extra softweare in order to stream with a 3D avatar, unlink with PNGs.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionFour()">Continue</button>`

            } else if (buttonEl.id == `four`) {
                document.body.style.backgroundImage = `url("./Assets/motioncapture.png")`
                document.getElementById(`text`).innerHTML = `There are numerous options to choice from when it comes to motion capture software depending on if you are using a PC or a Mac. This software uses a webcam to capture your movements and mimick those movements onto your avatar.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionFour()">Continue</button>`
            } 
        });
    });
}

function questionFour() {
    document.body.style.backgroundImage = ``;
    alert(`Good work today! You have 4 days left until your Debut.`)
    document.getElementById('text').innerHTML = `What would you like to work on today?`
    document.getElementById(`option-buttons`).innerHTML = 
    `<button id="one" class="btn">Post about yourself and your debut on Social Media</button>
    <button id="two" class="btn">Create YouTube and/or Twitch Account</button>
    <button id="three" class="btn">Customize your VTuber avatar</button>
    <button id="four" class="btn">Figure out which motion capture software you want to use (if using a 2D/3d Model)</button>`
    const buttonEls = document.querySelectorAll(`.btn`);
    buttonEls.forEach(buttonEl => {
        buttonEl.addEventListener(`click`, function (evt) {
            if (buttonEl.id == `one`) {
                document.body.style.backgroundImage = `url("./Assets/socialmediacircles.png")`
                document.getElementById(`text`).innerHTML = `Advertising and engaging with your potential audience on Social Media is an important part of VTubing. If the audience doesn't know you exist, then how can they come to your streams?` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionFour()">Continue</button>`
                
            } else if (buttonEl.id == `two`) {
                document.body.style.backgroundImage = `url("./Assets/twichyoutube.png")`
                document.getElementById(`text`).innerHTML = `There are pros and cons for each streaming platform option. Twitch is the largest platform for live-streaming, with most of the content built around video games with a thriving community atmosphere. On the other hand, while lacking a close-knit community, YouTube was built for uploading lasting content and has a search engine that helps newer streamers find an audience. Lots of streamers produce content for/on both platforms.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionFour()">Continue</button>`

            } else if (buttonEl.id == `three`) {
                document.body.style.backgroundImage = `url("./Assets/vtubermodels.jpg")`
                document.getElementById(`text`).innerHTML = `There are three options when it comes to your VTuber model: PNG,2D, or 3D. <br> A PNG Model is simply a still image of your avatar (so no movement at all). Using a PNG VTuber model is the most basic and simplest way of VTubing, but also the least engaging and entertaining.<br> Using a 2D model is one of the most popular choices for VTubing among the VTubers because of their pleasing aesthetics (anime look) and uniqueness (because they are highly customizable). They can also be the most expressive models. <br> A 3D VTuber model can be tracked from many angles because it is an three-dimensional object, so it is more immersive and engaging than PNG. However, you must use extra softweare in order to stream with a 3D avatar, unlink with PNGs.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionFour()">Continue</button>`

            } else if (buttonEl.id == `four`) {
                document.body.style.backgroundImage = `url("./Assets/motioncapture.png")`
                document.getElementById(`text`).innerHTML = `There are numerous options to choice from when it comes to motion capture software depending on if you are using a PC or a Mac. This software uses a webcam to capture your movements and mimick those movements onto your avatar.` 
                document.getElementById(`option-buttons`).innerHTML =`<button onClick="questionFour()">Continue</button>`
            } 
        });
    });
}

function startGame() {
    let becomeVtuber = confirm('While scrolling through MeTube, you come across a VTuber for the first time. After a quick Gaagle search, you learn that a VTuber (or Virtual YouTuber) is an online entertainer who uses a virtual avatar instead of their real world appearance. You think being a VTuber sounds fun. Would you like to give it a shot?');

    if (becomeVtuber == true) {
        // The game officially starts
        alert(`You decide to become a VTuber. Excellent choice! Now, let's get started by creating your VTuber Persona! ;D`)
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
let playerModelType = null;


startGame();