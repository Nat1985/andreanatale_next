const ContactForm = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-[600px]">
            {/* Nome */}
            <div className="flex flex-col items-start">
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Inserisci il tuo nome" className="border p-2 rounded w-full max-w-[400px]"/>
            </div>
            {/* Email */}
            <div className="flex flex-col items-start">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Inserisci la tua email" className="border p-2 rounded w-full max-w-[400px]"/>
            </div>
            {/* Messaggio */}
            <div className="flex flex-col items-start">
                <label htmlFor="message">Messaggio</label>
                <textarea placeholder="Testo del messaggio" className="border p-2 rounded w-full max-w-[600px]" />
            </div> 
            <button className="bg-pink-500 text-white rounded py-2 px-3 w-full md:w-fit">Invia messaggio</button>
        </div>
    )
}

export default ContactForm