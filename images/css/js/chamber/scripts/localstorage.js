
// store the new number of visits value to the local storage
const todayDisplay = document.querySelector(".today");

let numVisits = Number(window.localStorage.getItem("Visits-ls"));
// // show number of InDays //
// // if the number of milliseconds does not = 0
if (numVisits !== 0) {  
	// then do this math equation and round to a whole number which will now = (NumInDays)
    numInDays = Math.round((Date.now() - numVisits) / 86400000); 
	// now go to the todayDisplay and retrieve toInDays date and diplay a "text" number we 
	// will call numInDays 
	todayDisplay.textContent = numInDays;

} else {
	todayDisplay.textContent = `This is your first visit!`;
}

// store the current date in number of Milliseconds 
numVisits = Date.now();
localStorage.setItem("Visits-ls", numVisits);