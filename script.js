// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let imageList = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Uew7Su_P7nPxpKf1z6icR83FtK_dOcTAnDrM4z8&s", "https://i.scdn.co/image/ab67616d0000b273db687db0afb257abdee10816", "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg", "https://i1.sndcdn.com/artworks-000120441602-w3vudp-t500x500.jpg","https://i.ebayimg.com/images/g/w7MAAOSwqUpjk1ME/s-l500.jpg", "https://www.rhino.com/sites/g/files/g2000012691/files/styles/article_image/public/2021-01/GREEN%20DAY%20AMERICAN%20IDIOTSSSSS%20.jpg?itok=dJQDO0kC", "https://m.media-amazon.com/images/I/51Ru9oLahBL._SY350_QL15_.jpg", "https://images.genius.com/ad23d0e90673a474b9f3a22b3efbdb41.1000x1000x1.png", "https://upload.wikimedia.org/wikipedia/en/9/9b/Metallica_-_Reload_cover.jpg", "https://i.scdn.co/image/ab67616d0000b273431ac6e6f393acf475730ec6"];

songNameList = ["I Saw Her Standing There(Remastered 2009)","Blitzkrieg Bop(2016 Remaster)", "Master of Puppets", "Love Buzz", "Ballroom Blitz", "American Idiot", "Doorman", "Dracula", "Fuel", "Zero(Remastered 2012)"];

artistList = ["The Beatles", "The Ramones", "Metallica", "Nirvana", "Sweet", "Green Day", "slowthai", "Bakar", "Metallica", "The Smashing Pumpkins"];

songLinkList = ["https://www.youtube.com/watch?v=oxwAB3SECtc", "https://www.youtube.com/watch?v=skdE0KAFCEA", "https://www.youtube.com/watch?v=4DHmTY5sMss", "https://www.youtube.com/watch?v=mgB01new64Q", "https://www.youtube.com/watch?v=mPQPdYttl7U", "https://www.youtube.com/watch?v=0kXjKNBKGP0", "https://www.youtube.com/watch?v=wEmh32pQBDU", "https://www.youtube.com/watch?v=JeBpthQ3Zss", "https://www.youtube.com/watch?v=azCq5qQodU8", "https://www.youtube.com/watch?v=vDgUTnIyDtQ"];



//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.



  
// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

//let action = ["Taken", "The Professional", "Ip Man"];
//actionButton.onclick = function() {
//for(let i=0; i<action.length; i++){actionRec.insertAdjacentHTML(`beforeend`, `<p>${action[i]}</p>`);
//}
//};

  for(let i=0; i<imageList.length; i++){
    imageList.insertAdjacentHTML(`beforeend`, `<p>${image}</p>`);
  }

  for(let i=0; i<songNameList.length; i++){
    songNameList.insertAdjacentHTML(`beforeend`, `<p>${songName}</p>`);
  }

  for(let i=0; i<artistList.length; i++){
    artistList.insertAdjacentHTML(`beforeend`, `<p>${artist}</p>`);
  }

  for(let i=0; i<songLinkList.length; i++){
    songLinkList.insertAdjacentHTML(`beforeend`, `<p>${songLink}</p>`);
  }

  console.log("gotHere");
};


// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();


//let displaySong = document.querySelector(".display-song");
//let displayArtist = document.querySelector(".display-artist");
//let displayImage = document.querySelector(".display-image");
//let displayLink = document.querySelector(".display-link");

// add these on 89 and the rest bc they are not arrays but the for the purpose of display which is what we need