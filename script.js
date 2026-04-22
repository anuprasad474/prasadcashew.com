
function sendWhatsApp() {
    const company = document.getElementById('company').value;
    const product = document.getElementById('product').value;
    const qty = document.getElementById('qty').value;
    const details = document.getElementById('details').value;

    if(!company || !qty) {
        alert("Please enter your company name and required volume.");
        return;
    }

    const message = `* institutional Quote Request *\n\n` +
                    `*Company:* ${company}\n` +
                    `*Product:* ${product}\n` +
                    `*Volume:* ${qty}\n` +
                    `*Specs:* ${details}`;
    
    window.open(`https://wa.me/919447745497?text=${encodeURIComponent(message)}`, '_blank');
}

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
