var cards = document.getElementById("card-container");

fetch("js/JSON/cards.json")
  .then(res => res.json())
  .then(json => {
    json.forEach(el => {
      var card = document.createElement("div");
      card.classList.add("card");

      // Add the image
      var cardImage = document.createElement("img");
      cardImage.setAttribute("src", el.url);
      cardImage.setAttribute("alt", el.caption);
      card.appendChild(cardImage);

      // Add an h3 element for the card title
      var cardTitle = document.createElement("h3");
      cardTitle.innerText = el.cardTitle;
      card.appendChild(cardTitle);

      // Add a description paragraph
      var cardDescription = document.createElement("p");
      cardDescription.innerText = el.caption;
      card.appendChild(cardDescription);

      // Add a "Read More" link
      var cardReadMore = document.createElement("a");
      cardReadMore.innerText = "Read More";
      cardReadMore.setAttribute("href", el.pageUrl); // Link to the page
      cardReadMore.classList.add("btn"); // Add the 'btn' class
      card.appendChild(cardReadMore);

      // Append the card to the cards container
      cards.appendChild(card);
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const initializeCarousel = (carouselId, jsonFile) => {
        const carousel = document.getElementById(carouselId);
        const leftArrow = document.getElementById(`left-${carouselId}`);
        const rightArrow = document.getElementById(`right-${carouselId}`);

        if (!carousel || !leftArrow || !rightArrow) {
            console.error(`Carousel or arrows not found for ${carouselId}`);
            return;
        }

        let isDragStart = false, prevPageX, prevScrollLeft;
        let firstImgWidth;

        // Fetch carousel data from JSON
        fetch(jsonFile)
            .then(res => res.json())
            .then(images => {
                images.forEach((item) => {
                    const imgWrapper = document.createElement('div');
                    imgWrapper.classList.add('img-wrapper');

                    const img = document.createElement('img');
                    img.src = item.url;
                    img.alt = item.caption;

                    const caption = document.createElement('div');
                    caption.classList.add('caption');
                    caption.textContent = item.caption;

                    imgWrapper.appendChild(img);
                    imgWrapper.appendChild(caption);
                    carousel.appendChild(imgWrapper);
                });

                firstImgWidth = carousel.querySelectorAll('.img-wrapper')[0].clientWidth + 14; // Adjusted for wrapper
            });

        // Arrow click functionality
        [leftArrow, rightArrow].forEach(icon => {
            icon.addEventListener('click', () => {
                carousel.scrollLeft += icon.id.includes('left') ? -firstImgWidth : firstImgWidth;
            });
        });

        // Drag functionality
        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX;
            prevScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            carousel.classList.add('dragging');
            let positionDiff = e.pageX - prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
        };

        const dragStop = () => {
            isDragStart = false;
            carousel.classList.remove('dragging');
        };

        // Add event listeners for dragging
        carousel.addEventListener('mousedown', dragStart);
        carousel.addEventListener('mousemove', dragging);
        carousel.addEventListener('mouseup', dragStop);
        carousel.addEventListener('mouseleave', dragStop); // Stop dragging if the mouse leaves the carousel
    };

    // Initialize both carousels with their respective JSON files
    initializeCarousel('carousel1', 'js/JSON/gallery1.json');
    initializeCarousel('carousel2', 'js/JSON/gallery2.json');
    initializeCarousel('carousel3', 'js/JSON/gallery3.json');
    initializeCarousel('carousel4', 'js/JSON/gallery4.json');
    initializeCarousel('carousel5', 'js/JSON/gallery5.json');
    initializeCarousel('carousel6', 'js/JSON/gallery6.json');

});

// Initialize the map
var map = L.map("map").setView([53.2799, -4.4000], 11); 

// Add a tile layer (map background)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a second tile layer (Stamen Watercolor)


// Add a marker to the map
const RedPin = L.icon({
    iconUrl: 'src/misc/Red-Pin-PNG-Image.png', // Replace with the path to your custom pin image
    iconSize: [37, 50], // Size of the icon
    iconAnchor: [11, 40], // Anchor point of the icon
    popupAnchor: [1, -34], // Anchor point for the popup
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', // Default shadow
    shadowSize: [41, 41], // Size of the shadow
    shadowAnchor: [12, 41] // Anchor point of the shadow
});
53.2716, -4.2411
 


 L.marker([53.38514929677836, -4.349763914772542],{ icon: RedPin })
  .addTo(map)
  .bindPopup(`
    <div class="custom-popup">
      <div class="popup-content">
        <img src="src/Parys_mountain/photo0jpg.jpg" alt="Parys Moutain" class="popup-image">
        <div class="popup-text">
          <b>Parys Moutain</b><br>
          <div class="popup-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <a href="https://maps.app.goo.gl/pP9WTzmni4z2gRZX7" target="_blank">View on Google Maps</a><br>
          <a href="Parys_Mountain.html" >To The review!</a>
        </div>
      </div>
    </div>
  `, { className: 'custom-popup-class' })
  .openPopup();

L.marker([53.161324119029274, -4.406480630979432],{ icon: RedPin })
  .addTo(map)
  .bindPopup(`
    <div class="custom-popup">
      <div class="popup-content">
        <img src="src/Niwbrogh/20250207_122625.jpg" alt="Newborough Forest" class="popup-image">
        <div class="popup-text">
          <b>Newborough Forest</b><br>
          <div class="popup-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="https://maps.app.goo.gl/y6UGiV96pNKRQu7JA" target="_blank">View on Google Maps</a><br>
          <a href="Newborough_Forest.html">To The review!</a>
        </div>
      </div>
    </div>
  `, { className: 'custom-popup-class' })
  .openPopup();

  L.marker([53.2716, -4.2411 ],{ icon: RedPin })
  .addTo(map)
  .bindPopup(`
    <div class="custom-popup">
      <div class="popup-content">
        <img src="src/Gors_Bodeilio/unnamed_(2).jpg" alt="Gors Bodeilio" class="popup-image">
        <div class="popup-text">
          <b>Gors Bodeilio</b><br>
          <div class="popup-stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <a href="https://maps.app.goo.gl/3qPbWU3gdT8hpMew9" target="_blank">View on Google Maps</a><br>
          <a href="Gors_Bodeilio.html" >To The review!</a>
        </div>
      </div>
    </div>
  `, { className: 'custom-popup-class' })
  .openPopup();

    L.marker([53.29272918247888, -4.077201729086987],{ icon: RedPin })
    .addTo(map)
    .bindPopup(`
      <div class="custom-popup">
        <div class="popup-content">
          <img src="src/Lleiniog_castle/COVER_IMAGE.jpg" alt="Aberlleiniog Castle" class="popup-image">
          <div class="popup-text">
            <b>Aberlleiniog Castle</b><br>
            <div class="popup-stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <a href="https://maps.app.goo.gl/QP71F5tRU6ZnyCLq8" target="_blank">View on Google Maps</a><br>
            <a href="Aberlleiniog_Castle.html" >To The review!</a>
          </div>
        </div>
      </div>
    `, { className: 'custom-popup-class' })
    .openPopup();

    L.marker([  53.30782941190929, -4.2086245362441295],{ icon: RedPin })
    .addTo(map)
    .bindPopup(`
      <div class="custom-popup">
        <div class="popup-content">
          <img src="src/red_wharf/IMG-20250326-WA0001.jpg" alt="Red wharf Bay" class="popup-image">
          <div class="popup-text">
            <b>Red Wharf Bay</b><br>
            <div class="popup-stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <a href="https://maps.app.goo.gl/1y9zsxLxmvu7QTpL9" target="_blank">View on Google Maps</a><br>
            <a href="Red_wharf_Bay.html">To The review!</a>
          </div>
        </div>
      </div>
    `, { className: 'custom-popup-class' })
    .openPopup();

    L.marker([53.31134414443812, -4.041513673266474],{ icon: RedPin })
    .addTo(map)
    .bindPopup(`
      <div class="custom-popup">
        <div class="popup-content">
          <img src="src/Penmon_point/20250208_135908.jpg" alt="Penmon Point " class="popup-image">
          <div class="popup-text">
            <b>Penmon Point</b><br>
            <div class="popup-stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <a href="https://maps.app.goo.gl/pxNDzcuYhBp6eT5G9" target="_blank">View on Google Maps</a><br>
            <a href="Penmon_Point.html" >To The review!</a>
          </div>
        </div>
      </div>
    `, { className: 'custom-popup-class' })
    .openPopup();

