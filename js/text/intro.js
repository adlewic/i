
// ALL INTRO ANIMATION 
var line0 = document.getElementById('line0')
var line00 = document.getElementById('line00')

var intro = document.getElementById('intro') 
var logo= document.getElementById('logo')

var dream = document.getElementById('dream')
var introduction = document.getElementById('introduction')

var hold = document.getElementById('hold')
var landing_page = document.getElementById('landing')


// scene
var line1 = document.getElementById('line1')
var line2 = document.getElementById('line2')

var dot = document.getElementById('dot')


// introduction 

//line0
TweenLite.from(line0, 2, {
 autoAlpha:0,
 delay:1, 
 ease:Power1.easeIn
})

//line00 
TweenLite.from(line00, 1, {
 autoAlpha:0,
 delay:4,
 ease:Power1.easeIn})


//intro 
TweenLite.to(intro, 2, {
 autoAlpha:0,
 delay:7, 
 ease:Power1.easeOut
})



// logo 
TweenLite.from(logo, 1, {
	autoAlpha:0,
	delay:8, 
	ease:Power1.easeIn
})


// dream
	TweenLite.from(dream, 1, {
	 autoAlpha:0,
	 delay:8.5, 
	 ease:Power1.easeIn
	})

// introduction
	TweenLite.from(introduction, 1, {
	 autoAlpha:0,
	 delay:9, 
	 ease:Power1.easeIn
	})

// HOLD
	// TweenLite.from(dot, 1, {
	//  autoAlpha:0,
	//  delay:, 
	//  ease:Power1.easeIn
	// })








