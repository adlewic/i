var line11 = document.getElementById('line11')
var line12 = document.getElementById('line12')
var dot_five = document.getElementById('dot_five')

TweenLite.from(line11, 1, {
 autoAlpha:0,
 delay:1, 
 ease:Power1.easeIn
})


TweenLite.to(line11, 1, {
 autoAlpha:0,
 delay:4, 
 ease:Power1.easeOut
})

///
TweenLite.from(line12, 1, {
 autoAlpha:0,
 delay:5, 
 ease:Power1.easeIn
})


TweenLite.to(line12, 1, {
 autoAlpha:0,
 delay:7, 
 ease:Power1.easeOut
})



TweenLite.from(dot_five, 1, {
 autoAlpha:0,
 delay:8, 
 ease:Power1.easeIn
})

