import { CheckCircle2, Trophy, ShieldCheck, MapPin, Award } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Deployments() {
  const deployments = [
    {
      client: "Ministry of Defense",
      status: "Active Deployment",
      icon: <ShieldCheck size={28} className="text-primary" />
    },
    {
      client: "Directorate General of Customs",
      status: "Active Deployment",
      icon: <CheckCircle2 size={28} className="text-accent" />
    },
    {
      client: "National Security Institutions",
      status: "Operational",
      icon: <ShieldCheck size={28} className="text-primary" />
    },
    {
      client: "Public Institutions (Pilot Projects)",
      status: "Rolling Out",
      icon: <MapPin size={28} className="text-accent" />
    }
  ];

  const awards = [
    { title: "POESAM Africa & Middle East - 1st Prize", org: "Orange Burkina", year: "Aug 2021" },
    { title: "Startupper of the Year", org: "TotalEnergies", year: "2024" },
    { title: "National Creativity Award - 1st Prize", org: "Ministry of Youth Burkina Faso", year: "Oct 2021" },
    { title: "Burkina Startup Program Laureate", org: "FBDES", year: "2020" },
    { title: "Génie TIC - 1st Prize", org: "Ministry of Digital Economy", year: "2020" },
    { title: "Special Innovation Award", org: "Presidency of Burkina Faso", year: "2021" },
    { title: "PAIF PME Laureate", org: "World Bank", year: "2024" },
  ];

  return (
    <div className="deployments-page">
      <section className="page-header border-b border-surface-alt bg-base">
        <div className="container text-center max-w-4xl pt-24 pb-16">
          <FadeIn direction="down">
            <span className="badge text-primary bg-surface-alt border border-surface px-4 py-1 rounded-full font-mono text-sm mb-6 inline-block">
              PROVEN EXECUTION
            </span>
            <h1 className="hero-title text-main text-5xl font-black mb-6">Real Deployments</h1>
            <p className="hero-subtitle text-muted text-xl max-w-2xl mx-auto leading-relaxed">
              FikassoTech infrastructure is already actively securing the most sensitive environments across the continent.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface border-b border-surface-alt">
        <div className="container max-w-5xl">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {deployments.map((dep, idx) => (
                <div key={idx} className="bg-base p-8 rounded-xl border border-surface-alt shadow-sm flex items-start gap-4 hover:border-primary transition-colors">
                  <div className="bg-surface p-4 rounded-lg border border-surface-alt">
                    {dep.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-main mb-2">{dep.client}</h3>
                    <span className="text-xs font-mono px-2 py-1 bg-surface-alt text-primary rounded border border-primary border-opacity-20 inline-flex items-center gap-1 uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> {dep.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-base relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent blur-[150px] opacity-5 rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary blur-[150px] opacity-5 rounded-full" />
        
        <div className="container relative z-10 max-w-6xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <Trophy size={48} className="text-accent mx-auto mb-6" />
              <h2 className="text-4xl font-black text-main mb-4">Awards & Recognitions</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                Recognized for innovation, impact and technological excellence across Africa.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, idx) => (
                <div key={idx} className="bg-surface p-6 rounded-lg border border-surface-alt hover:border-accent transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="text-accent group-hover:scale-110 transition-transform">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-main mb-1 text-lg leading-tight">{award.title}</h4>
                      <div className="flex flex-col gap-1 mt-3">
                        <span className="text-sm text-muted font-medium flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-primary rounded-full"/> {award.org}
                        </span>
                        <span className="text-xs font-mono text-main">{award.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
