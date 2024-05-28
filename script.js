// Saista HTML elementus ar JavaScript
const sakumsLink = document.getElementById("sakums-link");
const pakalpojumiLink = document.getElementById("pakalpojumi-link");
const parMumsLink = document.getElementById("par-mums-link");
const kontaktiLink = document.getElementById("kontakti-link");
const kontaktiSection = document.getElementById("kontakti-section");
const parMumsSection = document.getElementById("par-mums-section");
const pakalpojumiSection = document.getElementById("pakalpojumi-section");

sakumsLink.addEventListener("click", function(event) {
    event.preventDefault();
    kontaktiSection.style.display = "none";
    parMumsSection.style.display = "none";
    pakalpojumiSection.style.display = "none";
});

pakalpojumiLink.addEventListener("click", function(event) {
    event.preventDefault();
    kontaktiSection.style.display = "none";
    parMumsSection.style.display = "none";
    pakalpojumiSection.style.display = "block";
});

parMumsLink.addEventListener("click", function(event) {
    event.preventDefault();
    kontaktiSection.style.display = "none";
    parMumsSection.style.display = "block";
    pakalpojumiSection.style.display = "none";
});

kontaktiLink.addEventListener("click", function(event) {
    event.preventDefault();
    kontaktiSection.style.display = "block";
    parMumsSection.style.display = "none";
    pakalpojumiSection.style.display = "none";
});

// Rest of your existing script.js content
// ...
