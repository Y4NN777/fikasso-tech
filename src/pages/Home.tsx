import { 
  ArrowRight, ShieldCheck, Activity, BrainCircuit, Globe2, 
  Smartphone, Bus, Hotel, Building2, Fingerprint 
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

interface SolutionProps {
  icon: LucideIcon;
  name: string;
  desc: string;
  link: string;
}

const SolutionCard = ({ icon: Icon, name, desc, link }: SolutionProps) => (
  <div className="bg-surface rounded-lg p-6 border border-surface-alt shadow-md hover:border-primary transition-colors group">
    <div className="text-primary mb-4 p-3 bg-surface-alt inline-block rounded-md group-hover:bg-primary group-hover:text-base transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2 text-main flex items-center gap-2">
      {name}
    </h3>
    <p className="text-muted text-sm leading-relaxed mb-4">{desc}</p>
    <Link to={link} className="text-accent text-sm font-semibold flex items-center group-hover:underline">
      Learn more <ArrowRight size={14} className="ml-1" />
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className="home-page">
      {/* 🚀 HERO SECTION */}
      <section className="hero-section min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
        <div className="hero-bg-pattern opacity-30 absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
        
        <div className="container relative z-10 text-center max-w-4xl">
          <FadeIn direction="up">
            <div className="inline-block px-4 py-1 rounded-full bg-surface-alt border border-surface text-accent mb-6 font-mono text-sm shadow-gold">
              FIKASSOTECH CORE INFRASTRUCTURE
            </div>
            <h1 className="hero-title text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              Building Africa’s Sovereign <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Digital Infrastructure
              </span>
            </h1>
            <p className="hero-subtitle text-lg text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
              We design and deploy intelligent identity, security, and data operation solutions for governments, institutions, and enterprises in Africa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn btn-primary btn-lg w-full sm:w-auto text-base">
                Request a Demo <ArrowRight size={18} />
              </Link>
              <Link to="/solutions" className="btn btn-outline border-primary text-primary hover:bg-surface btn-lg w-full sm:w-auto text-base">
                Explore Our Solutions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🚀 SECTION 2 — NOTRE MISSION */}
      <section className="section bg-surface border-y border-surface-alt">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-square bg-base rounded-lg border border-primary opacity-20 absolute -left-4 -top-4 w-full h-full transform -rotate-3 blur-sm" />
                <div className="aspect-square bg-base rounded-lg border border-surface-alt p-8 relative flex flex-col justify-center shadow-lg">
                   <Globe2 size={120} className="text-primary mb-6 animate-pulse opacity-50 mx-auto" strokeWidth={1} />
                   <div className="text-center font-mono text-xs text-accent tracking-widest uppercase">
                     Data Capture / Security / Utilization
                   </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <h2 className="text-3xl font-bold mb-4 text-main">
                Transforming how Africa captures, secures and uses data
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                In many sectors, data is still collected manually, fragmented, and underutilized.
              </p>
              <p className="text-muted leading-relaxed">
                <span className="text-primary font-semibold">FikassoTech transforms this reality</span> by building sovereign digital infrastructure tailored to African realities and designed for global standards.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 📊 SECTION 3 — IMPACT */}
      <section className="section bg-base">
        <div className="container text-center">
          <FadeIn>
            <h2 className="text-sm font-mono text-accent mb-12 tracking-widest">MEASURABLE IMPACT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "+50,000", desc: "Secured checkpoints and transactions" },
                { title: "Strategic", desc: "Deployments in critical institutions" },
                { title: "5+ Years", desc: "Field-tested solutions at scale" },
                { title: "Multi-sector", desc: "Security, finance, hospitality, transport" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-surface rounded-lg border border-surface-alt shadow-sm">
                  <h3 className="text-3xl font-black text-primary mb-2 line-clamp-1">{stat.title}</h3>
                  <p className="text-sm text-muted">{stat.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🧠 SECTION 4 — NOS SOLUTIONS */}
      <section className="section bg-surface border-y border-surface-alt">
        <div className="container">
          <FadeIn direction="down">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 text-main">Our Solutions</h2>
              <p className="text-muted">A modular ecosystem designed for real-world deployment</p>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <SolutionCard icon={Fingerprint} name="PControl" desc="Identity & Access Control" link="/solutions/pcontrol" />
              <SolutionCard icon={Hotel} name="HControl" desc="Hospitality Digital Compliance" link="/solutions/hcontrol" />
              <SolutionCard icon={Smartphone} name="MControl" desc="Mobile Money Intelligence" link="/solutions/mcontrol" />
              <SolutionCard icon={Bus} name="GControl" desc="Smart Transport Systems" link="/solutions/gcontrol" />
              <SolutionCard icon={ShieldCheck} name="WControl" desc="eKYC & Digital Services" link="/solutions/wcontrol" />
              <SolutionCard icon={BrainCircuit} name="Lynx" desc="Central AI Data Intelligence Platform" link="/solutions/lynx" />
            </div>
            
            <div className="text-center">
              <Link to="/solutions" className="btn btn-outline border-accent text-accent hover:bg-accent hover:text-base">
                View All Solutions <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🏛️ SECTION 5 — SECTEURS */}
      <section className="section bg-base">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12 text-main">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Governments & Public Institutions",
                "Banking & Mobile Money",
                "Hospitality & Tourism",
                "Transportation & Logistics",
                "Enterprises & Critical Sites",
                "Health & Strategic Projects"
              ].map((sector, i) => (
                <div key={i} className="px-6 py-4 bg-surface border border-surface-alt rounded-full flex items-center gap-3 shadow-sm hover:border-primary transition-colors cursor-default">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-main text-sm">{sector}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 🛡️ SECTION 6 — POURQUOI FIKASSOTECH */}
      <section className="section bg-surface-alt border-y border-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold mb-4 text-main">Built for Africa. Designed for scale.</h2>
              <p className="text-muted mb-8">
                Cutting-edge technological infrastructures that respond to the complex realities of our continent.
              </p>
              
              <ul className="flex flex-col gap-4">
                {[
                  "Real field expertise in deployment",
                  "Solutions adapted to local constraints (offline, USSD, etc.)",
                  "AI + Cybersecurity + Identity integration",
                  "Sovereign approach to critical data",
                  "Scalable PPP (Public-Private Partnership) model"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-base p-4 rounded-md shadow-sm border border-surface">
                    <ShieldCheck className="text-primary flex-shrink-0" size={20} />
                    <span className="text-sm font-medium text-main">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="left">
               <div className="bg-base rounded-lg p-8 border border-accent shadow-lg text-center h-full flex flex-col justify-center">
                 <Activity size={80} className="text-accent mx-auto mb-6 opacity-80" />
                 <h3 className="text-xl font-bold text-main mb-2">Zero-Trust Architecture</h3>
                 <p className="text-muted text-sm">Every access request is fully authenticated, authorized, and encrypted before granting access to infrastructure.</p>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 🌍 SECTION 7 & 8 — VISION & CTA FINAL */}
      <section className="section bg-base relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[150px] opacity-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent blur-[150px] opacity-10 rounded-full" />
        
        <div className="container text-center relative z-10 max-w-3xl">
          <FadeIn direction="up">
            <Building2 size={64} className="text-primary mx-auto mb-8 opacity-50" />
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-main leading-tight">
              Data is the new gold.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">We build the infrastructure to harness it.</span>
            </h2>
            <p className="text-xl text-muted mb-12">Ready to deploy at scale?</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn btn-primary btn-lg shadow-gold">
                Request a Demo
              </Link>
              <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-black btn-lg">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
