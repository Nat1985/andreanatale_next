export const proxy = async (req, res) => {
    console.log('here')
    const { url } = req.query;
    console.log({url})

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Errore nella richiesta al feed RSS: ${response.statusText}`)
        }

        const text = await response.text();

        return new Response(text, { status: 200 });
    } catch (error) {
        console.error("Errore durante la richiesta al feed RSS: ", error);
        return new Response({
            message: "Errore durante la richiesta al feed RSS."
        },
            { status: 500 }
        )
    }
}