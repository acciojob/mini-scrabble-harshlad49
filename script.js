window.onload = function () {
    const inputBox = document.getElementById("evaluatedText");
    const output = document.getElementById("letterCount");

    function updateCount() {
        output.innerText = inputBox.value.length;
    }

    inputBox.addEventListener("input", updateCount);

    // Initialize the count on page load
    updateCount();
};

