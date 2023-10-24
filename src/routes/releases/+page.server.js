import { apiURL } from '$lib';
export const config = {
  isr: {
    expiration: 60
  },

};
/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
  const res = await fetch(apiURL + "collections/releases/records")
  const releases = await res.json()
  const orderedReleases = releases.items.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return b.Date - a.Date;
  })
  return {orderedReleases}


}
