const serviceSelect = document.getElementById('service-select');
const cartDetails = document.getElementById('cart-details');
const confirmBtn = document.getElementById('confirm-btn');

serviceSelect.addEventListener('change',()=>{
    cont [name, value] = serviceSelect.value.split('-');
    const price = parseFloat(value);
    const tax = +(price*0.7).toFixed(2);
    const total = +(price + tax).toFixed(2);
    cartDetails.textContent = `Service: ${name}
    Price: $${price.toFixed(2)}
    Tax (7%): $${tax.toFixed(2)}
    Total: $${total.toFixed(2)};`
});




confirmBtn.addEventListener('click', () => {
    const selectedValue = serviceSelect.value;
    
    if (!selectedValue) {
    cartDetails.textContent = "Please select a service first.";
    return;
    }

    const [name, value] = selectedValue.split('-');
    const price = parseFloat(value);
    const tax = +(price * 0.07).toFixed(2);
    const total = +(price + tax).toFixed(2);

    cartDetails.textContent = `Service: ${name}
Price: $${price.toFixed(2)}
Tax (7%): $${tax.toFixed(2)}
Total: $${total.toFixed(2)}`;
});

