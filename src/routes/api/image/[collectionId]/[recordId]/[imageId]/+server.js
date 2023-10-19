import { apiURL } from '$lib';
/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    var url
    await fetch(apiURL + "files/" + params.collectionId + "/" + params.recordId + "/" + params.imageId).then(function (response) {
        return response.blob();
    }).then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        url = objectURL;
    });

    // @ts-ignore
    const response = Response.redirect(url);

    //response.headers.append('Access-Control-Allow-Origin', "http://localhost:5173");


    return response
};