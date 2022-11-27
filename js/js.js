// e = array.indexOf()



const startBtn = document.querySelector('.start')
const firstWindow = document.querySelector('first')
const secondWindow = document.querySelector('second')
const back = document.querySelector('.back')
const itemvalue = document.querySelector('.item');
const itemsArea = document.querySelector('.itemsArea')
const addBtn = document.querySelector('.add')
const error = document.querySelector(".error");
const clear = document.querySelector('.clear');
const delBtns = document.getElementsByClassName('deleteItem');
const closeBox = document.querySelector('.close-box');
const choose = document.querySelector('.chose')
const result = document.querySelector('.tutaj')
const botom = document.querySelector('.botom')
const winner = document.querySelector('.winnerItem')
const winBox = document.querySelector('.winBox')
const eClick = document.getElementById('item')
const repeat = document.querySelector('.again')


const closeFirst = () => {
    firstWindow.style.display = 'none'
    secondWindow.style.display = 'flex'
    winBox.style.display = 'none'

}

const backToMain = () => {

    firstWindow.style.display = 'flex'
    secondWindow.style.display = 'none'
}





const addNote = () => {
    if (itemvalue.value != "") {
        error.style.visibility = 'hidden'
        createNote()

    } else {
        error.style.visibility = 'visible'
        // error.style.display = 'none'
    }

}

let selectedValue;
let cardID = 0;


const array = []

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('newItem')
    newNote.setAttribute('id', cardID)

    newNote.innerHTML = `
   
    <p>${itemvalue.value}</p>
`

    // array.push(itemvalue.value)
    array.push(itemvalue.value)


    itemsArea.appendChild(newNote)
    cardID++
    itemsArea.value = '';
    itemvalue.value = ''


}
const los = () => {
    const losIt = array[Math.floor(Math.random() * array.length)];


    if (array.length == 0 || array.length == 1) {
        error.style.visibility = 'visible'
        error.innerHTML = 'Musisz dodać minimum dwóch uczestników!!'
    } else {
        setTimeout(
            function () {
                winBox.style.display = 'block'
                // randomWinnerShow()
                winner.textContent = `Wygrywa ${losIt}`
            }, 1000)
    }






}





const deleteAll = () => {
    itemsArea.textContent = ''
    cardID = 0;
    error.style.visibility = 'hidden'
    itemvalue.value = ''
    array.length = 0
}



// let itemElement;

// itemElement.onclick = function deleteItem() {
//     var index = array.indexOf(this);
//     this.parentNode.removeChild(this);

//     array.splice(index, 1);

//     console.log(itemArray);
//     const noteToDelete = document.getElementById(id)
//     itemsArea.removeChild(noteToDelete)
//     // cardID--
//     array.splice(cardID)

// }


const repeatLos = () => {
    winBox.style.display = 'none'
    setTimeout(
        los()), 2000
}


if (array.length < 6) {
    itemsArea.style.overflow = "auto"
}

eClick.onkeyup = function (e) {
    if (e.keyCode == 13 && itemvalue.value >= '1') { createNote() }
}
//     else {
//         error.style.visibility = 'visible';
//     }
// }

closeBox.addEventListener('click', function () {
    array.length = ""
    winBox.style.display = 'none'
    itemsArea.textContent = ''
})


window.onclick = e => {
    console.log(e.target);
    // console.log(cardID);
    console.log(array.indexOf(e));
    console.log(array);
}

repeat.addEventListener('click', repeatLos)
clear.addEventListener('click', deleteAll)
choose.addEventListener('click', los)
addBtn.addEventListener('click', addNote)
startBtn.addEventListener('click', closeFirst)
back.addEventListener('click', backToMain)
delBtns.addEventListener('click', deleteItem);


// window.onclick = e => {
//     console.log(e.target);  // to get the element
//     console.log(e.target.tagName);  // to get the element tag name alone
// } 