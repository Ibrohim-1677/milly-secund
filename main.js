const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input")
const elText = document.querySelector(".text")


const MILLYSECKUND_SECOND =1000;
const MILLYSECKUND_minut = 60 * MILLYSECKUND_SECOND;
const MILLYSECKUND_hour = 60 * MILLYSECKUND_minut;
const MILLYSECKUND_day = 24 * MILLYSECKUND_hour

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    const elInputValue = elInput.value

    console.log(elInputValue);
    elText.textContent = `${Math.floor(elInputValue / MILLYSECKUND_day )} kun  ${Math.floor((elInputValue % MILLYSECKUND_day ) / MILLYSECKUND_hour )} soat ${Math.floor((elInputValue % MILLYSECKUND_hour ) / MILLYSECKUND_minut )} minut ${Math.floor((elInputValue % MILLYSECKUND_minut ) / MILLYSECKUND_SECOND )} secund ${elInputValue % MILLYSECKUND_SECOND} milly secund`;
})