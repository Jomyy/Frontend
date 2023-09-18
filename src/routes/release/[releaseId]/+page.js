export const prerender = true
/** @type {import('./$types').PageLoad} */
export async function load({ fetch,params }) {
        
        const res = await fetch("http://127.0.0.1:8090/api/collections/releases/records/" + params.releaseId + "?expand=Tracks,Artist")
        const release= await res.json()
       
        return {release}
    
}