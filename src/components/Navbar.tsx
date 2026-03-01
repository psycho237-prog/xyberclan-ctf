import { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="nav-bar">
            <div className="container flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <Shield className="text-accent group-hover:scale-110 transition-transform" size={22} />
                    <span className="text-xl font-bold tracking-tight">NexVault</span>
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-medium text-subtext">
                    <button onClick={() => scrollTo('services')} className="nav-link">Solutions</button>
                    <button onClick={() => scrollTo('clients')} className="nav-link">Intelligence</button>
                    <button onClick={() => scrollTo('about')} className="nav-link">About</button>
                    <button onClick={() => scrollTo('contact')} className="nav-link">Contact</button>
                </div>
                <div className="hidden md:block">
                    <button onClick={() => scrollTo('clients')} className="btn-primary text-sm">Client Portal</button>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden w-10 h-10 rounded-lg bg-panel border border-border flex items-center justify-center text-white"
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-panel border-t border-border px-6 py-6 space-y-3">
                    <button onClick={() => scrollTo('services')} className="block w-full text-left text-lg text-zinc-300 py-2">Solutions</button>
                    <button onClick={() => scrollTo('clients')} className="block w-full text-left text-lg text-zinc-300 py-2">Intelligence</button>
                    <button onClick={() => scrollTo('about')} className="block w-full text-left text-lg text-zinc-300 py-2">About</button>
                    <button onClick={() => scrollTo('contact')} className="block w-full text-left text-lg text-zinc-300 py-2">Contact</button>
                    <button onClick={() => scrollTo('clients')} className="btn-primary w-full mt-4">Client Portal</button>
                </div>
            )}
        </nav>
    );
}
