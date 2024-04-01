export function Form() {
    return (
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto m-1">
            <h2 className="text-5xl font-normal leading-tight text-main-color">Entre em contato</h2>
            <form className="grid grid-rows-4 grid-cols-2 w-full font-roboto gap-1" style={{gridTemplateAreas: 
                `"name name"
                 "email phone"
                 "message message"
                 "message message"`}}>
                <input type="text" name="name" placeholder="Nome" className="w-full px-3 border focus:border-main-color focus:outline-none h-14" style={{gridArea: 'name'}} />
                <input type="email" name="email" placeholder="Email" className="w-full px-3 border focus:border-main-color focus:outline-none h-14" style={{gridArea: 'email'}} />
                <input type="tel" name="phone" placeholder="Celular" className="w-full px-3 border focus:border-main-color focus:outline-none h-14" style={{gridArea: 'phone'}} />
                <textarea name="message" placeholder="Mensagem" className="w-full px-3 border focus:border-main-color focus:outline-none " style={{gridArea: 'message'}}></textarea>
            </form>
            <input type="submit" value="Enviar" className="ml-auto px-4 py-2 border bg-main-color hover:bg-dark-color focus:border-main-color focus:outline-none m-1 text-xs font-medium leading-7 rounded-md cursor-pointer shadow-md min-w-16 tracking-widest uppercase" />
        </div>
    );
}