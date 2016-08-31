var line13 = document.getElementById('line13')
var line14 = document.getElementById('line14')
var line15 = document.getElementById('line15')

var text_five = document.getElementById('text_five')

var line16 = document.getElementById('line16')
var line17 = document.getElementById('line17')

var logo_end = document.getElementById('logo_end')
var final_text = document.getElementById('final_text')

var ThreeJS_final = document.getElementById('ThreeJS_final')


TweenLite.from(line13, 1, {
 autoAlpha:0,
 delay:1, 
 ease:Power1.easeIn
})

TweenLite.to(line13, 2, {
 autoAlpha:0,
 delay:4, 
 ease:Power1.easeOut
})

/////

TweenLite.from(line14, 1, {
 autoAlpha:0,
 delay:5, 
 ease:Power1.easeIn
})

TweenLite.to(line14, 1, {
 autoAlpha:0,
 delay:7, 
 ease:Power1.easeOut
})

/////

TweenLite.from(line15, 2, {
 autoAlpha:0,
 delay:8, 
 ease:Power1.easeIn
})

TweenLite.to(line15, 2, {
 autoAlpha:0,
 delay:11, 
 ease:Power1.easeOut
})

/////

TweenLite.from(line16, 2, {
 autoAlpha:0,
 delay:12, 
 ease:Power1.easeIn
})

/////
TweenLite.from(line17, 2, {
 autoAlpha:0,
 delay:13, 
 ease:Power1.easeIn,
})


// fade_out: I was the man 
TweenLite.to(text_five, 2, {
 autoAlpha:0,
 delay:17, 
 ease:Power1.easeOut,
})


//logo
TweenLite.from(logo_end, 2, {
 autoAlpha:0,
 delay:18, 
 ease:Power1.easeIn,

})

//final text 
TweenLite.from(final_text, 2, {
 autoAlpha:0,
 delay:19, 
 ease:Power1.easeIn,
})



// ThreeJS_final
TweenLite.from(ThreeJS_final, 2, {
 autoAlpha:0,
 delay:1, 
 ease:Power1.easeIn
})

TweenLite.to(ThreeJS_final, 2, {
 autoAlpha:0,
 delay:15, 
 ease:Power1.easeIn
})







