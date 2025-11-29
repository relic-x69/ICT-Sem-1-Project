 // Animate stats on scroll
function animateStats() 
{
    const stats = document.querySelectorAll('.stat-item h3');
    
    const observer = new IntersectionObserver((entries) => 
    {
        entries.forEach(entry => 
        {
            if (entry.isIntersecting) 
            {
                entry.target.style.animation = 'pulse 0.5s ease-out';
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// Initialize about page
document.addEventListener('DOMContentLoaded', () => 
{
    animateStats();
    console.log('AnimeVerse About Page Loaded');
});