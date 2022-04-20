const HandLayout = document.querySelector('.hands')

const Contest = document.querySelector('.contest')

const userPick = document.getElementById('userPickedImage');
const housePick = document.getElementById('housePickedImage')
const results = document.querySelector('.results')
const displayResults = document.querySelector('.results__heading')
let ScoreValue = document.querySelector('.resultsValue')


let houseHand, userHand
//dictionary
// const handOptions = {
//     'rock': '/assets/Rock.png',
//     'paper': '/assets/Paper.png',
//     'scissors': '/assets/Scissors.png'
// }

//     .src = handOptions[hand]
const imagesData = [
    {
        id: 1,
        name: 'paper',
        src: "assets/Paper.png"
    }
    ,
    {
        id: 2,
        name: 'scissors',
        src: "assets/Scissors.png"
    }
    ,
    {
        id: 3,
        name: 'rock',
        src: "assets/Rock.png"
    }

]
let InitialScore = JSON.parse(localStorage.getItem('score'));
if (InitialScore !== null) {
    Score = InitialScore
    console.log(Score)
} else {
    Score = 0
}


// let Score = 0

const pickUsersHand = (hand) => {

    HandLayout.style.display = "none"

    imagesData.map((image) => {
        if (image.name === hand) {
            userHand = hand
            console.log(userHand)
            userPick.src = image.src
        }


    })


    Contest.style.display = 'flex';

    let houseHand = housePickedHand(imagesData);


    Results(hand, houseHand)

}

const housePickedHand = (imagesData) => {

    //let hand = ['rock', 'paper', 'scissors']
    console.log(imagesData.length);
    const randomNumber = Math.floor(Math.random() * imagesData.length + 1)
    console.log(randomNumber)

    imagesData.map((image) => {
        if (randomNumber === image.id) {
            houseHand = image.name;
            console.log(houseHand)
            housePick.src = image.src

        }
        return houseHand;
    })
    return houseHand;
}




const Results = (userHand, houseHand) => {
    console.log(houseHand)
    if (userHand == "paper" && houseHand == "scissors") {
        setResults("YOU LOSE!");
        setScore(Score - 1);
    }
    if (userHand == "paper" && houseHand == "rock") {
        setResults("YOU WIN!");
        setScore(Score + 1);
    }
    if (userHand == "paper" && houseHand == "paper") {
        setResults("It's a tie!");
    }
    if (userHand == "rock" && houseHand == "scissors") {
        setResults("YOU WIN!");
        setScore(Score + 1);
    }
    if (userHand == "rock" && houseHand == "paper") {
        setResults("YOU LOSE!");
        setScore(Score - 1);
    }
    if (userHand == "rock" && houseHand == "rock") {
        setResults("It's a tie!");
    }
    if (userHand == "scissors" && houseHand == "scissors") {
        Contest.classList.add('active')

        setResults("It's a tie!");
    }
    if (userHand == "scissors" && houseHand == "rock") {
        setResults("YOU LOSE!");
        setScore(Score - 1);
    }
    if (userHand == "scissors" && houseHand == "paper") {
        setResults("YOU WIN!");
        setScore(Score + 1);
    }
};

const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
}

const setResults = (decision) => {
    displayResults.innerText = decision;
}

const setScore = (newScore) => {
    Score = newScore;
    ScoreValue.innerText = newScore;
    localStorage.setItem('score', JSON.stringify(newScore))
}