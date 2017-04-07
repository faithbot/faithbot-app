// tabbed panels
// declare globals to hold all the links and all the panel elements
var tabLinks;
var tabPanels; 

window.onload = function() {
	// when the page loads, get the li elements
	tabLinks = document.getElementById("tabs").getElementsByTagName("li");
	// get all the tab panel container divs
	tabPanels = document.getElementById("containers").getElementsByTagName("div");

	// activate the first one
	displayPanel(tabLinks[0]);

	// attache event listener to links for onclick and onfocus, run the displayPanel function and return false to disable the linking function
	for (var i = 0; i < tabLinks.length; i++) {
		tabLinks[i].onclick = function() {
			displayPanel(this);
			return false;
		}
		tabLinks[i].onfocus = function() {
			displayPanel(this);
			return false;
		}
	}
}

function displayPanel(tabToActivate) {
	// go through all the li elements
	for (var i = 0; i < tabLinks.length; i++) {
		if (tabLinks [i] == tabToActivate) {
			// if its the one to activate, change its class
			tabLinks[i].classList.add("active");
			// display the activated panel
			tabPanels[i].style.display ="block";
		} else {
			// remove active class on non-active tabs
			tabLinks[i].classList.remove("active");
			// hide the non-active panel
			tabPanels[i].style.display = "none";
		}
	}
}