

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

// Variable Assignments
let playerVTuber = null;
let playerMascot = null;
let playerModelType = null;
const buttonContainer = document.getElementById(`option-buttons`)
let currentQ = 1;
let totalFame = 0;

const gameOptions = {
    streamingPlatform: {
        text: 'Chose a Streaming Platform for VTubing',
        image: './Assets/twitch_youtube_tiktok.png',
        explainer: 'Many VTubers stream across multiple platforms, including YouTube, Twitch, and even TikTok (to name a few), each with its own pros and cons. Twitch is the largest platform for live-streaming, with most of the content built around video games. Twitch also has a thriving community atmosphere. <br><br> Conversely, YouTube was made for uploading lasting content. It has a search engine that helps newer streamers find an audience, though it lacks a close-knit community. Finally, TikTok has a high conversion rate when converting your TikTok short-videos audience to your live stream audience, so building your audience on TikTok and later moving them to other platforms like YouTube/Twitch is a great strategy.',
        fame: 100,
        
    }, 
    vTuberModel: {
        text: `Create your VTuber Model`,
        image: `./Assets/PNG_2D_3D.png`,
        explainer: `There are three options to choose from when it comes to your VTuber avatar: PNG, 2D, or a 3D model. Whichever you choose will be a matter of personal preference and budget. You can make your own avatar using your own art skills and inexpensive/free programs ($), buy a pre-made model ($$), or commission someone to make you a custom avatar ($$$). <br><br> A PNG Model is a still image of your avatar. Many streamers use a PNG avatar when just starting out because it is the simplest and least expensive way of VTubing. However, PNG models are also the least engaging and entertaining because they can't move or have facial expressions. If you want to make your own PNG, you'll need to draw one in an image editing software. <br><br> A 2D VTuber avatar comprises flat, 2D art that has been "rigged" to move and is the most expensive option. Using a 2D model is one of the most popular choices for VTubing among VTubers because of their pleasing aesthetics (resembling anime characters), uniqueness (because they are highly customizable), and vibrant expressions. <br><br> 3D VTuber avatars are also trendy. A 3D VTuber model can be tracked from many angles because it is a three-dimensional object that is very immersive and engaging. There are several free options to make your own 3D model available. However, 2D and 3D models require extra face-tracking software to stream with them (e.g., VSeeFace, VTube Studio, etc.), unlike with PNGs. Again, different free and paid options exist for this, and availability is based on your computer's operating system (PC or Mac).`,
        fame: 100,
    },
    characterLore: {
        text: `Write your VTuber Character's Lore`,
        image: `./Assets/Gawr_Gura_Lore.png`,
        explainer: `VTuber lore is your persona's backstory. While you don't need official lore, it can help make your character more interesting, personal, and unique and contribute to your channel's overall aesthetic and branding. Having a defined lore also helps some streamers get into character easier. Lore can include topics such as your character's likes and dislikes, goals and aspirations, race (for example, are they a part of the human race or another fantasy-based race like faeries or aliens), age (e.g., if they are an adult or child), and occupation (usually tied into their appearance/attire- like a persona who is royalty would dress in fancy/lavish clothing).`,
        fame: 100,
    }, 
    assetsOverlays: {
        text: `Create/Curate/Commission your VTuber Assets and Overlays`,
        image: `./Assets/VTuber_Assets_and_Overlays.png`,
        explainer: `Examples of VTuber assets include custom emotes for your channels; animated or static "Stream Starting," "Be Right Back, and "Streaming Ending" screens; background music (BGM); logos; and Twitch/YouTube alerts. Overlays are the main backdrops Vtubers use on their streaming software. There are different types of overlays, like minimalist overlays with simple elements and a clean theme, overlays that are detailed with several custom elements, or overlays with illustrative themes. While Twitch overlays are not required for live streaming, they can improve your viewers' experience and create engagement between yourself and your audience. <br><br> You can buy pre-made assets and overlays online (like on Etsy) or commission artists to create custom designs. There are tons of ways to get free Vtuber assets and overlays. You can also create your own using programs such as Canva.`,
        fame: 100,
    },
    socialMedia: {
        text: `Create a Social Media Presence`,
        image: `./Assets/Social_Media.png`,
        explainer: `Advertising your debut and engaging with your potential audience on Social Media is integral to VTubing. If the audience doesn't know you exist, how can they come to your streams? So create social media accounts on platforms like Instagram, TikTok, or Twitter (most of the VTuber community is very active on Twitter). Some ideas for pre-debut content include: <br>
        <ul>
        <li>Doing a partial character reveal of your VTuber model to tease your audience.</li>
        <li>Posting fun and personality-revealing content to show people what you're all about.</li>
        <li>Giving people an idea of what they can expect from your streams (e.g., what genre/games you'll be playing, if you're doing commissioned art streams, what type of karaoke songs you like to sing, etc.).</li>
        </ul>`,
        fame: 100,
    },
    debutContent: {
        text: `Plan your Debut Content`,
        image: `./Assets/Plan_your_Debut.png`,
        explainer: `Come up with some ideas on what you will do on your VTuber debut. Most VTubers use their debut to showcase their models from foot to head, display their VTuber assets and overlays, and introduce themselves with details such as their character's height, age, race, likes and dislikes, lore, and fun facts. Try creating a rough schedule of your debut while allowing yourself time to answer questions and chatting with your audience.`,
        fame: 100,
    },
    vTuberCommunity: {
        text: `Build your VTuber Community`,
        image: `./Assets/Community.png`,
        explainer: `As the saying goes, no one lives in a vacuum, and the same goes for VTubers. So start building your community and become friends with other VTubers by following and interacting with VTubers you like and admire. Interact with their tweets and also visit their live streams and say hello. You can also join VTuber communities on Discord, Reddit, and Facebook.`,
        fame: 100,
    },
    dryRun: {
        text: `Set up Your Gear, Test, and Practice`,
        image: `./Assets/dryrun.png`,
        explainer: `To make your debut as smooth and stress-free as possible, set up all of your gear and do test recordings. VTubers predominantly need to rely on tech, so ensure everything is working as it should before you go live. You can set up all of your scenes and sources ahead of time in most streaming software, including any VTuber software you'll use. If you've never streamed before, you can practice by recording yourself, watching the footage, and checking what you need to improve. As with everything in this world, practice makes progress!`,
        fame: 100,
    },
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

function question() {
    document.body.style.backgroundImage = '';
    if(currentQ == 1){
        alert(`Your VTuber debut is in 8 Days! Each day, you can choose what to work on to make it a roaring success.
        A VTuber Debut is simply when you stream with your VTuber for the first time. While having an official debut is optional, some VTubers like to amass followers on social media platforms before their debut to have a grander audience. Although on average, VTubers plan their debuts between a few weeks to a couple of months ahead.`);
    } else if (currentQ == 9) {
        alert(`You did it!`)
        playAgain();
        return
    } else {
        alert(`Good work today! You have ${9-currentQ} days left until your Debut.`)
    }
    currentQ++;
    document.getElementById('text').innerHTML = `What would you like to work on today?`
    document.getElementById(`option-buttons`).innerHTML = '';

    for (const dailyAction in gameOptions) {
        let button = document.createElement('button')
        button.classList.add('btn');
        button.innerHTML=gameOptions[dailyAction]['text'];
        button.addEventListener(`click`, function (evt) {
            totalFame += gameOptions[dailyAction]['fame'];
            document.body.style.backgroundImage = `url(${gameOptions[dailyAction]['image']})`;
            document.getElementById(`text`).innerHTML = gameOptions[dailyAction]['explainer']; 
            document.getElementById(`option-buttons`).
            innerHTML =`<button onClick="question()">Continue</button>`
        });
        document.getElementById(`option-buttons`).appendChild(button);
    };
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

        question();

    } else {
        // The game will end.
        document.getElementById('text').innerHTML = `You decide not to become a VTuber and live out the rest of your life as a really boring human being. The End.`
        document.getElementById(`option-buttons`).innerHTML = '';
        document.body.style.backgroundImage = `url('./Assets/boringlife.jpg')`;
        return
    } 
}

function endGame() {
    document.getElementById('text').innerHTML = `Thank you for playing!`
    document.getElementById(`option-buttons`).innerHTML = '';
}

function playAgain() {
    currentQ = 1; 
    document.getElementById('text').innerHTML = `Would you like to play again?`
    document.getElementById(`option-buttons`).innerHTML =`<button class="btn" onClick="startGame()">Yes</button><button class="btn" onClick="endGame()">No</button>`
}

startGame();

