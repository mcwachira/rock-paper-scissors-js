const HandLayout = document.querySelector('.hands')

const Contest = document.querySelector('.contest')
const myChoice = document.querySelector('.my__choice')
const pcChoice = document.querySelector('.pc__choice')
const pickUsersHand = (hand) => {

    // HandLayout.st
    //hide the hand layout
    HandLayout.classList.add('display')
    // console.log(hand.parentElement.nodeName)
    //display the game layout
    // const image = document.createElement('img')
    // image.textContent = hand.parentElement.nodeName;
    // myChoice.appendChild(image)
    Contest.classList.add('active')

}