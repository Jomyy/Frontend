import { apiURL } from '$lib'
export const config = {
    isr: {
        expiration: 240,
    },

}


/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {

    const res = await fetch(apiURL + "collections/releases/records/" + params.releaseId + "?expand=Tracks,Artist", { cache: "no-cache" })
    const release = await res.json()

    return { release }

}