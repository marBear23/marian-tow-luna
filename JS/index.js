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
