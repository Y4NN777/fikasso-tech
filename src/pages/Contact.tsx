import { Mail, MapPin, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="page-header bg-base border-b border-surface-alt">
        <div className="container text-center max-w-4xl pt-24 pb-12">
          <FadeIn direction="down">
            <h1 className="hero-title text-main text-5xl font-black mt-4 mb-6">
              Let’s build the future of Africa’s digital infrastructure
            </h1>
            <p className="hero-subtitle text-muted mb-8 text-xl max-w-2xl mx-auto">
              Our engineering team is ready to audit your current infrastructure and propose a sovereign deployment strategy.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            
            <FadeIn direction="right">
              <div className="contact-info bg-base p-8 lg:p-12 rounded-xl shadow-sm border border-surface-alt h-full">
                <h2 className="text-2xl font-bold text-main mb-6">Reach Out</h2>
                <p className="text-muted mb-12 leading-relaxed">
                  Due to the sensitive nature of our deployments for government and military entities, 
                  all initial consultations are strictly confidential and completely encrypted.
                </p>
                
                <div className="contact-methods flex flex-col gap-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-surface-alt text-primary p-3 rounded-lg border border-surface">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-main mb-1">Encrypted Comms</h4>
                      <p className="text-muted">contact@fikassotech.com</p>
                      <p className="text-xs text-primary mt-1 font-mono">PGP Key available upon request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-surface-alt text-accent p-3 rounded-lg border border-surface">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-main mb-2">Global Operations</h4>
                      <div className="space-y-3">
                         <div>
                           <p className="text-main font-medium">Africa Base</p>
                           <p className="text-muted text-sm border-l-2 border-accent pl-3 mt-1">Ouagadougou / Abidjan</p>
                         </div>
                         <div>
                           <p className="text-main font-medium">Asia Engineering Hub</p>
                           <p className="text-muted text-sm border-l-2 border-accent pl-3 mt-1">Tokyo, Japan</p>
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-surface-alt rounded-lg border border-primary border-opacity-20 flex gap-4 items-center">
                    <ShieldCheck size={32} className="text-primary flex-shrink-0" />
                    <p className="text-sm font-semibold text-main">Your data is handled under strict zero-trust protocols.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="contact-form-container bg-base p-8 lg:p-12 rounded-xl shadow-md border border-surface-alt h-full flex flex-col">
                <h3 className="text-xl font-bold text-main mb-8">Request a Confidential Consultation</h3>
                
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-main">First Name</label>
                      <input type="text" className="p-3 border border-surface-alt rounded-md bg-surface text-main focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-main">Last Name</label>
                      <input type="text" className="p-3 border border-surface-alt rounded-md bg-surface text-main focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-main">Organization / Government Body</label>
                    <input type="text" className="p-3 border border-surface-alt rounded-md bg-surface text-main focus:outline-none focus:border-primary transition-colors" placeholder="Ministry of Defense" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-main">Official Email</label>
                    <input type="email" className="p-3 border border-surface-alt rounded-md bg-surface text-main focus:outline-none focus:border-primary transition-colors" placeholder="john.doe@gov.ci" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-main">Project Overview</label>
                    <textarea className="p-3 border border-surface-alt rounded-md bg-surface text-main focus:outline-none focus:border-primary transition-colors h-24 resize-none" placeholder="Briefly describe your infrastructure needs..."></textarea>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <button className="btn btn-primary w-full justify-center py-4 text-sm whitespace-nowrap">
                      Initiate Secure Contact <ArrowRight size={16} className="ml-2" />
                    </button>
                    <a href="https://calendly.com/fikassotech/demo" target="_blank" rel="noreferrer" className="btn btn-outline border-accent text-accent hover:bg-surface w-full justify-center py-4 text-sm whitespace-nowrap">
                      <Calendar size={18} className="mr-2" /> Book via Calendly
                    </a>
                  </div>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
