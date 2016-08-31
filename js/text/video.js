// text_two
var text_two = document.getElementById('text_two')
var the = document.getElementById('line3')
var little = document.getElementById('line4')
var details = document.getElementById('line5')

// text_three
var text_three = document.getElementById('text_three')
var but = document.getElementById('line6')
var always = document.getElementById('line7')
var same = document.getElementById('line8')


var dot_three = document.getElementById('dot_three')




TweenLite.from(the, 1, {
 autoAlpha:0,
 delay:1, 
 ease:Power1.easeIn
})

TweenLite.from(little, 1, {
 autoAlpha:0,
 delay:1.5, 
 ease:Power1.easeIn
})

TweenLite.from(details, 1, {
 autoAlpha:0,
 delay:2, 
 ease:Power1.easeIn
})



TweenLite.to(text_two, 1, {
 autoAlpha:0,
 delay:5, 
 ease:Power1.easeOut
})


TweenLite.from(but, 1, {
 autoAlpha:0,
 delay:5, 
 ease:Power1.easeIn,
})

TweenLite.from(always, 1, {
 autoAlpha:0,
 delay:6, 
 ease:Power1.easeIn,
})

TweenLite.from(same, 1, {
 autoAlpha:0,
 delay:7, 
 ease:Power1.easeIn
})






TweenLite.from(dot_three, 1, {
 autoAlpha:0,
 delay:10, 
 ease:Power1.easeIn,
})





 
