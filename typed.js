document.addEventListener("DOMContentLoaded", function () {
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


    // call nav bar when page small 
    const headerToggleBtn = document.querySelector('.header-toggle');

    function headerToggle() {
        document.querySelector('#header').classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
    }
    headerToggleBtn.addEventListener('click', headerToggle);


    
    // function paste() {

    //     navigator.clipboard.writeText("(905)-616-3985");

    // }

    function copyText() {
        // Get the div element
        var divElement = document.getElementById("copytextid");
      
        // Create a range object
        var range = document.createRange();
      
        // Select the contents of the div element
        range.selectNode(divElement);
      
        // Add the range to the user's selection
        window.getSelection().addRange(range);
      
        // Copy the selected text to the clipboard
        document.execCommand("copy");
      
        // Give a visual feedback to the user that the text has been copied
        alert("Text has been copied!");
      }
    



});
