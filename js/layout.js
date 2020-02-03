var	aboutDiv;
var header;
var	closeButton;
var	openButton;

var pageName = document.body.id;

function initializeElements(){
	aboutDiv = document.getElementById("about-content");
	header = document.getElementById(pageName+"-header");
	closeButton = document.getElementById(pageName+"-close-button");
	openButton = document.getElementById(pageName+"-open-button");
}

function checkSize(){
var windowSize = window.matchMedia("(min-width: 1010px)");

	if(windowSize.matches){
		openButton.classList.add("hidden");
		closeButton.classList.add("hidden");
	}else{
		if(header.innerWidth == 0) openButton.classList.remove("hidden");
		closeButton.classList.remove("hidden");	
	}
}

function scrollTrigger(){
	if(window.scrollY > 10){
		header.classList.remove("blurred-header");		
	}else{
		header.classList.add("blurred-header");	
	}
}

function toggleMenu(){

var windowSize = window.matchMedia("(max-width: 1010px)");
console.log(header.clientWidth);
	if(windowSize.matches){
		if(header.clientWidth==0){
			header.classList.remove("collapsed");
			openButton.classList.add("hidden");
			
		}else{
			header.classList.add("collapsed");
			openButton.classList.remove("hidden");
			
		}
	}
}

function resetMenu(){
	var windowSize = window.matchMedia("(min-width: 1010px)");
	
	if(windowSize.matches){
		header.classList.remove("collapsed");		
	}
}