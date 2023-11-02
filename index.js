// TOP NAV BAR

function searchExtention(){
    const element = document.getElementById('searchbar');
    // const elementWidth = element.style.width;
    const elementWidth = "0px"; 

    if(element.style.width === elementWidth){
        element.style.width = "200px"
    } else{
        element.style.width = elementWidth;
    }
}