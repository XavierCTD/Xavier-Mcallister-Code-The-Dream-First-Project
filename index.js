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


// Callback Result

function onFormSubmit(event) {
   event.preventDefault();

   const data = new FormData(event.target);
   console.log(data);

   const userName = data.get(usersName);
   const email = data.get(usersEmail);
   console.log(userName);
   console.log(email);
}

// Message Display Beneath Section

const messageSection = document.getElementById("messages");
const messageList = messageSection.getElementByTagName("ul");
console.log(messageList);
messageSection.hidden = false;
   

// Message Display

const newMessage = document.createElement("LI");
newString = <a href="mailto:${email}">${username}</a>\n
<span>${usersMessage}</span>";
console.log(newString);
newMessage.innerHTML = newString;
   

// Message Form

const messageForm = document.getElementsByName("leave_message");
console.log(messageForm);
messageForm.addEventListener("submit", onFormSubmit);


// Remove Message

const removeButton = document.createElement("BUTTON");
removeButton.innerText = "Remove";
removeButton.setAttribute("Type", "Button");
removeButton.setAttribute("id", "removeButtonId");
removeButton.addEventListener("click", onRemoveButton);
console.log(removeButton);


// Message Appended

newMessage.appendChild(removeButton);
messageList[0].appendChild(newMessage);
   

// Reseting Form

event.target.reset();
