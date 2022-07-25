var prompt = require("prompt-sync")();

let justePrix, nbPropose;

//fonction nb random entre 1 et 1000

function getRandom(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}

justePrix = getRandom(1,1000);

nbPropose = Number(prompt("Devinez le prix (entre 1 et 1000), votre proposition : "));

let tentatives = 1;

while(nbPropose!=justePrix)
{   
    if(nbPropose>justePrix)
    {
        console.log("Plus petit !");
        nbPropose = Number(prompt("Devinez le prix (entre 1 et 1000), votre proposition : "));
    }
    else
    {
        console.log("Plus grand !");
        nbPropose = Number(prompt("Devinez le prix (entre 1 et 1000), votre proposition : "));
    }  
    tentatives++; 
}

console.log("Vous avez trouvé, le juste prix était de : " + justePrix);
console.log("Vous avez trouvé en " + tentatives + " tentatives");