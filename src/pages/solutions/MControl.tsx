import { Smartphone, ShieldAlert, Activity, CreditCard } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function MControl() {
  return (
    <div className="solution-detail-page bg-base min-h-screen">
      <section className="pt-32 pb-16 border-b border-surface-alt bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Smartphone size={800} strokeWidth={0.5} className="text-primary" />
        </div>
        
        <div className="container max-w-4xl text-center relative z-10">
          <FadeIn direction="down">
            <div className="inline-flex items-center justify-center p-6 bg-base rounded-2xl shadow-lg border border-surface mb-8">
              <Smartphone size={64} className="text-primary" />
            </div>
            <h1 className="text-6xl font-black text-main mb-6">MControl</h1>
            <h2 className="text-3xl font-bold text-accent mb-8">Mobile Money Intelligence Platform</h2>
            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Fraud prevention and financial data intelligence. 
              Safeguarding the African digital economy through proactive monitoring and AI-driven anti-fraud mechanisms.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section py-20">
        <div className="container max-w-5xl">
          <FadeIn direction="up">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-surface p-8 rounded-xl border border-surface-alt relative overflow-hidden">
                <ShieldAlert className="text-primary mb-6" size={40} />
                <h3 className="text-xl font-bold text-main mb-4">Fraud Prevention</h3>
                <p className="text-muted leading-relaxed text-sm">
                  Detects anomalous transaction patterns indicative of money laundering, social engineering scams, or wallet hijackings in milliseconds.
                </p>
              </div>
              
              <div className="bg-surface p-8 rounded-xl border border-surface-alt relative overflow-hidden">
                <Activity className="text-accent mb-6" size={40} />
                <h3 className="text-xl font-bold text-main mb-4">Real-Time Auditing</h3>
                <p className="text-muted leading-relaxed text-sm">
                  Provides central banks and telcos with sovereign oversight over liquidity flows without compromising individual endpoint privacy.
                </p>
              </div>

              <div className="bg-surface p-8 rounded-xl border border-surface-alt relative overflow-hidden">
                <CreditCard className="text-primary mb-6" size={40} />
                <h3 className="text-xl font-bold text-main mb-4">API Interoperability</h3>
                <p className="text-muted leading-relaxed text-sm">
                  Agnostic deployment connects with legacy banking infrastructure and modern mobile-money APIs natively via encrypted tunnels.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
