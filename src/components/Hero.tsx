export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="container relative z-10 text-center">
                <h1 className="text-6xl md:text-8xl mb-8 leading-tight">
                    Securing the <span className="text-accent italic">Digital Frontier</span>
                </h1>
                <p className="text-xl text-subtext max-w-2xl mx-auto mb-10 font-light">
                    NexVault provides elite cybersecurity infrastructure for the world's most innovative organizations.
                    Enterprise-grade defense, simplified.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="btn-primary">View Solutions</button>
                    <button className="px-8 py-3 rounded-lg border border-border hover:bg-white/5 transition-colors">Get Started</button>
                </div>
            </div>
        </section>
    );
}
