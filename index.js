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

// Create an instance of each class
const gawrGura = new vTuber('Gawr Gura', 'woman', 'human-shark hybrid', 'June 20', '9,600 years old', '2D Model', 'Variety Streamer');
console.log(gawrGura);

const bloop = new mascot('Bloop', 'boy', 'salmon shark');
console.log(bloop)

/*
var enterCabin = confirm('You come across a strange house in the woods. Do you want to go in?');
alert(enterCabin);
*/ 