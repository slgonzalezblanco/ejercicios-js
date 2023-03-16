const div= document.createElement ("div");
document.body.insertBefore(div, document.body.firstChild);

const p=[]
for (let i= 0; i < 6; i++) {
    p[i] = document.createElement ("p");
div.appendChild(p[i]);
    
}
 