import { ShieldCheck, UserCheck, Key, RefreshCw } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function WControl() {
  return (
    <div className="solution-detail-page bg-base min-h-screen">
      <section className="pt-32 pb-16 border-b border-surface-alt bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <ShieldCheck size={800} strokeWidth={0.5} className="text-primary" />
        </div>
        
        <div className="container max-w-4xl text-center relative z-10">
          <FadeIn direction="down">
            <div className="inline-flex items-center justify-center p-6 bg-base rounded-2xl shadow-lg border border-surface mb-8">
              <ShieldCheck size={64} className="text-primary" />
            </div>
            <h1 className="text-6xl font-black text-main mb-6">WControl</h1>
            <h2 className="text-3xl font-bold text-accent mb-8">eKYC & Digital Identity Layer</h2>
            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Verification for banks, e-commerce, and public services. 
              The ultimate bridge between anonymous physical users and secure digital platforms.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section py-20">
        <div className="container max-w-5xl">
          <FadeIn direction="up">
            <div className="bg-surface p-10 rounded-2xl border border-surface-alt shadow-lg text-center mb-12">
               <h3 className="text-2xl font-bold text-main mb-6 max-w-2xl mx-auto leading-relaxed">
                 Eliminate identity fraud while onboarding users 10x faster across Web and Mobile.
               </h3>
               
               <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
                  <div className="p-6 bg-base rounded-xl border border-surface-alt">
                     <UserCheck className="text-primary mb-4" size={32} />
                     <h4 className="font-bold text-main mb-2">Automated eKYC</h4>
                     <p className="text-sm text-muted">Facial liveness detection combined with AI-powered ID card scanning, localized for African official documents.</p>
                  </div>
                  <div className="p-6 bg-base rounded-xl border border-surface-alt">
                     <Key className="text-accent mb-4" size={32} />
                     <h4 className="font-bold text-main mb-2">Sovereign Vaults</h4>
                     <p className="text-sm text-muted">A user's identity data never leaves the continent. Decentralized compliance nodes ensure GDPR and localized data laws.</p>
                  </div>
                  <div className="p-6 bg-base rounded-xl border border-surface-alt">
                     <RefreshCw className="text-primary mb-4" size={32} />
                     <h4 className="font-bold text-main mb-2">Continuous Sync</h4>
                     <p className="text-sm text-muted">Cross-verifies identity states against public registries implicitly without creating user friction.</p>
                  </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
