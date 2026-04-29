// =====================================================
//  RAMULI LUXURY HOTEL - Restaurant JavaScript
//  This file controls the menu filter, search, and cart
//  Written in simple, beginner-friendly style
// =====================================================


// -------------------------------------------------------
// STEP 1: CART SETUP
// We use an array to store items the user adds.
// An array is like a list — it can hold many items.
// -------------------------------------------------------

var cart = [];   // This is our cart — starts empty


// -------------------------------------------------------
// STEP 2: ADD ITEM TO CART
// This function runs when the user clicks "+ Add"
// It receives the dish name and its price as inputs
// -------------------------------------------------------

function addToCart(dishName, dishPrice) {

    // Check if this dish is already in the cart
    var found = false;

    // Loop through every item in the cart to check
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].name === dishName) {
            // Dish already exists — just increase the quantity
            cart[i].qty = cart[i].qty + 1;
            found = true;
            break;  // Stop searching — we already found it
        }
    }

    // If the dish was NOT found in the cart, add it as a new item
    if (found === false) {
        var newItem = {
            name: dishName,
            price: dishPrice,
            qty: 1           // quantity starts at 1
        };
        cart.push(newItem);  // push() adds a new item to the end of the array
    }

    // After updating the cart, refresh what is shown on screen
    updateCartDisplay();

    // Show a small message to the user
    showAddedMessage(dishName);
}


// -------------------------------------------------------
// STEP 3: REMOVE ITEM FROM CART
// This function runs when the user clicks "✕" on a cart item
// -------------------------------------------------------

function removeFromCart(dishName) {

    // We use filter() to create a NEW array that does NOT include this dish
    // filter() keeps items where the condition is true
    cart = cart.filter(function(item) {
        return item.name !== dishName;   // keep items that are NOT this dish
    });

    // Refresh the display after removing
    updateCartDisplay();
}


// -------------------------------------------------------
// STEP 4: UPDATE CART DISPLAY ON SCREEN
// This function shows the current cart items and total
// -------------------------------------------------------

function updateCartDisplay() {

    // Get the HTML elements we want to update
    var cartSection = document.getElementById("cartSection");
    var cartItemsDiv = document.getElementById("cartItems");
    var cartTotalDiv = document.getElementById("cartTotal");

    // If cart is empty, hide the whole cart section
    if (cart.length === 0) {
        cartSection.style.display = "none";
        return;  // stop the function here
    }

    // Cart has items — show the cart section
    cartSection.style.display = "block";

    // Build the HTML for each item in the cart
    var cartHTML = "";   // start with an empty string

    var total = 0;   // we will add up all prices here

    // Loop through each item in the cart
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemTotal = item.price * item.qty;   // price x quantity
        total = total + itemTotal;               // add to overall total

        // Add this item's HTML to our string
        cartHTML = cartHTML + '<div class="cart-item">'
            + '<span>' + item.name + ' x' + item.qty + '</span>'
            + '<span>₹' + itemTotal + '</span>'
            + '<button class="remove-btn" onclick="removeFromCart(\'' + item.name + '\')">✕</button>'
            + '</div>';
    }

    // Put the built HTML into the cart items container
    cartItemsDiv.innerHTML = cartHTML;

    // Show the total price
    cartTotalDiv.innerHTML = "Total: ₹" + total;
}


// -------------------------------------------------------
// STEP 5: PLACE ORDER
// This runs when user clicks "Place Order"
// -------------------------------------------------------

function placeOrder() {

    if (cart.length === 0) {
        alert("Your cart is empty! Please add some dishes first.");
        return;
    }

    // Build a simple order summary
    var summary = "✅ Order Placed!\n\nYour Order:\n";

    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemTotal = item.price * item.qty;
        total = total + itemTotal;
        summary = summary + "• " + item.name + " x" + item.qty + " = ₹" + itemTotal + "\n";
    }

    summary = summary + "\nTotal: ₹" + total;
    summary = summary + "\n\nThank you! Your food will be delivered to your room shortly. 🍽️";

    alert(summary);

    // Clear the cart after ordering
    cart = [];
    updateCartDisplay();
}


// -------------------------------------------------------
// STEP 6: SHOW "ADDED!" MESSAGE
// This gives a quick visual feedback when a dish is added
// -------------------------------------------------------

function showAddedMessage(dishName) {
    // Create a small popup message
    var msg = document.createElement("div");
    msg.innerHTML = "✅ " + dishName + " added to cart!";

    // Style the popup
    msg.style.position = "fixed";
    msg.style.bottom = "30px";
    msg.style.right = "30px";
    msg.style.background = "rgb(75, 15, 26)";
    msg.style.color = "gold";
    msg.style.padding = "12px 20px";
    msg.style.borderRadius = "10px";
    msg.style.fontWeight = "bold";
    msg.style.zIndex = "999";
    msg.style.boxShadow = "0px 0px 15px rgba(0,0,0,0.4)";
    msg.style.transition = "opacity 0.5s";

    // Add it to the page
    document.body.appendChild(msg);

    // After 2 seconds, make it fade out and then remove it
    setTimeout(function() {
        msg.style.opacity = "0";

        // After fade, remove the element completely
        setTimeout(function() {
            document.body.removeChild(msg);
        }, 500);

    }, 2000);
}


// -------------------------------------------------------
// STEP 7: FILTER MENU BY CATEGORY
// This shows only the dishes matching the selected category
// -------------------------------------------------------

function filterMenu(category, clickedButton) {

    // First, update which button looks "active"
    var allButtons = document.querySelectorAll(".filter-btn");

    // Remove "active" class from all buttons
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("active");
    }

    // Add "active" class to the button that was clicked
    clickedButton.classList.add("active");

    // Get all dish cards
    var allCards = document.querySelectorAll(".dish-card");

    var visibleCount = 0;   // count how many cards are visible

    // Loop through every card
    for (var i = 0; i < allCards.length; i++) {
        var card = allCards[i];
        var cardCategory = card.getAttribute("data-category");   // read the category from HTML

        if (category === "all") {
            // Show all cards
            card.style.display = "flex";
            visibleCount++;
        } else if (cardCategory === category) {
            // Show only matching cards
            card.style.display = "flex";
            visibleCount++;
        } else {
            // Hide cards that don't match
            card.style.display = "none";
        }
    }

    // Show or hide the "no results" message
    var noResults = document.getElementById("noResults");
    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

    // Also clear the search input when switching categories
    document.getElementById("searchInput").value = "";
}


// -------------------------------------------------------
// STEP 8: SEARCH DISHES
// This runs every time the user types in the search box
// -------------------------------------------------------

function searchDishes() {

    // Get what the user typed, and make it lowercase for easy comparison
    var searchText = document.getElementById("searchInput").value.toLowerCase();

    // Get all dish cards
    var allCards = document.querySelectorAll(".dish-card");

    var visibleCount = 0;

    // Loop through each card and check if the name matches the search
    for (var i = 0; i < allCards.length; i++) {
        var card = allCards[i];
        var dishName = card.getAttribute("data-name").toLowerCase();   // read dish name

        if (dishName.includes(searchText)) {
            // Show this card — the name contains what was typed
            card.style.display = "flex";
            visibleCount++;
        } else {
            // Hide it — doesn't match
            card.style.display = "none";
        }
    }

    // Show or hide "no results" message
    var noResults = document.getElementById("noResults");
    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

    // Reset filter buttons to none active when searching
    var allButtons = document.querySelectorAll(".filter-btn");
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove("active");
    }
}
