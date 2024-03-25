const container = document.getElementById('drawing-area');
const createButton = document.getElementById('create-button');
const resetButton = document.getElementById('reset-button');
const eraserButton = document.getElementById('eraser-button');
let eraserMode = false;

// Create 16x16 square divs
const createSquareDivs = (size) => {

    // Clearing (existing) grid
    container.innerHTML = ' ';

    // Calculate flex-basis value for each square
    const flexBasis = 100 / size + '%';

    // Iterate over rows
    for (let i = 0; i < size; i++) {
        // Iterate over columns in each row
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
            square.style.flexBasis = flexBasis;
            // Event listener for mouseenter event
            square.addEventListener('mouseenter', () => {
                //square.classList.add('hovered');
                handleHover(square);
            });
            
            // Event listener for mouseleave event
            /*square.addEventListener('mouseleave', () => {
                square.classList.remove('hovered');
            });*/
        } 
    } 
};

// Call the function to create square divs
createSquareDivs();

// Function to handle applying hover effect
const handleHover = (square) => {
    // Check if square is already hovered
    if (eraserMode) {
        square.style.opacity = '';
        square.classList.remove('hovered'); 
    } else {
        if (!square.classList.contains('hovered')) {
            square.classList.add('hovered');
        } else {
            // Increase opacity by 10% if square is already hovered
            let opacity = parseFloat(square.style.opacity || 0) + 0.1;
            square.style.opacity = opacity > 1 ? 1 : opacity; // Cap opacity at 1
        }
    }
};

// Function to reset the hover effect
const resetOpacity = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.opacity = '';
        square.classList.remove('hovered');
    })
}

// Function get the user input
createButton.addEventListener('click',(event) => {
    event.preventDefault();
    const userInput = prompt("Please enter the size of grid you want: ");
    if(isNaN(userInput) || userInput < 1 || userInput > 100 || Number.isInteger(userInput)) {
        alert("Please enter a valid number!");
    } else {
        createSquareDivs(userInput);
    }
});

// Function to clear the grid
resetButton.addEventListener('click', (event) => {
    event.preventDefault();
    resetOpacity();
})

// Event listener for eraser button
eraserButton.addEventListener('click', () => {
    eraserMode = !eraserMode; // Toggle eraser mode
    if(eraserMode) {
        eraserButton.style.backgroundColor = 'red';
    } else {
        eraserButton.style.backgroundColor = '';
    }
});
