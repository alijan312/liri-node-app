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


<img width="1016" alt="screen shot 2018-10-21 at 11 19 33 pm" src="https://user-images.githubusercontent.com/41714437/47324953-6c123000-d627-11e8-94fc-9f7fc3d42aef.png">
<img width="1008" alt="screen shot 2018-10-21 at 11 20 21 pm" src="https://user-images.githubusercontent.com/41714437/47324954-6c123000-d627-11e8-9c07-b0e642f8dbc6.png">
<img width="1003" alt="screen shot 2018-10-21 at 11 21 28 pm" src="https://user-images.githubusercontent.com/41714437/47324955-6c123000-d627-11e8-81bf-2a58f3d99f38.png">
<img width="1013" alt="screen shot 2018-10-21 at 11 22 57 pm" src="https://user-images.githubusercontent.com/41714437/47324956-6c123000-d627-11e8-9649-b359ccbcfac8.png">
<img width="1008" alt="screen shot 2018-10-21 at 11 24 18 pm" src="https://user-images.githubusercontent.com/41714437/47324957-6c123000-d627-11e8-84fc-2ecfc9ad9ae5.png">
<img width="1013" alt="screen shot 2018-10-21 at 11 25 06 pm" src="https://user-images.githubusercontent.com/41714437/47324958-6caac680-d627-11e8-9d9e-8805443bd343.png">
<img width="1010" alt="screen shot 2018-10-21 at 11 25 44 pm" src="https://user-images.githubusercontent.com/41714437/47324959-6caac680-d627-11e8-8148-861700bdec9d.png">
<img width="1011" alt="screen shot 2018-10-21 at 11 26 20 pm" src="https://user-images.githubusercontent.com/41714437/47324960-6caac680-d627-11e8-96e7-ca6dc69fd9d4.png">
<img width="946" alt="screen shot 2018-10-21 at 11 37 12 pm" src="https://user-images.githubusercontent.com/41714437/47324961-6caac680-d627-11e8-8b49-e44a82e64709.png">

