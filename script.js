function describeRoom(string) {
    switch (string) {
        case "living room":
            console.log('a room in a house for general and informal everyday use');
            break;
        case "bedroom":
            console.log('a room for sleeping in');
            break;
        case 'kitchen':
            console.log('a room or area where food is prepared and cooked');
            break;
        case 'backyard':
            console.log('a yard behind a house or other building, typically surrounded by a fence');
            break;
        default:
            console.log("It would appear you have entered an invalid room.");
    }
};

const exampleNode = {
    image: './images/enter.jpg',
    text: 'You have spotted an abandoned base underwater. Will you investigate it?',
    choices: ["Nah. I'm going to dip. Also, I'm a wimp.", "Heck yeah! Nothing ever bad happens in abandoned places! Let's go investiage!"]
};

const entrance = {
    image: './images/enter.jpg', 
    text: "You are at the front of an abandoned base. It's kinda... calling to you. Your curiosity tugs at you to explore. Do you?", 
    choices: ["Nah. I'm gonna dip. Also, I'm a wimp.", "Heck yeah! Nothing ever bad happens in abandoned places! Let's go investiage!"]
};

const starfishTable = {
    image: './images/starfish-table.jpg',
    text: 'You enter... you spot a starfish on the table, along with a tablet. Do you watch the video on the tablet?',
    choices: ["Yeah? Why wouldn't I?", "Nah. My mom said my screentime is too high anyways."]
};

const locker = {
    image: './images/locker.jpg',
    text: "You spot a locker. Inside is a tablet. You watch the video. It shows security footage of what happened to the previous subnauts who lived here. They were attacked. And you're now sure if the monster is gone yet. How do you escape?",
    choices: ["Through the back. Haven't been there yet, so it can't track me.", "Through the front. It'll never expect it."]
};

const backyard = {
    image: './images/exit.jpg',
    text: 'You are now in the backyard of the house. Yet, the house still seems to call to you. What do you do?',
    choices: ['Back to the front. I am NOT going in that place', 'Maybe I should go in. What could possibly go wrong?']
};

const storyNodes = [entrance, starfishTable, locker, backyard];

const img = document.getElementById('img');
const par = document.getElementById('par');
const choicesContainer = document.getElementById("choices-container");

function displayNode(indexNum) {
    img.src = storyNodes[indexNum].image;
    par.innerHTML = '<p>' + storyNodes[indexNum].text + '</p>';
    choicesContainer.innerHTML = '<div><button>' + storyNodes[indexNum].choices[0] + '</button> <button>' + storyNodes[indexNum].choices[1] + '</button></div>';
};

