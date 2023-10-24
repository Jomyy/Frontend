import { apiURL } from '$lib';
export const config = {
    isr: {
        expiration: 240,
    },

};


/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(apiURL + "collections/artists/records", { cache: "no-cache" })
    const artists = await res.json()
    console.log(res)
    return { artists }


}
