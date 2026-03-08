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

function bookHotel(id) {
    const hotel = hotels.find(h => h.id === id);
    alert(`Booking confirmed for ${hotel.name}!\nPrice: $${hotel.price}/night`);
}

displayHotels(hotels);
