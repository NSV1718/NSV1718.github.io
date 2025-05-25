// Toast notification for PDF links
// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
    pdfLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            showToast('Opening PDF: ' + link.textContent.trim());
        });
    });
});
function showToast(message) {
    let toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#2d3e50';
    toast.style.color = '#fff';
    toast.style.padding = '1rem 2rem';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 2px 8px rgba(44,62,80,0.15)';
    toast.style.fontSize = '1.1rem';
    toast.style.opacity = '0.95';
    toast.style.zIndex = '9999';
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.transition = 'opacity 0.5s';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 1800);
}
// Search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const bookList = document.getElementById('bookList');
const allBooks = Array.from(bookList.getElementsByTagName('li'));
function filterBooks() {
    const query = searchInput.value.toLowerCase();
    allBooks.forEach(li => {
        const text = li.textContent.toLowerCase();
        li.style.display = text.includes(query) ? '' : 'none';
    });
}
searchInput.addEventListener('input', filterBooks);
searchBtn.addEventListener('click', filterBooks);
// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
function setDarkMode(on) {
    document.body.classList.toggle('dark-mode', on);
    darkToggle.classList.toggle('active', on);
    darkToggle.textContent = on ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('darkMode', on ? '1' : '0');
}
darkToggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark-mode'));
});
// Load dark mode preference
if (localStorage.getItem('darkMode') === '1') {
    setDarkMode(true);
}
