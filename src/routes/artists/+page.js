import { apiURL } from '$lib';
export const prerender = true;
export const csr = false;
export const config = {
  isr: {
    expiration: 60,
  },
  runtime: 'edge',
};
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(apiURL + "collections/artists/records")
  const artists = await res.json()
  return { artists }


}
