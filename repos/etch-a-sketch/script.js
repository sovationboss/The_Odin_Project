const container = document.getElementById('drawing-area');
const createButton = document.getElementById('create-button')

// Create 16x16 square divs
const createSquareDivs = (size) => {

    // clearing (existing) grid
    container.innerHTML = ' ';

    //calculate flex-basis value for each square
    const flexBasis = 100 / size + '%';

    //iterate over rows
    for (let i = 0; i < size; i++) {
        //iterate over columns in each row
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
            square.style.flexBasis = flexBasis;
            // Event listener for mouseenter event
            square.addEventListener('mouseenter', () => {
                square.classList.add('hovered');
            });

            // Event listener for mouseleave event
            square.addEventListener('mouseleave', () => {
                square.classList.remove('hovered');
            });
        }
    }
};

// call the function to create square divs
createSquareDivs();

//function get the user input
createButton.addEventListener('click',(event) => {
    event.preventDefault();
    const userInput = prompt("Please enter the size of grid you want: ");
    if(isNaN(userInput) || userInput < 1 || userInput > 100 || Number.isInteger(userInput)) {
        alert("Please enter a valid number!");
    } else {
        createSquareDivs(userInput);
    }
});
