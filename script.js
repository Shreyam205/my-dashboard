// Data
const data = {
    academics: [
        {
            title: "Bachelor of Technology",
            institution: "University of Engineerig and Management, Kolkata",
            period: "2020-2024",
            description: "Computer Science and Engineering"
        },
        {
            title: "Internship",
            institution: "XYZ Company",
            period: "Summer 2024",
            description: "Worked on full-stack development projects"
        }
    ],
    skills: [
        { name: "HTML5", level: "Advanced", icon: "fab fa-html5" },
        { name: "CSS3", level: "Advanced", icon: "fab fa-css3-alt" },
        { name: "JavaScript", level: "Intermediate", icon: "fab fa-js" },
        { name: "React", level: "Intermediate", icon: "fab fa-react" },
        { name: "Node.js", level: "Beginner", icon: "fab fa-node-js" },
        { name: "Python", level: "Intermediate", icon: "fab fa-python" },
        { name: "Express", level: "Intermediate", icon: "fas fa-server" },
        { name: "MongoDB", level: "Intermediate", icon: "fas fa-database" },
        { name: "NextJS", level: "Beginner", icon: "fab fa-react" },
        { name: "MySQL", level: "Intermediate", icon: "fas fa-database" }
    ],
    extras: {
        goals: [
            "Master full-stack development",
            "Contribute to open-source projects",
            "Learn cloud technologies"
        ],
        hobbies: [
            "Coding",
            "Reading tech blogs",
            "Playing games"
        ],
        certifications: [
            "Web Development Bootcamp",
            "JavaScript Algorithms",
            "React Development"
        ]
    }
};

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links li');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Update active section
            document.querySelector('.nav-links li.active').classList.remove('active');
            link.classList.add('active');

            // Show corresponding section
            const sectionId = link.getAttribute('data-section');
            document.querySelector('.section.active').classList.remove('active');
            document.getElementById(sectionId).classList.add('active');

            // Close mobile menu
            if (window.innerWidth <= 768) {
                navLinksContainer.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
    // In your initNavigation function, add this after creating the nav items
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
}

// Populate Academics/Experience
function populateAcademics() {
    const timeline = document.getElementById('academicsTimeline');
    data.academics.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <h3>${item.title}</h3>
            <h4>${item.institution}</h4>
            <p class="period">${item.period}</p>
            <p>${item.description}</p>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Populate Skills
// Update the populateSkills function
function populateSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    data.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <p>${skill.level}</p>
        `;
        skillsContainer.appendChild(skillCard);
    });
}

// Populate Extras
function populateExtras() {
    // Goals
    const goalsList = document.getElementById('goalsList');
    data.extras.goals.forEach(goal => {
        const li = document.createElement('li');
        li.textContent = goal;
        goalsList.appendChild(li);
    });

    // Hobbies
    const hobbiesList = document.getElementById('hobbiesList');
    data.extras.hobbies.forEach(hobby => {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });

    // Certifications
    const certificationsList = document.getElementById('certificationsList');
    data.extras.certifications.forEach(cert => {
        const li = document.createElement('li');
        li.textContent = cert;
        certificationsList.appendChild(li);
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Toggle icon
        if (newTheme === 'dark') {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

// Initialize everything when DOM is loaded
// Add this function after initNavigation()
function initDashboardBrand() {
    const dashboardBrand = document.getElementById('dashboardBrand');
    
    dashboardBrand.addEventListener('click', () => {
        const profileSection = document.querySelector('[data-section="profile"]');
        const currentActiveSection = document.querySelector('.section.active');
        
        if (currentActiveSection.id === 'profile') {
            // If already on profile section, refresh the page
            window.location.reload();
        } else {
            // Update active section in navigation
            document.querySelector('.nav-links li.active').classList.remove('active');
            profileSection.classList.add('active');
            
            // Show profile section
            document.querySelector('.section.active').classList.remove('active');
            document.getElementById('profile').classList.add('active');
            
            // If mobile menu is open, close it
            const navLinksContainer = document.querySelector('.nav-links');
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }
        }
    });
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDashboardBrand(); // Add this line
    populateAcademics();
    populateSkills();
    populateExtras();
    initThemeToggle();
});