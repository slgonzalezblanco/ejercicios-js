

let div = document.querySelectorAll(".fn-insert-here");

div.forEach(element => {
    let p = document.createElement ("p");
    p.textContent = "voy dentro"; 
    element.appendChild(p);
});

