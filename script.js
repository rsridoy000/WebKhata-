function hideAllPaymentOptions(exceptId = null) {
    document.querySelectorAll(".payment-options").forEach(function (option) {
        if (option.id !== exceptId) {
            option.style.display = "none";
        }
    });
}


document.getElementById("payBtn1").addEventListener("click", function () {
    togglePaymentOption("paymentOptions1");
});

document.getElementById("payBtn2").addEventListener("click", function () {
    togglePaymentOption("paymentOptions2");
});

document.getElementById("payBtn3").addEventListener("click", function () {
    togglePaymentOption("paymentOptions3");
});


function togglePaymentOption(optionId) {
    let option = document.getElementById(optionId);
    
    if (option.style.display === "block") {
        option.style.display = "none";
    } else {
        hideAllPaymentOptions(optionId); 
        option.style.display = "block"; 
    }
}


function payWith(method) {
    alert(method + " পেমেন্ট গেটওয়ে লোড হচ্ছে...");
}


