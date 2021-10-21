/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */

$(window).on('load', function(){
    $('#preloader').delay(500).fadeOut('slow'); 
    
    /*Team Section*/
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
        nav: true,
        navText: ['<i class="lni lni-chevron-left-circle"></i>', '<i class="lni lni-chevron-right-circle"></i>'],
        dots: false,
        smartSpeed: 700,
        margin: 20
    });
    
    /*Progress Bar*/
    $("#progress-elements").waypoint(function() {
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow")+"%"
            }, 800);
        });
        
        this.destroy(); //deletes the waypoint object binded with progress-elem,ents
        // so that it only animates once.
    }, {
        offset: 'bottom-in-view'
    });
    
    $("#reviews").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        nav: true,
        navText: ['<i class="lni lni-chevron-left-circle"></i>', '<i class="lni lni-chevron-right-circle"></i>'],
        dots: false,
        smartSpeed: 700
    });
    
    $("#client-logos").owlCarousel({
       items: 6,
        autoplay: false,
        loop: true,
        nav: true,
        navText: ['<i class="lni lni-chevron-left-circle"></i>', '<i class="lni lni-chevron-right-circle"></i>'],
        dots: false,
        smartSpeed: 700,
        margin: 50
        
    });
});
/*Handles hover for PRICE-BTN */
$('.price-btn a').mouseenter(e => {
    e.target.style.background = '#000';
    e.target.style.color = '#FFF';
});
$('.price-btn a').mouseleave(e => {
    e.target.style.background = '#FFF';
    e.target.style.color = '#333';
});
/*Handles hover for BASIC price-card*/
$("#basic").mouseenter(e => {
    $("#basic h2").css({
        'color': '#FFF'
    });
    $("#basic").css({
        'background': '#5C9320',
        'color': '#FFF'
    });
    $("#basic .price-btn a").css({
       'background': '#FFF',
        'color': '#333'
    });
});
$("#basic").mouseleave(e => {
    $("#basic h2").css({
        'color': '#5C9320'
    });
    $("#basic").css({
        'background': '#FFF',
        'color': '#333'
    });
    $("#basic .price-btn a").css({
       'background': '#5C9320',
        'color': '#FFF'
    });
});

/*Handles hover for UNLIMITED price-card*/
$("#unlimited").mouseenter(e => {
    $("#unlimited h2").css({
        'color': '#FFF'
    });
    $("#unlimited").css({
        'background': '#5C9320',
        'color': '#FFF'
    });
    $("#unlimited .price-btn a").css({
       'background': '#FFF',
        'color': '#333'
    });
});
$("#unlimited").mouseleave(e => {
    $("#unlimited h2").css({
        'color': '#FFF'
    });
    $("#unlimited").css({
        'background': '#333',
        'color': '#FFF'
    });
    $("#unlimited .price-btn a").css({
       'background': '#FFF',
        'color': '#333'
    });
});

/*Handles hover for PROFESSIONAL price-card*/
$("#professional").mouseenter(e => {
    $("#professional h2").css({
        'color': '#FFF'
    });
    $("#professional").css({
        'background': '#5C9320',
        'color': '#FFF'
    });
    $("#professional .price-btn a").css({
       'background': '#FFF',
        'color': '#333'
    });
});
$("#professional").mouseleave(e => {
    $("#professional h2").css({
        'color': '#5C9320'
    });
    $("#professional").css({
        'background': '#FFF',
        'color': '#333'
    });
    $("#professional .price-btn a").css({
       'background': '#5C9320',
        'color': '#FFF'
    });
});

/* Services Section */
$('#services-tabs').responsiveTabs({
    animation: 'slide',
});

/* Portfolio Section */
$('#isotope-container').isotope({
    filter: '*'
});

$('#isotope-filters').on('click', 'button', function(){
   // get the filter value
    let filterValue = $(this).attr('data-filter');
    
    $('#isotope-container').isotope({
        filter: filterValue
    });
        
    $('#isotope-filters').find('.active').removeClass('active');
    
    $(this).addClass('active');
});

$('#portfolio-wrapper').magnificPopup({
    delegate: 'a' , // child items selector , by clicking it ,popup will open 
    type: 'image',
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
    },
    zoom: {
        enabled: true,
        duration: 300, // don't forget to change duration in CSS
        opener: function(element){
            return element.find('img');
        }
         
    }
});

