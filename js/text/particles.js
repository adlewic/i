// scene
var text_one = document.getElementById('text_one')
var line3 = document.getElementById('line1')
var line4 = document.getElementById('line2')
var line5 = document.getElementById('line2_a')
var line6 = document.getElementById('line2_a')
var link_particles = document.getElementById('link_particles')


TweenLite.from(line1, 1, {
 autoAlpha:0,
 delay:1, 
 ease:Power1.easeIn
})

TweenLite.from(line2_a, 1, {
 autoAlpha:0,
 delay:2, 
 ease:Power1.easeIn
})


TweenLite.from(line2, 1, {
 autoAlpha:0,
 delay:3, 
 ease:Power1.easeIn,
 onComplete:onComplete
})

TweenLite.from(link_particles, 1, {
 autoAlpha:0,
 delay:6, 
 ease:Power1.easeIn,
 onComplete:onComplete
})



function onComplete(){
	TweenLite.to(text_one, 2, {
		opacity:0,
		 delay:1, 
		 ease:Power2.easeOut})
}
 



 







