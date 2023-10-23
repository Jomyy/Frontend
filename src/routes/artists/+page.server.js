import { apiURL } from '$lib';
export const config = {
    isr: {
        expiration: 60,
    },

};


/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(apiURL + "collections/artists/records", { cache: "no-cache" })
    const artists = await res.json()
    return { artists }


}
