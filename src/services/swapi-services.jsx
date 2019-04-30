export default class SwapiService {
    IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
    KIDS_URL =
        "&region=US&sort_by=popularity.desc&certification_country=US&certification.lte=PG&include_adult=false&include_video=false";
    DISCOVER = "discover/movie?";
    LANG = "&language=en-US";
    REGION = "&region=us";
    //Sizes: w300, w780, w1280, original
    BACKDROP_SIZE = "w1280";

    // w92, w154, w185, w342, w500, w780, original
    POSTER_SIZE = "original";

    _API_KEY = "api_key=df355bdb560d2dcd61eda60746ed703f";
    _API_BASE_URL = "https://api.themoviedb.org/3/";

    async getResource(
        url,
        id = null,
        vid = null,
        region = null,
        csearchMovie = 0
    ) {
        const res = await fetch(
            `${this._API_BASE_URL}${url}${this._API_KEY}${
                this.LANG
            }${id}${csearchMovie}`
        );
        if (!res.ok) {
            throw new Error(
                `У нас ПОХИБКА ${url}` + `, received ${res.status}`
            );
        }
        return await res.json();
    }

    getSearchMovie = async name => {
        const searchMovie = `&query=${name}&page=1`;
        const res = await this.getResource(`search/movie?`, searchMovie);
        return res.results
    };

    getRecommendation = async (id = 2) => {
        const url = `movie/${id}/recommendations?`;
        const res = await this.getResource(url);
        return res.results;
    };

    getKidsMovies = async (id = 1) => {
        const res = await fetch(
            `${this._API_BASE_URL}${this.DISCOVER}${this._API_KEY}${this.LANG}${
                this.KIDS_URL
            }&page=${id}`
        );
        if (!res.ok) {
            throw new Error(
                `У нас ПОХИБКА ${this.DISCOVER}` + `, received ${res.status}`
            );
        }
        const body = await res.json();
        return body.results;
    };

    async getMoviesConfig() {
        return await this.getResource(`configuration?`);
    }

    async getImage(key) {
        const res = await fetch(
            `${this.IMAGE_BASE_URL}${this.POSTER_SIZE}/${key}`
        );
        return res;
    }

    getDitails = async id => {
        const url = `movie/${id}?`;
        const res = await this.getResource(url);
        return res;
    };

    async getLatestMovie() {
        const res = await this.getResource(`movie/latest?`);
        return res;
    }

    // get movie
    async getMoviesVideos(vid) {
        const res = await this.getResource(`movie/${vid}/videos?`);
        return res.results;
    }

    // get popular movies
    getPopularMovies = async (id = 1) => {
        const res = await this.getResource(`movie/popular?`, `&page=${id}`);
        return res.results;
    };

    getAllMovies = async (id = 1) => {
        const res = await this.getResource(
            `movie/now_playing?`,
            `&page=${id}`,
            `${this.REGION}`
        );
        return res.results;
    };
}

// https://api.themoviedb.org/3/search/movie?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US&query=james&page=1

const swapi = new SwapiService();

swapi.getSearchMovie("gam");

// swapi.getSerials(2)
//  .then(body => console.log(body))

// swapi.getMoviesConfig().then(body => {
//     for (var key in body.images) {
//         console.log(`${key}` + ' ' + '-' + ' ' + `${body.images[key]}`);
//     }
//     body.change_keys.forEach(p => {
//         console.log(p);
//     });
//  });

// swapi.getDitails(3).then(body => console.log(body));

// swapi.getLatestMovie().then(body => console.log(body));

//  https://api.themoviedb.org/3/movie/2/videos?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US

// swapi.getMoviesVideos(`157336`)
//  .then(body => console.log(body.results))

// get key of video

// swapi.getMoviesVideos(`299`)
//  .then(body => {
//      body.results.forEach(e => {
//         return console.log( e )
//      });
//  } )

// swapi.getMoviesVideos(`299`)
//  .then(body => console.log( body ));

// movie image
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

// movie details
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US

// fetch ("https://api.themoviedb.org/3/collection/3/images?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US")
//     .then((res) => {
// 		return res.json();
// 	})
// 	.then((body) => console.log(body))
