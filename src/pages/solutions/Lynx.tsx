import { BrainCircuit, Activity, Database, Network } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function Lynx() {
  return (
    <div className="solution-detail-page bg-base min-h-screen">
      <section className="pt-32 pb-16 border-b border-surface-alt bg-surface relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <BrainCircuit size={800} strokeWidth={0.5} className="text-accent animate-pulse" />
        </div>
        
        <div className="container max-w-4xl text-center relative z-10">
          <FadeIn direction="down">
            <div className="inline-flex items-center justify-center p-6 bg-base rounded-2xl shadow-lg border border-surface mb-8">
              <BrainCircuit size={64} className="text-accent" />
            </div>
            <h1 className="text-6xl font-black text-main mb-6">Lynx</h1>
            <h2 className="text-3xl font-bold text-accent mb-8">AI-powered Central Command Platform</h2>
            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Global supervision and holistic data intelligence. 
              The ultimate sovereign brain connecting all edge nodes and analytical infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section py-20">
        <div className="container max-w-5xl">
          <FadeIn direction="up">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-surface p-8 rounded-xl border border-surface-alt">
                <Activity className="text-primary mb-4" size={32} />
                <h3 className="text-2xl font-bold text-main mb-4">Real-Time Supervision</h3>
                <p className="text-muted leading-relaxed">
                  Lynx digests millions of data points across physical control nodes, hospitality tracking, and mobile money transactions, providing state actors and enterprises a complete, zero-latency dashboard.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-xl border border-surface-alt">
                <Database className="text-primary mb-4" size={32} />
                <h3 className="text-2xl font-bold text-main mb-4">Sovereign Data Storage</h3>
                <p className="text-muted leading-relaxed">
                  All ingested telemetry and operational data is stored on localized infrastructure, immune to foreign jurisdiction sweeps and external network outages.
                </p>
              </div>
              <div className="bg-surface p-8 rounded-xl border border-surface-alt md:col-span-2 flex flex-col items-center text-center">
                <Network className="text-accent mb-4" size={48} />
                <h3 className="text-2xl font-bold text-main mb-4">Global Network Interoperability</h3>
                <p className="text-muted leading-relaxed max-w-3xl">
                  Seamlessly integrates output from PControl, HControl, MControl, GControl, and WControl into a unified, encrypted command center interface.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
