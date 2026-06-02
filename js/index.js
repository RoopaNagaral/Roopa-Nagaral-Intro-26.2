//creating footer element and adding it into the html file using appendChild 
const footers = document.createElement("footer");
document.body.appendChild(footers);

//adding copyright text in the footer section
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = '&copy; ' + 'Roopa Nagaral ' + thisYear;
footer.appendChild(copyright);

//creating array of skills and appending to the list
const skills = ["javaScript", "HTML", "CSS", "C#", "ASP.Net", "SQL", "Jquery", "C", "MySql"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

//fetching input from form element and submitting the values
const messageForm = document.getElementsByName('leave_message')[0];

//getting message section and ul elemnet to check list is empty or not
const messageSection = document.getElementById("messages");
const messageList = messageSection.querySelector('ul');
if(messageList.childElementCount === 0){
    messageSection.style = 'display: none;';
}  

messageForm.addEventListener("submit", event => {
    event.preventDefault();
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;
    console.log('User Name: ' + userName + ' Email: ' + userEmail + ' User Message: ' + userMessage);
    
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href='mailto:${userEmail}'>${userName}</a> <span>${userMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function(event){
        const entry = removeButton.parentNode;
        entry.remove();
        if(messageList.childElementCount === 0){
            messageSection.style = 'display: none;';
        }  

    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageSection.style = 'display: block;';
    event.target.reset();
});

//fetch github repositories by using API
fetch('https://api.github.com/users/RoopaNagaral/repos')
    .then((response) => {
        if(!response.ok){
            throw new Error('Request Failed!');
        }
        return response.json();
    })
    .then((data) => {
        const repositories = data;
        console.log(repositories);

        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');

        for(let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error('An error accord', error);
    });

// const api_url = 'https://api.github.com/users/RoopaNagaral/repos';

// async function getGithubRepos(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const repositories = await data;
//         console.log(repositories);

//         const projectSection = document.getElementById('projects');
//         const projectList = document.querySelector('ul');

//         repositories.forEach(element => {
//             console.log(element.name);
//         });
//         // for(let i = 0; i < repositories.length; i++) {
//         //     const project = document.createElement('li');
//         //     console.log(repositories[i]);
//         // }
    
//     } catch(error) {
//         console.error(error);
//     }
// }

// getGithubRepos(api_url);
   
