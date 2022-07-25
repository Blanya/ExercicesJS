var prompt = require("prompt-sync")();

let propositions = ["1 -Stocker les notes des élèves dans un tableau", "2- Afficher la liste des notes", "3- Modifier une note", "4- Afficher la moyenne d'une classe", "5- Afficher la note la plus élevée", "6- Afficher la note la plus basse", "0- Quitter le programme"];

let answer, notes=[];

function proposition()
{
    console.log("Que souhaitez-vous faire ? ")

    for (const iterator of propositions) 
    {
        console.log(iterator);
    } 
    
    answer = prompt("Indiquez le numéro de l'opération a effectuer : ");

    switch (true) {
        case answer == 1:
            function remplirTableau()
            {
                let longueur = Number(prompt("Combien de notes comportent le tableau ? "));
                for (let i = 0; i < longueur; i++) 
                {
                    notes[i]= Number(prompt("Entrez la note " + (i+1) + " de votre tableau : "));
                    if(notes[i]>20 || notes[i]<0)
                    {
                        notes[i]= Number(prompt("Saisie incorrecte, entrez la note " + (i+1) + " de votre tableau : "));
                    }
                }
                proposition();    
            }  
            if(notes.length == 0)
            { 
                remplirTableau();
            }
            
            else
            {
                let add = prompt("Souhaitez vous ajouter une note au tableau existant ? Ou en créer un nouveau ? 1- ajouter une valeur, 2- en créer un nouveau : ");
                if(add == 1)
                {
                    let value = Number(prompt("Entrez la note à ajouter au tableau : "));
                    notes.push(value);
                    proposition();
                }
                else
                {
                    remplirTableau();
                    proposition();
                }
            }
            break;
        case answer == 2:
            for (i=0; i<notes.length; i++)
            {
                console.log("Note numéro " +(i+1) + "- " + notes[i]);
            }
            proposition();
            break;
        case answer == 3:
            do 
            {
                modifSupp = prompt("Souhaitez-vous modifier ou suppprimer une note ? 1- La modifier, 2- La supprimer  : ");
            }while(modifSupp < 1 || modifSupp > 2)
            
            let modification = Number(prompt("Quelle est le numéro de la note que vous souhaitez modifier/ supprimer ? "));
            do
            {
                console.log("Saisie incorrecte, note inexistante");
                modification = Number(prompt("Quelle est le numéro de la note que vous souhaitez modifier/ supprimer ? "));    
            } while(modification > notes.length || modification < 1)
            if(modifSupp == 1)
            {
                notes[modification-1] = prompt("Quelle est la nouvelle note numéro " + modification + " ? ");
                console.log("La note numéro " + modification + " a bien été modifié");
                proposition();    
            }
            else 
            {
                notes.splice((modification-1), 1);
                console.log("La note numéro " + modification + " a bien été supprimé ");
                proposition();
            }
            break;
        case answer == 4:
            let moy, somme;
            somme = 0;

            for (let i = 0; i < notes.length; i++) 
            { 
                somme = somme + notes[i];
            }

            moy = (somme / (notes.length)).toFixed(2);

            console.log("La moyenne de la classe est de : " + moy );
            proposition();
            break;
        case answer == 5:
            let plusGrande;

            plusGrande = notes[0];

            for (let i = 1; i < notes.length; i++) 
            {
                if(notes[i] > plusGrande)
                {
                    plusGrande = notes[i];
                }
            }

            console.log("La plus grande des notes est : " + plusGrande);
            proposition();
            break;
        case answer == 6:
            let plusPetite;

            plusPetite = notes[0];

            for (let i = 1; i < notes.length; i++) 
            {
                if(notes[i] < plusPetite)
                {
                    plusPetite = notes[i];
                }
            }

            console.log("La plus petite des notes est : " + plusPetite);
            proposition();
            break;
        default:
            return;
    }
}

proposition();
