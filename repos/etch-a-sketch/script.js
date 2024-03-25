// script.js

const container = document.getElementById('container');

// Create 16x16 square divs
const createSquareDivs = () => {
    //iterate over rows
    for (let i = 0; i < 16; i++) {
        //iterate over columns in each row
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('drawing-area');
            container.appendChild(square);
            
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

// Call the function to create square divs
createSquareDivs();
