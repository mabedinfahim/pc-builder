
function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener("click", function () {
        updatePrice(updateId, price)
        document.getElementById(clickId).style.backgroundColor = "green";
        document.getElementById(clickId).style.color = "white";
    })
}


onClick("eightGB", "memory-cost", 00)
onClick("sixteenGB", "memory-cost", 200)
onClick("ssd1", "storage-cost", 00)
onClick("ssd2", "storage-cost", 500)
onClick("ssd3", "storage-cost", 1000)
onClick("free-delivery", "delivery-cost", 00)
onClick("paid-delivery", "delivery-cost", 20)

function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPriceValue = document.getElementById("best-price").innerText;
    const memoryCostValue = document.getElementById("memory-cost").innerText;
    const storageCostValue = document.getElementById("storage-cost").innerText;
    const deliveryCostValue = document.getElementById("delivery-cost").innerText;

    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = parseInt(bestPriceValue) + parseInt(memoryCostValue) + parseInt(storageCostValue) + parseInt(deliveryCostValue);
}

document.getElementById("apply-btn").addEventListener("click", function () {
    document.getElementById("apply-btn").style.backgroundColor = "green";
    const promoInput = document.getElementById("promo-input");
    const promoInputValue = promoInput.value;
    const totalPrice = document.getElementById("total-price");
    const totalPriceValue = parseInt(totalPrice.innerText);

    if (promoInputValue === "phero") {
        const discount = (totalPriceValue * 20) / 100;
        totalPrice.innerText = totalPriceValue - discount;
    } else {
        alert("You put wrong promo code")
    }
})