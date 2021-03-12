import axios from "axios";

const TMDB_KEY = "34f53f3bc739b4bca3d6a5038f9a23a0";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY,
        },
    });

const getAnything = async (path, params = {}) => {
    try {
        const {
            data: { results },
            data,
        } = await makeRequest(path, params);
        return [results || data, null];
    } catch (e) {
        return [null, e];
    }
};

export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
    search: (word) => getAnything("/search/movie", { query: query }),
    movie: (id) => getAnything(`/movie/${id}`),
    discover: () => getAnything("/discover/movie"),
};

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: (query) => getAnything("/search/tv", { query: query }),
    show: (id) => getAnything(`/tv/${id}`),
};
