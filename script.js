const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style. width = "37.5px";
    div.style.padding = 0;
    div.style.height = "37.5px";
    div.style.margin = 0;
    div.style.border = 0;
    div.style.backgroundColor = "blue";
    div.textContent = `${i + 1}`;
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    })

    container.appendChild(div);
    
}