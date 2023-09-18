export const prerender = true;
/** @type {import('./$types').PageLoad} */
export async function load({ fetch,params }) {
        
        const res = await fetch("http://127.0.0.1:8090/api/collections/artists/records/" + params.artist + "?expand=Releases,Releases.Tracks")
        const artist= await res.json()
       
        return {artist}
    
}