// ===== Shared Functions =====
function initMobileMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  const menuItems = document.getElementById("menuitems");

  if (menuIcon && menuItems) {
    menuIcon.addEventListener("click", () => {
      menuItems.classList.toggle("active");
    });
  }
}

function highlightActiveLink() {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// ===== Home Page =====
function initHomePage() {
  if (!document.querySelector(".hero")) return;

  // Product data
  const products = [
    {
      id: 1,
      name: "Classic Leather Hand Bag",
      price: 249.0,
      originalPrice: 359.0,
      image: "img/6.png",
      description:
        "This elegant brown classic leather handbag is crafted with precision in Germany, showcasing timeless design and superior craftsmanship. Made from premium full-grain leather, it features a rich brown hue, smooth texture, and durable construction.",
      available: false,
    },
    {
      id: 2,
      name: "Lace Top With Frill Shoulders",
      price: 249.0,
      originalPrice: 359.0,
      image: "img/lacetop.png",
      description:
        "Delicate and feminine, this lace top features intricate detailing and frill shoulders for a romantic touch. Perfect for both daytime elegance and evening sophistication.",
      available: false,
    },
    {
      id: 3,
      name: "Luxury Designer Top",
      price: 249.0,
      originalPrice: 359.0,
      image: "img/desinertop.png",
      description:
        "Make a statement with this luxury designer top featuring exclusive patterns and premium fabrics. Designed for those who appreciate fine details and exceptional quality.",
      available: false,
    },
  ];

  // Render featured product
  const featuredContainer = document.querySelector(".featured-product");
  if (featuredContainer) {
    featuredContainer.innerHTML = `
        <div class="art-left">
          <img src="img/ft-1.png" alt="Featured Product" />
        </div>
        <div class="art-right">
          <div class="A-RD">
            <h1>Trendy and Timeless</h1>
            <h3>Discover our curated collection of fashion pieces that blend contemporary trends with timeless elegance. Each item is carefully selected to ensure quality, style, and versatility for your wardrobe.</h3>
            <button class="btn art">
              <a href="products.html">View Collection</a>
            </button>
          </div>
        </div>
      `;
  }

  // Render products
  const productsContainer = document.querySelector(".products-grid");
  if (productsContainer) {
    products.forEach((product) => {
      const productHTML = `
          <div class="product-card">
            <div class="product-img">
              <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="product-info">
              <h3>${product.name}</h3>
              <div class="price">
                <strike>$${product.originalPrice.toFixed(
                  2
                )}</strike> $${product.price.toFixed(2)}
              </div>
              <button class="btn ${
                product.available ? "" : "soon-btn"
              }" style="width: 100%; margin-top: 15px;">
                ${product.available ? "Add to Cart" : "Coming Soon"}
              </button>
            </div>
          </div>
        `;
      productsContainer.innerHTML += productHTML;
    });
  }
}

// ===== Products Page =====
function initProductsPage() {
  if (!document.querySelector(".products-grid")) return;

  // Extended product data
  const products = [
    {
      id: 1,
      name: "Classic Leather Hand Bag",
      price: 249.0,
      originalPrice: 359.0,
      image: "img/6.png",
      description: "Premium full-grain leather handbag crafted in Germany.",
      category: "bags",
      available: false,
    },
    {
      id: 2,
      name: "Lace Top With Frill Shoulders",
      price: 249.0,
      originalPrice: 359.0,
      image: "img/lacetop.png",
      description: "Delicate lace top with romantic frill shoulders.",
      category: "tops",
      available: false,
    },
    {
      id: 3,
      name: "Luxury Designer Top",
      price: 249.0,
      originalPrice: 359.0,
      image: "img/desinertop.png",
      description: "Exclusive designer top with premium fabrics.",
      category: "tops",
      available: false,
    },
    {
      id: 4,
      name: "Silk Evening Gown",
      price: 599.0,
      originalPrice: 799.0,
      image: "img/12.png",
      description: "Elegant silk gown for special occasions.",
      category: "dresses",
      available: true,
    },
    {
      id: 5,
      name: "Wool Winter Coat",
      price: 399.0,
      originalPrice: 499.0,
      image: "img/14.png",
      description: "Warm wool coat with premium lining.",
      category: "outerwear",
      available: true,
    },
    {
      id: 6,
      name: "Designer Necklace",
      price: 199.0,
      originalPrice: 299.0,
      image: "img/neck.png",
      description: "Diamond designer necklace.",
      category: "accessories",
      available: true,
    },
  ];

  // Render all products
  const productsContainer = document.querySelector(".products-grid");
  if (productsContainer) {
    products.forEach((product) => {
      const productHTML = `
          <div class="product-card" data-category="${product.category}">
            <div class="product-img">
              <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="product-info">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <div class="price">
                <strike>$${product.originalPrice.toFixed(
                  2
                )}</strike> $${product.price.toFixed(2)}
              </div>
              <button class="btn ${
                product.available ? "" : "soon-btn"
              }" style="width: 100%; margin-top: 15px;">
                ${product.available ? "Add to Cart" : "Coming Soon"}
              </button>
            </div>
          </div>
        `;
      productsContainer.innerHTML += productHTML;
    });
  }

  // Simple filter functionality
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter products
      document.querySelectorAll(".product-card").forEach((card) => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// ===== Events Page =====
function initEventsPage() {
  if (!document.querySelector(".events-list")) return;

  // Event data
  const events = [
    {
      id: 1,
      title: "Spring Collection Launch",
      date: "15",
      month: "Mar",
      year: "2024",
      time: "6:00 PM",
      location: "LuxeLab Flagship Store",
      description:
        "Join us for the exclusive launch of our Spring 2024 collection with live music and refreshments.",
    },
    {
      id: 2,
      title: "Fashion Design Workshop",
      date: "22",
      month: "Apr",
      year: "2024",
      time: "2:00 PM",
      location: "LuxeLab Creative Studio",
      description:
        "Learn the basics of fashion design from our in-house designers in this hands-on workshop.",
    },
    {
      id: 3,
      title: "Summer Sale Preview",
      date: "10",
      month: "Jun",
      year: "2024",
      time: "11:00 AM",
      location: "LuxeLab Online",
      description:
        "Exclusive preview of our summer sale for newsletter subscribers with early access to discounts.",
    },
  ];

  // Render events
  const eventsContainer = document.querySelector(".events-list");
  if (eventsContainer) {
    events.forEach((event) => {
      const eventHTML = `
          <div class="event-card">
            <div class="event-date">
              <div class="day">${event.date}</div>
              <div class="month">${event.month}</div>
              <div class="year">${event.year}</div>
            </div>
            <div class="event-details">
              <h3>${event.title}</h3>
              <div class="event-meta">
                <span><i class="far fa-clock"></i> ${event.time}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
              </div>
              <p>${event.description}</p>
              <button class="btn">RSVP Now</button>
            </div>
          </div>
        `;
      eventsContainer.innerHTML += eventHTML;
    });
  }
}

// ===== Contact Page =====
function initContactPage() {
  if (!document.getElementById("contact-form")) return;

  // Form validation
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    // In a real app, you would send the form data to a server here
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
}

// ===== Initialize All Pages =====
document.addEventListener("DOMContentLoaded", () => {
  // Shared initialization
  initMobileMenu();
  highlightActiveLink();

  // Page-specific initialization
  initHomePage();
  initProductsPage();
  initEventsPage();
  initContactPage();
});
