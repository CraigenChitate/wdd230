const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');
    // Change the textContent property of the h2 element to contain the prophet's full name
    let fullName = `${prophet.name} ${prophet.lastname}`
    h2.innerHTML = `${fullName}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `Portait of ${fullName} - ${prophet.order}${ordinal_suffix_of(prophet.order)} Latter-day President`);
    img.setAttribute('loading', 'lazy');
    
    birthDate.innerHTML = `Date of Birth: <strong>${prophet.birthdate}</strong>`;
    birthPlace.innerHTML = `Place of Birth: <strong>${prophet.birthplace}</strong>`;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(img);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}


function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
  
