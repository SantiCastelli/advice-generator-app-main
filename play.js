
let button = document.querySelector(".icon");

async function callApi(){

    let res = await fetch('https://api.adviceslip.com/advice');
    let advice = await res.json();
    console.log(advice.slip);

    document.querySelector("p").textContent = `ADVICE # ${advice.slip.id}`;
    document.querySelector(".text").textContent = `"${advice.slip.advice}"`
};



button.addEventListener("click", function e(){
    callApi();
});



