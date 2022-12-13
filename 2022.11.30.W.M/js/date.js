//************************************//
//===== PUT TODAY'S DATE IN <H1> =====//
//************************************//

const date = new Date();    // 'date' is a variable we are defining. Inside, we are storing the value that the built-in JS 'Date()' function has as today's date and clock time.

const month = date.getMonth();

const day = date.getDate();

const year = date.getFullYear();

const todaysDate = ((month + 1) + "/" + day + "/" + year);
// characters in quotations indicate a 'string value' (in other words, text)

// when combining strings into a variable, + indicates concatenation

const dateHeader = document.querySelector("#date");

// console.log(dateHeader);

dateHeader.innerHTML = todaysDate;