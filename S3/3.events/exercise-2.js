let input = document.querySelector ("input")

input.addEventListener("focus", function()
{
    const valorInput=input.value;
    console.log(valorInput);
})