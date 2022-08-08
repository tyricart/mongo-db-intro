import db from "./mongoConnect.js";

const movies = db.collectionName('movie')

export const queryMovies = async (request, response) => {
  const allMovies = await movies.find().toArray();
  response.send(allMovies)
};

export const addMovie = async (request, response) => {
  const movieAdded = await movies.insertOne(request.body);
  return movieAdded;
};

export async function updateMovie(request, response) {
  await movies.findOneAndUpdate(request.query, { $set: request.body})
  const movieUpdated = await movies.find(request.query).toArray();
  response.send(movieUpdated);
}

export async function deleteMovie(request, response) {
  await movies.findOneAndDelete(request.query)
  const allMovies = await movies.find().toArray();
  response.send(allMovies);
}
