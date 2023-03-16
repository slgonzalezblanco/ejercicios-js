const userAnwsers = [];

function confirmExample(string){
     confirm(string);
}
 
function promptExample(string){
     prompt(string);
}

function father(description,callback){
let resultado = callback(description);
userAnwsers.push(resultado);
}

father("confirm",confirmExample);
father("prompt",promptExample);

console.log(userAnwsers);