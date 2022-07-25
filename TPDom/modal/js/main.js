let modal = document.getElementById("modal");
let container = document.getElementById("container");
let divBtn = document.getElementById("div_btn");

function openModal()
{
    modal.style.display = "block";
    container.style.display = "block";
    divBtn.style.filter = "blur(4px)";
}

function closeModal()
{
    modal.style.display = "none";
    container.style.display = "none";
    divBtn.style.filter = "blur(0)";
}