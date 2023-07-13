const container = document.querySelector('#container');
const resetbtn = document.getElementById('resetbtn');

// Functions


function hover() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }

// Function to add color on hover
// function hover(){
    // this.classList.add('hovercolor');
// }

// Function to remove color
function removecolor(){
    this.classList.add('hovercolor');
}

// Function to reset grid by calling remove function on grid
function reset () {
    gridstoreset = resetgrid;
    gridstoreset.forEach((element) => {
        element.classList.remove("hovercolor");
      });
}

// Function to make iniital grid and add hover function to each square.
function gridmaker(){
        for (let i = 0; i < 256; i++) {
            let gridbox = document.createElement('div');
            gridbox.classList.add('gridboxstyle');
            gridbox.addEventListener("pointerover", hover);
            container.appendChild(gridbox);
            console.log(i)
                    }
                }


// Logic loaded

gridmaker()
const resetgrid = document.querySelectorAll('div');
resetbtn.addEventListener('click', reset);