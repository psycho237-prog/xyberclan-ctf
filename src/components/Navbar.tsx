import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="py-6 border-b border-border sticky top-0 bg-bg z-50">
            <div className="container flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <Shield className="text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-xl font-bold tracking-tight">NexVault</span>
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-medium text-subtext">
                    <Link to="/" className="hover:text-white transition-colors">Solutions</Link>
                    <a href="#" className="hover:text-white transition-colors">Intelligence</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>
                <button className="btn-primary text-sm">Client Login</button>
            </div>
        </nav>
    );
}
