$(document).ready(function() {
	// Listen to click for galleries title in nav menu
	$(".galleriesMain").click(galleriesToggle);
	// Listen to carousel button clicks on main page
	$('.nextButton').click(nextImage);
	$('.prevButton').click(prevImage);
	// Set timer for carousel
	var timer= setInterval(myTimer, 7000);
	//Listen for hamburger click
	$('.hamburger').click(toggleNav);
	//Listen for click on submit button in contact form
	$('.sendButton').click(submitForm);
	

	
	//Set of array of images for main page carousel
	var carousel = ['Pacific/Northwest_log','Texas/Texas_car2','Rhine/Rhine_bridge']

	//Set index to keep track of current carousel picture
	var imageIndex=0;

	//Show/Hide subcategories for gallery on nav menu
	function galleriesToggle(){
		$(".galleries").toggle();
	}

	//Move to the next carousel image
	function nextImage(){
		imageIndex++;
		//If last carousel image, return to first image
		if(imageIndex===carousel.length){
			imageIndex=0;
		}
		var imagePath="images/"+carousel[imageIndex] +'.jpg';
		$('.imageMain').attr('src',imagePath);
		//Restart timer
		clearInterval(timer);
		timer=setInterval(myTimer, 7000);
		

	}

	//Move to the previous carousel image
	function prevImage(){
		imageIndex--;
		//If first carousel image, move to last image
		if(imageIndex===-1){
			imageIndex=carousel.length-1;
		}
		var imagePath="images/"+carousel[imageIndex] +'.jpg';
		$('.imageMain').attr('src',imagePath);
		//Clear and reset timer
		clearInterval(timer);
		timer=setInterval(myTimer, 7000);

	}

	//Move to next carousel imaage after certain period of time
	function myTimer(){
		imageIndex++;
		if(imageIndex===carousel.length){
			imageIndex=0;
		}
		var imagePath="images/"+carousel[imageIndex] +'.jpg';
		$('.imageMain').attr('src',imagePath);
		


	}

	//Toggle showing the navigation menu
	function toggleNav(){
		$('.navigation').toggle();
	}

	//Validation of form content
	function submitForm(){

		//Retrieve current form content
		var name = $('input[name="username"]').val();
		var email = $('input[name="email"]').val();
		
		//Return error or success messages
		console.log('message');
		if(name===''){
			alert('Please enter a name.');

		}

		else if(email.indexOf("@")===-1){
			alert('Please enter a valid email address');

		}

		

		else{
			alert('Email sent. I will reply to you shortly!');
		}
	}




});