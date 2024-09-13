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
useCopyright.innerHTML= copyrighttext;
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

for(let i = 0; i < skillsList; i++ ) {
   var skill = document.createElement("LI");
   skill.innerText = skill[i];
   console.log(skill);
   skillsList.appendChild(skill);
   console.log(skillsList);
}


// Callback for Remove Button

function onRemoveButton(event){
   console.log("Remove");
   const entry = event.target.parentNode;
   entry.remove();

   const messageSection = document.getElementById("messages");
   const messageList = messageSection.getElementByTagName("li");
   console.log(messageList);
   console.log(messageList.length);
   if (messageList.length === 0) {
      messageSection.hidden = true;
   }
}


// Callback Result

function onFormSubmit(event) {
   event.preventDefault();

   const data = new FormData(event.target);
   console.log(data);

   const userName = data.get(userName);
   const email = data.get(usersEmail);
   console.log(userName);
   console.log(email);


// Message Display Beneath Section

const messageForm = document.querySelector("[name= 'leave_message']");
const messageSection = document.getElementById("messages");
const messageList = messageSection.getElementByTagName("ul");
messageSection.hidden = true;

let idCounter = 0;

// Creating Unique ID's

function makeId() {
   let id = 'entry' + idCounter++;
   return id;
}

let entryById={};

// Message Display

messageForm.addEventListener('submit', (event) => {
   event.preventDefault();
   let name = event.target.userName.value;
   let email = event.target.usersEmail.value;
   let message = event.target.usersMessage.value;

   console.log('Name:', name);
   console.log('Email:', email);
   console.log('Message:', message);
   let uid = makeId();
   let newMessage = document.createElement('li');
   newMessage.classList.add('message-item');

   newMessage.innerHTML = `<a href="mailto:${email}"> ${name} </a><span>wrote: ${message} </span>`;
   newMessage.setAttribute('id', uid);

   entryById[uid] = { userName: name, usersEmail: email, usersMessage: message};
   newMessage.appendChild(makeEditButton());
   newMessage.appendChild(makeRemoveButton());

   messageList.appendChild(newMessage);
   messageForm.reset();
   messageSection.hidden = false;
});


 // Creating Remove Button
 function makeRemoveButton() {
   let removeButton = document.createElement('button');
   removeButton.innerText = 'remove';
   removeButton.type = 'button';
   removeButton.className = 'remove-button';
   removeButton.addEventListener('click', () => {
      let entry = removeButton.parentNode;
      let uid1 = entry.getAttribute('id');
      delete entryById[uid1];
      entry.remove();
      if (messageList.childElementCount === 0) {
          messageSection.hidden = true;
      };
   });
   return removeButton;
 }


 // Creating an edit button

 function makeEditButton() {
   let editButton = document.createElement('button');
   editButton.innerText = 'edit';
   editButton.type = 'button';
   editButton.className = 'edit-button';
   editButton.addEventListener('click', () =>{
      let entry = editButton.parentNode;

      let oldRemoveButton = entry.querySelector('button.edit-button');
      oldRemoveButton.hidden = true;

 // Getting the entry's unique ID

      let uid = entry.getAttribute('id');
      let clonedForm = messageForm.cloneNode(true);
      clonedForm.className = "edit-message-form";
      clonedForm.usersName.value = entryById[uid].usersName;
      clonedForm.usersEmail.value = entryById[uid].usersEmail;
      clonedForm.usersMessage.value = entryById[uid].usersMessage;
      entry.appendChild(clonedForm);
      clonedForm.addEventListener('submit', function editMessage(event) {
         event.preventDefault();
         entryById[uid].usersName = event.target.usersName.value;
         entryById[uid].usersEmail = event.target.usersEmail.value;
         entryById[uid].usersMessage = event.target.usersMessage.value;
         let newEntry = document.createElement('li');
         newEntry.classList.add('message-item');
         newEntry.setAttribute('id', uid);
         newEntry.innerHTML = `<a href ="mailto: ${entryById[uid].usersEmail} "> ${entryById[uid].usersName} </a><span>wrote: ${entryById[uid].usersMessage} </span>`;
         newEntry.appendChild(makeEditButton());
         newEntry.appendChild(makeRemoveButton());
         entry.parentNode.replaceChild(newEntry,entry);
      });
   });
   return editButton;
 };

 // Remove Message


makeRemoveButton.innerText = "Remove";
makeRemoveButton.setAttribute("Type", "Button");
makeRemoveButton.setAttribute("id", "removeButtonId");
makeRemoveButton.addEventListener("click", onRemoveButton);
console.log(makeRemoveButton);
 

// Message Appended

newMessage.appendChild(removeButton);
messageList[0].appendChild(newMessage);
   

// Reseting Form

event.target.reset();
};

// Find Message Form

const messageForms = document.getElementsByName("leave_message");
console.log(messageForms);
const messageForm = messageForms[0];
console.log(messageForm);


// Adding Fetch Method


fetch(`https://api.github.com/users/${userName}/repos`)
   .then((response) => {
      if(!response.ok) {
         throw new Error('Request Failed');
      }
      return response.json();
   })
   
   .then((data) => {
     console.log(data)
   })

   .catch(error => {
      console.error('An error occurred', error);
   });
   
