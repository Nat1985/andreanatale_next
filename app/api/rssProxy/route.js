export async function GET(request) {
    const url = new URL(request.url);
    const rssUrl = url.searchParams.get('url');

    if (!rssUrl) {
        return new Response('Parametro URL non trovato', { status: 400 });
    }

    try {
        const response = await fetch(rssUrl);
        if (!response.ok) {
            throw new Error(`Errore nella richiesta al feed RSS: ${response.statusText}`)
        }

        const data = await response.text();
        return new Response(data, { headers: { 'Content-Type': 'application/xml' } });
    } catch (error) {
        console.error("Errore durante la richiesta al feed RSS: ", error);
        return new Response(error.message, { status: 500 })
    }
}