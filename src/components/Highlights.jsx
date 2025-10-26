function Highlights() {



    return (
        <section className="bg-black py-20 px-6 " id="design">
            <div className="max-w-7xl mx-auto" >
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Vilmar Revolucionario</h2>
                    <p className="text-xl text-gray-400">cada detalhe foi pensado para criar a melhor experiência</p>
                </div>
                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">


                        <img className="w-full rounded-2xl mb-4" src="/img/titanium-design.jpg" alt="iphone"></img>
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura em titânio de grau aeroespacial. o smartphone mais forte e leve</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="/img/ios-features.jpg" alt="iphone"></img>
                        <h3 className="font-bold mb-2 text-3xl" >iOS 19</h3>
                        <p className="text-gray-300">O sistema operacional mais avançado do mundo com IA integrada</p>
                    </div>
                </div>

                <div className="bg-gray-900  rounded-3xl p-12  transition-all duration-300 mb-8 hover:scale-105" id="performace">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso já criado para um smartphone.</p>
                    <img className="w-full rounded-2xl mb-4" src="/img/chip-a18-pro.jpg" alt="chip A18"></img>

                    <ul className="space-y-3 text-gray-300">
                        <li >CPU 20% mais rapida</li>
                        <li>GPU 25% mais eficiente </li>
                        <li>Neural Engine com 16 núcleos</li>
                        <li>Ray tracing acelerado por hardware</li>
                    </ul>
                </div>

                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10 ">Sistema de câmera Pro avançado</h3>

                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 curso-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor quad-pixel com foco automático </p>
                        </div>
                         <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 curso-pointer transition-all duration-300">
                            <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra wide</h4>
                            <p className="text-gray-400">Campo de visão de 120º com modo noturno</p>
                        </div>
                         <div className="bg-gray-900 rounded-2xl p-8  hover:scale-105 curso-pointer transition-all duration-300 ">
                            <div className="text-4xl font-bold text-blue-600 mb-4">Telefoto 5x</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights   