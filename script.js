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
}

const exampleNode = {
    image: './images/enter.jpg',
    text: 'You have spotted an abandoned base underwater. Will you investigate it?',
    choices: ["Nah. I'm going to dip. Also, I'm a wimp.", "Heck yeah! Nothing ever bad happens in abandoned places! Let's go investiage!"]
};

const storyNodes = [
    [
        './images/enter.jpg', 
        'You have discovered an abandoned base underwater! Will you investigate it?', 
        ["Nah. I'm gonna dip. Also, I'm a wimp.", "Heck yeah! Nothing ever bad happens in abandoned places! Let's go investiage!"]
    ],

    [
        './images/starfish-table.jpg',
        'You enter... you spot a starfish on the table, along with a tablet. Do you watch the video on the tablet?',
        ["Yeah? Why wouldn't I?", "Nah. My mom said my screentime is too high anyways."]
    ],
        
    [
        './images/locker.jpg',
        'You spot a locker. Inside is a tablet.',
        
    ]
          'You leave the base.'
];

function displayNode(indexNum) {

}