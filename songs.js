"use strict";

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Add to the array: unshift to front of list & push to end of list
  // Remove from array: shift from front of list & pop from end of list
songs.unshift("Past Lives by Borns on the album Dopamine");
songs.push("Waste A Moment by Kings of Leon on the album Walls");


var songsEl = document.getElementById("songs");

function PopulateDom() {
    songsEl.innerHTML = "";
//  innerHTML = clears string for next loop with new input

  for (var i = 0; i < songs.length; i++) {
    var newSongs = songs[i].replace(/>/g, " - " ).replace(/[!*(@]/g, "");
    // remember to put characters in brackets so it looks at the whole group
    console.log("newSongs", newSongs);
    songsEl.innerHTML += `<div>${newSongs}</div>`;
  }
  SwitchViews();
}

// Once the user fills out the song form and clicks the add button,
// you should collect all values from the input fields, add the song to your array of songs,
// and update the song list in the DOM.

var SongInput = document.getElementById("SongInput");
var ArtistInput = document.getElementById("ArtistInput");
var AlbumInput = document.getElementById("AlbumInput");
var AddButton = document.getElementById("AddButton");

AddButton.addEventListener("click", GetInput);

  function GetInput() {
    songs.push(SongInput.value + " by " + ArtistInput.value + " on the album " + AlbumInput.value);
    ClearInput();
    console.log("input song", songs );
    PopulateDom();
  }

PopulateDom();


function ClearInput() {
  SongInput.value = "";
  ArtistInput.value = "";
  AlbumInput.value = "";
}

function SwitchViews() {
  var listView = document.getElementById("list-view");
  var addView = document.getElementById("add-view");

  addView.classList.add("hidden");
  listView.classList.add("visible");
  listView.classList.remove("hidden");
}



