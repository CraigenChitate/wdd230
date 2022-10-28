// Menu responsive 

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;


// current date with format: Wednesday, 24 July 2020.

const date = new Date();


const currentDate = document.getElementById('currentDate');

const fulldate = new Intl.DateTimeFormat('en-Us',{
    dateStyle: "full"
}).format(date);


currentDate.innerHTML = fulldate;




	 