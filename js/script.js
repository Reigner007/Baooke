const WHATSAPP_NUMBER = '2348093267000';
const GENERAL_ENQUIRY_MESSAGE = 'Hello Baooke Global Services, I would like to make an enquiry about your products.';

const products = [
    {
        name: 'Smartphones',
        category: 'Phones & Tablets',
        description: 'Latest smartphones from trusted brands including Samsung, Tecno, Infinix, and more.',
        image: 'assets/images/New folder/smartphones.webp'
    },
    {
        name: 'Tablets',
        category: 'Phones & Tablets',
        description: 'Tablets for work, study, and entertainment from leading manufacturers.',
        image: 'assets/images/New folder/tablets.webp'
    },
    {
        name: 'Laptops',
        category: 'Computers & Laptops',
        description: 'Laptops for business, gaming, and everyday use from HP, Lenovo, Dell, and more.',
        image: 'assets/images/New folder/laptops.webp'
    },
    {
        name: 'Desktop Computers',
        category: 'Computers & Laptops',
        description: 'Desktop PCs and workstations for home and office.',
        image: 'assets/images/New folder/desktop computers.webp'
    },
    {
        name: 'Smart TVs',
        category: 'TVs & Entertainment',
        description: 'Smart televisions with 4K resolution, HDR, and streaming apps.',
        image: 'assets/images/New folder/smart tvs.webp'
    },
    {
        name: 'Refrigerators',
        category: 'Home Appliances',
        description: 'Refrigerators and freezers in various sizes and configurations.',
        image: 'assets/images/New folder/refrigerator.webp'
    },
    {
        name: 'Washing Machines',
        category: 'Home Appliances',
        description: 'Front-load and top-load washing machines for every household.',
        image: 'assets/images/New folder/washing machine.webp'
    },
    {
        name: 'Generators & Power Equipment',
        category: 'Power Solutions',
        description: 'Generators, inverters, solar panels, and UPS systems for reliable power.',
        image: 'assets/images/New folder/generator.webp'
    },
    {
        name: 'CCTV Cameras',
        category: 'Security & Surveillance',
        description: 'Security cameras, DVRs, NVRs, and complete surveillance systems.',
        image: 'assets/images/New folder/cctv.webp'
    },
    {
        name: 'Security Equipment',
        category: 'Security & Surveillance',
        description: 'Alarm systems, access control, and security accessories.',
        image: 'assets/images/New folder/security equipment.webp'
    },
    {
        name: 'Printers',
        category: 'Printers & Accessories',
        description: 'Inkjet, laser, and all-in-one printers for home and office.',
        image: 'assets/images/New folder/printer.webp'
    },
    {
        name: 'Home Appliances',
        category: 'Electronics',
        description: 'Microwaves, blenders, air fryers, and other kitchen appliances.',
        image: 'assets/images/New folder/home appliances.webp'
    }
];

function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.name = product.name.toLowerCase();
    card.dataset.category = product.category.toLowerCase();

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <span class="product-price">Contact for Price</span>
            <div class="product-actions">
                <button class="btn btn-primary" data-product="${product.name}">Enquire Now</button>
            </div>
        </div>
    `;

    const enquireBtn = card.querySelector('.btn-primary');
    enquireBtn.addEventListener('click', () => {
        const message = `Hello Baooke Global Services, I am interested in ${product.name}. Please provide more information and the current price.`;
        openWhatsApp(message);
    });

    return card;
}

function renderProducts(filteredProducts = products) {
    const grid = document.getElementById('productGrid');
    const noResults = document.getElementById('noResults');

    grid.innerHTML = '';

    if (filteredProducts.length === 0) {
        grid.hidden = true;
        noResults.hidden = false;
        return;
    }

    grid.hidden = false;
    noResults.hidden = true;

    filteredProducts.forEach((product, index) => {
        const card = createProductCard(product);
        const staggerClass = `stagger-${(index % 8) + 1}`;
        card.classList.add('animate-slide-up', staggerClass);
        grid.appendChild(card);
    });
}

function filterProducts() {
    const searchTerm = document.getElementById('productSearch').value.toLowerCase().trim();
    const categoryValue = document.getElementById('categoryFilter').value;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);

        const matchesCategory = categoryValue === 'all' ||
            product.category === categoryValue;

        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
        }
    });
}

function initStickyHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        scrollProgress.style.transform = `scaleX(${scrollPercent})`;
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const product = document.getElementById('product').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !phone || !product || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const whatsappMessage = `Hello Baooke Global Services,\n\nMy name is ${name}.\n\nI am interested in: ${product}\n\nMessage:\n${message}\n\nMy phone number is:\n${phone}`;

        openWhatsApp(whatsappMessage);
    });
}

function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-heading, .category-card, .feature-card, .location-card, .brand, .about-image, .about-text').forEach(el => {
        observer.observe(el);
    });
}

function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        const scrollPos = window.pageYOffset + document.getElementById('header').offsetHeight + 50;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

function initWhatsAppProductButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-product]')) {
            const productName = e.target.dataset.product;
            const message = `Hello Baooke Global Services, I am interested in ${productName}. Please provide more information and the current price.`;
            openWhatsApp(message);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initMobileMenu();
    initStickyHeader();
    initSmoothScroll();
    initBackToTop();
    initContactForm();
    initScrollReveal();
    initActiveNav();
    initWhatsAppProductButtons();
    initScrollProgress();

    document.getElementById('productSearch').addEventListener('input', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
});