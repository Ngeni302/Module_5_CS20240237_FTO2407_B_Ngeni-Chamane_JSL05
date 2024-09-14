// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    {title: "Self-control", artist: "Frank Ocean", genre: "R&B" },
    {title: "Man in the mirror", artist: "Michael Jackson", genre: "Pop" },
    {title: "Garden(say it like Dat)", artist: "SZA", genre: "R&B" },
    {title: "Lovely Day", artist: "Bill Withers", genre: "R&B" },
    {title: "Heated", artist: "Beyonce", genre: "R&B" }
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord":"Rock",
    "Gamora":"Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax":"R&B",
    "Rocket":"Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians,songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return Object.keys(guardians).map(guardian => {  //gets the guardians names from the object and performs map method over this object
        const genre = guardians[guardian];  //declare variable that accesses the value in the guardians object where the key value is stored in guardian
        const playlist =songs.filter(song => song.genre === genre); //declare playlist variable that filters songs array to only include songs where the genre matches the genre of guardian
        //const updatedPlaylist = new Set(playlist)
        return {
            name: guardian,
            playlist: playlist
        };
    });
}

// Call generatePlaylist and display the playlists for each Guardian
function displayPlaylists(playlists) {
    let playlistsDiv = document.getElementById('playlists'); //gets the id element named playlist
    playlists.forEach(playlist => {   //iterates over each object in the playlist array
        const playlistDiv = document.createElement('div'); //new div for each element
        playlistDiv.className = 'playlist'; //class name for each playlist
        
        const title = document.createElement('h2'); //creates playlist title
        title.textContent = `${playlist.name}'s Playlist`; //text of the playlist
        playlistDiv.appendChild(title); //appends the div to the title to display title on the webpage
        const songList = document.createElement('songlist'); //create element for the song list
        playlist.playlist.forEach(song => {   //iterates over each song in the playlist array in the playlist object
            const songInfo= document.createElement('p'); //for each song in the playlist, create a <p> element
            songInfo.textContent = `${song.title} by ${song.artist}`; //display the song title and artist
            songList.appendChild(songInfo); //append the each song to the <p> element
        });
        
        playlistDiv.appendChild(songList); //append the song list to the playlistDiv
        playlistsDiv.appendChild(playlistDiv); 
    });
}

const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);
