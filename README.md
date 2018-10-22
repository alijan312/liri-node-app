THE SCREENSHOTS OF USER INPUT AND APPROPRIATE RESPONSES ARE IN IMAGES FOLDER.

LIRI Bot
Overview
In this assignment, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI Bot can take in one of the following commands:

1. concert-this

2. spotify-this

3. movie-this

4. do-what-it-says
=====================================================================================

1. node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

Name of the venue

Venue location

Date of the Event (use moment to format this as "MM/DD/YYYY")

=====================================================================================

2. node liri.js spotify-this '<song name here>'

This will show the following information about the song in the terminal/bash window

Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from

If no song is provided then the program will default to "The Sign" by Ace of Base.

I utilized the node-spotify-api package in order to retrieve song information from the Spotify API.

=====================================================================================

3. node liri.js movie-this '<movie name here>'

This will output the following information to the terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!

=====================================================================================

4. node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this for "I Want it That Way," as follows the text in random.txt.


