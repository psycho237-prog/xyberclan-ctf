import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shield, Lock, Scan, Globe, Users, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SecretPanel from './components/SecretPanel';
import ClientSearch from './components/ClientSearch';

function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section id="services" className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4">Advanced Protection for the Xyber Era</h2>
          <p className="text-subtext text-lg max-w-2xl mx-auto">End-to-end cybersecurity solutions designed for modern enterprises.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl hover-lift">
            <div className="icon-box mb-6"><Shield size={24} /></div>
            <h3 className="text-xl mb-4 text-accent">Threat Intelligence</h3>
            <p className="text-subtext">Real-time monitoring and proactive defense against emerging cyber threats across your infrastructure.</p>
          </div>
          <div className="glass p-8 rounded-2xl hover-lift">
            <div className="icon-box mb-6"><Scan size={24} /></div>
            <h3 className="text-xl mb-4 text-accent">Security Audits</h3>
            <p className="text-subtext">Comprehensive vulnerability assessments and penetration testing for enterprise networks.</p>
          </div>
          <div className="glass p-8 rounded-2xl hover-lift">
            <div className="icon-box mb-6"><Lock size={24} /></div>
            <h3 className="text-xl mb-4 text-accent">Encryption Services</h3>
            <p className="text-subtext">Military-grade data protection and end-to-end encryption for your most sensitive digital assets.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">500+</p>
              <p className="text-subtext text-sm mt-2">Clients Protected</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">99.9%</p>
              <p className="text-subtext text-sm mt-2">Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">24/7</p>
              <p className="text-subtext text-sm mt-2">Monitoring</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">0 Day</p>
              <p className="text-subtext text-sm mt-2">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl mb-6">Why NexVault?</h2>
            <p className="text-subtext text-lg mb-8 leading-relaxed">
              Founded in 2019, NexVault Security has grown from a boutique consultancy to one of the most trusted names in enterprise cybersecurity. Our team of ethical hackers and security engineers work around the clock to stay ahead of threats.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="icon-box-sm"><Globe size={18} /></div>
                <span className="text-subtext">Global threat intelligence network</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="icon-box-sm"><Users size={18} /></div>
                <span className="text-subtext">50+ certified security professionals</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="icon-box-sm"><Zap size={18} /></div>
                <span className="text-subtext">Automated incident response</span>
              </div>
            </div>
          </div>
          <div className="glass p-10 rounded-3xl text-center">
            <Shield size={64} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl mb-4">Trusted by Fortune 500</h3>
            <p className="text-subtext">Our clients include leading enterprises in finance, healthcare, and technology sectors worldwide.</p>
          </div>
        </div>
      </section>

      {/* Client Search (SQL Injection Challenge) */}
      <ClientSearch />

      {/* Contact Section */}
      <section id="contact" className="container py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6">Get in Touch</h2>
          <p className="text-subtext text-lg mb-10">Ready to secure your infrastructure? Contact our team for a free security assessment.</p>
          <div className="glass p-10 rounded-3xl">
            <form onSubmit={(e) => { e.preventDefault(); alert('Demo form — no data sent.'); }} className="space-y-6">
              <input type="text" placeholder="Your Name" className="input-field" />
              <input type="email" placeholder="Email Address" className="input-field" />
              <textarea placeholder="Tell us about your security needs..." rows={4} className="input-field resize-none" />
              <button type="submit" className="btn-primary w-full text-base py-4">
                Request Free Assessment
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  useEffect(() => {
    // Flag 3: XYBER{c0ns0le_l0g_sh3n4n1g4ns_882}
    console.log("Welcome to NexVault Security. Internal system status: OK.");
    console.log("Debug Info (Base64): WFlCRVJ7YzBuczBsZV9sMGdfc2g0bjRuMWc0bnNfODgyfQ==");

    // Flag 4: Cookie Monster
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
        <footer className="py-10 border-t border-border">
          <div className="container text-center text-subtext text-sm">
            © 2024 NexVault Security. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
