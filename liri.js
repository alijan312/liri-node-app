require("dotenv").config();

const request = require("request");
const Spotify = require('node-spotify-api');
const moment = require('moment');
const fs = require('fs');
const chalk = require('chalk');
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

let nodeArgs = process.argv;

const categorySearch = process.argv[2];

let specificSearch = '';

for (let i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        specificSearch = specificSearch + '+' + nodeArgs[i];
    } else {
        specificSearch += nodeArgs[i];
    }
}

switch (categorySearch) {
    case 'movie-this':
        if(specificSearch){
            movieRequest(specificSearch);
        }else {
            console.log(chalk.green("If you haven't watched ''Mr. Nobody'', then you should: http://www.imdb.com/title/tt0485947/"));
            console.log(chalk.green("It's on Netflix!"));
        }
        break;

    case 'spotify-this':
        if(specificSearch){
            songRequest(specificSearch);
        }else {
            songRequest('The Sign Ace of Base')
        }
        break;

    case 'concert-this':
    bandsSearch();
    break;

    case 'do-what-it-says':
    doWhatItSays();
    break;

    default:
    console.log(chalk.bgRed('SOMETHING WENT WRONG!'));
    break;
    
}

function movieRequest() {
    let movieUrl = "http://www.omdbapi.com/?t=" + specificSearch + "&y=&plot=short&apikey=" + process.env.OMDB_API_KEY;
    request(movieUrl, function (error, data, body) {
        if (JSON.parse(body).Response === 'False') {
            console.log(chalk.bgRed('SORRY! WE COULDNT FIND A MOVIE MATCHING YOUR SEARCH. PLEASE CHECK YOUR INPUT AND TRY AGAIN!'));
        } else if (!error && data.statusCode === 200) {
            console.log(chalk.bgBlue('=============== HERE IS YOUR RESULT ==============='));
            console.log("* Title: " + JSON.parse(body).Title);
            console.log("* Release date: " + JSON.parse(body).Released);
            console.log("* IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
            console.log("* Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("* Country: " + JSON.parse(body).Country);
            console.log("* Language: " + JSON.parse(body).Language);
            console.log("* Plot: " + JSON.parse(body).Plot);
            console.log("* Cast: " + JSON.parse(body).Actors);
            console.log(chalk.bgBlue('=============== END OF THE RESULT ==============='));
        } else {
            console.log(chalk.bgRed('SOMETHING WENT WRONG!'));
        }
        
    });
};

function songRequest(songName) {
    spotify.search({
        type: 'track',
        query: songName,
    }, function (err, data) {
        if (!err) {
            console.log(chalk.bgBlue('=============== HERE IS YOUR RESULT ==============='));
            console.log('* Artists: ' + data.tracks.items[0].artists[0].name);
            console.log('* Song: ' + data.tracks.items[0].name);
            console.log('* Preview Link: ' + data.tracks.items[0].preview_url);
            console.log('* Album: ' + data.tracks.items[0].album.name);
            console.log(chalk.bgBlue('=============== END OF THE RESULT ==============='));
        } else {
            console.log(chalk.bgRed('Something Went Wrong!!'));
        }
    });
};

function bandsSearch() {
    let bandsUrl = "https://rest.bandsintown.com/artists/" + specificSearch + "/events?app_id=codingbootcamp";
    request(bandsUrl, function (error, data, body){
        console.log(chalk.bgBlue('=============== HERE IS YOUR RESULT ==============='));
        for (var i = 0; i < JSON.parse(body).length; i++){
            let formattedDate = moment(JSON.parse(body)[i].datetime).format('MM/DD/YYYY');
            console.log('* Name of the venue: ' + JSON.parse(body)[i].venue.name);
            console.log('* Venue location: ' + JSON.parse(body)[i].venue.city + ', ' + JSON.parse(body)[i].venue.region + ', ' + JSON.parse(body)[0].venue.country);
            console.log('* Date of the event: ' + formattedDate);
            console.log('===================================================');
        }
        console.log(chalk.bgBlue('=============== END OF THE RESULT =============='));
    });
};

function doWhatItSays (){
    fs.readFile('random.txt', 'utf8', function(error, data){
        var randomTxt = data.split(',');
        // console.log(randomTxt);
        songRequest(randomTxt[1]);
    });
}