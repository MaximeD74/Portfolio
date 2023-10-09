// Fonction pour afficher la navigation progressivement en fonction du défilement


function afficherNavigation() {
  const nav = document.querySelector('nav');
  const header = document.querySelector('header');
  const aboutSection = document.querySelector('#about');

  const position = window.scrollY;

  const navStartAnimationPosition = aboutSection.offsetTop - header.clientHeight / 4 ;

  if (position >= navStartAnimationPosition) {
    nav.style.opacity = '1';
  } else {
    nav.style.opacity = '0';
  }

  nav.style.transition = 'opacity 0.3s ease';
}

window.addEventListener('scroll', afficherNavigation);





// Charger le fichier JSON des compétences


fetch('skills.json')
  .then(response => response.json())
  .then(data => {
    const skillsContainer = document.querySelector('.skillsContainer');

    data.forEach(competence => {
      const skillElement = document.createElement('div');
      skillElement.classList.add('skill');

      const imageElement = document.createElement('img');
      imageElement.src = competence.image;
      imageElement.alt = competence.alt;
      skillElement.appendChild(imageElement);

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = competence.nom;
      skillElement.appendChild(descriptionElement);

      skillsContainer.appendChild(skillElement);
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON des compétences :', error);
  });


  // Charger le fichier JSON des projets


  fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const projectsContainer = document.querySelector('.projectsContainer');

    data.forEach(project => {
      const projectElement = document.createElement('a');
      projectElement.target = "_blank";
      projectElement.href = project.url;
      projectElement.classList.add('project');
      
      const title = document.createElement('h3');
      title.textContent = project.title;
      projectElement.appendChild(title);
      
      const description = document.createElement('p');
      description.textContent = project.description;
      projectElement.appendChild(description);
      
      const cover = document.createElement('img');
      cover.src = project.cover;
      cover.alt = project.alt;
      projectElement.appendChild(cover);
      
      const cardGradient = document.createElement('div');
      cardGradient.classList.add('cardGradient');
      projectElement.appendChild(cardGradient);


      projectsContainer.appendChild(projectElement);


    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON des compétences :', error);
  });

// Animation skill

const skillsContainer = document.querySelector('.skillsContainer')

window.addEventListener('scroll', () => {
  const {scrollTop, clientHeight} = document.documentElement;

  const topProjectToTopViewport = skillsContainer.
  getBoundingClientRect().top;

  if (scrollTop > (scrollTop + topProjectToTopViewport).toFixed() -
  clientHeight * 0.80 ) {
    skillsContainer.classList.add('activeSkills')
  }
})




  // Animation projets 

  const projectsContainer = document.querySelector('.projectsContainer')

  window.addEventListener('scroll', () => {
    const {scrollTop, clientHeight} = document.documentElement;

    const topProjectToTopViewport = projectsContainer.
    getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topProjectToTopViewport).toFixed() -
    clientHeight * 0.80 - 200) {
      projectsContainer.classList.add('activeProjects')
    }
  })


  