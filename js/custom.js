/*global $, alert, console*/

$(function () {
    
    'use strict';
    
    $('html').niceScroll({
        
        cursorcolor: '#1abc9c',
        cursorwidth: 8,
        cursorborder: '1px solid #1abc9c'
        
    });
    
    // Adjust Header Height
    
    var myHeader = $('.header');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
    });
    
    // Links Add Active Class

    
    $(document).ready(function () {
        $('.menu').click(function () {
            $('.links').toggleClass('active');
        });
    });

});