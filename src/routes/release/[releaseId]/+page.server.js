import { apiURL } from '$lib'
export const prerender = true
export const config = {
        isr: {
                expiration: 60,
                bypassToken: 'REPLACE_ME_WITH_SECRET_VALUE',
        },
        runtime: 'edge',
}
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {

        const res = await fetch(apiURL + "collections/releases/records/" + params.releaseId + "?expand=Tracks,Artist")
        const release = await res.json()

        return { release }

}