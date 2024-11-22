document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggleTheme');
    const body = document.body;
    const searchInput = document.getElementById('search');
    const projectList = document.getElementById('projectList');
  
    // Sample project data
    const projects = [
      { id: 1, title: 'NinjagoMedia', owned: 'Yes', description: 'The place for all Ninjago content!', status: '73% Done', image: 'images/project1.jpg', link: 'https://vibinlub.github.io/NinjagoMedia/' },
      { id: 2, title: 'FireSearch', owned: 'Yes', description: 'A Google Based Search Engine', status: '100% Done', image: './images/project2.png', link: 'https://vibinlub.github.io/FireSearch/' },
      { id: 3, title: 'Dart Scores', owned: 'Yes', description: 'The best way to count your darting game!', status: 'Not Started Yet', image: './images/project3.png', link: 'https://vibinlub.github.io/NotStartedYet.html'},
      { id: 4, title: 'Woordenboek', owned: 'Yes', decription: 'Het woordenboek van Lub, speciaal voor Bermgeits OG Spastjes', status: '30% Klaar', image: './images/project4.png', link: 'https://vibinlub.github.io/Woordenboek'}
      // Add more projects as needed
    ];
  
    // Function to display projects
    function displayProjects(projects) {
      projectList.innerHTML = '';
      projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `
          <a href="${project.link}" target="_blank">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title} | Owned: ${project.owned}</h3>
            <p>${project.description}</p>
            <p>${project.status}</p>
          </a>
        `;
        projectList.appendChild(projectItem);
      });
    }
  
    // Initial display of projects
    displayProjects(projects);
  
    // Theme toggle functionality
    toggleThemeButton.addEventListener('click', function() {
      body.classList.toggle('dark-theme');
      body.classList.toggle('light-theme');
      const icon = toggleThemeButton.querySelector('i');
      const text = toggleThemeButton.querySelector('span');
      if (body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = 'Dark Mode';
      } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = 'Light Mode';
      }
    });
  
    // Search functionality
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredProjects = projects.filter(project => 
        project.title.toLowerCase().includes(searchTerm) || 
        project.description.toLowerCase().includes(searchTerm)
      );
      displayProjects(filteredProjects);
    });
  });
  
