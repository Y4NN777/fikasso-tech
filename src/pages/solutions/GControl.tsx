import { Bus, Map, Ticket, Users } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function GControl() {
  return (
    <div className="solution-detail-page bg-base min-h-screen">
      <section className="pt-32 pb-16 border-b border-surface-alt bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Bus size={800} strokeWidth={0.5} className="text-accent" />
        </div>
        
        <div className="container max-w-4xl text-center relative z-10">
          <FadeIn direction="down">
            <div className="inline-flex items-center justify-center p-6 bg-base rounded-2xl shadow-lg border border-surface mb-8">
              <Bus size={64} className="text-accent" />
            </div>
            <h1 className="text-6xl font-black text-main mb-6">GControl</h1>
            <h2 className="text-3xl font-bold text-primary mb-8">Smart Transport & Ticketing</h2>
            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Bus station digitalization and urban flow monitoring. 
              Bringing transparency, security, and efficiency to the fragmented African transport sector.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section py-20">
        <div className="container max-w-5xl">
          <FadeIn direction="up">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-surface p-8 rounded-xl border border-surface-alt shadow-sm hover:border-accent transition-colors">
                <Map className="text-accent mb-4" size={32} />
                <h3 className="text-2xl font-bold text-main mb-4">Traffic Flow Monitoring</h3>
                <p className="text-muted leading-relaxed">
                  Real-time mapping of passenger transit across major hubs. Empowers city planners with actionable intelligence about infrastructure stress, peak times, and logistical bottlenecks.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-xl border border-surface-alt shadow-sm hover:border-primary transition-colors">
                <Ticket className="text-primary mb-4" size={32} />
                <h3 className="text-2xl font-bold text-main mb-4">Seamless E-Ticketing</h3>
                <p className="text-muted leading-relaxed">
                  Eliminates paper tickets. Passengers use QR codes, NFC, or biometric endpoints. Radically reduces boarding times and prevents fare evasion.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-xl border border-surface-alt shadow-sm hover:border-accent transition-colors md:col-span-2">
                <div className="flex items-start gap-6">
                  <Users className="text-accent flex-shrink-0" size={48} />
                  <div>
                    <h3 className="text-2xl font-bold text-main mb-4">Syndicate & Operator Dashboard</h3>
                    <p className="text-muted leading-relaxed max-w-3xl">
                      Transportation companies and independent syndicates gain full visibility over their fleet's revenue, fuel efficiency, and driver schedules, ensuring absolute financial traceability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
