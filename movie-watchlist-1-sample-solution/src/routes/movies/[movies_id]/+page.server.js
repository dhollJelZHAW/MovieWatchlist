import db from "#lib/db.js"
export async function load({ params }) {
    let movie = await db.getMovie(params.movies_id); 
    
    return {
        movie: movie
    };
}