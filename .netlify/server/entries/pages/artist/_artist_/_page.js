import { a as apiURL } from "../../../../chunks/index.js";
const prerender = true;
async function load({ fetch, params }) {
  const res = await fetch(apiURL + "collections/artists/records/" + params.artist + "?expand=Releases,Releases.Tracks");
  const artist = await res.json();
  return { artist };
}
export {
  load,
  prerender
};
