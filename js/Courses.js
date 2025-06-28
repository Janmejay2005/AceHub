// Course data for easy management
const courseData = {
    certification: {
        semester1: ['BO CDA 101', 'BO CDA 103', 'BO CDA 105', 'BO CDA 107'],
        semester2: ['BO CDA 102', 'BO CDA 104', 'BO CDA 106', 'BO CDA 108']
    },
    diploma: {
        semester3: ['BO CDA 201', 'BO CDA 203', 'BO CDA 205', 'BO CDA 207'],
        semester4: ['BO CDA 202', 'BO CDA 204', 'BO CDA 206', 'BO CDA 208']
    },
    degree: {
        semester5: ['BO CDA 301', 'BO CDA 303', 'BO CDA 305', 'BO CDA 307', 'BO CDA 3XX'],
        semester6: ['BO CDA 302', 'BO CDA 304', 'BO CDA 3XX', 'BO CDA 3XX']
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    addHoverEffects();
});

// Add event listeners
function initializeEventListeners() {
    // Course code click handlers
    const courseCodes = document.querySelectorAll('.course-code');
    courseCodes.forEach(code => {
        code.addEventListener('click', function() {
            handleCourseClick(this.textContent);
        });
    });

    // Info icon click handlers
    const infoIcons = document.querySelectorAll('.info-icon');
    infoIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            showInfoModal(this);
        });
    });

    // Navigation menu handlers
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                handleNavigation(this.getAttribute('href'));
            }
        });
    });
}

// Handle course code clicks
function handleCourseClick(courseCode) {
    // Create a modal or alert for course details
    const modal = createCourseModal(courseCode);
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Create course modal
function createCourseModal(courseCode) {
    const modal = document.createElement('div');
    modal.className = 'course-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${courseCode}</h3>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <p><strong>Course Code:</strong> ${courseCode}</p>
                <p><strong>Credits:</strong> 4</p>
                <p><strong>Description:</strong> This course covers fundamental concepts and practical applications in computer science and data analytics.</p>
                <p><strong>Prerequisites:</strong> None for 100-level courses</p>
            </div>
        </div>
    `;

    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .course-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .course-modal.show {
            opacity: 1;
        }
        .modal-content {
            background-color: #fff;
            color: #333;
            padding: 2rem;
            border-radius: 8px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            border-bottom: 1px solid #eee;
            padding-bottom: 1rem;
        }
        .close-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        .close-btn:hover {
            color: #333;
        }
        .modal-body p {
            margin-bottom: 1rem;
        }
    `;
    document.head.appendChild(style);

    // Add close functionality
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });

    return modal;
}

// Show info modal for semester information
function showInfoModal(iconElement) {
    const semester = iconElement.closest('.semester');
    const semesterTitle = semester.querySelector('h3').textContent;
    
    alert(`${semesterTitle} Information:\n\nThis semester contains core courses for the B.Sc CSDA program. Each course is designed to build foundational knowledge and practical skills in computer science and data analytics.`);
}

// Handle navigation
function handleNavigation(target) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    const activeLink = document.querySelector(`a[href="${target}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // For now, just log the navigation (in a real app, you'd route to different pages)
    console.log(`Navigating to: ${target}`);
}

// Add hover effects and animations
function addHoverEffects() {
    // Add stagger animation to course codes
    const modules = document.querySelectorAll('.module');
    modules.forEach((module, moduleIndex) => {
        const courseCodes = module.querySelectorAll('.course-code');
        courseCodes.forEach((code, index) => {
            code.style.animationDelay = `${(moduleIndex * 0.1) + (index * 0.05)}s`;
            code.classList.add('fade-in');
        });
    });
}

// Add CSS for animations
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .course-code {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .course-code:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
`;
document.head.appendChild(animationStyle);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});