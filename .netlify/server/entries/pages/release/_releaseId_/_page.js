import { a as apiURL } from "../../../../chunks/index.js";
const prerender = true;
async function load({ fetch, params }) {
  const res = await fetch(apiURL + "collections/releases/records/" + params.releaseId + "?expand=Tracks,Artist");
  const release = await res.json();
  return { release };
}
export {
  load,
  prerender
};
