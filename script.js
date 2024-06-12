const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.textContent = `${i + 1}`;
    container.appendChild(div);

    
}