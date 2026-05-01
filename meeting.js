const roomsData = [
    { name: "The Grand Boardroom", city: "mumbai", style: "boardroom", capacity: 25, img: "images/boardroom_25.jpg", desc: "Premium boardroom with floor-to-ceiling windows and smart AV." },
    { name: "The Pavilion Hall", city: "delhi", style: "theatre", capacity: 200, img: "images/threatre_200.jfif", desc: "Spacious theatre-style hall for large conferences and seminars." },
    { name: "Sapphire Meeting Room", city: "mumbai", style: "classroom", capacity: 50, img: "images/classroom_50.jfif", desc: "Classroom-style room with high-speed internet and projectors." },
    { name: "The Royal Suite Room", city: "bangalore", style: "boardroom", capacity: 10, img: "images/m4.jfif", desc: "Intimate boardroom for executive meetings and private sessions." },
    { name: "Banquet Convention Hall", city: "delhi", style: "banquet", capacity: 200, img: "images/banquet_200.jpg", desc: "Elegant banquet hall ideal for gala dinners and award nights." },
    { name: "The Crescent Room", city: "bangalore", style: "u-shape", capacity: 25, img: "images/U shape_25.jpg", desc: "U-shape setup perfect for workshops and interactive discussions." },
    { name: "Heritage Conference Room", city: "chandigarh", style: "classroom", capacity: 100, img: "images/classroom_100.jfif", desc: "Classic room blending heritage décor with modern tech." },
    { name: "Sky Lounge Meeting Space", city: "chandigarh", style: "theatre", capacity: 50, img: "images/threatre_50.jfif", desc: "Rooftop-style ambience with panoramic views for your events." },
];

function searchRooms() {
    const city = document.getElementById('cityInput').value.trim().toLowerCase();
    const style = document.getElementById('seatingStyle').value;
    const capacity = parseInt(document.getElementById('capacitySelect').value);
    const grid = document.getElementById('roomsGrid');
    grid.innerHTML = '';

    const filtered = roomsData.filter(room => {
        const cityMatch = !city || room.city.includes(city);
        const styleMatch = !style || room.style === style;
        const capMatch = !capacity || room.capacity <= capacity;
        return cityMatch && styleMatch && capMatch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="no-results">No conference rooms found matching your criteria. Please try different filters.</p>';
        return;
    }

    filtered.forEach(room => {
        grid.innerHTML += `
            <div class="room-card">
                <img src="${room.img}" alt="${room.name}">
                <div class="room-info">
                    <h3>${room.name}</h3>
                    <p>&#128205; ${room.city.charAt(0).toUpperCase() + room.city.slice(1)}</p>
                    <p>${room.desc}</p>
                    <span class="room-tag">${room.style.charAt(0).toUpperCase() + room.style.slice(1)}</span>
                    <span class="room-tag">Up to ${room.capacity} guests</span>
                    <button class="room-book-btn">Book This Room</button>
                </div>
            </div>`;
    });
}

// Show all rooms by default on page load
window.onload = () => searchRooms();