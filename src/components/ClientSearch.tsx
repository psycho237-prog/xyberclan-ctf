import { useState } from 'react';
import { Search, Database, AlertCircle } from 'lucide-react';

export default function ClientSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const resp = await fetch(`http://localhost:5000/api/search-clients?name=${query}`);
            const data = await resp.json();
            if (!resp.ok) {
                throw new Error(data.error || 'Server error');
            }
            setResults(data);
        } catch (err: any) {
            setError(err.message);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container py-20 border-t border-border">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                        <Database className="text-accent" />
                    </div>
                    <div>
                        <h2 className="text-3xl">Internal Client Registry</h2>
                        <p className="text-subtext">Proprietary database access for authorized personnel only.</p>
                    </div>
                </div>

                <div className="glass p-8 rounded-2xl mb-8">
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-subtext" size={18} />
                            <input
                                type="text"
                                placeholder="Search by client name..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-black/50 border border-border p-3 pl-12 rounded-lg text-white outline-none focus:border-accent"
                            />
                        </div>
                        <button type="submit" className="btn-primary" disabled={loading}>
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </form>
                </div>

                {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl mb-8 flex items-start gap-3">
                        <AlertCircle className="text-red-500 shrink-0" size={18} />
                        <div className="font-mono text-xs text-red-500">
                            <p className="font-bold mb-1">Database Error:</p>
                            <code>{error}</code>
                        </div>
                    </div>
                )}

                {results.length > 0 && (
                    <div className="overflow-hidden glass rounded-2xl">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-border bg-white/5">
                                    <th className="p-4 font-semibold text-accent">Name</th>
                                    <th className="p-4 font-semibold text-accent">Company</th>
                                    <th className="p-4 font-semibold text-accent">Tier</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((res, i) => (
                                    <tr key={i} className="border-b border-border last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="p-4">{res.name}</td>
                                        <td className="p-4">{res.company}</td>
                                        <td className="p-4">{res.plan}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {!loading && results.length === 0 && !error && query && (
                    <p className="text-center text-subtext">No clients found matching your search.</p>
                )}
            </div>
        </section>
    );
}
