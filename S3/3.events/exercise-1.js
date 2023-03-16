let button$$ = document.createElement("button");
button$$.setAttribute("id", "btnToClick");

document.body.appendChild (button$$);
button$$.addEventListener("click", clickk)
function clickk(event) {
    console.log(event);
}
