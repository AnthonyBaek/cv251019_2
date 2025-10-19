// CV 데이터 (JSON 형태)
const cvData = {
    experience: [
        {
            date: "2022 - 현재",
            title: "시니어 풀스택 개발자",
            company: "테크 스타트업",
            description: "React, Node.js를 활용한 웹 애플리케이션 개발 및 팀 리딩을 담당했습니다. 마이크로서비스 아키텍처 설계와 CI/CD 파이프라인 구축에 참여했습니다."
        },
        {
            date: "2020 - 2022",
            title: "풀스택 개발자",
            company: "웹 에이전시",
            description: "다양한 클라이언트의 웹사이트와 웹 애플리케이션을 개발했습니다. Vue.js, Express.js, MongoDB를 주로 사용했습니다."
        },
        {
            date: "2018 - 2020",
            title: "프론트엔드 개발자",
            company: "소프트웨어 회사",
            description: "React와 TypeScript를 사용하여 사용자 인터페이스를 개발했습니다. 반응형 디자인과 접근성을 중점적으로 고려했습니다."
        }
    ],
    projects: [
        {
            title: "E-커머스 플랫폼",
            description: "React, Node.js, MongoDB를 사용하여 개발한 온라인 쇼핑몰 플랫폼입니다. 결제 시스템, 재고 관리, 사용자 리뷰 기능을 포함합니다.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
            demoUrl: "https://demo.example.com",
            githubUrl: "https://github.com/example/ecommerce"
        },
        {
            title: "실시간 채팅 애플리케이션",
            description: "Socket.io를 활용한 실시간 채팅 애플리케이션입니다. 그룹 채팅, 파일 공유, 이모지 반응 기능을 제공합니다.",
            technologies: ["Vue.js", "Socket.io", "Express.js", "Redis", "Docker"],
            demoUrl: "https://chat.example.com",
            githubUrl: "https://github.com/example/chat-app"
        },
        {
            title: "할일 관리 웹앱",
            description: "드래그 앤 드롭 기능이 있는 할일 관리 애플리케이션입니다. 팀 협업 기능과 진행률 추적 기능을 포함합니다.",
            technologies: ["React", "TypeScript", "Firebase", "Material-UI", "PWA"],
            demoUrl: "https://todo.example.com",
            githubUrl: "https://github.com/example/todo-app"
        }
    ],
    skills: {
        frontend: ["React", "Vue.js", "TypeScript", "HTML5", "CSS3", "JavaScript", "Sass", "Webpack"],
        backend: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"],
        tools: ["Git", "Docker", "AWS", "Jenkins", "Figma", "VS Code", "Linux", "Nginx"]
    }
};

// 언어 설정
let currentLanguage = 'ko';

// DOM 요소들
const langToggle = document.getElementById('lang-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const elementsWithLang = document.querySelectorAll('[data-ko][data-en]');

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 앱 초기화 함수
function initializeApp() {
    // 경력 데이터 렌더링
    renderExperience();
    
    // 프로젝트 데이터 렌더링
    renderProjects();
    
    // 스킬 데이터 렌더링
    renderSkills();
    
    // 언어 전환 이벤트 리스너
    setupLanguageToggle();
    
    // 부드러운 스크롤 설정
    setupSmoothScroll();
    
    // 스크롤 애니메이션 설정
    setupScrollAnimation();
    
    // 키보드 네비게이션 설정
    setupKeyboardNavigation();
}

// 경력 데이터 렌더링
function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    
    cvData.experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item scroll-animate';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${exp.date}</div>
                <h3 class="timeline-title">${exp.title}</h3>
                <div class="timeline-company">${exp.company}</div>
                <p class="timeline-description">${exp.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// 프로젝트 데이터 렌더링
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    cvData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card scroll-animate';
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
            <div class="project-links">
                <a href="${project.demoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">데모 보기</a>
                <a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// 스킬 데이터 렌더링
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    Object.entries(cvData.skills).forEach(([category, skills]) => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category scroll-animate';
        
        const categoryTitle = getCategoryTitle(category);
        const skillItems = skills.map(skill => 
            `<span class="skill-item">${skill}</span>`
        ).join('');
        
        skillCategory.innerHTML = `
            <h3 class="skill-category-title">${categoryTitle}</h3>
            <div class="skill-list">${skillItems}</div>
        `;
        
        skillsContainer.appendChild(skillCategory);
    });
}

// 스킬 카테고리 제목 반환
function getCategoryTitle(category) {
    const titles = {
        frontend: { ko: '프론트엔드', en: 'Frontend' },
        backend: { ko: '백엔드', en: 'Backend' },
        tools: { ko: '도구', en: 'Tools' }
    };
    return titles[category][currentLanguage];
}

// 언어 전환 설정
function setupLanguageToggle() {
    langToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'ko' ? 'en' : 'ko';
        updateLanguage();
    });
}

// 언어 업데이트
function updateLanguage() {
    // 언어 전환 버튼 텍스트 업데이트
    const flagIcon = langToggle.querySelector('.flag-icon');
    flagIcon.textContent = currentLanguage === 'ko' ? '🇺🇸' : '🇰🇷';
    
    // 모든 다국어 요소 업데이트
    elementsWithLang.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // 스킬 카테고리 제목 업데이트
    const skillCategories = document.querySelectorAll('.skill-category-title');
    skillCategories.forEach((title, index) => {
        const categories = ['frontend', 'backend', 'tools'];
        title.textContent = getCategoryTitle(categories[index]);
    });
}

// 부드러운 스크롤 설정
function setupSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 스크롤 애니메이션 설정
function setupScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들 관찰
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// 키보드 네비게이션 설정
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Tab 키로 네비게이션
        if (e.key === 'Tab') {
            // 포커스 스타일이 적용되도록 처리
            document.body.classList.add('keyboard-navigation');
        }
        
        // Enter 키로 링크 활성화
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('nav-link') || 
                focusedElement.classList.contains('project-link') ||
                focusedElement.classList.contains('social-link')) {
                focusedElement.click();
            }
        }
        
        // Escape 키로 언어 전환 버튼 포커스
        if (e.key === 'Escape') {
            langToggle.focus();
        }
    });
    
    // 마우스 사용 시 키보드 네비게이션 클래스 제거
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// 헤더 스크롤 효과
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.backgroundColor = 'rgba(248, 249, 250, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(248, 249, 250, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// 현재 섹션 하이라이트
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// 이미지 로드 오류 처리
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.profile-img');
    
    profileImg.addEventListener('error', function() {
        // 프로필 이미지 로드 실패 시 기본 이미지로 대체
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjlGQUZCIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM2Qzc1N0QiLz4KPHBhdGggZD0iTTEwMCAyMDBDMTAwIDE2NS44IDEyNS44IDE0MCAxNjAgMTQwQzE5NC4yIDE0MCAyMjAgMTY1LjggMjIwIDIwMFYyMjBIMTAwVjIwMFoiIGZpbGw9IiM2Qzc1N0QiLz4KPC9zdmc+';
        this.alt = '기본 프로필 이미지';
    });
});

// 성능 최적화: 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 스크롤 이벤트 최적화
const optimizedScrollHandler = debounce(function() {
    // 스크롤 관련 로직들
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.backgroundColor = 'rgba(248, 249, 250, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(248, 249, 250, 0.95)';
        header.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// 콘솔 로그 (개발용)
console.log('CV Web App이 성공적으로 로드되었습니다!');
console.log('현재 언어:', currentLanguage);
console.log('CV 데이터:', cvData);