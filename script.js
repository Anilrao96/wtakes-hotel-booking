const hotels = [
    { id: 1, name: "Grand Plaza Hotel", location: "New York, USA", price: 250, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400" },
    { id: 2, name: "Ocean View Resort", location: "Miami, USA", price: 180, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400" },
    { id: 3, name: "Mountain Lodge", location: "Aspen, USA", price: 320, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400" },
    { id: 4, name: "City Center Inn", location: "Chicago, USA", price: 150, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400" },
    { id: 5, name: "Sunset Beach Hotel", location: "California, USA", price: 280, image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400" },
    { id: 6, name: "Royal Palace Hotel", location: "Las Vegas, USA", price: 400, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" }
];

function displayHotels(hotelsToDisplay) {
    const hotelList = document.getElementById('hotel-list');
    hotelList.innerHTML = hotelsToDisplay.map(hotel => `
        <div class="hotel-card">
            <img src="${hotel.image}" alt="${hotel.name}">
            <div class="hotel-info">
                <h3>${hotel.name}</h3>
                <p class="location">${hotel.location}</p>
                <p class="price">$${hotel.price}/night</p>
                <button onclick="bookHotel(${hotel.id})">Book Now</button>
            </div>
        </div>
    `).join('');
}

function searchHotels() {
    const destination = document.getElementById('destination').value.toLowerCase();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    
    if (!checkin || !checkout) {
        alert('Please select check-in and check-out dates');
        return;
    }
    
    const filtered = destination 
        ? hotels.filter(h => h.location.toLowerCase().includes(destination))
        : hotels;
    
    displayHotels(filtered);
    document.getElementById('hotels').scrollIntoView({ behavior: 'smooth' });
}

let selectedHotel = null;
const stripe = Stripe('pk_test_51QdVLyP3aBcdefghijklmnopqrstuvwxyz'); // Replace with your Stripe key

function bookHotel(id) {
    selectedHotel = hotels.find(h => h.id === id);
    const checkin = document.getElementById('checkin').value || 'Not selected';
    const checkout = document.getElementById('checkout').value || 'Not selected';
    const guests = document.getElementById('guests').value || 2;
    
    document.getElementById('booking-details').innerHTML = `
        <h3>${selectedHotel.name}</h3>
        <p><strong>Location:</strong> ${selectedHotel.location}</p>
        <p><strong>Check-in:</strong> ${checkin}</p>
        <p><strong>Check-out:</strong> ${checkout}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Price:</strong> $${selectedHotel.price}/night</p>
        <hr>
        <h3>Total: $${selectedHotel.price}</h3>
    `;
    
    document.getElementById('payment-modal').style.display = 'block';
}

function closePayment() {
    document.getElementById('payment-modal').style.display = 'none';
}

function payWithStripe() {
    // Stripe Checkout
    alert('Redirecting to Stripe payment...\n\nTo enable real payments:\n1. Sign up at https://stripe.com\n2. Get your API keys\n3. Replace the test key in script.js');
    
    // Real implementation:
    // stripe.redirectToCheckout({
    //     lineItems: [{price: 'price_xxx', quantity: 1}],
    //     mode: 'payment',
    //     successUrl: window.location.href + '?success=true',
    //     cancelUrl: window.location.href + '?canceled=true',
    // });
}

function payWithPayPal() {
    alert('Redirecting to PayPal...\n\nTo enable PayPal:\n1. Sign up at https://paypal.com/developer\n2. Get Client ID\n3. Integrate PayPal SDK');
    
    // Real implementation requires PayPal SDK
}

function payWithGPay() {
    alert('Google Pay integration\n\nTo enable:\n1. Set up Google Pay API\n2. Add payment gateway\n3. Configure merchant account');
    
    // Real implementation requires Google Pay API
}

function payWithApplePay() {
    alert('Apple Pay integration\n\nTo enable:\n1. Register Apple Merchant ID\n2. Configure payment processor\n3. Add Apple Pay button');
    
    // Real implementation requires Apple Pay setup
}

window.onclick = function(event) {
    const modal = document.getElementById('payment-modal');
    if (event.target == modal) {
        closePayment();
    }
}

displayHotels(hotels);
