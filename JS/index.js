alert('index.js');
import getDateString from './date.js';
import image from '../images/image.jpeg';
import $ from 'jquery';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';


$(document).ready(() => {

    // Print the current time

    $('.js-content').html(`<i class="fas fa-clock"></i> ${ getDateString()}`);

    // Display the image

    $('<img />')
        .attr('src', image)
        .attr('alt', 'Always provide a descriptive alt text.')
        .appendTo('body');

    // Display the Bootstrap modal window

    $('.js-modal').modal({
        show: true,
        keyboard: true
    });



});