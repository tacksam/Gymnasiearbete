// ----------------- TOP NAV BAR  SEARCH BAR EXTENTION  WIDE VIEW------------------- 

function searchExtention(){
    const element = document.getElementById('searchbar');
    const elementStartWidth = "0px"; 

    const mediaQuery = window.matchMedia('(min-width: 1000px)');

if(mediaQuery.matches){
    if(element.style.width === elementStartWidth){
        element.style.width = "200px"
    } else{
        element.style.width = elementStartWidth;
    }
} 

else{
    element.style.width = "100%";


}


}


// ----------------- TOGGLE HAMBURGER BAR PHONE VIEW ------------------- 

function closeMenu(){
  
    var elementTwo = document.getElementById("phone-hamburger-menu");
    var firstIcon = document.querySelector("#phone-menu-button i:nth-child(1)");
    var secondIcon = document.querySelector("#phone-menu-button i:nth-child(2)");
    var style = getComputedStyle(elementTwo).display;
    
    if(style === "none"){
      elementTwo.style.display = "block";
      firstIcon.style.display = "none";
      secondIcon.style.display = "block";
    } else{
      elementTwo.style.display = "none";
      firstIcon.style.display = "block";
      secondIcon.style.display = "none";
    }    
}

// ----------------- CLOSE DESKTOP MOVIE PREVIEW ------------------- 
function closePreview(){
    document.getElementById("desktop-movie-holder").style.display = "none"
}
function openPreview(){
    document.getElementById("desktop-movie-holder").style.display = "inherit"
}