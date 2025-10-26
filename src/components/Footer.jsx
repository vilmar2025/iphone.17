
function Footer() {
    const sections = [
        {
            title: 'comprar e Saber Mais',
            links: ['IPhone 17 Pro', 'Comparar modelos', 'Acessórios']

        },
        {
            title: 'Especificações',
            links: ['Características técnicas', 'Câmera', 'Bateria', 'Display']
        },
        {
            title: 'Suporte',
            links: ['Suporte do iPhone', 'AppleCare+', 'iOS 19', 'Contato']
        },
        {
            title: 'Apple Store',
            links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']
        },
    ];
    const buttonLinks = ['Política de Privacidade', 'Termos de Uso', 'Vendas']

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12" >
                <div className="grid  md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a className="hover:text-white cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    ))}
                </div>
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <a className="text-xl text-gray-300"> Copyright © 2025 Apple Inc. Todos os direitos reservados.</a>
                        <div className="flex gap-6 text-gray-400">
                            {buttonLinks.map((link, index) => (
                                <a href="#" key={index} className="hover:text-white text-white ">{link}</a>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-6 ">Site criado por vilmar pereia de souza filho </p>
                </div>

            </div>


        </footer>
    )
}

export default Footer