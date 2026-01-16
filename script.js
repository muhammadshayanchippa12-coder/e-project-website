const btn = document.getElementById('btnHamb');
const mobile = document.getElementById('mobileMenu');
const mobBtn = document.getElementById("mobileProductsBtn");
const mobDrop = document.getElementById("mobileProductsDropdown");

// Mobile menu toggle
btn.addEventListener('click', () => {
  mobile.style.display = mobile.style.display === 'block' ? 'none' : 'block';
});

// Mobile product dropdown
mobBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobDrop.style.display = mobDrop.style.display === "block" ? "none" : "block";
});

// Reset on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    mobile.style.display = "none";
    mobDrop.style.display = "none";
  }
});

const accBtn = document.getElementById("mobileAccessoriesBtn");
const accDrop = document.getElementById("mobileAccessoriesDropdown");

// Accessories dropdown toggle
accBtn.addEventListener("click", (e) => {
  e.preventDefault();
  accDrop.style.display = accDrop.style.display === "block" ? "none" : "block";
});

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll(".navbar-link");

    links.forEach(link => {
        // current page active
        if (link.href === window.location.href) {
            link.classList.add("active");
        }

        // click active
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

});




// home 1 produst

const products=[
["p1","home-img1.jpg","Corsair 16GB Dominator RGB DDR4","Rs. 28,000"],
["p2","home-img2.jpg","Lexar 16GB DDR4","Rs. 24,500"],
["p3","home-img3.jpg","Samsung 990 PRO 1TB","Rs. 38,500"],
["p4","home-img4.jpg","ADATA XPG LANCER DDR5","Rs. 42,000"],
["p5","home-img5.jpg","Lexar 8GB Laptop RAM","Rs. 12,500"],
["p6","home-img6.webp","ZOTAC RTX 5080","Rs. 397,000"],
["p7","home-img7.jpg","Intel Core i7-14700KF","Rs. 109,000"],
["p8","home-img8.webp","Super Flower 1600W PSU","Rs. 133,499"],
["p9","home-img9.webp","ViewSonic 2K Monitor","Rs. 79,999"],
["p10","home-img10.webp","ZOTAC RTX 5060","Rs. 101,500"],
["p11","home-img11.jpg","Bloody M320 Headset","Rs. 16,500"],
["p12","home-img12.jpg","MSI H510M-B Motherboard","Rs. 23,000"]
];

products.forEach(p=>{
document.body.insertAdjacentHTML("beforeend",`
<div class="modal fade" id="${p[0]}">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">${p[2]}</h5>
<button class="btn-close" data-bs-dismiss="modal"></button>
</div>
<div class="modal-body text-center">
<img src="images/${p[1]}" class="img-fluid mb-3" style="max-height:200px">
<p><strong>Price:</strong> ${p[3]}</p>
</div>
<div class="modal-footer">
<button class="btn btn-success">Buy Now</button>
<button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
`);
});




// New Data for dynamic product descriptions (Requested Change 2)
const productDescriptions = {
  '1': {
    name: "Laptop Pro X",
    description: [
      "Sleek 13-inch PixelSense™ Display (2880x1920) for sharp visuals.",
      "Powered by high-efficiency Microsoft SQ® 1/SQ® 2 Processor.",
      "Up to 15 hours of battery life for all-day use.",
      "Lightweight design, starting at just 1.7 lbs (tablet only).",
      "Dual USB-C® ports for modern connectivity."
    ]
  },
  '2': {
    name: "Aura Headphones",
    description: [
      "Bluetooth V5.3 for stable, long-range wireless connectivity.",
      "IPX5 water and sweat resistant design.",
      "Up to 8 hours of playback on a single charge (total 40+ hours with case).",
      "Environmental Noise Cancellation (ENC) for clear call quality.",
      "Available in multiple colors and sleek over-ear design."
    ]
  },
  '3': {
    name: "Motherboard",
    description: [
      "MSI PRO H510M-B DDR4 Micro-ATX Motherboard.",
      "Supports 10th and 11th Gen Intel Core processors (LGA 1200 socket).",
      "Features 2x DDR4 DIMM slots, Max 64GB RAM support (up to 3200 MHz).",
      "Storage options include 1x M.2 slot (PCIe 3.0) and 4x SATA 6Gb/s ports.",
      "Realtek Gigabit LAN for stable, fast network connectivity."
    ]
  }
};


// eye icon and modal functionality
document.addEventListener('DOMContentLoaded', () => {
  const detailButtons = document.querySelectorAll('.view-details-btn');
  const modal = document.getElementById('productModal');
  const closeBtn = document.querySelector('.close-btn');

  // Function to close the modal
  const closeModal = () => {
    modal.style.display = 'none';
  };

  // 1. Eye Icon Click Event
  detailButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();

      // Card se data nikalo
      const productId = button.getAttribute('data-product-id');
      const productName = button.getAttribute('data-product-name');
      const productPrice = button.getAttribute('data-product-price');

      // Naya: Product-specific description nikalo
      const productData = productDescriptions[productId];

      // Modal mein data bharo
      document.getElementById('modal-product-name').textContent = productName;
      document.getElementById('modal-product-id').textContent = productId;
      document.getElementById('modal-product-price').textContent = productPrice;

      // Naya: Description ko dynamic tarike se daalo
      const descContainer = document.getElementById('modal-product-description');
      descContainer.innerHTML = ''; // Purana content clear karo

      if (productData) {
        // Title for description
        const titleP = document.createElement('p');
        titleP.innerHTML = '<strong style="margin-top: 15px; display: block;">Key Features:</strong>';
        descContainer.appendChild(titleP);

        // Create the UL list
        const ul = document.createElement('ul');
        ul.classList.add('modal-ul');

        productData.description.forEach(detail => {
          const li = document.createElement('li');
          li.classList.add('modal-li');
          li.textContent = detail;
          ul.appendChild(li);
        });
        descContainer.appendChild(ul);
      } else {
        descContainer.innerHTML = '<p>No specific details found for this product.</p>';
      }

      // Modal ko dikhao
      modal.style.display = 'block';
    });
  });

  // 2. Close button par click hone par modal band karo
  closeBtn.addEventListener('click', closeModal);

  // 3. Jab user modal ke bahar kahin click kare toh modal band karo
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // 4. ESC key dabane par modal band karo
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
});

