const body = document.body;

let footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 Marian Tow ${thisYear}`;

footer.appendChild(copyright);

footer.style.textAlign = "center";

const skills = ["Javascript", "HTML", "CSS", "Git", "GitHub"];

const skillsSection = document.getElementById("Skills");

const skillsList = skillsSection.querySelector("ul");
//for loop
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
//for each loop
//skills.forEach(skill => {
//const element = document.createElement("li");
// element.innerText = skill;
// skillsList.appendChild(element);
//});

//---Message Form---
function toggleMessagesSection() {
  const messageSection = document.getElementById("Messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "node";
  } else {
    messageSection.style.display = "block";
  }
}

toggleMessagesSection();

const messageForm = document.querySelector("form[name=leave_messages]");

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  console.log("Name: ", userName);
  console.log("Email: ", userEmail);
  console.log("Message: ", userMessage);

  const messageSection = document.getElementById("Messages");

  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;

  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit-btn";
  editButton.type = "button";

  editButton.addEventListener("click", function () {
    const messageSpan = newMessage.querySelector("span");
    const newText = prompt("Edit your messsage: ", messageSpan.innerText);
    if (newText !== null) {
      messageSpan.innerText = newText;
    }
  });

  newMessage.appendChild(editButton);

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.className = "remove-btn";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;

    entry.remove();
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  messageForm.reset();
});
