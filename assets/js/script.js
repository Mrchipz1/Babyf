(function() {
    'use strict';
    jQuery(document).ready(function() {

    $.browserDetection(true);

    $('.active-slider').owlCarousel({
        nav: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        dot: true,
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }

    });

    
    
})();

jQuery(function($) {
    "use strict";
    $.browserDetection(true);

    $('.active-slider').owlCarousel({
        nav: true,
        navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
        dot: true,
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }

    });

    $('.main-menu nav, nav.main-menu').meanmenu({
        meanMenuContainer: '.mobile-thum',
        meanScreenWidth: '1199',
        meanRevealPosition: 'right'
    });

   
    })();

});


(function() {
    'use strict';
    jQuery(document).ready(function() {
        
        AOS.init();

        var marqueePosition = localStorage.getItem('marqueePosition') || 1000;
        $('#marqueeOne').marquee({
            duration: 14000,
            gap: 40,
            delayBeforeStart: 0,
            direction: 'left', 
            duplicated: false,
            startVisible: true
        });

        $('#marqueeOne').on('finished', function() {
            localStorage.setItem('marqueePosition', $('#marqueeOne').data('currentPosition'));
        });

        $('#marqueeTwo').marquee({
            duration: 1500,
            gap: 40,
            delayBeforeStart: 0,
            direction: 'right', 
            duplicated: false,
            startVisible: true
        });

        $('#marqueeTwo').on('finished', function() {
            localStorage.setItem('marqueePosition', $('#marqueeTwo').data('currentPosition'));
        });
    });


})();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('copyButton').addEventListener('click', handleCopyToClipboard);
});

function handleCopyToClipboard() {
    var textToCopy = document.getElementById('textToCopy').innerText;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy)
            .then(function() {
                // Change the display of the copy and checked icons
                var copyIcon = document.querySelector('.copy');
                var checkedIcon = document.querySelector('.checked');
                copyIcon.style.display = 'none';
                checkedIcon.style.display = 'inline';

                // After 2 seconds, revert back to the original icon
                setTimeout(function() {
                    copyIcon.style.display = 'inline';
                    checkedIcon.style.display = 'none';
                }, 2000);
            })
            .catch(function(err) {
                console.error('Failed to copy to clipboard: ', err);
            });
    } else {
        console.error('Clipboard API not supported');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.heading-toggler');
    const offCanvasMenu = document.querySelector('.heading-offCanvas');
    
    toggler.addEventListener('click', function() {
        offCanvasMenu.classList.toggle('show');
    });
});