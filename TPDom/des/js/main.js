let player1De = document.getElementById("player_1--de");
let player2De = document.getElementById("player_2--de");
let fstDice = document.getElementById("fst_de");
let scdDice = document.getElementById("scd_de");
let thdDice = document.getElementById("thd_de");
let fthDice = document.getElementById("fth_de");
let fithDice = document.getElementById("fith_de");
let sthDice = document.getElementById("sth_de");
let result = document.getElementById("result_lance")

let dice = document.getElementById("de");
let dices = document.getElementsByClassName("de");

let valueFstDice, valueScdDice, secondDice;

function getRandom(min, max) 
{
    return Math.floor(Math.random() * (max - min) + min);
}

function addDe()
{ 
    secondDice = dice.cloneNode(true);
    player2De.appendChild(secondDice);
}

function setValue()
{
    valueFstDice = getRandom(1,6);
    valueScdDice = getRandom(1,6);
    dice.value = valueFstDice;
    secondDice.value = valueScdDice;
}

// function addDot(dices, value)
// {
//     for(i=2; i<=value; i++)
//     {
//         let dot = document.createElement("div");
//         dices.appendChild(dot);
//         dot.setAttribute("id", "dot" + i);
//         dot.setAttribute("class", "dot");
//     }
// }

function lance()
{
    setValue();
    modifDices(valueFstDice, dice);
    modifDices(valueScdDice, secondDice);
    compare(valueFstDice, valueScdDice);
}

function modifDices(value, dices)
{
    dices.style.display = "none";
    switch (true) {
        case value == 1 && dices == dice:
            dices = fstDice.cloneNode(true);
            player1De.appendChild(dices);
            dices.style.display = "block";
            break;
        case value == 1 && dices == secondDice:
            dices = fstDice.cloneNode(true);
            player2De.appendChild(dices);
            dices.style.display = "block";
            break;
        case value == 2 && dices == dice:
            dices = scdDice.cloneNode(true);
            player1De.appendChild(dices);
            dices.style.display = "grid";
            break;
        case value == 2 && dices == secondDice:
            dices = scdDice.cloneNode(true);
            player2De.appendChild(dices);
            dices.style.display = "grid";
            break;
        case value == 3 && dices == dice:
            dices = thdDice.cloneNode(true);
            player1De.appendChild(dices);
            dices.style.display = "grid";
            break;
        case value == 3 && dices == secondDice:
            dices = thdDice.cloneNode(true);
            player2De.appendChild(dices);
            dices.style.display = "grid";
            break;
        case value == 4 && dices == dice:
            dices = fthDice.cloneNode(true);
            player1De.appendChild(dices);
            dices.style.display = "grid";
            break;
        case value == 4 && dices == secondDice:
            dices = fthDice.cloneNode(true);
            player2De.appendChild(dices);
            dices.style.display = "grid";
            break;
        case value == 5 && dices == dice:
            dices = fithDice.cloneNode(true);
            player1De.appendChild(dices);
            dices.style.display = "grid";
            break;
        case value == 5 && dices == secondDice:
            dices = fithDice.cloneNode(true);
            player2De.appendChild(dices);
            dices.style.display = "grid";
            break; 
        case value == 6 && dices == dice:
            dices = sthDice.cloneNode(true);
            player1De.appendChild(dices);
            dices.style.display = "grid";
            break;       
        default:
            dices = sthDice.cloneNode(true);
            player2De.appendChild(dices);
            dices.style.display = "grid";
            break;
    }
}

function compare(value1, value2)
{
    if(value1 < value2)
    {
        result.textContent = "Player 2 Win !";
    }
    else if (value1 > value2)
    {
        result.textContent = "Player 1 Win !";
    }
    else
    {
        result.textContent = "DRAW!";
    }
}

function jouer()
{
    addDe();
    lance();
}

jouer();

setInterval('window.location.reload()', 2000);