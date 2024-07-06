document.addEventListener("DOMContentLoaded", function() {
    const shopData = [
        {
            "image": "assets/images/shop/shop-1.jpg",
            "title": "ABSOLE - 1120",
            "description": "Cooling water treatment chemical open circuit",
            "details": "A specialized cooling water treatment chemical designed for open circuit systems, ensuring optimal thermal efficiency and preventing scale, corrosion, and microbial growth.",
        },
        {
            "image": "assets/images/shop/shop-2.jpg",
            "title": "ABSOLE - 920",
            "description": "Micro Biocide for open water recirculating system",
            "details": "A micro biocide designed for use in open water recirculating systems. It effectively controls microbial growth, ensuring water quality and system efficiency.",

        },
        {
            "image": "assets/images/shop/shop-3.jpg",
            "title": "ABSOLE - 806",
            "description": "Chilled and hot water treatment for closed circuit",
            "details": "A treatment solution for chilled and hot water in closed circuit systems. It enhances system performance and prevents corrosion and scaling.",
        },
        {
            "image": "assets/images/shop/shop-4.jpg",
            "title": "ABSOLE - 220",
            "description": " Boiler treatment chemical",
            "details": "A boiler treatment chemical formulated to enhance efficiency and prevent scaling and corrosion in boiler systems. It ensures optimal performance and longevity of the equipment.",
        },
        {
            "image": "assets/images/shop/shop-5.jpg",
            "title": "ABSOLE - 1140",
            "description": "RO Antiscallant",
           "details": "An RO antiscalant designed to prevent scale formation in reverse osmosis systems. It ensures optimal membrane performance and extends the system's lifespan.",
        },
        {
            "image": "assets/images/shop/shop-6.jpg",
            "title": "ABSOLE - 1110 LIQUID",
            "description": "Drinking water minerals",
            "details": "A formulation of drinking water minerals designed to enhance water quality and provide essential nutrients. It ensures safe and healthy mineral levels in potable water.",
        },
        {
            "image": "assets/images/shop/shop-7.jpg",
            "title": "ABSOLE - 1110 COMPOUND",
            "description": "Drinking water minerals",
            "details": "A blend of essential minerals for enhancing the quality of drinking water. It ensures safe, nutrient-rich water suitable for consumption.",
        },
        {
            "image": "assets/images/shop/shop-8.jpg",
            "title": "ABSOLE - 105",
            "description": "Descalant",
            "details": "A powerful descalant formulated to remove scale buildup in various water systems. It enhances system efficiency and prolongs equipment lifespan by preventing scale-related issues.",
        },
        {
            "image": "assets/images/shop/shop-9.jpg",
            "title": "ABSOLE N-30",
            "description": "Neutralizer",
            "details": "A neutralizer designed to balance pH levels in water systems. It ensures optimal system performance and protects equipment from corrosion and damage.",
        },
        {
            "image": "assets/images/shop/shop-10.jpg",
            "title": "ABSOLE - 800",
            "description": "Waste water treatment",
            "details": "A wastewater treatment solution formulated to effectively manage and treat industrial wastewater. It enhances water quality by removing contaminants and ensuring compliance with environmental standards.",
        },
        {
            "image": "assets/images/shop/shop-11.jpg",
            "title": "ABSOLE - 900",
            "description": "Waste Water Treatment",
            "details": "An advanced wastewater treatment chemical designed to improve the quality of industrial effluents. It effectively removes contaminants and ensures compliance with environmental regulations.",
        },
        {
            "image": "assets/images/shop/shop-12.jpg",
            "title": "Fixer formaldehyde free",
            "description": "",
            "details": "A water treatment solution used in photography to fix photographic prints, providing environmental safety and preserving image quality without formaldehyde.",
        },
        {
            "image": "assets/images/shop/shop-13.jpg",
            "title": "Fixer formaldehyde base",
            "description": "",
            "details": "A water treatment solution used in photography for fixing photographic prints, utilizing formaldehyde as a key component in the process of preserving image quality and ensuring effective development.",
        },
        {
            "image": "assets/images/shop/shop-14.jpg",
            "title": "Sequesters",
            "description": "",
            "details": "A chemical used in water treatment to bind and neutralize metal ions, preventing them from causing scale formation or other undesirable reactions in the system.",
        },
        {
            "image": "assets/images/shop/shop-15.jpg",
            "title": "Dispersing Agent",
            "description": "",
            "details": "A chemical additive used to break down and disperse particles or substances, preventing their agglomeration and aiding in their removal from the system, thus improving water quality."
        },
        {
            "image": "assets/images/shop/shop-16.jpg",
            "title": "Wash Off",
            "description": "",
            "details": "A product designed specifically for removing substances or residues from surfaces, ensuring thorough cleaning and preparation for subsequent use or treatment."
        },
        {
            "image": "assets/images/shop/shop-17.jpg",
            "title": "Bio Polishing Enzyme",
            "description": "",
            "details": "A biological substance used in textile processing to enhance fabric properties such as softness, smoothness, and appearance by removing protruding fibers and fuzz. They work by breaking down and removing cellulose microfibrils on the fabric surface, resulting in a smoother and cleaner fabric finish."
        },
        {
            "image": "assets/images/shop/shop-18.jpg",
            "title": "Waiting Agent",
            "description": "",
            "details": "A chemical used to delay or control the release of another chemical or treatment in the water treatment process. This could be for optimizing the effectiveness of certain treatments or ensuring they are applied under specific conditions."
        },
        {
            "image": "assets/images/shop/shop-19.jpg",
            "title": "Antimigrating agent ",
            "description": "",
            "details": "A chemical additive used to prevent the movement or migration of particles, dyes, or other substances within a solution. This is particularly useful in maintaining uniformity and stability in the treatment process, ensuring that the substances remain evenly distributed and do not settle or aggregate, which can enhance the effectiveness of the treatment."
        },
        {
            "image": "assets/images/shop/shop-20.jpg",
            "title": "Color Reducing  Agent (RC) ",
            "description": "",
            "details": "A chemical used to remove or reduce color from wastewater or treated water. These agents work by breaking down color-causing compounds, such as dyes or organic materials, through chemical reactions, thereby improving the clarity and quality of the water."
        },
        {
            "image": "assets/images/shop/shop-21.jpg",
            "title": "Anti Zipper ",
            "description": "",
            "details": "A chemical or additive designed to prevent the rapid and uneven progression of a reaction or process"
        },
        {
            "image": "assets/images/shop/shop-22.jpg",
            "title": "Stabilizer",
            "description": "",
            "details": "A chemical additive used to maintain the stability and effectiveness of other treatment chemicals or processes. Stabilizers can prevent the degradation of chemicals, control pH levels, inhibit corrosion, and ensure consistent performance of the treatment system over time. They help in maintaining water quality by ensuring that the active ingredients remain effective under varying conditions."
        },
        {
            "image": "assets/images/shop/shop-23.jpg",
            "title": "Softener",
            "description": "",
            "details": "A chemical used to remove hardness-causing minerals, primarily calcium and magnesium, from the water. This process, known as water softening, typically involves ion exchange, where the hard minerals are replaced with sodium or potassium ions, resulting in softer water. This helps prevent scale buildup in pipes and appliances and improves the efficiency of soaps and detergents."
        },
        {
            "image": "assets/images/shop/shop-24.jpg",
            "title": "Anti-Back Stainer",
            "description": "",
            "details": "A chemical additive used to prevent dyes or other substances from redepositing onto fabrics during washing or rinsing processes. This ensures that the fabrics retain their intended color and appearance, improving the quality and consistency of the final product."
        },
        {
            "image": "assets/images/shop/shop-25.jpg",
            "title": "Leveling Agent",
            "description": "",
            "details": "A chemical additive used to ensure uniform distribution of dyes on fabrics or materials. It helps prevent uneven coloring or streaking by promoting consistent dye uptake, resulting in a smooth, even finish on the treated material."
        },
        {
            "image": "assets/images/shop/shop-26.jpg",
            "title": "Anticreasing Agent",
            "description": "",
            "details": "A chemical additive used to prevent the formation of wrinkles or creases during the washing, dyeing, or finishing processes. It works by lubricating the fibers, reducing friction, and enhancing the fabric's flexibility, thereby maintaining the smoothness and appearance of the textile.",
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
                        <div class="img-holder" data-title="${item.title}" data-description="${item.description}" data-image="${item.image}" data-details="${item.details}">
                            <img src="${item.image}" alt="${item.title}">
                            <div class="overlay">
                                <span class="icon-email"></span>
                                <a href="contact.html">Enquire</a>
                            </div>
                        </div>
                        <div class="title-holder">
                            <h3>${item.title}</h3>
                            <h6>${item.description}</h6>
                        </div>
                        
                        <div class="btns-box shop-btn-box">
                                        <a class="btn-one shop-btn" href="#">
                                            <div class="round"></div>
                                            <span class="txt">Details</span>
                                        </a>
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
    const popupDetails = document.getElementById("popup-details");
    const closeBtn = document.getElementById("closebtn");

    function showPopup(title, description, details, image) {
        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popupDetails.textContent = details;
        popupImage.src = image;
        popup.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable scroll bar on main page
    }

    function closePopup() {
        popup.style.display = "none";
        document.body.style.overflow = ""; // Enable scroll bar on main page
    }

    shopContainer.addEventListener("click", function(event) {
        const target = event.target.closest(".shop-btn");
        if (target) {
            event.preventDefault();
            const title = target.closest(".single-shop-item_inner").querySelector(".img-holder").getAttribute("data-title");
            const description = target.closest(".single-shop-item_inner").querySelector(".img-holder").getAttribute("data-description");
            const details = target.closest(".single-shop-item_inner").querySelector(".img-holder").getAttribute("data-details");
            const image = target.closest(".single-shop-item_inner").querySelector(".img-holder").getAttribute("data-image");
            showPopup(title, description, details, image);
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