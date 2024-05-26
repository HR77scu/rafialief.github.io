const galeriProject = [
    { "image": "img/1.png", "text": "Project 1", "url": "https://example.com/project1" },
    { "image": "img/2.png", "text": "Project 2", "url": "https://example.com/project2" },
    { "image": "img/3.png", "text": "Project 3", "url": "https://example.com/project3" },
    { "image": "img/4.png", "text": "Project 4", "url": "https://example.com/project4" },
    { "image": "img/5.png", "text": "Project 5", "url": "https://example.com/project5" },
    { "image": "img/6.png", "text": "Project 6", "url": "https://example.com/project6" }
];

document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.getElementById('portfolio-items');
    let portfolioHTML = '';

    galeriProject.forEach(item => {
        portfolioHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.text}">
                    <div class="card-body">
                        <p class="card-text">${item.text}</p>
                    </div>
                </div>
            </div>
        `;
    });

    portfolioContainer.innerHTML = portfolioHTML;

});
document.addEventListener('DOMContentLoaded', function(){
    const galleryContainer = document.getElementById('gallery');
    let galleryHTML = '';
    
    galeriProject.forEach(item => {
        galleryHTML += `
            <div class="gallery-item">
                <img src="${item.image}" alt="${item.text}">
                <p><a href="${item.url}" target="_blank">${item.text}</a></p>
            </div>
        `;
    });        
    galleryContainer.innerHTML = galleryHTML;
});

function sendWhatsAppMessage() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var no_telp = document.getElementById('no_telp').value;
    var pesan = document.getElementById('pesan').value;
    var url = `https://wa.me/6285712498265?text=Nama: ${name}%0AEmail: ${email}%0ANo Telephone: ${no_telp}%0APesan: ${pesan}`;
    window.open(url, '_blank');
}