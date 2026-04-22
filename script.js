
function sendWhatsApp() {
    const company = document.getElementById('company').value;
    const product = document.getElementById('product').value;
    const qty = document.getElementById('qty').value;
    const details = document.getElementById('details').value;
    
    const phone = "919447745497";
    const message = `*New Quote Request*%\n\n*Company:* ${company}\n*Product:* ${product}\n*Quantity:* ${qty}\n*Details:* ${details}`;
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
