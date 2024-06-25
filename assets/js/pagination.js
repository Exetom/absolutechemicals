document.addEventListener("DOMContentLoaded", function() {
    const blogData = [
        {
            "image": "assets/images/blog/blog-v1-1.jpg",
            "title": "Understanding the Fundamentals of Water Treatment",
            "description": "An in-depth look at the key processes involved in water treatment, including sedimentation, filtration, and disinfection.",
            "date": "2023-06-10",
            "author": "William Smith",
            "read_more_link": "#"
        },
        {
            "image": "assets/images/blog/blog-v1-2.jpg",
            "title": "Innovations in RO Plant Technologies",
            "description": "Explore the latest advancements in reverse osmosis (RO) plant technology and their impact on water purification.",
            "date": "2024-01-15",
            "author": "Rick Joe",
            "read_more_link": "#"
        },
        {
            "image": "assets/images/blog/blog-v1-3.jpg",
            "title": "Descalants and Passivators: Essential Tools for Industrial Maintenance",
            "description": "Learn about the various types of descalants and passivators used to maintain industrial equipment and prevent corrosion.",
            "date": "2023-12-01",
            "author": "Emma Lee",
            "read_more_link": "https://www.afcl.com/products/descalant-passivators/descalants-and-passivators"
        },
        {
            "image": "assets/images/blog/blog-v1-2.jpg",
            "title": "Chilled Water Treatment Chemicals: What You Need to Know",
            "description": "A comprehensive guide to the chemicals used in chilled water systems to prevent scaling and corrosion.",
            "date": "2023-07-20",
            "author": "Michael Dale",
            "read_more_link": "#"
        },
        {
            "image": "assets/images/blog/blog-v1-2.jpg",
            "title": "The Role of Microbiosides in Water Treatment",
            "description": "Discover how microbiosides are used in water treatment processes to control microbial growth and ensure water quality.",
            "date": "2023-11-10",
            "author": "Sarah",
            "read_more_link": "#"
        },
        {
            "image": "assets/images/blog/blog-v1-6.jpg",
            "title": "Boiler Feed Water Treatment Chemicals Explained",
            "description": "An overview of the various chemicals used in boiler feed water treatment and their importance in maintaining boiler efficiency.",
            "date": "2023-08-05",
            "author": "David Dan",
            "read_more_link": "#"
        },
        {
            "image": "assets/images/blog/blog-v1-2.jpg",
            "title": "Advanced Descalant Technologies for Industrial Systems",
            "description": "This article explores cutting-edge descalant technologies that improve the maintenance of industrial systems.",
            "date": "2024-02-10",
            "author": "Laura Mitchell",
            "read_more_link": "#"
        },
        {
            "image": "assets/images/blog/blog-v1-8.jpg",
            "title": "Sustainable Practices in RO Plant Operation",
            "description": "Tips and strategies for operating reverse osmosis plants in a more sustainable and environmentally friendly manner.",
            "date": "2024-03-05",
            "author": "George Clark",
            "read_more_link": "#"
        },
        {
            "image": "assets/images/blog/blog-v1-9.jpg",
            "title": "Microbiosides: Key Players in Controlling Waterborne Pathogens",
            "description": "An in-depth look at how microbiosides are used to control waterborne pathogens in various water treatment processes.",
            "date": "2023-10-15",
            "author": "Lisa Adams",
            "read_more_link": "#"
        },
        {
            "image": "assets/images/blog/blog-v1-2.jpg",
            "title": "Passivation of Stainless Steel: Techniques and Benefits",
            "description": "Learn about the techniques used in the passivation of stainless steel and the benefits of this process in preventing corrosion.",
            "date": "2023-09-25",
            "author": "Mark Wilson",
            "read_more_link": "#"
        }
    ];

    const postsPerPage = 6;
    const blogContainer = document.getElementById("blog-container");

    function createBlogPost(post) {
        return `
            <div class="col-xl-4">
                <div class="single-blog-style1 wow fadeInUp" data-wow-duration="1500ms">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="${post.image}" alt="${post.title}">
                        </div>
                    </div>
                    <div class="text-holder">
                        <h3 class="blog-title">
                            <a href="${post.read_more_link}">${post.title}</a>
                        </h3>
                        <div class="meta-box">
                            <ul class="meta-info">
                                <li><i class="fa fa-calendar" aria-hidden="true"></i> ${new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</li>
                                <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i> By ${post.author}</a></li>
                            </ul>
                        </div>
                        <div class="text">
                            <p>${post.description}</p>
                        </div>
                        <div class="btns-box">
                            <a class="btn-two" href="${post.read_more_link}" target="blank"><span class="icon-right-arrow"></span>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function loadBlogPosts() {
        blogContainer.innerHTML = "";
        blogData.forEach((post, index) => {
            blogContainer.innerHTML += createBlogPost(post);
        });
        showPage(1);
    }

    const posts = blogContainer.children;
    const totalPages = Math.ceil(blogData.length / postsPerPage);
    let currentPage = 1;

    function showPage(page) {
        for (let i = 0; i < posts.length; i++) {
            posts[i].style.display = "none";
        }

        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;

        for (let i = start; i < end && i < posts.length; i++) {
            posts[i].style.display = "block";
        }

        currentPage = page;
        updatePagination();
    }

    function updatePagination() {
        document.querySelectorAll(".pagination-btn").forEach(btn => {
            btn.classList.remove("active");
        });
        document.querySelector(`.pagination-btn[data-page="${currentPage}"]`).classList.add("active");

        document.getElementById("prev-btn").style.display = currentPage === 1 ? "none" : "inline-block";
        document.getElementById("next-btn").style.display = currentPage === totalPages ? "none" : "inline-block";
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

    // Initialize
    loadBlogPosts();
});
