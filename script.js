const form = document.getElementById("orderForm");
const message = document.getElementById("message");
const summary = document.getElementById("summary");

const prices = {
    Fish: 10,
    Shrimp: 15,
    Crab: 20
};

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;

    message.textContent = "";
    summary.textContent = "";

    // Input Validation
    if (name === "" || food === "" || quantity === "") {
        message.textContent = "❌ Please fill all fields";
        return;
    }

    if (quantity <= 0) {
        message.textContent = "❌ Quantity must be greater than zero";
        return;
    }

    // Calculation
    const total = prices[food] * quantity;

    // DOM Update
    summary.textContent =
        `Hello ${name}, you ordered ${quantity} ${food}(s).
         Total Price: $${total}`;
});