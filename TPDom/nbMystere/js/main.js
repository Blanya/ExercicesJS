let nbMystere, nbCoups;
let instruction = document.getElementById("p_instruction");
let indice = document.getElementById("p_trouve");
let tentatives = document.getElementById("nb_tentatives");
let validerNombre = document.getElementById("valider");
let rejouerBtn = document.getElementById("tryAgain");

nbMystere = getRandom(1,50);
generate();

function getRandom(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}


function generate()
{   
    nbCoups = 0;
    tentatives.textContent = nbCoups;
    instruction.textContent = "J'ai généré un nombre entre 1 et 50 inclus";
    indice.textContent = "Essayez de le deviner en proposant si dessous";
    validerNombre.onclick = "valider()";
    document.getElementById("input_number").addEventListener("keypress", function(event) 
    {
        if (event.key === "Enter") 
        {
            valider();
        }
    });
}



function valider()
{
    nbCoups++ ;
    tentatives.textContent = nbCoups;
    let nbPropose = document.getElementById("input_number").value

    if(nbPropose == nbMystere)
    {
        instruction.textContent = ` Bravo ..!! Vous avez trouvé en ${nbCoups} coups!`;
        indice.textContent = `Le nombre mystère était ${nbMystere}`;
        validerNombre.onclick = null;
        document.getElementById("input_number").addEventListener("keypress", function(event) 
        {
            if (event.key === "Enter") 
            {
                alert("Je lance une nouvelle partie");
                generate();
            }
        });
    }
    else if (nbPropose < nbMystere)
    {
        instruction.textContent = `Le nombre mystère est plus grand que ${nbPropose}`;
    }
    else
    {
        instruction.textContent = `Le nombre mystère est plus petit que ${nbPropose}`;
    }
}


function rejouer()
{
    nbMystere = getRandom(1,50);
    generate();
}