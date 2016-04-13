$(document).ready(function() {
	$(".galleriesMain").click(galleriesToggle);
	$('.nextButton').click(nextImage);
	$('.prevButton').click(prevImage);
	var timer= setInterval(myTimer, 7000);
	$('.hamburger').click(toggleNav);

	var carousel = ['Pacific/Northwest_log','Texas/Texas_car2','Rhine/Rhine_bridge']

	var imageIndex=0;

	function galleriesToggle(){
		$(".galleries").toggle();
	}

	function nextImage(){
		imageIndex++;
		if(imageIndex===carousel.length){
			imageIndex=0;
		}
		var imagePath="images/"+carousel[imageIndex] +'.jpg';
		$('.imageMain').attr('src',imagePath);
		clearInterval(timer);
		timer=setInterval(myTimer, 7000);
		

	}

	function prevImage(){
		imageIndex--;
		if(imageIndex===-1){
			imageIndex=carousel.length-1;
		}
		var imagePath="images/"+carousel[imageIndex] +'.jpg';
		$('.imageMain').attr('src',imagePath);
		clearInterval(timer);
		timer=setInterval(myTimer, 7000);

	}

	function myTimer(){
		imageIndex++;
		if(imageIndex===carousel.length){
			imageIndex=0;
		}
		var imagePath="images/"+carousel[imageIndex] +'.jpg';
		$('.imageMain').attr('src',imagePath);
		


	}


	function toggleNav(){
		$('.navigation').toggle();
	}




});