
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
        const orderedReleases = artist.expand.Releases.sort(function (/** @type {{ Date: string; }} */ a, /** @type {{ Date: string; }} */ b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.

                return Date.parse(b.Date) - Date.parse(a.Date)
        })
        return { artist, orderedReleases }

}