//  offers slider functionality

const offers = [
  {
    badge: "LIMITED",
    img: "images/home-crousal-2-img.jpg",
    title: "Dell Vostro 15 3530 Laptop — 50% OFF",
    text: "Dell Vostro 15 15-inch laptop.",
    price: "Rs. 137,900"
  },
  {
    badge: "HOT",
    img: "images/home-crousal-2-img2.jpg",
    title: "Lenovo — 50% OFF",
    text: "24-inch FHD IPS panel.",
    price: "Rs. 60,000"
  },
  {
    badge: "NEW",
    img: "images/home-crousal-2-img3.jpg",
    title: "ASUS TUF GAMING Radeon — 50% OFF",
    text: "Axial-tech fan design has been enhanced.",
    price: "Rs. 155,000"
  },
  {
    badge: "FLASH",
    img: "images/home-crousal-2-img4.jpg",
    title: "WD Purple Surveillance Hard Drive  — 50% OFF",
    text: "Uncompromising Surveillance Storage.",
    price: "Rs. 38,500"
  }
];

const scene = document.getElementById("offersScene");
const dots = document.getElementById("offersDots");
const prevBtn = document.getElementById("prevOffer");
const nextBtn = document.getElementById("nextOffer");

let index = 0;
let radius = 450;
let autoSlide;

/* BUILD CAROUSEL */
function buildCarousel() {
  const total = offers.length;
  const deg = 360 / total;

  scene.innerHTML = "";
  dots.innerHTML = "";

  offers.forEach((o, i) => {
    let card = document.createElement("div");
    card.className = "offer-card";
    card.style.transform = `rotateY(${deg * i}deg) translateZ(${radius}px)`;

    card.innerHTML = `
      <div class="offer-badge">${o.badge}</div>
      <div class="img" style="background-image:url(${o.img})"></div>
      <div class="body">
        <h4>${o.title}</h4>
        <p>${o.text}</p>
        <div class="offer-price">${o.price}</div>
      </div>
    `;

    scene.appendChild(card);

    let dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goTo(i));
    dots.appendChild(dot);
  });

  rotateCarousel();
}

/* ROTATE */
function rotateCarousel() {
  const deg = 360 / offers.length;
  scene.style.transform = `rotateY(${-index * deg}deg)`;

  [...dots.children].forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

/* NEXT + PREV */
function next() {
  index = (index + 1) % offers.length;
  rotateCarousel();
}

function prev() {
  index = (index - 1 + offers.length) % offers.length;
  rotateCarousel();
}

function goTo(i) {
  index = i;
  rotateCarousel();
}



/* AUTO SLIDE EVERY 2 SECONDS */
function startAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(next, 2000);
}

prevBtn.onclick = () => { prev(); startAutoSlide(); };
nextBtn.onclick = () => { next(); startAutoSlide(); };

buildCarousel();
startAutoSlide();

// home page card

   function openModal(card) {
            document.getElementById("popupImg").src = card.dataset.img;
            document.getElementById("popupTitle").innerText = card.dataset.title;
            document.getElementById("popupDesc").innerText = card.dataset.desc;
            document.getElementById("popupPrice").innerText = card.dataset.price;

            document.getElementById("alertItem").innerText = "Product: " + card.dataset.title;

            document.getElementById("popupMain").style.display = "flex";
        }

        function closeModal() {
            document.getElementById("popupMain").style.display = "none";
        }

        function showSuccess() {
            let box = document.getElementById("alertMain");
            box.classList.add("show");

            setTimeout(() => {
                box.classList.remove("show");
            }, 3000);
        }

        function closeSuccess() {
            document.getElementById("alertMain").classList.remove("show");
        }
          
// crousal slide images

const box = document.querySelector(".gallery-box");
const track = document.querySelector(".gallery-track");

box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const boxWidth = rect.width;

    const percent = mouseX / boxWidth;
    const maxMove = track.scrollWidth - boxWidth;

    track.style.transform = `translateX(-${percent * maxMove}px)`;
});

box.addEventListener("mouseleave", () => {
    track.style.transform = "translateX(0px)";
});

// crousal slide images 2

const hoverField = document.getElementById("hoverArea");
const trackScroller = document.getElementById("scrollLine");

hoverField.addEventListener("mousemove", (e) => {
    const rect = hoverField.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const boxWidth = rect.width;

    const percent = mouseX / boxWidth;
    const maxMove = trackScroller.scrollWidth - boxWidth;

    trackScroller.style.transform = `translateX(-${percent * maxMove}px)`;
});

hoverField.addEventListener("mouseleave", () => {
    trackScroller.style.transform = "translateX(0px)";
});


// support page script


      
        
