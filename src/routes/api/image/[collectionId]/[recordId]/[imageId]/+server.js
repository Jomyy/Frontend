export const prerender = true
import { apiURL } from '$lib';
/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    var url
    await fetch(apiURL + "files/" + params.collectionId + "/" + params.recordId + "/" + params.imageId).then(function (response) {
        return response.blob();
    }).then(function (myBlob) {

        url = myBlob;
    });

    // @ts-ignore
    const response = new Response(url);

    response.headers.append('Access-Control-Allow-Origin', "http://localhost:5173");


    return response
};