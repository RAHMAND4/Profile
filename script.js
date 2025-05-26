// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Project modal functionality
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

function showProjectDetails(projectId) {
    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Set content based on project ID
    if (projectId === 'cosmic-odyssey') {
        modalTitle.textContent = 'Kisah Rasa';
        modalContent.innerHTML = `
            <p class="text-gray-300 mb-6">
                Kisah Rasa is a 2D culinary-themed adventure game that combines exploration, puzzles, and fantasy elements. Players take on the role of a young chef exploring various regions of Indonesia to discover secret recipes for traditional food.            </p>
            <h4 class="text-xl font-bold text-white mb-4">Key Features:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Flavor-based food crafting system.</li>
                <li>Monsters with unique weaknesses to certain types of food.</li>
                <li>2D-art visuals are soft and aesthetic.</li>
                <li>Exploration of stories with elements of local culture and mythology.</li>
            </ul>
            <h4 class="text-xl font-bold text-white mb-4">Technical Highlights:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Each recipe affects gameplay outcomes, especially in combat and puzzle mechanics.</li>
                <li>Implemented a combat system where enemies have specific weaknesses based on the flavors of dishes (e.g., spicy, sweet, sour).</li>
                <li>Created an interactive dialogue system with branching conversations and quest triggers that integrate local folklore and cultural storytelling.</li>
                <li>Built a responsive and intuitive user interface that guides players through the ingredient selection and recipe discovery process, including visual flavor indicators</li>
            </ul>
            <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Unity</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">C#</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Json</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Github</span>
            </div>
            <div class="border-t border-slate-700 pt-6">
                <h4 class="text-xl font-bold text-white mb-4">Project Status:</h4>
                <p class="text-gray-300">
                    Currently in late beta stage. Expected release in 2024 on itch io.
                </p>
            </div>
        `;
    } else if (projectId === 'verdant-realm') {
        modalTitle.textContent = 'FUSHU Maarif';
        modalContent.innerHTML = `
            <p class="text-gray-300 mb-6">
                Fushu Maarif Information System is a WordPress-based web application developed to support the administration, information, and internal communication activities of the Fushu Maarif Islamic education organization.            </p>
            <h4 class="text-xl font-bold text-white mb-4">Key Features:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>An easy-to-use content management interface for admin teams without in-depth technical knowledge.</li>
                <li>Information management such as the latest news, activity agenda, and updates on the organization's work program.</li>
                <li>A special page to dynamically display the institution's vision, mission, history, and management structure.</li>
                <li>Digital upload and archiving system for activity documents and reports.</li>
                <li>Optimized website display for desktop and mobile devices, supporting access from anywhere.</li>
            </ul>
            <h4 class="text-xl font-bold text-white mb-4">Technical Highlights:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Used ACF to create dynamic and editable content sections (e.g., mission, vision, board member profiles) that can be easily updated through the WordPress dashboard.</li>
                <li>Designed and developed a fully responsive WordPress theme from scratch, optimized for both desktop and mobile devices</li>
                <li>Configured custom user roles (e.g., admin, editor, contributor) to manage content publishing permissions securely.</li>
                <li>Integrated translation-ready support using plugins such as WPML or Polylang (if multilingual content is needed).</li>
            </ul>
            <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Wordpress</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">PHP</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Mysql</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Github</span>
            </div>
            <div class="border-t border-slate-700 pt-6">
                <h4 class="text-xl font-bold text-white mb-4">Project Status:</h4>
                <p class="text-gray-300">
                    Released in 2024.
                </p>
            </div>
        `;
    } else if (projectId === 'neon-shadows') {
        modalTitle.textContent = 'Battle of Pong';
        modalContent.innerHTML = `
            <p class="text-gray-300 mb-6">
                A modernized remake of the classic Pong game, developed as a foundational project to strengthen understanding of 2D game mechanics, physics, and input handling in Unity. This version maintains the simplicity of the original while introducing a few enhancements for smoother gameplay and visual polish.            </p>
            <h4 class="text-xl font-bold text-white mb-4">Key Features:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Faithful to the original Pong concept, with two paddles, a bouncing ball, and score tracking.</li>
                <li>Player vs. AI mode with adjustable difficulty.</li>
                <li>Two-player mode using keyboard input for quick matches.</li>
                <li>Simple start menu, game over screen, and in-game score HUD.</li>
            </ul>
            <h4 class="text-xl font-bold text-white mb-4">Technical Highlights:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Used Unity’s built-in Rigidbody2D and Collider2D to simulate ball bounce and paddle collision.</li>
                <li>Implemented keyboard input for player movement and menu navigation using custom C# scripts.</li>
                <li>Created a simple state manager to control transitions between menu, gameplay, and game over scenes.</li>
                <li>Developed a lightweight AI that tracks the ball's vertical position with reaction delay for a fair challenge.</li>
            </ul>
            <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Unity</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">C#</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Json</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Github</span>
            </div>
            <div class="border-t border-slate-700 pt-6">
                <h4 class="text-xl font-bold text-white mb-4">Project Status:</h4>
                <p class="text-gray-300">
                    released in 2024.
                </p>
            </div>
        `;
    } else if (projectId === 'FTIK-Maarif') {
        modalTitle.textContent = 'FTIK Maarif';
        modalContent.innerHTML = `
            <p class="text-gray-300 mb-6">
                The Maarif FTIK (Faculty of Tarbiyah and Teacher Science) Information System is a WordPress-based web application developed to support academic information activities, faculty profiles, and activity publications. This website is designed to be informative, easily accessible, and can be managed directly by the faculty without requiring technical expertise.            <h4 class="text-xl font-bold text-white mb-4">Key Features:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Highlights faculty profile, latest news, and featured academic programs.</li>
                <li>Dedicated pages for each program with curriculum overviews, mission statements, and lecturer information.</li>
                <li>Admins can easily publish official announcements and campus news through a user-friendly dashboard.</li>
                <li>Displays the faculty's organizational chart and detailed lecturer profiles with photos and expertise areas.</li>
            </ul>
            <h4 class="text-xl font-bold text-white mb-4">Technical Highlights:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Used to create flexible and manageable content types like “Lecturers”, “Programs”, and “Events”.</li>
                <li>Designed a lightweight, responsive theme tailored to FTIK’s visual identity.</li>
                <li>Implemented secure access control for different user roles (admin, editor, public viewer).</li>
                <li>Configured caching, image optimization, and SEO metadata for better search visibility and site speed.</li>
            </ul>
            <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Wordpress</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">PHP</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Mysql</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Github</span>
            </div>
            <div class="border-t border-slate-700 pt-6">
                <h4 class="text-xl font-bold text-white mb-4">Project Status:</h4>
                <p class="text-gray-300">
                    released in 2024.
                </p>
            </div>
        `;
        } else if (projectId === 'Mini-Squid-Game') {
        modalTitle.textContent = 'Mini Squid Game';
        modalContent.innerHTML = `
            <p class="text-gray-300 mb-6">
                Mini Squid Game is a compact and thrilling adaptation inspired by the popular Squid Game series, designed as a mini-game experience that includes multiple survival challenges. The project was built to explore fast-paced gameplay design, character control, and event-driven logic using Unity.            <h4 class="text-xl font-bold text-white mb-4">Key Features:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Includes popular survival challenges like “Red Light, Green Light”, timing-based jumps, and pathfinding puzzles.</li>
                <li>Instant retry feature for fast-paced iteration and replayability after player failure.</li>
                <li>Clean and readable 3D visuals using low-poly assets to ensure performance on various devices.</li>
            </ul>
            <h4 class="text-xl font-bold text-white mb-4">Technical Highlights:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Centralized control of player states, game transitions, and rule enforcement using Unity C# events.</li>
                <li>Implemented AI-controlled dolls and traps using Unity’s NavMesh system and trigger colliders.</li>
                <li>Custom C# scripts to manage countdowns, win/lose conditions, and player input handling.</li>
                <li>Scene-based level structure with animated transitions and difficulty scaling.</li>
            </ul>
            <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Unity</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">C#</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Json</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Github</span>
            </div>
            <div class="border-t border-slate-700 pt-6">
                <h4 class="text-xl font-bold text-white mb-4">Project Status:</h4>
                <p class="text-gray-300">
                    on development.
                </p>
            </div>
        `;
            } else if (projectId === 'L-type') {
        modalTitle.textContent = 'L-type';
        modalContent.innerHTML = `
            <p class="text-gray-300 mb-6">
                L-Type is a simple yet effective web-based decision support system designed to help users identify their preferred learning styles through a short series of questions. The application aims to provide insight into individual learning characteristics—such as visual, auditory, or kinesthetic preferences—based on user responses.            
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>A short and engaging question flow to assess the user’s dominant learning style.</li>
                <li>Provides users with a clear learning profile (e.g., Visual Learner, Auditory Learner, Kinesthetic Learner) immediately after submission.</li>
                <li>Fully responsive layout ensures smooth experience across all devices.</li>
                <li>Minimalist interface designed for ease of use, with accessible navigation and clear text.</li>
            </ul>
            <h4 class="text-xl font-bold text-white mb-4">Technical Highlights:</h4>
            <ul class="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Utilized conditional branching to determine user learning style based on weighted answers.</li>
                <li>Ensured smooth form completion with error checks and clear progress indicators.</li>
                <li>Custom logic to not only classify but also suggest personalized learning strategies based on the result.</li>
            </ul>
            <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Bootstrap</span>
                <span class="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full">Laravel</span>
            </div>
            <div class="border-t border-slate-700 pt-6">
                <h4 class="text-xl font-bold text-white mb-4">Project Status:</h4>
                <p class="text-gray-300">
                    released in 2024.
                </p>
            </div>
        `;
    }
}

function closeProjectModal() {
    projectModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !projectModal.classList.contains('hidden')) {
        closeProjectModal();
    }
});

// Active nav link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
