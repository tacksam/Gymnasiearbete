var tMovieName = document.getElementById("desktop-movie-title-preview");
var tMovieGenreOne = document.getElementById("movie-categoryOne-preview");
var tMovieGenreTwo = document.getElementById("movie-categoryTwo-preview");
var tMovieGenreThree = document.getElementById("movie-categoryThree-preview");
var tDescOne = document.getElementById("desktop-movie-info-paragraph-one");
var tDescTwo = document.getElementById("desktop-movie-info-paragraph-two");
var tMoviePosterText = document.getElementById("desktop-movie-logo-image-preview");

// Movie declaration
const putOnAHappyFace = {
    movieName: "Joker: Put on a Happy Face",
    descText: "'Joker: Put on a Happy Face' captivates audiences with its gripping portrayal of the iconic character. The film delves into the psyche of Arthur Fleck, a struggling comedian, exploring the transformative journey that leads him to become the infamous Joker. Joaquin Phoenix's mesmerizing performance elevates the narrative, delivering a nuanced and haunting portrayal of the complex character. The film's atmospheric cinematography and evocative soundtrack create a visceral experience, immersing viewers in the gritty, chaotic world of Gotham. 'Joker: Put on a Happy Face' is a thought-provoking exploration of the fine line between sanity and madness, leaving a lasting impact on the audience without revealing key plot details.",
    moviePoster: "", // Add the path or URL to the movie poster image here
    moviePosterText: "",
    genreOne: "crime",
    genreTwo: "psychology",
    genreThree: "horror",
}

const inception = {
    movieName: "Inception",
    descText: "Dom Cobb, a skilled thief, is an expert in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state. His abilities make him a coveted player in the world of corporate espionage, but they have also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: inception, the planting of an idea into someone's mind. However, as the team delves into the complex layers of dreams, they face unexpected challenges that test the limits of their own reality.",
    moviePoster: "", // Add the path or URL to the movie poster image here
    moviePosterText: "",
    genreOne: "action",
    genreTwo: "science fiction",
    genreThree: "thriller",
}

function changeVal(movie) {
    tMovieName.innerHTML = movie.movieName;
    tMovieGenreOne.innerHTML = movie.genreOne;
    tMovieGenreTwo.innerHTML = movie.genreTwo;
    tMovieGenreThree.innerHTML = movie.genreThree;
    tDescOne.innerHTML = movie.descText;
    tDescTwo.innerHTML = ""; // You can add a second paragraph if needed
    tMoviePosterText.src = movie.moviePoster; // Assuming tMoviePosterText is an image element
}

// Call the function with the movie object
changeVal(inception);


// ----------------- CLOSE DESKTOP MOVIE PREVIEW ------------------- 
function closePreview(){
    document.getElementById("desktop-movie-holder").style.transform = "scale(0)"
}
function openPreview(){
    document.getElementById("desktop-movie-holder").style.transform = "scale(1)"
}