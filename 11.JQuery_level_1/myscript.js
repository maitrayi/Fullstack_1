// $('h1').click(function(){
//     console.log('There was a click')
// })

// $('li').click(function(){
//     console.log('An li was a clicked !!')
// })

// $('h1').click(function(){
//     $(this).text('I was clicked once')
// })
// $('input').eq(0).keypress(function(){
//     $('h3').toggleClass("turnBlue");
// })

// $('input').eq(0).keypress(function(event){
//     console.log(event);
// })

//key press
// $('input').eq(0).keypress(function(event){
//     if(event.which === 13){
//         $('h3').toggleClass('turnBlue')
//     }
//     console.log(event);
// })

// $('h1').on('dblclick', function(){
//     $(this).toggleClass('turnBlue');

// })
$('h1').on('mouseenter', function(){
    $(this).toggleClass('turnBlue');

})

$('input').eq(1).on('click' , function(){
    $('.container').fadeOut(3000)

})
