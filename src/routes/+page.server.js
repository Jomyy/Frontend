import { apiURL } from '$lib';
export const config = {
    isr: {
        expiration: 60
    },

};
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const resRecords = await fetch(apiURL + "collections/releases/records")
    const releases = await resRecords.json()

    const newestRelease = releases["items"].sort(function (/** @type {{ Date: string; }} */ a, /** @type {{ Date: string; }} */ b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.

        return Date.parse(b.Date) - Date.parse(a.Date)
    })[0]
    return { newestRelease }


}
