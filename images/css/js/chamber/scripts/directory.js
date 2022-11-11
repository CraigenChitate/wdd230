const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');
const display = document.querySelector("#mainDiv");

gridBtn.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});
listBtn.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("list");
	display.classList.remove("grid");
});

const requestFile = 'data/data.json';
const cards = document.querySelector('.member-cards');

fetch(requestFile)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const membersList = jsonObject.companies;
    membersList.forEach(displayMembers);
  });

function displayMembers(membersList) {
  
    // Create elements to add to the document
    let card = document.createElement('section');
    let div = document.createElement('div')
    let name = document.createElement('p');
    let logo = document.createElement('img');
    let addres = document.createElement('p'); //addres
    let phone = document.createElement('p'); //phone
    let web = document.createElement('a'); // web site

    name.innerHTML = `<strong>${membersList.name}</strong>`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', membersList.imageUrl);
    logo.setAttribute('alt', `Logo of ${membersList.name}`);
    logo.setAttribute('loading', 'lazy');
    addres.innerHTML = `${membersList.addres}`;
    phone.innerHTML = `${membersList.phone}`;
    if (membersList.web != null){
      web.innerHTML = `${membersList.name} web`;
      web.setAttribute('href', membersList.web);
     
    } else {
      web.innerHTML = `No web`;
    }
    // Add/append the section(card) with the h2 element
    card.appendChild(div);
    div.appendChild(logo);
    div.appendChild(name);
    card.appendChild(addres);
    card.appendChild(phone);
    card.appendChild(web);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.member-cards').appendChild(card);

    
  }

  // function getRandomMember {

  // }


