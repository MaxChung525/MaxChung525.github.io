document.addEventListener("DOMContentLoaded", function () {
    // Typed.js initialization
    var typedElement = document.querySelector(".typed");
    var typedItems = typedElement.getAttribute("data-typed-items").split(", ");

    var options = {
        strings: typedItems,
        typeSpeed: 125,
        backSpeed: 110,
        loop: true,
        cursorChar: "|",
        autoInsertCss: true,
        // Add this line to use Typed.js cursor
        showCursor: true
    };

    new Typed(".typed", options);

    // Remove extra cursor elements
    document.querySelectorAll('.typed-cursor').forEach((cursor, index) => {
        if (index > 0) cursor.remove();
    });

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
    console.log("copyText function called");
    var copyText = "+1 9053927304";

    // Copy the predetermined text to the clipboard
    navigator.clipboard.writeText(copyText).then(() => {
        console.log("Text copied successfully");
        showToast();
    }, (err) => {
        console.error('Could not copy text: ', err);
        alert('Failed to copy text. Please try again.');
    });
}

function showToast() {
    console.log("showToast function called");
    const toast = document.getElementById('toast');
    if (!toast) {
        console.error("Toast element not found");
        return;
    }
    const progress = toast.querySelector(".custom-progress");
    
    toast.style.display = 'block';
    toast.classList.add("active");
    progress.classList.add("active");

    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => {
            toast.style.display = 'none';
        }, 500);
    }, 5000);

    setTimeout(() => {
        progress.classList.remove("active");
    }, 5300);
}
