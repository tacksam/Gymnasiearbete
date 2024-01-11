var tMovieName = document.getElementById("desktop-movie-title-preview");
var tMovieGenreOne = document.getElementById("movie-categoryOne-preview");
var tMovieGenreTwo = document.getElementById("movie-categoryTwo-preview");
var tMovieGenreThree = document.getElementById("movie-categoryThree-preview");
var tDescOne = document.getElementById("desktop-movie-info-paragraph-one");
var tDescTwo = document.getElementById("desktop-movie-info-paragraph-two");
var tMoviePosterText = document.getElementById("desktop-movie-logo-image-preview");
var tMoviePosterBackground = document.getElementById("upper-desktop-movie-holder-wrapper");
var tLink = document.getElementById("p-lay");

// Movie declaration
const putOnAHappyFace = {
    movieName: "Put on a Happy Face",
    descText: "'Joker: Put on a Happy Face' captivates audiences with its gripping portrayal of the iconic character. The film delves into the psyche of Arthur Fleck, a struggling comedian, exploring the transformative journey that leads him to become the infamous Joker. Joaquin Phoenix's mesmerizing performance elevates the narrative, delivering a nuanced and haunting portrayal of the complex character. The film's atmospheric cinematography and evocative soundtrack create a visceral experience, immersing viewers in the gritty, chaotic world of Gotham. 'Joker: Put on a Happy Face' is a thought-provoking exploration of the fine line between sanity and madness, leaving a lasting impact on the audience without revealing key plot details.",
    moviePoster: "", // Add the path or URL to the movie poster image here
    moviePosterText: "images/joker.png",
    genreOne: "crime",
    genreTwo: "psychology",
    genreThree: "horror",
    link: "",

}

const inception = {
    movieName: "",
    descText: "Dom Cobb, a skilled thief, is an expert in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state. His abilities make him a coveted player in the world of corporate espionage, but they have also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: inception, the planting of an idea into someone's mind. However, as the team delves into the complex layers of dreams, they face unexpected challenges that test the limits of their own reality.",
    moviePoster: "url(images/inception/inception1920.png)", // Add the path or URL to the movie poster image here
    moviePosterText: "images/inception/inceptionposterText.png",
    genreOne: "action",
    genreTwo: "science fiction",
    genreThree: "thriller",
    link: "",

}

const bonjourMadame = {
    movieName: "Music Video",
    descText: "In the final technology class at Rönninge Gymnasium, the students of Teknik 21 embarked on a creative journey that transcended conventional boundaries. Fueled by innovation, the class collectively wrote, recorded, and rapped an extraordinary song that defied expectations. Their collaborative effort captured the essence of contemporary issues, resonating with a global audience and swiftly turning into a viral sensation with millions of views. The class enlisted the artistic prowess of Ivar Petit, whose meticulously crafted music video not only complemented the track but also garnered critical acclaim, earning prestigious awards. Teknik 21's remarkable fusion of technology, creativity, and musical prowess left an indelible mark on their high school legacy.",
    moviePoster: "url(images/teinf21/teinf1920.png)",
    moviePosterText: "images/teinf21/bonjourmadame.png",
    genreOne: "Comedy",
    genreTwo: "Music",
    genreThree: "Rap",
    link: "teinf21video/bonjourmadame.html",
}



// function

function closePreview(){
    document.getElementById("desktop-movie-holder").style.transform = "scale(0)";
    document.getElementById("test").style.display = "none";
}
function openPreview(){
    document.getElementById("desktop-movie-holder").style.transform = "scale(1)"
    document.getElementById("test").style.display = "block";
    document.getElementById("desktop-movie-holder").style.display = "block";
}

function changeVal(movie) {
    tMovieName.innerHTML = movie.movieName;
    tMovieGenreOne.innerHTML = movie.genreOne;
    tMovieGenreTwo.innerHTML = movie.genreTwo;
    tMovieGenreThree.innerHTML = movie.genreThree;
    tMoviePosterBackground.style.backgroundImage = movie.moviePoster;
    tMoviePosterText.src = movie.moviePosterText;
    tLink.href = movie.link;

    const descLength = movie.descText.length;
    const halfLength = Math.ceil(descLength / 2);
    const lastSpaceIndex = movie.descText.lastIndexOf(' ', halfLength);

    const splitIndex = lastSpaceIndex !== -1 ? lastSpaceIndex : movie.descText.lastIndexOf(' ');

    const firstHalf = movie.descText.substring(0, splitIndex);
    const secondHalf = movie.descText.substring(splitIndex + 1);

    tDescOne.innerHTML = firstHalf;
    tDescTwo.innerHTML = secondHalf;

    openPreview();
}


document.getElementById("test").style.display = "none"