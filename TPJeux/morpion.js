var prompt = require("prompt-sync")();

let tableauMorpion = [
    [" * ", " * ", " * "],
    [" * ", " * ", " * "],   
    [" * ", " * ", " * "]        
];

let joueur1="joueur 1", joueur2 = "joueur 2", win = 0;

function affichageTableau()
{
    for (let i = 0; i < tableauMorpion.length; i++)
    {
        console.log(tableauMorpion[i]);
    }    
}


function jouer(joueur, symbole)
{
    let ligne = Number(prompt(joueur + ", vous désirez jouez sur quelle ligne ? 1, 2 ou 3 ? "));
    let colonne = Number(prompt(joueur + ", vous désirez jouez sur quelle colonne ? 1, 2 ou 3 ? "));

    if (tableauMorpion[ligne-1][colonne-1] != " * " )
    {
        console.log("case déjà prise ou saisie incorrecte, une autre place ?")
        jouer(joueur, symbole);
    }
    else
    {
        tableauMorpion[ligne-1][colonne-1] = symbole;   
        affichageTableau();  
        verifCells(tableauMorpion, joueur);

        switch (true) 
        {
            case win == 1:
                getWinner(joueur);
                break;
            case win == 2:
                getWinner("Joueur 1 & 2");
                break;
            default:
                if(joueur == joueur1)
                {
                    jouer(joueur2, " o ");
                }
                else
                {
                    jouer(joueur1, " x ");
                }
                break;
        }      
    }   
}



function verifCells(game, joueur)
{
    getSymbol(game[0][0], game[0][1], game[0][2]) ||
    getSymbol(game[1][0], game[1][1], game[1][2]) ||
    getSymbol(game[2][0], game[2][1], game[2][2]) ||
    getSymbol(game[0][0], game[1][0], game[2][0]) ||
    getSymbol(game[0][1], game[1][1], game[2][1]) ||
    getSymbol(game[0][2], game[1][2], game[2][2]) ||
    getSymbol(game[0][0], game[1][1], game[2][2]) ||
    getSymbol(game[0][2], game[1][1], game[2][0])    
}

function getSymbol(firstCell, secondCell, thirdCell, joueur) 
{
    if (firstCell !== " * " && //Si la 1ère cellule n'est pas null -> Retourne 1 ou 2
    firstCell == secondCell && //et que la 2ème cellule est égale à la 1ère
      firstCell == thirdCell )//et si la 3eme cellule est égale à la 1ère
        {
            win = 1;
        }
    //parcourir tableau
    let nul = 0;
    for (let i = 0; i < tableauMorpion.length; i++) 
    {
        for (let j = 0; j < tableauMorpion[i].length; j++) 
        {
            if(tableauMorpion[i][j] != " * ")
            {
                nul += 1;     
            }
        }
    }
    console.log(nul);
                if(nul == 9)
                {
                    win = 2;
                }
}
     

function getWinner(joueur) {
        if(joueur == "Joueur 1 & 2")
        {
            reponse = prompt("Le jeu est fini, match nul " + joueur + " ! Une autre partie? 1- Oui 2-Non : " );
        }
        else
        {
            reponse = prompt("Le jeu est fini, bravo " + joueur + " ! Tu as gagné ! Une autre partie? 1- Oui 2-Non : " );
        }

        if(reponse == 1)
        {
            tableauMorpion = [
                [" * ", " * ", " * "],
                [" * ", " * ", " * "],   
                [" * ", " * ", " * "]        
            ];
            win = 0;
            jouer(joueur1, " x ");
        }
        else
        {
            console.log("Fin du jeu");
        }
  };

jouer(joueur1, " x ");