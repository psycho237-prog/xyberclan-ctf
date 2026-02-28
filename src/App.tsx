import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SecretPanel from './components/SecretPanel';

function Home() {
  return (
    <>
      <Hero />
      <section className="container py-20">
        <h2 className="text-4xl mb-10">Advanced Protection for the Xyber Era</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl mb-4 text-accent">Threat Intelligence</h3>
            <p className="text-subtext">Real-time monitoring and proactive defense against emerging cyber threats.</p>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl mb-4 text-accent">Security Audits</h3>
            <p className="text-subtext">Comprehensive vulnerability assessments for enterprise infrastructure.</p>
          </div>
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl mb-4 text-accent">Encryption Services</h3>
            <p className="text-subtext">Military-grade data protection for your most sensitive digital assets.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  useEffect(() => {
    // Flag 3: XYBER{c0ns0le_l0g_sh3n4n1g4ns_882} 
    // Encoded in Base64 for a bit of extra "effort"
    console.log("Welcome to NexVault Security. Internal system status: OK.");
    console.log("Debug Info (Base64): WFlCRVJ7YzBuczBsZV9sMGdfc2g0bjRuMWc0bnNfODgyfQ==");

    // Flag 4: Cookie Monster
    // XYBER{c00k1e_hidd3n_v4lu3_123} encoded in hex: 58594245527b6330306b31655f68696464336e5f76346c75335f3132337d
    document.cookie = "auth_token=58594245527b6330306b31655f68696464336e5f76346c75335f3132337d; path=/";
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/s3cret-panel" element={<SecretPanel />} />
        </Routes>
        <footer className="py-10 border-t border-border mt-20">
          <div className="container text-center text-subtext">
            © 2024 NexVault Security. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
