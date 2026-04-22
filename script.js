/**
 * ALLNUTTS Institutional Sourcing - Master Logic v4.2
 * Handles: Scroll Animations, Report Requests, and Trading Inquiries
 * TARGET: Prasad - 00919447745497
 */

// 1. CONFIGURATION - YOUR VERIFIED WHATSAPP NUMBER
const TRADING_DESK_PHONE = "919447745497"; 

document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initContactForm();
});

// 2. SMOOTH SCROLL REVEAL LOGIC
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// 3. CONTACT PAGE: DIRECT TRADING INQUIRY
function initContactForm() {
    const contactBtn = document.querySelector('button[type="submit"]');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Gather form data using their current placeholders
            const company = document.querySelector('input[placeholder="e.g. Global Trade Ltd."]')?.value;
            const commodity = document.querySelector('select')?.value;
            const contact = document.querySelector('input[placeholder="Enter your contact details"]')?.value;
            const specs = document.querySelector('textarea')?.value;

            if (!company || !contact) {
                alert("Please enter your company name and contact details.");
                return;
            }

            const message = `Hi Allnutts Trading Desk,%0A%0A*Institutional Inquiry*%0A- Company: ${company}%0A- Commodity: ${commodity}%0A- Contact: ${contact}%0A- Specs: ${specs || 'Not provided'}%0A%0APlease let us know the current availability.`;
            
            window.open(`https://wa.me/${TRADING_DESK_PHONE}?text=${message}`, '_blank');
        });
    }
}

// 4. REPORTS PAGE: INTELLIGENCE REQUEST ENGINE
// This function is called by the 'onclick' attribute in reports.html
window.prepareRequest = function(product) {
    const hub = document.getElementById('request-hub');
    const productInput = document.getElementById('selectedProduct');
    
    if (hub && productInput) {
        productInput.value = product;
        hub.style.display = 'block';
        hub.scrollIntoView({ behavior: 'smooth' });
    }
};

// This function is called by the 'onclick' attribute in reports.html
window.sendWhatsAppRequest = function() {
    const product = document.getElementById('selectedProduct')?.value;
    const comp = document.getElementById('compName')?.value;
    const country = document.getElementById('country')?.value;
    const email = document.getElementById('email')?.value;
    const phone = document.getElementById('phone')?.value;

    if (!comp || !country || !email || !phone) {
        alert("Please fill in all professional details to verify your company.");
        return;
    }

    const message = `Hi Allnutts Trading Desk,%0A%0AI would like to request the recent Market Report for: *${product}*%0A%0A*My Details:*%0A- Company: ${comp}%0A- Country: ${country}%0A- Email: ${email}%0A- Mobile: ${phone}%0A%0APlease share the latest insights. Thank you.`;
    
    window.open(`https://wa.me/${TRADING_DESK_PHONE}?text=${message}`, '_blank');
};
