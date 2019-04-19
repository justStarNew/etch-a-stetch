let container = document.querySelector("#container");
for(let i =0;i < 9;i++) {  
  let div = document.createElement("div");
  container.appendChild(div);
}

let grid = document.querySelectorAll("#container div");
grid.forEach((div) => {
    div.addEventListener("mouseenter",(e) => {
      e.target.style.background = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    })
})
