document.addEventListener("DOMContentLoaded", function() {
    const shopData = [
        {
            "image": "assets/images/shop/shop-1.jpg",
            "title": "ABSOLE - 1120",
            "description": "Cooling water treatment chemical open circuit"
        },
        {
            "image": "assets/images/shop/shop-2.jpg",
            "title": "ABSOLE - 920",
            "description": "Micro Biocide for open water recirculating system",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-3.jpg",
            "title": "ABSOLE - 806",
            "description": "Chilled and hot water treatment for closed circuit",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-4.jpg",
            "title": "ABSOLE - 220",
            "description": " Boiler treatment chemical",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-5.jpg",
            "title": "ABSOLE - 1140",
            "description": "RO Antiscallant",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-6.jpg",
            "title": "ABSOLE - 1110 LIQUID",
            "description": "Drinking water minerals",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-7.jpg",
            "title": "ABSOLE - 1110 COMPOUND",
            "description": "Drinking water minerals",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-8.jpg",
            "title": "ABSOLE - 105",
            "description": "Descalant",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-9.jpg",
            "title": "ABSOLE N-30",
            "description": "Neutralizer",
            "link": "product-details.html"
        },
        
        {
            "image": "assets/images/shop/shop-10.jpg",
            "title": "ABSOLE - 800",
            "description": "Waste water treatment",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-11.jpg",
            "title": "ABSOLE - 900",
            "description": "",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-12.jpg",
            "title": "Fixer formaldehyde free",
            "description": "",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-13.jpg",
            "title": "Fixer formaldehyde base",
            "description": "",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-14.jpg",
            "title": "Sequesters",
            "description": "",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-15.jpg",
            "title": "Dispersing Agent",
            "description": "",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop.jpg",
            "title": "Wash Off",
            "description": "",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop-17.jpg",
            "title": "Bio Polishing Enzyme",
            "description": "",
            "link": "product-details.html"
        },
        {
            "image": "assets/images/shop/shop.jpg",
            "title": "Waiting Agent",
            "description": "",
            "link": "product-details.html"
        }, 
        {
            "image": "assets/images/shop/shop-19.jpg",
            "title": "Antimigrating agent ",
            "description": "",
            "link": "product-details.html"
        }, 
        {
            "image": "assets/images/shop/shop-20.jpg",
            "title": "Color Reducing  Agent (RC) ",
            "description": "",
            "link": "product-details.html"
        }, 
        {
            "image": "assets/images/shop/shop.jpg",
            "title": "Anti Zipper ",
            "description": "",
            "link": "product-details.html"
        }, 

        {
            "image": "assets/images/shop/shop-22.jpg",
            "title": "Stabilizer",
            "description": "",
            "link": "product-details.html"
        }, 
        {
            "image": "assets/images/shop/shop-23.jpg",
            "title": "Softener",
            "description": "",
            "link": "product-details.html"
        }, 
        {
            "image": "assets/images/shop/shop-24.jpg",
            "title": "Anti-Back Stainer",
            "description": "",
            "link": "product-details.html"
        }, 
        {
            "image": "assets/images/shop/shop-25.jpg",
            "title": "Leveling Agent",
            "description": "",
            "link": "product-details.html"
        }, 

        {
            "image": "assets/images/shop/shop-26.jpg",
            "title": "Anticreasing Agent",
            "description": "",
            "link": "product-details.html"
        }
        
    ];

    const itemsPerPage = 9;
    const shopContainer = document.getElementById("shop-container");
    const startItem = document.getElementById("start-item");
    const endItem = document.getElementById("end-item");
    const totalItems = document.getElementById("total-items");

    function createShopItem(item) {
        return `
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="single-shop-item single-shop-item--style2">
                    <div class="single-shop-item_inner">
                        <div class="img-holder" data-title="${item.title}" data-description="${item.description}" data-image="${item.image}">
                            <img src="${item.image}" alt="${item.title}">
                            <div class="overlay">
                                <span class="icon-email"></span>
                                <a href="#">Enquire</a>
                            </div>
                        </div>
                        <div class="title-holder">
                            <h3>${item.title}</h3>
                            <h6>${item.description}</h6>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function loadShopItems() {
        shopContainer.innerHTML = "";
        shopData.forEach((item, index) => {
            shopContainer.innerHTML += createShopItem(item);
        });
        showPage(1);
    }

    const items = shopContainer.children;
    const totalPages = Math.ceil(shopData.length / itemsPerPage);
    let currentPage = 1;

    function showPage(page) {
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "none";
        }

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        for (let i = start; i < end && i < items.length; i++) {
            items[i].style.display = "block";
        }

        currentPage = page;
        updatePagination(start, end);
    }

    function updatePagination(start, end) {
        document.querySelectorAll(".pagination-btn").forEach(btn => {
            btn.classList.remove("active");
        });
        document.querySelector(`.pagination-btn[data-page="${currentPage}"]`).classList.add("active");

        document.getElementById("prev-btn").style.display = currentPage === 1 ? "none" : "inline-block";
        document.getElementById("next-btn").style.display = currentPage === totalPages ? "none" : "inline-block";

        startItem.textContent = start + 1;
        endItem.textContent = end > shopData.length ? shopData.length : end;
        totalItems.textContent = shopData.length;
    }

    document.querySelectorAll(".pagination-btn").forEach(btn => {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            const page = parseInt(btn.getAttribute("data-page"));
            showPage(page);
        });
    });

    document.getElementById("prev-btn").addEventListener("click", function(event) {
        event.preventDefault();
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    });

    document.getElementById("next-btn").addEventListener("click", function(event) {
        event.preventDefault();
        if (currentPage < totalPages) {
            showPage(currentPage + 1);
        }
    });

    // Popup Functionality
    const popup = document.getElementById("product-popup");
    const popupImage = document.getElementById("popup-image");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const closeBtn = document.getElementById("closebtn");

    function showPopup(title, description, image) {
        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popupImage.src = image;
        popup.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable scroll bar on main page
    }

    function closePopup() {
        popup.style.display = "none";
        document.body.style.overflow = ""; // Enable scroll bar on main page
    }

    shopContainer.addEventListener("click", function(event) {
        const target = event.target.closest(".single-shop-item_inner");
        if (target) {
            const title = target.querySelector(".img-holder").getAttribute("data-title");
            const description = target.querySelector(".img-holder").getAttribute("data-description");
            const image = target.querySelector(".img-holder").getAttribute("data-image");
            showPopup(title, description, image);
        }
    });
    
    closeBtn.addEventListener("click", function() {
        closePopup();
    });

    window.addEventListener("click", function(event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Initialize
    loadShopItems();
});