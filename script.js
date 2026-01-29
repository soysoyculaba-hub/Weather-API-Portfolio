//  Theme Toggle
var themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
    themeBtn.onclick = function() {
        document.body.classList.toggle('dark');
        themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    };
}

//  Mobile Menu
var menuBtn = document.getElementById('menuBtn');
var navMenu = document.getElementById('navMenu');
if (menuBtn && navMenu) {
    menuBtn.onclick = function() {
        navMenu.classList.toggle('active');
    };
}

//  Scroll Progress & Navbar Effects
window.onscroll = function() {
    var height = document.documentElement.scrollHeight - window.innerHeight;
    var scrolled = (window.scrollY / height) * 100;
    document.getElementById('progressBar').style.width = scrolled + '%';

    // Navbar background
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');

    // Back to top
    var backTop = document.getElementById('backToTop');
    if (window.scrollY > 300) backTop.classList.add('show');
    else backTop.classList.remove('show');

    // Update active nav
    updateActiveNav();
};

//  Active Navigation
function updateActiveNav() {
    var sections = ['home', 'team', 'projects', 'contact'];
    var navItems = document.querySelectorAll('.nav-item');

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (section) {
            var rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                navItems.forEach(function(item) {
                    item.classList.remove('active');
                });
                navItems[i].classList.add('active');
                break;
            }
        }
    }
}

//  Smooth Scroll
function scrollToSection(id) {
    var element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

//  Back to Top
var backTop = document.getElementById('backToTop');
if (backTop) {
    backTop.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

//  Contact Form (simple success animation)
var contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.onsubmit = function(e) {
        e.preventDefault();

        // Hide form and show success message
        contactForm.style.display = 'none';
        var successMsg = document.getElementById('successMsg');
        successMsg.classList.add('show');

        // Reset after 4 seconds
        setTimeout(function() {
            contactForm.reset();
            successMsg.classList.remove('show');
            contactForm.style.display = 'flex';
        }, 4000);
    };
}

// 🔢 Animate Counters (Stats Section)
var countersAnimated = false;
window.addEventListener('scroll', function() {
    if (!countersAnimated) {
        var statsBox = document.querySelector('.stats-box');
        if (statsBox) {
            var rect = statsBox.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateCounters();
                countersAnimated = true;
            }
        }
    }
});

function animateCounters() {
    var counters = document.querySelectorAll('.counter');
    counters.forEach(function(counter) {
        var target = parseInt(counter.textContent);
        var current = 0;
        var increment = target / 100;

        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 20);
    });
}
