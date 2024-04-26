//  access 5 rating buttons
// acess submit button and go back button

let rating_but = document.querySelectorAll(".button");
let submit_but = document.querySelector("#submitbutton");
let rate_again = document.querySelector("#goback");

// adding the active class to selected button 
// reseting other buttons to normal state
rating_but.forEach((button) => {
      button.addEventListener("click", () => {
            rating_but.forEach((rating_button) => {
                  if (rating_button.classList.contains("active")) {
                        rating_button.classList.remove("active");
                  }
            });

            button.classList.add("active");
      });
});

const rating_section = document.querySelector("#rating");
const thankyou_section = document.querySelector("#id-thankyou");

// toggle the display of rating section and thankyou section : 

submit_but.addEventListener("click", () => {
	console.log("submit")
	rating_section.className += "class-rating";
	
	// now we have to find the selection and pass it to span : 
	let ind = 0;
	for (ind; ind < rating_but.length; ind++){
		if (rating_but[ind].classList.contains("active")) {
			break;
		}
	}

	if (ind == rating_but.length) {
		document.querySelector("#selection").className = "class-rating";
	}
	else document.querySelector("#selection span").innerHTML = rating_but[ind].innerHTML;

      thankyou_section.classList.toggle("class-thankyou");
});


// resetting the states when going back to rating section from thank you section .

rate_again.addEventListener("click", () => {

	// reset the state : 
	for (let ind = 0; ind < rating_but.length; ind++){
		if (rating_but[ind].classList.contains("active")) {
			rating_but[ind].classList.remove("active");
		}
	}

	// adding the span back : 
	if (document.querySelector("#selection").classList.contains("class-rating")) {
		document.querySelector("#selection").classList.remove("class-rating");
	}

      rating_section.classList.remove("class-rating");
      thankyou_section.classList.toggle("class-thankyou");
});
