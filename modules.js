$(document).ready(function () {
    const toggleBtn = $('.toggle_btn');
    const navbar = $('.navbar');

    toggleBtn.on('click', function () {
        navbar.toggleClass('open');
        if (navbar.hasClass('open')) {
            // Dropdown is open, bring content down
            $('body').css('marginTop', navbar.height() + 'px');
        } else {
            // Dropdown is closed, reset content position
            $('body').css('marginTop', '0');
        }
    });

    // Toggle the dropdown when clicking on the menu icon
    $('.dropdown_menu').on('click', function () {
        navbar.toggleClass('open');
        if (navbar.hasClass('open')) {
            // Dropdown is open, bring content down
            $('body').css('marginTop', navbar.height() + 'px');
        } else {
            // Dropdown is closed, reset content position
            $('body').css('marginTop', '0');
        }
    });
});

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