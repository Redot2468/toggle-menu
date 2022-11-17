


// let openBtn = document.querySelector(".open__btn");
// let modalContainer = document.querySelector(".modal__container");
// let closeBtn = document.querySelector(".close__btn");

// openBtn.addEventListener("click", (e) => {
//     modalContainer.style.display = "block";
// })

// closeBtn.addEventListener("click", (e) => {
//     modalContainer.style.display = "none";
// })

// window.addEventListener("click", (e) => {
//     if(e.target === modalContainer){
//         modalContainer.style.display = "none";
//     }
// })

// menu toggle

const hamburger = document.querySelector(".hamburger");
const xmark = document.querySelector(".xmark");
const menu = document.querySelector(".menu");


hamburger.addEventListener("click", (e) => {
        
    
    menu.style.display = "block";
    hamburger.style.display = "none";
    xmark.style.display = "block";
   
    xmark.addEventListener("click", (e) => {

        menu.style.display = "none";
        hamburger.style.display = "block";
        xmark.style.display = "none";
      

    })
})






























// // variables

// let btn = document.querySelector(".btn");
// let quote = document.querySelector(".quote");
// let person = document.querySelector(".person");

// const quotes = [
//     {quote:"Learn as if you will live forever, live like you will die tomorrow.",
//      person:"Mahatma Gandhi"},

//      {quote:"We cannot solve problems with the kind of thinking we employed when we came up with them.",
//      person:"Albert Einstein"},

//      {quote:"When you change your thoughts, remember to also change your world.",
//      person:"Norman Vincent Peale"},

//      {quote:"It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest",
//      person:"Walter Anderson"},

     
//      {quote:"Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.",
//      person:"Diane McLaren"},

//      {quote:"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success",
//      person:"Dale Carnegie"},

// ]

// btn.addEventListener("click", (e) => {
//             let random = Math.floor(Math.random() * quotes.length);
//             quote.innerText = quotes[random].quote;
//             person.innerText = quotes[random].quote;
// })