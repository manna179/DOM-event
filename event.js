// Option 1 directly use in html element


// add onclick function 
// Option2 

function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// option 3
const makeBlueButton = document.getElementById('make-blue')

makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

//option 4
const makePink = document.getElementById('make-pink');
makePink.onclick = function makePink(){
  document.body.style.backgroundColor = 'pink'
}

// option 5

const aquaButton = document.getElementById('make-aqua');
     aquaButton.addEventListener('click', makeAqua)

     function makeAqua(){
        document.body.style.backgroundColor = 'aqua'
     }

    //  option 6
    const makeGreen = document.getElementById('make-green');
     makeGreen.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green'
     })

    //  option 7 final 
    