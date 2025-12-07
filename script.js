cat > /app/standalone/script.js << 'EOFJS'
// Mock Data
const games = [
    {
        id: 1,
        title: "Shadow Realm",
        description: "Karanlık bir dünyada hayatta kalma mücadelesi veren oyuncuların epik macerası.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
        genre: "Action RPG",
        releaseDate: "2024",
        status: "In Development"
    },
    {
        id: 2,
        title: "Neon Velocity",
        description: "Gelecekte geçen yüksek hızlı yarış oyunu. Sınırları zorla!",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
        genre: "Racing",
        releaseDate: "2025",
        status: "Coming Soon"
    },
    {
        id: 3,
        title: "Mystic Legends",
        description: "Büyülü bir evrende stratejik savaşlar ve kahramanlık hikayeleri.",
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
        genre: "Strategy",
        releaseDate: "2023",
        status: "Released"
    },
    {
        id: 4,
        title: "Void Warriors",
        description: "Uzayda geçen aksiyon dolu bir savaş simülatörü.",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
        genre: "Action",
        releaseDate: "2024",
        status: "In Development"
    }
];

const developers = [
    {
        id: 1,
        name: "Ahmet Yılmaz",
        role: "Lead Game Designer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        bio: "10+ yıllık deneyime sahip oyun tasarımcısı. AAA stüdyolarında çalıştı."
    },
    {
        id: 2,
        name: "Zeynep Kara",
        role: "Senior Developer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        bio: "Unity ve Unreal Engine uzmanı. Çoklu platform oyun geliştirme deneyimi."
    },
    {
        id: 3,
        name: "Mehmet Demir",
        role: "3D Artist",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        bio: "Oyun dünyalarına hayat veren yetenekli 3D sanatçı."
    },
    {
        id: 4,
        name: "Ayşe Şahin",
        role: "Sound Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
        bio: "Oyunlara atmosfer katan ödüllü ses tasarımcısı."
    }
];

const news = [
    {
        id: 1,
        title: "Shadow Realm Beta Testi Başladı!",
        excerpt: "En yeni oyunumuz Shadow Realm'ın beta testi bugün başladı. Katılmak için kayıt olun!",
        content: "Shadow Realm, karanlık fantezi dünyasında geçen aksiyon-macera oyunumuz nihayet beta testine açıldı. İlk 1000 oyuncuya özel ödüller!",
        date: "2024-03-15",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
        category: "Game Updates"
    },
    {
        id: 2,
        title: "Yeni Stüdyo Açılışımız",
        content: "HEXAGES GAMES ailesi büyümeye devam ediyor. İstanbul'da yeni stüdyomuz açıldı!",
        excerpt: "Ekibimiz genişliyor! İstanbul'daki yeni stüdyomuzda 50 kişilik bir ekip çalışacak.",
        date: "2024-03-10",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        category: "Company News"
    },
    {
        id: 3,
        title: "Game Awards 2024'te Aday Gösterildik",
        excerpt: "Mystic Legends oyunumuz 'En İyi Strateji Oyunu' kategorisinde aday!",
        content: "Geçtiğimiz yıl piyasaya sürdüğümüz Mystic Legends, Game Awards 2024'te En İyi Strateji Oyunu kategorisinde aday gösterildi.",
        date: "2024-03-05",
        image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80",
        category: "Awards"
    },
    {
        id: 4,
        title: "Neon Velocity: İlk Oynanış Videosu Yayında",
        excerpt: "Merakla beklenen Neon Velocity'nin ilk oynanış görüntüleri yayınlandı!",
        content: "Neon Velocity'nin 10 dakikalık oynanış videosu YouTube kanalımızda yayında. Futuristik yarış deneyimini keşfedin!",
        date: "2024-03-01",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&q=80",
        category: "Trailers"
    }
];

// Helper Functions
function getStatusClass(status) {
    switch(status) {
        case 'Released':
            return 'status-released';
        case 'In Development':
            return 'status-development';
        case 'Coming Soon':
            return 'status-soon';
        default:
            return '';
    }
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
}

// ==================== HAMBURGER MENÜ SİSTEMİ ====================

// Hamburger menü toggle fonksiyonu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    // Menüyü aç/kapat
    mobileMenu.classList.toggle('active');
    
    // Buton animasyonu
    if (mobileMenuBtn) {
        mobileMenuBtn.classList.toggle('active');
    }
    
    // Body scroll'u kilitle/kilidi aç
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Mobil menü linklerine tıklayınca menüyü kapat
function setupMobileMenuLinks() {
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            
            // Menüyü kapat
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
            
            // Buton animasyonunu kaldır
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
            }
            
            // Body scroll'u aktif et
            document.body.style.overflow = '';
        });
    });
}

