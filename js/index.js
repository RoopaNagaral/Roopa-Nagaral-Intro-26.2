//creating footer element and adding it into the html file using appendChild 
const footers = document.createElement("footer");
document.body.appendChild(footers);

//adding copyright text in the footer section
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = '&copy ' + 'Roopa Nagaral ' + thisYear;
footer.appendChild(copyright);

//creating array of skills and appending to the list
const skills = ["javaScript", "HTML", "CSS", "C#", "ASP.Net", "SQL", "Jquery"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}