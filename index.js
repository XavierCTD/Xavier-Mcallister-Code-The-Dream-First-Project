// Footer Element
const footerSearch = document.createElement('FOOTER');
footerSearch.className = "footer";
footerSearch.setAttribute("id", "myfooter");
console.log(footerSearch);

// Current Year
const today = new Date();
let thisYear = today.getFullYear();
console.log(thisYear);

// Additional Footer Element

const addfooter = document.querySelector("footer");
console.log(addfooter);

// The Copyright 

const useCopyright = document.createElement("p");
const copyrightSymbol = '\u0049';
const copyrighttext = copyrightSymbol + "Xavier Mcallister" + thisYear;
useCopyright.innerHTML= copyrightText;
console.log(useCopyright);

// Copyright Appended

addfooter.appendChild(useCopyright);
console.log(addfooter);

// Skills Section

const secSkills = ["Javascript", "HTML", "CSS"];
console.log(secSkills);

// Adjusting Skills Section

const skillsSection = document.querySelector("#Skills");
console.log(skillsSection);
const skillsList = document.getElementById("skills-list");
console.log(skillsList);

for(let i = 0; i < skills.length; i++ ) {
   var skill = document.createElement("LI");
   skill.innerText = skills[i];
   console.log(skill);
   skillsList.appendChild(skill);
   console.log(skillsList);
}
