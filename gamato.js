$(document).ready(function(){
	
		var w = window.innerWidth;
		if(w<768){
			console.log(w)
			$('a.nav-link').click(function(){

					var nWidth = $(".sidenav"). attr("value");
					  
					// console.log(nWidth);
					if( nWidth==="reduce" ) {
						 	console.log(nWidth)
						 	$(".sidenav").css({"overflow-x":"visible","width":"100%"});
						 	$(".sidenav").attr('value','expand');
						 	$("#bars").attr('class','fa fa-close');


					}
					else if( nWidth==="expand" ){
						 	$(".sidenav").css({"overflow-x":"hidden","width":"0"});
						 	$(".sidenav").attr('value','reduce');
						 	$("#bars").attr('class','fa fa-bars');


					}	 
	          });
			    $(window).resize(function(){
        			w=window.innerWidth;
        			console.log(w)
    			})
		}	
	    else if (w>768){
	    console.log(w)
		$('a.nav-link').click(function(){

					var nWidth = $(".sidenav"). attr("value");
					  
					// console.log(nWidth);
					if( nWidth==="reduce" ) {
						 	console.log(nWidth)
						 	$(".sidenav").css({"overflow-x":"visible","width":"calc(100% - 80%)"});
						 	$(".sidenav").attr('value','expand');
						 	$("#bars").attr('class','fa fa-close');


					}
					else if( nWidth==="expand" ){
						 	$(".sidenav").css({"overflow-x":"hidden","width":"0"});
						 	$(".sidenav").attr('value','reduce');
						 	$("#bars").attr('class','fa fa-bars');


					}
				$(window).resize(function(){
        			w=window.innerWidth;
        			console.log(w)
    			})	

	});

	}	

});