
function Hero() {
    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute top-18 bottom-0 right-0 left-0 z-0">
                <img src="\src\img/hero.jpg" alt="A"className="w-full h-full object-cover opacity-90"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-10 animate-bounce ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
                </svg>

            </div>
        </section>
    )
}
export default Hero
