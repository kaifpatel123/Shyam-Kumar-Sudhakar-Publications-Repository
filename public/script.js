window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}
function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navbar').classList.remove('show');
  });
});
