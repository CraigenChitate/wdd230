// Banner join us for the chamber meet and greet Wednesday at 7:00 p.m
const day = new Date();

if (day.getDay() == 1 || day.getDay() == 2) { 

	document.getElementById("join-banner").innerHTML +=

	`<a href="join.html"><p>
	🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m
	</p></a>`;  }
