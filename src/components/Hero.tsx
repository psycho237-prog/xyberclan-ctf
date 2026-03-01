export default function Hero() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-28 md:pt-40 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-glow rounded-full blur-[120px] pointer-events-none" />
            <div className="container relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-dim border border-accent-border text-accent text-sm font-medium mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    NexVault v3.2 Active
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-8xl mb-8 leading-tight">
                    Securing the <span className="text-accent italic">Digital Frontier</span>
                </h1>
                <p className="text-base md:text-xl text-subtext max-w-2xl mx-auto mb-10 font-light px-4">
                    NexVault provides elite cybersecurity infrastructure for the world's most innovative organizations.
                    Enterprise-grade defense, simplified.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                    <button onClick={() => scrollTo('services')} className="btn-primary text-base px-8 py-4">
                        View Solutions
                    </button>
                    <button onClick={() => scrollTo('contact')} className="px-8 py-4 rounded-lg border border-border hover:bg-white/5 transition-colors text-base">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}
