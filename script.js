window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
