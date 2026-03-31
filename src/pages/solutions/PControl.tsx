import { Fingerprint, Lock, Eye, Building } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function PControl() {
  return (
    <div className="solution-detail-page bg-base min-h-screen">
      <section className="pt-32 pb-16 border-b border-surface-alt bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Fingerprint size={800} strokeWidth={0.5} className="text-primary" />
        </div>
        
        <div className="container max-w-4xl text-center relative z-10">
          <FadeIn direction="down">
            <div className="inline-flex items-center justify-center p-6 bg-base rounded-2xl shadow-lg border border-surface mb-8">
              <Fingerprint size={64} className="text-primary" />
            </div>
            <h1 className="text-6xl font-black text-main mb-6">PControl</h1>
            <h2 className="text-3xl font-bold text-accent mb-8">Identity and Access Management System</h2>
            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Access security and advanced KYC capabilities. 
              The most advanced, sovereign-first biometric authentication and multi-node physical perimeter security platform in Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section py-20">
        <div className="container max-w-5xl">
          <FadeIn direction="up">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-surface p-8 rounded-xl border border-surface-alt relative overflow-hidden group hover:border-primary transition-colors">
                <Lock className="text-primary mb-6" size={40} />
                <h3 className="text-xl font-bold text-main mb-4">Zero-Trust Perimeters</h3>
                <p className="text-muted leading-relaxed text-sm">
                  Continuous multi-factor physical authentication combined with state-of-the-art encrypted turnstiles and blast-proof airlock integration.
                </p>
              </div>
              
              <div className="bg-surface p-8 rounded-xl border border-surface-alt relative overflow-hidden group hover:border-primary transition-colors">
                <Eye className="text-accent mb-6" size={40} />
                <h3 className="text-xl font-bold text-main mb-4">Deep KYC Traceability</h3>
                <p className="text-muted leading-relaxed text-sm">
                  Instant comparison against national databases directly at edge checkpoints without latency or single-point cloud failure vulnerabilities.
                </p>
              </div>

              <div className="bg-surface p-8 rounded-xl border border-surface-alt relative overflow-hidden group hover:border-primary transition-colors">
                <Building className="text-primary mb-6" size={40} />
                <h3 className="text-xl font-bold text-main mb-4">Facility Management</h3>
                <p className="text-muted leading-relaxed text-sm">
                  Real-time occupancy mapping, evacuation protocols, and clearance segregation mapped dynamically across high-security corporate sites.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
