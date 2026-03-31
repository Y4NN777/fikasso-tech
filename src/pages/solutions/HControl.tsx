import { Hotel, BookOpen, ShieldCheck, Link2 } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function HControl() {
  return (
    <div className="solution-detail-page bg-base min-h-screen">
      <section className="pt-32 pb-16 border-b border-surface-alt bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Hotel size={800} strokeWidth={0.5} className="text-accent" />
        </div>
        
        <div className="container max-w-4xl text-center relative z-10">
          <FadeIn direction="down">
            <div className="inline-flex items-center justify-center p-6 bg-base rounded-2xl shadow-lg border border-surface mb-8">
              <Hotel size={64} className="text-accent" />
            </div>
            <h1 className="text-6xl font-black text-main mb-6">HControl</h1>
            <h2 className="text-3xl font-bold text-primary mb-8">Hospitality Digital Compliance</h2>
            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Digitalization of police records and full tourism traceability. 
              Modernizing the hospitality sector through strict, frictionless data sovereignty.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section py-20">
        <div className="container max-w-5xl">
          <FadeIn direction="up">
             <div className="bg-surface p-12 rounded-2xl border border-surface-alt shadow-lg">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                   <div>
                     <h3 className="text-3xl font-bold text-main mb-6">Automating Regulatory Compliance</h3>
                     <p className="text-muted leading-relaxed mb-6">
                       For decades, hospitality data collection has relied on manual police forms—leading to fragmented intelligence, massive fraud, and severe delays in security audits. HControl digitalizes the entire guest check-in pipeline.
                     </p>
                     
                     <ul className="flex flex-col gap-4">
                       <li className="flex gap-4">
                         <BookOpen className="text-primary flex-shrink-0 mt-1" size={24} />
                         <div>
                            <strong className="text-main block">Digital Police Forms</strong>
                            <span className="text-sm text-muted">Eliminates paper trails, transmitting secure guest logs directly to government enforcement endpoints in absolute real-time.</span>
                         </div>
                       </li>
                       <li className="flex gap-4">
                         <ShieldCheck className="text-accent flex-shrink-0 mt-1" size={24} />
                         <div>
                            <strong className="text-main block">Tourism Traceability</strong>
                            <span className="text-sm text-muted">Aids national ministries in mapping tourism flows securely, respecting data privacy while enabling actionable macro-analytics via Lynx.</span>
                         </div>
                       </li>
                       <li className="flex gap-4">
                         <Link2 className="text-primary flex-shrink-0 mt-1" size={24} />
                         <div>
                            <strong className="text-main block">Interpol Integration ready</strong>
                            <span className="text-sm text-muted">Designed to interface directly with existing watchlist protocols invisibly to the hospitality provider.</span>
                         </div>
                       </li>
                     </ul>
                   </div>
                   
                   <div className="relative">
                      <div className="aspect-[4/5] bg-base rounded-xl border border-surface-alt shadow-md p-6 relative overflow-hidden">
                         <div className="flex items-center gap-3 mb-8 border-b border-surface-alt pb-4">
                           <div className="w-12 h-12 bg-surface rounded-full"></div>
                           <div>
                             <div className="w-24 h-4 bg-surface rounded mb-2"></div>
                             <div className="w-16 h-3 bg-surface rounded opacity-50"></div>
                           </div>
                           <div className="ml-auto px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs font-bold rounded">VERIFIED</div>
                         </div>
                         
                         <div className="space-y-4">
                            <div className="w-full h-8 bg-surface rounded-md"></div>
                            <div className="w-full h-8 bg-surface rounded-md"></div>
                            <div className="w-3/4 h-8 bg-surface rounded-md"></div>
                         </div>
                         
                         <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent loading-bar"></div>
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
