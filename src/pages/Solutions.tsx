import { ArrowRight, Fingerprint, Hotel, Smartphone, Bus, ShieldCheck, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const solutions = [
  {
    id: "pcontrol",
    title: "PControl",
    subtitle: "Identity and Access Management System",
    description: "Access security + KYC",
    icon: Fingerprint,
    color: "var(--color-primary)"
  },
  {
    id: "hcontrol",
    title: "HControl",
    subtitle: "Hospitality Digital Compliance",
    description: "Digitalization of police records + tourism traceability",
    icon: Hotel,
    color: "var(--color-accent)"
  },
  {
    id: "mcontrol",
    title: "MControl",
    subtitle: "Mobile Money Intelligence Platform",
    description: "Fraud prevention + financial data intelligence",
    icon: Smartphone,
    color: "var(--color-primary)"
  },
  {
    id: "gcontrol",
    title: "GControl",
    subtitle: "Smart Transport & Ticketing",
    description: "Bus station digitalization and flow monitoring",
    icon: Bus,
    color: "var(--color-accent)"
  },
  {
    id: "wcontrol",
    title: "WControl",
    subtitle: "eKYC & Digital Identity Layer",
    description: "Verification for banks, e-commerce, and public services",
    icon: ShieldCheck,
    color: "var(--color-primary)"
  },
  {
    id: "lynx",
    title: "Lynx",
    subtitle: "AI-powered Central Command Platform",
    description: "Global supervision + data intelligence",
    icon: BrainCircuit,
    color: "var(--color-accent)"
  }
];

export default function Solutions() {
  return (
    <div className="solutions-page">
      <section className="page-header bg-base border-b border-surface-alt pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30" />
        <div className="container text-center max-w-4xl pt-24 relative z-10">
          <FadeIn direction="down">
            <span className="badge bg-surface-alt text-accent font-mono text-sm px-4 py-1 rounded-full border border-surface mb-6 inline-block shadow-sm">
              THE ECOSYSTEM
            </span>
            <h1 className="hero-title text-main text-5xl font-black mb-6">Our Solutions</h1>
            <p className="hero-subtitle text-muted text-xl leading-relaxed max-w-2xl mx-auto">
              A complete ecosystem of interoperable solutions designed for large-scale deployment.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <FadeIn key={sol.id} delay={index * 0.1} direction="up" fullWidth>
                  <Link 
                    to={`/solutions/${sol.id}`} 
                    className="block h-full bg-base rounded-xl p-8 shadow-sm border border-surface-alt hover:border-primary transition-all group hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon size={120} strokeWidth={1} style={{ transform: 'rotate(-15deg) translate(20px, -20px)', color: sol.color }} />
                    </div>
                    
                    <div 
                      className="p-4 rounded-lg inline-flex mb-8 shadow-sm"
                      style={{ backgroundColor: 'var(--color-surface)', border: `1px solid ${sol.color}40`, color: sol.color }}
                    >
                      <Icon size={32} />
                    </div>
                    
                    <h2 className="text-3xl font-black text-main mb-2 tracking-tight group-hover:text-primary transition-colors">
                      {sol.title}
                    </h2>
                    <h3 className="text-lg font-bold text-accent mb-4">
                      {sol.subtitle}
                    </h3>
                    
                    <div className="h-px w-12 bg-surface-alt mb-6 group-hover:w-full transition-all duration-300" />
                    
                    <p className="text-muted leading-relaxed font-medium mb-8">
                      {sol.description}
                    </p>
                    
                    <div className="flex items-center text-primary font-bold text-sm tracking-wide mt-auto group-hover:translate-x-2 transition-transform">
                      EXPLORE PLATFORM <ArrowRight size={16} className="ml-2" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
