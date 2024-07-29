document.addEventListener('DOMContentLoaded', function() {
    const toggleThemeButton = document.getElementById('toggleTheme');
    const body = document.body;
    const searchInput = document.getElementById('search');
    const projectList = document.getElementById('projectList');
  
    // Sample project data
    const projects = [
      { id: 1, title: 'NinjagoMedia', description: 'The place for all Ninjago content!', image: 'images/project1.jpg', link: 'https://vibinlub.github.io/NinjagoMedia/' },
      { id: 2, title: '#Soon', description: '#Soon', image: 'images/project2.jpg', link: '#Soon' },
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
            <h3>${project.title}</h3>
            <p>${project.description}</p>
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
  