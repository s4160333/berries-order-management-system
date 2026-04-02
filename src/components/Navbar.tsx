export default function Navbar(){
    return (
        <nav className="sticky top-0 w-full z-50 bg-surface/70 backdrop-blur-2xl shadow-[0_40px_40px_rbga(27,28,26,0.06)]">
            <div className="flex justify-between items-center px-12 py-6 w-ful max-w-screen-2xl mx-auto font-headline text-on-surface tracking-tight">

                {/* Logo */}
                <div className="text-2xl font-black text-primary dark:text-primary tracking-tighter">
                    Berries &amp; Cherries
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a 
                        href="#"
                        className="text-on-surface-variant font-medium hover:scale-105 transition-all duration-300">
                            Our Story
                    </a>
                    <a 
                        href="#"
                        className="text-primary font-bold border-b-2 border-primary pb-1 hover:scale105 transition-all duration-300">
                            Our Berries &amp; Cherries
                    </a>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 text-on-surface">
                        <button className="active:scale-95 transition-transform hover:scale-105 ">
                            <span className="material-symbols-outlined">shopping_cart</span>
                        </button>
                        <button className="active:scale-91 transition-transform hover:scale-105">
                            <span className="material-symbols-outlined">account_circle</span>
                        </button>
                    </div>
                    <button className="signature-gradient text-on-primary px-8 py-2.5 rounded-full font-bold hover:scale-105 transition-alll active:scale-95">
                        Shop Now
                    </button>
                </div>
            </div>
        </nav>
    )

}