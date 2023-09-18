import { apiURL } from '$lib';
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({  fetch,params }) {
    const res = await fetch(apiURL+ "collections/releases/records")
    const releases = await res.json()
    return {releases}

    
}
