// JavaScript Document
//den finder elementet ud fra "id" og når man klikker på den så aktivere den funktionen. Funktionen åbner i et nyt (_blank) vindue URL'en

// facebook() funktion:
function facebook() {
	// Når en button har: onclick="facebook()" --> så når man klikker på den, åbner den et linke til vores Facebook i en ny fane
	window.open('https://www.facebook.com/Mix-It-Up-2385079765095693/', '_blank');
}

// instagram() funktion:
function instagram() {
	// Når en button har: onclick="instagram()" --> så når man klikker på den, åbner den et linke til vores Instagram i en ny fane
	window.open('https://www.instagram.com/mixitupdk/', '_blank');
}

// OBS: Den siger fejl fordi funktionen ikke bliver brugt nogle steder. Det gør den fordi vi linker den og ikke har skrevet den ind på hver side.