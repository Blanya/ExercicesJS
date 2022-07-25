var prompt = require("prompt-sync")();

let motRandom, motCache = [], proposition = [""], compteur=10;

let tableauMots = ["acajou", "jouer", "adorer", "guerrier", "suer", "pseudonyme", "email", "chaise", "cahier", "tasse", "cigarette"];

let longueur = tableauMots.length;

function getRandom(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}

motRandom = tableauMots[getRandom(0,longueur-1)];
console.log(motRandom)

for (let i = 0 ; i < motRandom.length ; i++) 
{
    tableauMots[i]=motRandom.charAt(i);
    motCache[i] = '* ' ;
}

console.log("Le mot à deviner est " + motCache.join(""));

askLetter();

function askLetter()
{
    let letter = prompt("Donne moi une lettre : ");
    letter.toLowerCase();

    let testPresence = motRandom.includes(letter);

    if(testPresence == false)
    {
        --compteur;
        console.log("Il vous reste " + compteur + " tentatives");
        proposition = motCache;
    }
    else
    {
        for (let i = 0; i < motRandom.length; i++) 
        {
            if (letter == motRandom[i])
            {
                proposition[i] = letter;
            }
            else
            {
                proposition[i] = motCache[i];
            }
            
        }    
    }

    motCache = proposition;
    let motTrouve = motCache.join("");
    if(compteur>= 1)
    {
        console.log(motTrouve);
    }
    
    if(motTrouve != motRandom)
    {
        if(compteur == 0)
        {
            console.log("Dommage, vous avez perdu ! Le mot a trouvé était " + motRandom);
        }
        else
        {
            askLetter();   
        }     
    }

    return motTrouve;
}

if(motCache.join("") == motRandom)
{
    console.log("Bravo, vous avez trouvé le mot " + motRandom);  
}