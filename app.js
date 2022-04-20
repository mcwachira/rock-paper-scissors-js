const HandLayout = document.querySelector('.hands')

const Contest = document.querySelector('.contest')

const userPick = document.getElementById('userPickedImage');
const housePick = document.getElementById('housePickedImage')

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

const pickUsersHand = (hand) => {


    HandLayout.classList.add('display')

    console.log(hand)

    imagesData.map((image) => {
        if (image.name === hand) {
            userPick.src = image.src
        }


    })
    housePickedHand(imagesData)
    Contest.classList.add('active')

}

const housePickedHand = (imagesData) => {
    console.log(imagesData.length);
    const randomNumber = Math.floor(Math.random() * imagesData.length + 1)
    console.log(randomNumber)

    imagesData.map((image) => {
        if (randomNumber === image.id) {
            housePick.src = image.src
        }
    })
}