
//last modification
const lastmod = document.querySelector('#lastmod');
lastmod.innerHTML = `Last Updated: ${document.lastModified}`;


//current year
const todaysdate = new Date();
const lastyear = document.querySelector('#lastyear');
lastyear.innerHTML = `&copy ${todaysdate.getFullYear()}`;



