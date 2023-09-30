const toggleBtn = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');
const links = document.querySelector('.links');
let isMenuOpen = false;

toggleBtn.addEventListener('click', function () {
    links.classList.toggle('open');
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        dropDownMenu.style.height = dropDownMenu.scrollHeight + 'px'; // Expand to the full content height
    } else {
        dropDownMenu.style.height = '0'; // Close the menu
    }
});

// Reset menu height when window is resized
window.addEventListener('resize', function () {
    if (!isMenuOpen) {
        dropDownMenu.style.height = '0';
    } else {
        dropDownMenu.style.height = dropDownMenu.scrollHeight + 'px';
    }
});

$(document).ready(function () {
    // Initialize Isotope
    var $grid = $('.menu-container').isotope({
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
    });

    // Filter items on button click
    $('#menu-flters').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Add active class to filter button
    $('#menu-flters').on('click', 'li', function () {
        $(this).addClass('filter-active').siblings().removeClass('filter-active');
    });
});
