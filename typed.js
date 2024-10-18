document.addEventListener("DOMContentLoaded", function () {
    // Typed.js initialization
    var typedElement = document.querySelector(".typed");
    var typedItems = typedElement.getAttribute("data-typed-items").split(", ");

    var options = {
        strings: typedItems,
        typeSpeed: 125,
        backSpeed: 50,
        loop: true,
        cursorChar: "|",
        autoInsertCss: true
    };

    new Typed(".typed", options);

    // Header toggle functionality
    const headerToggleBtn = document.querySelector('.header-toggle');

    function headerToggle() {
        document.querySelector('#header').classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
    }

    headerToggleBtn.addEventListener('click', headerToggle);
});

// Keep the copyText function outside if it's used elsewhere
function copyText() {
    var copyText = "+1 9053927304";

    // Copy the predetermined text to the clipboard
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the copied text
        alert("Copied the text: " + copyText);
    }, (err) => {
        console.error('Could not copy text: ', err);
    });

    alert("Text has been copied!");
}
