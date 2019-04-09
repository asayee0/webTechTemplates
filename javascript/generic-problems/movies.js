var genres = [];
var movies = [];

//Question 1
function createGenre(){
    genreMovies = genreMovies.split(", ");
    for (var key in genreMovies) {
        var newMovie = new Movie();
        newMovie.name = genreMovies[key];
        newGenre.addMovie(newMovie);
    }
    genres.push(newGenre);
}

//Question 2
function createMovie(){
    var movieUUID = document.forms["createMovie"]["movieUUID"].value;
    var movieTitle = document.forms["createMovie"]["movieTitle"].value;
    var movieYear = document.forms["createMovie"]["movieYear"].value;
    var movieGenres = document.forms["createMovie"]["movieGenres"].value;
    var relatedMovies = document.forms["createMovie"]["movieRelated"].value;

    var newMovie = new Movie();    
    relatedMovies = relatedMovies.split(",");

    newMovie.setAttributes(movieUUID, movieTitle, movieYear, movieGenres, relatedMovies)
    movies.push(newMovie);
}

//Question 3
function displayGenres() {
    var ol = document.createElement("ol")
    var li;
    
    for (var key in genres) {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(genres[key].name));
        ol.appendChild(li);
    }

    document.getElementById("genreList").appendChild(ol);
}

//Question 4
function displayMovies(){
    var table = document.getElementById("movieList");
    
    for (var key in movies) {
        var tr = (document.createElement("tr"));
        for(var i = 0; i < 5; i++){
            var td = document.createElement("td");

            switch(i){
                case 0: td.appendChild(document.createTextNode(movies[key].uuid)); break;
                case 1: td.appendChild(document.createTextNode(movies[key].title)); break;
                case 2: td.appendChild(document.createTextNode(movies[key].year)); break;
                case 3: td.appendChild(document.createTextNode(movies[key].genres.name)); break;
                case 4: td.appendChild(document.createTextNode(movies[key].related)); break;
                default: break;
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

//Question 5
function loadGenres(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            
            var genresStrArr = this.responseText.split(",");
            for(var key in genresStrArr){
                var newGenre = new Genre();
                newGenre.name = genresStrArr[key];
                genres.push(newGenre);
            }

            // Drop menu
            var list = document.getElementById("movieGenres");
            for(var key in genres){
                var option = document.createElement("option");
                option.value = genres[key];
                option.innerHTML = genres[key].name;
                list.appendChild(option);
            }
            displayGenres();
        }
    };
    xhttp.open("GET", "data/genreDB.txt", true);
    xhttp.send();
}

//Question 6
function loadMovies(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){

            var moviesJSON = JSON.parse(this.responseText);
            
            for (var key in moviesJSON){
                var newMovie = new Movie();
                var newGenre = new Genre();
                newGenre.name = moviesJSON[key].genres;

                newMovie.uuid = moviesJSON[key].uuid;
                newMovie.title = moviesJSON[key].title;
                newMovie.year = moviesJSON[key].year;
                newMovie.genres = newGenre;
                newMovie.related = moviesJSON[key].related;

                movies.push(newMovie);
            }

            displayMovies();
        }
    };
    xhttp.open("GET", "data/moviesDB.json", true);
    xhttp.send();
}