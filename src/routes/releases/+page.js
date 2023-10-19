import { apiURL } from '$lib';
export const prerender = true;
export const csr = false;
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(apiURL + "collections/releases/records")
    const releases = await res.json()
    return { releases }


}
