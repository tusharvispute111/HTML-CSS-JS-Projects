console.log("Multiplication Quiz Game");
const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);
const correctAns = num1*num2;

document.getElementById("question").innerText=`What is ${num1} Multiply by ${num2}?`;

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score =  0;
}

document.getElementById("score").innerText = `Score : ${score}`;

=function submitPage(){
    formEl.addEventListener("submit", () =>{
        const userAns = +inputEl.value;
    if (correctAns === userAns) {
        score = score + 2;
        updateLocalStorage();
    } else {
        score = score - 1;
        updateLocalStorage();
    }
    

    
    })
}
submitPage();

const resetEl = document.getElementById("reset");
resetEl.addEventListener("click" , () =>{
    localStorage.setItem("score", JSON.stringify(0));
    document.location.reload();

})

function updateLocalStorage (){
    localStorage.setItem("score", JSON.stringify(score));
}








