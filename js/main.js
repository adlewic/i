 $(document).ready(function() {


    $("#introduction").addClass('animated fadeIn')








// logo animation fade IN 
    $("#i").addClass('animated fadeIn')
    $("#dreamed").addClass('animated fadeIn')
    $("#me").addClass('animated fadeIn')

// intro elements fade IN 
    $("#galaxy").addClass('animated fadeIn')
    $("#dream").addClass('animated fadeIn')
    $("#hold").addClass('animated fadeIn')


//--------------------- keydown event -----------------------------
$("body").on("keydown", function(e){
    var code = e.keyCode;
    if (code == 32){         						// space-bar code
    	

// animation letter-spacing
        $("#dream").css("letter-spacing","20px");
        $("#hold").css("letter-spacing","10px");
    	

// fade OUT 
    $("#logo").addClass('animated fadeOut')
    $("#dream").addClass('animated fadeOut')
    $("#hold").addClass('animated fadeOut')



// scene 1 ---- fade IN 
    $("#scene1").css('display', 'unset')
    $("#last").addClass('animated fadeIn')
    $("#Ii").addClass('animated fadeIn')
    $("#dreamedd").addClass('animated fadeIn')


        console.log("hold SPACE BAR ") 	
    }  
})


})/////END 




// scene 2 ---- fade IN 

$("#scene1").on("keydown", function(e){
    var code = e.keyCode;
    if (code == 32){        
                            // space-bar code
        console.log("scene1 HOLDINGGG")     
        }  


})




$("body").on("keyup", function(e){
    var code = e.keyCode;
    if (code == 32){                                // space-bar code
        $("#dream").css("letter-spacing","5px");



        console.log("not holding ")     
        }  
})
