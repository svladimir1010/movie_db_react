export default class SwapiService {
	IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

	//Sizes: w300, w780, w1280, original
	BACKDROP_SIZE = "w1280";

	// w92, w154, w185, w342, w500, w780, original
	POSTER_SIZE = "w500";

	_API_KEY = "api_key=df355bdb560d2dcd61eda60746ed703f";

	_API_BASE_URL = "https://api.themoviedb.org/3/";

	async getResource(url, id = null, vid = null) {
		const res = await fetch(
			`${this._API_BASE_URL}${url}${
				this._API_KEY
			}&language=en-US${id}`
		);

		if (!res.ok) {
			throw new Error(
				`У нас ПОХИБКА ${url}` +
					`, received ${res.status}`
			);
		}
		return await res.json();
	}

	// get info config of movie
	async getMoviesConfig() {
		return await this.getResource(`configuration?`);
	}

	// get imageMovie
	// async getImageMovie(vid) {
	//     const res = await this.getResource(`movie/${vid}/images?`)
	//     return res.results
	//}
	// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US

	async getImage(key) {
		const res = await fetch(
			`${this.IMAGE_BASE_URL}${
				this.POSTER_SIZE
			}/${key}`
		);
		return res;
	}

	// https://api.themoviedb.org/3/movie/latest?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US
	// Get the most newly created movie.

	async getLatestMovie() {
		const res = await this.getResource(`movie/latest?`);
		return res;
	}

	// get movie
	async getMoviesVideos(vid) {
		return await this.getResource(
			`movie/${vid}/videos?`
		);
	}

	// get popular movies
	async getPopularMovies(id=1) {
		const res = await this.getResource(
			`movie/popular?`,
			`&page=${id}`
		);
		return res.results;
	}
}
// const swapi = new SwapiService();

// swapi.getMoviesConfig().then(body => {
//     for (var key in body.images) {
//         console.log(`${key}` + ' ' + '-' + ' ' + `${body.images[key]}`);
//     }
//     body.change_keys.forEach(p => {
//         console.log(p);
//     });
//  });

// swapi.getPopularMovies('&page=2')
//          .then(body => console.log(body))

// swapi.getLatestMovie().then(body => console.log(body));

//  https://api.themoviedb.org/3/movie/2/videos?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US

// swapi.getMoviesVideos(`157336`)
//  .then(body => body.results)

// get key of video
// swapi.getMoviesVideos(`157336`)
//  .then(body => {
//      body.results.forEach(e => {
//         return console.log( e.key )
//      });
//  } )

// movie image
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

// movie details
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=df355bdb560d2dcd61eda60746ed703f&language=en-US
