var text_four = document.getElementById('text_four')

var line9 = document.getElementById('line9')
var line10 =  document.getElementById('line10')

var link_to_rotatinghuman =  document.getElementById('link_to_rotatinghuman')


TweenLite.from(line9, 1, {
 autoAlpha:0,
 delay:1, 
 ease:Power1.easeIn
})


TweenLite.to(line9, 2, {
 autoAlpha:0,
 delay:5, 
 ease:Power1.easeOut
})


// second line 
TweenLite.from(line10, 1, {
 autoAlpha:0,
 delay:6, 
 ease:Power1.easeIn,
})

TweenLite.to(line10, 1, {
 autoAlpha:0,
 delay:8, 
 ease:Power1.easeOut
})


TweenLite.from(link_to_rotatinghuman, 1, {
 autoAlpha:0,
 delay:9, 
 ease:Power1.easeIn

})