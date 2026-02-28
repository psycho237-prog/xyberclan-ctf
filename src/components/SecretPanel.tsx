import { useState } from 'react';

export default function SecretPanel() {
    const [password, setPassword] = useState('');
    const [found, setFound] = useState(false);
    const [error, setError] = useState('');

    // DEBUG: The portal password is "nexus_admin_2024"
    // Flag 6: XYBER{4dm1n_p0rt4l_br34ch3d_442}

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'nexus_admin_2024') {
            setFound(true);
            setError('');
        } else {
            setError('Invalid Access Key.');
        }
    };

    return (
        <section className="container py-32">
            <div className="max-w-md mx-auto glass p-10 rounded-[2rem] text-center">
                <h2 className="text-3xl mb-6">Internal Admin Portal</h2>
                {!found ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <p className="text-sm text-subtext mb-4">Unauthorized access is strictly prohibited.</p>
                        <input
                            type="password"
                            placeholder="Enter Access Key"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-border p-4 rounded-xl text-white outline-none focus:border-accent transition-colors"
                        />
                        {error && <p className="text-red-500 text-xs">{error}</p>}
                        <button type="submit" className="btn-primary w-full">Authenticate</button>
                    </form>
                ) : (
                    <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl">🔓</span>
                        </div>
                        <h3 className="text-2xl text-accent font-bold">Access Granted</h3>
                        <div className="p-6 bg-accent/10 border border-accent/20 rounded-2xl">
                            <p className="text-sm text-subtext mb-2">Final Clearance Level Flag:</p>
                            <code className="text-accent text-lg font-mono">XYBER{'{'}4dm1n_p0rt4l_br34ch3d_442{'}'}</code>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
