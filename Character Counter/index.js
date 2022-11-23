console.log("Character Counter");
const textAreaEl = document.getElementById("textarea");
const totalEL = document.getElementById("total");
const remainingEl = document.getElementById("remaining");

textAreaEl.addEventListener("keyup", () => {
    updateTotal();
    updateRemaining();
    
});

function updateTotal(){
    totalEL.innerText = textAreaEl.value.length;
}

function updateRemaining(){
    remainingEl.innerText = 150 - textAreaEl.value.length;
}