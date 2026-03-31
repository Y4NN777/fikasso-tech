import { ArrowRight, BookOpen } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const articles = [
  {
    id: "data-sovereignty",
    title: "The Case for Data Sovereignty in Africa",
    category: "Strategic Infrastructure",
    date: "March 2026",
    readTime: "8 min read",
    summary: "Why relying on foreign cloud providers for national security and governmental data is an existential risk, and how local ledgers solve it."
  },
  {
    id: "digital-identity",
    title: "Fixing Digital Identity at Scale",
    category: "Identity Systems",
    date: "February 2026",
    readTime: "6 min read",
    summary: "Exploring the technical hurdles of implementing eKYC and biometric infrastructure across diverse African demographics."
  },
  {
    id: "ai-governments",
    title: "AI for Governments: Beyond the Hype",
    category: "Artificial Intelligence",
    date: "January 2026",
    readTime: "10 min read",
    summary: "How ministries can practically deploy machine learning to optimize traffic, monitor hospitality compliance, and predict security threats."
  },
  {
    id: "mobile-money-risks",
    title: "Mitigating Mobile Money Fraud via Sovereign AI",
    category: "Financial Security",
    date: "December 2025",
    readTime: "7 min read",
    summary: "An analysis of evolving social engineering attacks and how real-time anomaly detection secures liquidity flows."
  }
];

export default function Blog() {
  return (
    <div className="blog-page">
      <section className="page-header border-b border-surface-alt bg-base">
        <div className="container text-center max-w-4xl pt-24 pb-16">
          <FadeIn direction="down">
             <span className="badge text-accent bg-surface-alt border border-surface px-4 py-1 rounded-full font-mono text-sm mb-6 inline-block">
               INSIGHTS & RESEARCH
             </span>
             <h1 className="hero-title text-main text-5xl font-black mb-6">FikassoTech Journal</h1>
             <p className="hero-subtitle text-muted text-xl max-w-2xl mx-auto leading-relaxed">
               Strategic perspectives on digital identity, data sovereignty, and AI infrastructure for the African continent.
             </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container max-w-5xl">
           <div className="grid md:grid-cols-2 gap-8">
             {articles.map((article, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} fullWidth>
                   <article className="bg-base p-8 rounded-xl border border-surface-alt shadow-sm hover:border-accent transition-colors h-full flex flex-col cursor-pointer group">
                      <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-wider">
                         <span className="text-primary font-bold">{article.category}</span>
                         <span className="text-surface-alt text-muted">•</span>
                         <span className="text-muted">{article.readTime}</span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-main mb-4 group-hover:text-accent transition-colors">
                        {article.title}
                      </h2>
                      
                      <p className="text-muted leading-relaxed font-medium mb-8 flex-grow">
                        {article.summary}
                      </p>
                      
                      <div className="flex items-center justify-between border-t border-surface-alt pt-6 mt-auto">
                         <span className="text-sm text-muted font-medium">{article.date}</span>
                         <span className="text-primary font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                            Read Article <ArrowRight size={16} className="ml-2" />
                         </span>
                      </div>
                   </article>
                </FadeIn>
             ))}
           </div>
           
           <FadeIn>
             <div className="mt-16 bg-surface-alt border border-surface rounded-xl p-8 text-center flex flex-col items-center">
                <BookOpen className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-bold text-main mb-2">Subscribe to our technical brief</h3>
                <p className="text-muted mb-6">Receive encrypted digests of our latest security research.</p>
                <div className="flex max-w-md w-full gap-2">
                   <input type="email" placeholder="Official Email Address" className="w-full bg-base border border-surface-alt rounded-lg px-4 py-3 text-main focus:outline-none focus:border-primary" />
                   <button className="btn btn-primary whitespace-nowrap">Subscribe</button>
                </div>
             </div>
           </FadeIn>
        </div>
      </section>
    </div>
  );
}
