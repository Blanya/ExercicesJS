let buttons = document.getElementsByTagName("button");
let input = document.getElementById("answer");
let answer = document.getElementById("result");

for(let i = 0; i < buttons.length ; i ++ ) 
{
    buttons[i].addEventListener("click", affichage);
} 

function affichage()
{  
    input.textContent+=this.value;
}

let clear = document.getElementById("reset");
clear.addEventListener("click", reset);

function reset()
{
    input.textContent = " ";
    answer.textContent = " ";
}

function result()
{
    //fonction eval => calcul chaine de caractère
    answer.textContent=eval(input.textContent);
}

let egal = document.getElementById("egal");
egal.addEventListener("click", result);

const keyAllowed = ['0','1','2','3','4','5','6','7','8','9','/', '*', '-', '+', '(', ')', '.'];

document.addEventListener('keypress', function(event)
{
    verifSaisie(event.key);
});

function verifSaisie(key)
{
    for(let j=0; j<=keyAllowed.length; j++)
    {
        if(key == keyAllowed[j])
        {
            input.textContent+=key;  
        } 
        if(key == "Enter")
        {
            result();
        }   
        if(key == "c")
        {
            reset();
        }
    }
}