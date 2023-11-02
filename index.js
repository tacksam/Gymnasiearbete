// TOP NAV BAR

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
