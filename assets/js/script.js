// Real Days 
document.addEventListener("DOMContentLoaded", function() {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

    let now = new Date();
    let dayName = days[now.getDay()];
    let formattedDate = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    document.getElementById("currentDay").textContent = dayName;
    document.getElementById("currentDate").textContent = formattedDate;
});

// Button Click
function mysearch() {
    document.body.classList.toggle('opensearch');
}
function mymenu() {
    document.body.classList.toggle('openmenu');
}
function mysidebar() {
    document.body.classList.toggle('openbar');
}
function myshare() {
    document.body.classList.toggle('openshare');
}
var buttons = document.getElementsByClassName("menu-item-has-children");
[].forEach.call(buttons, function(el) {
    el.addEventListener("click", function(event) {
        // Mencegah event bubbling untuk menghindari penutupan elemen induk
        event.stopPropagation();

        // Toggle class 'active' hanya pada elemen yang diklik
        this.classList.toggle("active");

        // Menutup semua sibling dari elemen yang diklik
        var siblings = Array.from(el.parentElement.children).filter(function(child) {
            return child !== el;
        });

        siblings.forEach(function(sibling) {
            sibling.classList.remove("active");
        });
    });
});
function toggleClassBasedOnWidth() {
    var accords = document.getElementById('ndesomenus');
    if (window.innerWidth > 1024) {
        accords.classList.remove('accordion');
        accords.classList.add('deskmenu');
    } else {
        accords.classList.add('accordion');
        accords.classList.remove('deskmenu');
    }
}
window.addEventListener('load', toggleClassBasedOnWidth);
window.addEventListener('resize', toggleClassBasedOnWidth);

document.querySelectorAll(".text-truncate").forEach(el => {
    let maxLength = 25;
    if (el.innerText.length > maxLength) {
        el.innerText = el.innerText.substring(0, maxLength) + "...";
    }
});