const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul = document.createElement("ul");
document.body.insertBefore(ul,document.body.firstChild);

for (let i = 0; i < apps.length; i++) {
    let li= document.createElement("li");
    li.textContent= apps[i];
    ul.appendChild(li);
    
}