import { Building2, Landmark, Wallet, Hotel, Bus, Activity } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const sectors = [
  {
    id: "government",
    title: "Government",
    description: "Digital governance, identity control, public data infrastructure",
    icon: Landmark,
    accent: "var(--color-primary)"
  },
  {
    id: "finance",
    title: "Finance",
    description: "Mobile money, compliance, fraud detection",
    icon: Wallet,
    accent: "var(--color-accent)"
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Guest data, compliance, tax traceability",
    icon: Hotel,
    accent: "var(--color-primary)"
  },
  {
    id: "transport",
    title: "Transport",
    description: "Ticketing, identity verification, flows monitoring",
    icon: Bus,
    accent: "var(--color-accent)"
  },
  {
    id: "enterprises",
    title: "Enterprises",
    description: "Access control, workforce tracking, data systems",
    icon: Building2,
    accent: "var(--color-primary)"
  },
  {
    id: "health",
    title: "Health",
    description: "Data infrastructure, emergency systems, logistics",
    icon: Activity,
    accent: "var(--color-accent)"
  }
];

export default function Sectors() {
  return (
    <div className="sectors-page">
      <section className="page-header text-center border-b border-surface-alt pb-16 bg-base">
        <div className="container max-w-4xl pt-24">
          <FadeIn direction="down">
            <span className="badge bg-surface-alt text-primary font-mono text-sm px-4 py-1 rounded-full mb-6 inline-block border border-surface">
              STRATEGIC VERTICALS
            </span>
            <h1 className="hero-title text-main text-5xl font-black mb-6">Industries We Serve</h1>
            <p className="hero-subtitle text-muted text-xl leading-relaxed max-w-2xl mx-auto">
              Sovereign infrastructure explicitly designed for the security and scale required by critical African sectors.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-[0.03]" />
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <FadeIn key={sector.id} delay={idx * 0.1} direction="up" fullWidth>
                  <div className="h-full bg-base p-8 rounded-xl border border-surface-alt shadow-sm hover:border-primary transition-all group hover:-translate-y-1 relative">
                    {/* Decorative Background Icon */}
                    <div className="absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
                      <Icon size={180} strokeWidth={1} />
                    </div>
                    
                    <div 
                      className="inline-flex p-4 rounded-lg mb-8"
                      style={{ backgroundColor: `${sector.accent}15`, color: sector.accent, border: `1px solid ${sector.accent}30` }}
                    >
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl font-black text-main mb-4">{sector.title}</h2>
                    <div className="w-12 h-1 mb-6 rounded-full" style={{ backgroundColor: sector.accent }} />
                    <p className="text-muted leading-relaxed font-medium">
                      {sector.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
