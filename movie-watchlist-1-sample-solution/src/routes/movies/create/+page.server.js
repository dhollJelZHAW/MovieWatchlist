import db from "#lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        
        let movie = {
            title: data.get("title"),
            year: Number(data.get("year")), // Jahr als Zahl speichern
            length: data.get("length")
        };

        await db.createMovie(movie);
        
        redirect(303, "/movies");
    }
};