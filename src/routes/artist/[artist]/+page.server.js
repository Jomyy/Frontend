
export const config = {
        isr: {
                expiration: 30,

        },
}
import { apiURL } from '$lib';
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {

        const res = await fetch(apiURL + "collections/artists/records/" + params.artist + "?expand=Releases", { cache: "no-cache" })
        const artist = await res.json()

        return { artist }

}