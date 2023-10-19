export const prerender = true;
export const csr = false;
import { apiURL } from '$lib';
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {

        const res = await fetch(apiURL + "collections/artists/records/" + params.artist + "?expand=Releases,Releases.Tracks")
        const artist = await res.json()

        return { artist }

}