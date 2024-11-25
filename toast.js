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
