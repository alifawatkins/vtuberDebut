// Create a vTuber Class
class vTuber {
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
class mascot {
    constructor(name, gender, species) {
        this.name = name;
        this.gender = gender;
        this.species = species;
    }
}

function playGame() {
    let becomeVtuber = confirm('While scrolling through YouTube, you come across a VTuber for the first time. After a quick Google search, you learn that a VTuber (or Virtual YouTuber) is an online entertainer who uses a virtual avatar instead of their real world appearance. You think being a VTuber sounds fun. Would you like to give it a shot?');

    if (becomeVtuber == true) {
        // The game officially starts
        alert(`You decide to become a VTuber. Let's get started! ;D`)
        
    } else {
        // The game will end.
        alert('You decide not to become a VTuber and live out the rest of your life as a real, boring human being. The End.')
    }

    // Player Prompted Class Instance
    let playerName = prompt(`What is the name of your VTuber?`)
    let playerGender = prompt(`What is the gender of your VTuber?`)
    let playerSpecies = prompt(`What is the species of your VTuber?`)
    let playerBirthday = prompt(`What your VTuber's birthday? (Enter a month and day)`)
    let playerAge = prompt(`How many years old is your VTubers? (Enter a whole number)`)
    let playerModelType = prompt(`What type of VTuber model would you like?`)
    let playerModelStreamerType = prompt(`What type of content do you want to stream?`)

    const playerVtuber = new vTuber(playerName, playerGender, playerSpecies, playerBirthday, playerAge, playerModelType, playerModelStreamerType)

    alert(`Hello, ${playerName}! Your VTuber is a ${playerGender} ${playerSpecies} and ${playerAge} years old. Their birthday is ${playerBirthday}. You are using a ${playerModelType} and stream ${playerModelStreamerType}.`)
}

playGame();