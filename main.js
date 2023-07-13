const container = document.querySelector('#container');

let gridbox = document.createElement('div');
const p = document.querySelector('p');
const resetbtn = document.getElementById('resetbtn');
// const gridarray = [gridbox];

gridbox.classList.add('gridboxstyle');


function hover(){
    this.classList.add('hovercolor');
}
function removecolor(){
    this.classList.add('hovercolor');
}

function reset () {
    gridstoreset = resetgrid;
    gridstoreset.forEach((element) => {
        element.classList.remove("hovercolor");
      });
}


function gridmaker(){
        for (let i = 0; i < 256; i++) {
            let gridbox = document.createElement('div');
            gridbox.classList.add('gridboxstyle');
            gridbox.addEventListener("pointerover", hover);
            container.appendChild(gridbox);
            console.log(i)
                    }
                }


gridmaker()
const resetgrid = document.querySelectorAll('div');
console.log(resetgrid);

resetbtn.addEventListener('click', reset);