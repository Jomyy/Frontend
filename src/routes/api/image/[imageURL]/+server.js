/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    var url
    await fetch(params.imageURL).then(function (response) {
        return response.blob();
    }).then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        url = objectURL;
    });
    return new Response(url)
};