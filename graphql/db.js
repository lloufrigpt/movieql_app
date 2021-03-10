export let movies = [
    {
        id: 0,
        name: "Movie0",
        score: 1
    },
    {
        id: 1,
        name: "Movie1",
        score: 8
    },
    {
        id: 2,
        name: "Movie2",
        score: 99
    },
    {
        id: 3,
        name: "Movie3",
        score: 2
    }
];


export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0];
};

export const deleteMovie = (id) => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(cleanMovies.length < movies.length){
        movies = cleanMovies;
        return true;
    }else {
        return false
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}