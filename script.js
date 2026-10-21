const products = [
    {
        name: "Apples",
        category: "Fruits",
        price: 120,
        vendor: "Fresh Fruit Shop",
        emoji: "🍎"
    },
    {
        name: "Bananas",
        category: "Fruits",
        price: 50,
        vendor: "Green Basket",
        emoji: "🍌"
    },
    {
        name: "Tomatoes",
        category: "Vegetables",
        price: 40,
        vendor: "Local Vegetable Shop",
        emoji: "🍅"
    },
    {
        name: "Carrots",
        category: "Vegetables",
        price: 60,
        vendor: "Fresh Farm",
        emoji: "🥕"
    },
    {
        name: "Spinach",
        category: "Vegetables",
        price: 25,
        vendor: "Green Basket",
        emoji: "🥬"
    }
];

const productList = document.getElementById("productList");
const search = document.getElementById("search");

function displayProducts(items) {
    productList.innerHTML = "";

    if (items.length === 0) {
        productList.textContent = "No products found.";
        return;
    }

    items.forEach(function(product) {
        const card = document.createElement("div");
        card.className = "card";

        const emoji = document.createElement("div");
        emoji.className = "emoji";
        emoji.textContent = product.emoji;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const category = document.createElement("p");
        category.textContent = product.category;

        const price = document.createElement("p");
        price.className = "price";
        price.textContent = "₹" + product.price;

        const vendor = document.createElement("p");
        vendor.textContent = "Sold by: " + product.vendor;

        card.append(emoji, name, category, price, vendor);
        productList.appendChild(card);
    });
}

// Search products
search.addEventListener("input", function() {
    const query = search.value.toLowerCase();

    const filtered = products.filter(function(product) {
        return (
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
    });

    displayProducts(filtered);
});

// Add a new product
document.getElementById("productForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const category = document.getElementById("category").value;
        const price = Number(document.getElementById("price").value);
        const vendor = document.getElementById("vendor").value.trim();

        if (!name || !vendor || price <= 0) {
            alert("Please enter valid product details.");
            return;
        }

        const emoji = category === "Fruits" ? "🍎" : "🥦";

        products.push({
            name: name,
            category: category,
            price: price,
            vendor: vendor,
            emoji: emoji
        });

        displayProducts(products);
        this.reset();

        alert("Product added successfully!");
    });

// Display initial products
displayProducts(products);
