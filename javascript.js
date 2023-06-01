const container = document.querySelector(".container");
const button = document.querySelector(".button");

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };



button.addEventListener("click", () => {
    container.textContent = "";
    userInput = parseInt(prompt("Enter a grid size: "));
    
    for (let i = 0; i < (userInput*userInput); i++){
        if(userInput >= 100){
            alert("ERROR. Enter a number less than 100");
            break;
            }
        const div = document.createElement("div");
        div.style.border = "2px solid black";
        boxDims = (960/userInput) - 4;;
        div.style.width = boxDims+"px";
        div.style.height = boxDims+"px";
        div.addEventListener("mouseover",() =>{
            div.style.backgroundColor = randomRgbColor();
        })
        container.appendChild(div);
    }

})