// Pencere boyutu değişince mobil menüyü kontrol et
function handleWindowResize() {
    window.addEventListener('resize', () => {
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        // Desktop boyutuna geçince menüyü kapat
        if (window.innerWidth > 768) {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== SAYFA YÜKLEME FONKSİYONLARI ====================

// Load Featured Games (Home Page)
function loadFeaturedGames() {
    const container = document.getElementById('featuredGames');
    if (!container) return;
    
    const featuredGames = games.slice(0, 3);
    container.innerHTML = featuredGames.map(game => `
        <div class="game-card">
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}">
            </div>
            <div class="game-content">
                <div class="game-meta">
                    <span>🏷️ ${game.genre}</span>
                    <span>📅 ${game.releaseDate}</span>
                </div>
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            </div>
        </div>
    `).join('');
}

// Load All Games (Games Page)
function loadAllGames() {
    const container = document.getElementById('allGames');
    if (!container) return;
    
    container.innerHTML = games.map(game => `
        <div class="game-card">
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}">
                <span class="game-status ${getStatusClass(game.status)}">${game.status}</span>
            </div>
            <div class="game-content">
                <div class="game-meta">
                    <span>🏷️ ${game.genre}</span>
                    <span>📅 ${game.releaseDate}</span>
                </div>
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <a href="#" class="game-button">Daha Fazla Bilgi →</a>
            </div>
        </div>
    `).join('');
}

// Load Developers
function loadDevelopers() {
    const container = document.getElementById('developersGrid');
    if (!container) return;
    
    container.innerHTML = developers.map(dev => `
        <div class="developer-card">
            <div class="developer-image">
                <img src="${dev.image}" alt="${dev.name}">
            </div>
            <div class="developer-content">
                <h3>${dev.name}</h3>
                <p class="developer-role">${dev.role}</p>
                <p class="developer-bio">${dev.bio}</p>
                <div class="developer-social">
                    <a href="#" class="social-btn">💼</a>
                    <a href="#" class="social-btn">📧</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Load News
function loadNews() {
    const featuredContainer = document.getElementById('featuredNews');
    const newsContainer = document.getElementById('newsGrid');
    
    if (featuredContainer && news.length > 0) {
        const featured = news[0];
        featuredContainer.innerHTML = `
            <div class="featured-news">
                <div class="featured-news-content">
                    <div class="featured-news-image">
                        <img src="${featured.image}" alt="${featured.title}">
                    </div>
                    <div class="featured-news-text">
                        <div style="margin-bottom: 1rem;">
                            <span style="padding: 0.25rem 0.75rem; font-size: 0.75rem; font-weight: 600; background-color: #1f2937; color: #d1d5db; border: 1px solid #374151; border-radius: 9999px;">${featured.category}</span>
                            <span style="margin-left: 1rem; font-size: 0.875rem; color: #6b7280;">📅 ${formatDate(featured.date)}</span>
                        </div>
                        <h2>${featured.title}</h2>
                        <p style="color: #9ca3af; margin-bottom: 1.5rem; line-height: 1.6;">${featured.content}</p>
                        <a href="#" class="read-more">Devamını Oku →</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (newsContainer) {
        newsContainer.innerHTML = news.slice(1).map(item => `
            <div class="news-card">
                <div class="news-image">
                    <img src="${item.image}" alt="${item.title}">
                    <span class="news-category">${item.category}</span>
                </div>
                <div class="news-content">
                    <p class="news-date">📅 ${formatDate(item.date)}</p>
                    <h3>${item.title}</h3>
                    <p>${item.excerpt}</p>
                    <a href="#" class="read-more">Devamını Oku →</a>
                </div>
            </div>
        `).join('');
    }
}

// Handle Contact Form Submit
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const messageDiv = document.getElementById('formMessage');
    
    // Simulate form submission
    messageDiv.className = 'form-message success';
    messageDiv.textContent = 'Mesajınız başarıyla gönderildi! En kısa sürede size geri dönüş yapacağız.';
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// ==================== UYGULAMA BAŞLATMA ====================

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Sayfa yükleme fonksiyonları
    loadFeaturedGames();
    loadAllGames();
    loadDevelopers();
    loadNews();
    
    // Hamburger menü sistemini kur
    setupMobileMenuLinks();
    handleWindowResize();
    
    // Contact form submit eventini dinle
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

// Global olarak erişilebilir yap
window.toggleMobileMenu = toggleMobileMenu;
EOFJS
echo "JavaScript file updated with complete hamburger menu system"
