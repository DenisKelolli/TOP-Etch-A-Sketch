const container = document.querySelector(".container");


for (let i = 0; i < 256; i++){
    const div = document.createElement("div");
    div.style.border = "2px solid black";
    div.style.width = "30px";
    div.style.height = "30px";
    container.appendChild(div);
}
