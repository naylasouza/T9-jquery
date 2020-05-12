$(document).ready(function() {

$('h1').css('color', 'red')
$('h1').css('font-size', '50px')
$('h1').hide();
$('h1').delay('2000');
$('h1').fadeIn('slow');
$('h1').text('olar galere')
//ouu
// $('h1')
//     .css('color', '#f66')
//     .hide()
//     .delay('5000')
//     .fadeIn('slow')
//     .text('olar galere')

$('.item1').click(function() {
    $('body').css('background', 'blue')
    $('h1').css('color', "#fff")

});

$('li').css({
    color: '#000',
    display: 'flex',
    padding: '20px',
})


$('#item2').css('color', 'yellow')


})