import { Globe, Shield, Target } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const team = [
  {
    name: 'Cedric KABORE',
    role: 'CEO',
    description: 'Expert in designing and deploying digital solutions for African markets. Leading national-scale infrastructure execution.',
    image: '/IMG_7585.jpg'
  },
  {
    name: 'Dr. Moise Convolbo',
    role: 'CTO',
    description: 'Senior Data & AI Expert. Architecting scalable AI systems and data infrastructure.',
    image: '/IMG_7586.jpg'
  },
  {
    name: 'Amy Fatima Tapsoba',
    role: 'Partnerships',
    description: 'Leading strategic partnerships and international expansion. Bridging collaboration with Japanese ecosystem.',
    image: '/IMG_7587.jpg'
  },
  {
    name: 'Lessi Coulibaly',
    role: 'Cybersecurity Advisor',
    description: 'Senior Technical Support Engineer at Microsoft. Expert in cybersecurity and secure system architecture.',
    image: '/IMG_7588.jpg'
  }
];

export default function About() {
  return (
    <div className="about-page">
      <section className="page-header text-center border-b border-surface-alt pb-16 bg-base">
        <div className="container max-w-4xl pt-24">
          <FadeIn direction="down">
            <h1 className="hero-title text-main text-5xl font-black mt-4 mb-8">About FikassoTech</h1>
            <p className="hero-subtitle text-muted text-lg leading-relaxed max-w-2xl mx-auto">
              FikassoTech is a technology company specializing in the design of sovereign digital infrastructures for Africa.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section bg-surface border-b border-surface-alt relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[100px] opacity-5 rounded-full" />
        
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div 
                className="about-image-container rounded-lg overflow-hidden relative shadow-lg bg-base border border-surface-alt flex items-center justify-center w-full"
                style={{ aspectRatio: '1 / 1' }}
              >
                <Globe className="text-primary opacity-5 absolute" size={600} style={{ right: '-20%', bottom: '-20%' }} />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20">
                   <Target className="text-accent mb-6" size={56} />
                   <h3 className="text-3xl font-black text-main mb-4">Our Vision</h3>
                   <p className="text-base text-center text-muted px-4 leading-relaxed font-medium">
                     "Create the digital infrastructure that will enable Africa to become a global leader in the data economy."
                   </p>
                </div>
              </div>
            </FadeIn>
            
            <div className="about-content">
              <FadeIn direction="left">
                <div className="flex items-center gap-4 mb-8">
                   <Shield className="text-primary" size={32} />
                   <h2 className="text-3xl font-bold text-main">Our Mission</h2>
                </div>
                
                <p className="text-muted mb-6 leading-relaxed text-lg">
                  We develop solutions that enable institutions to:
                </p>
                
                <ul className="flex flex-col gap-4 mb-8">
                  {[
                    "Secure digital and physical identity",
                    "Structure critical data securely",
                    "Improve operational productivity",
                    "Strengthen governance transparency"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-base border border-surface-alt p-4 rounded-md shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="font-semibold text-main">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-muted leading-relaxed text-lg p-6 bg-surface-alt rounded-lg border-l-4 border-primary">
                  Our global mission is to enable African states and businesses to fully leverage the digital revolution and artificial intelligence securely.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-base">
        <div className="container">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <span className="badge bg-surface-alt text-primary mb-4 inline-block px-4 py-1 rounded-full font-mono text-sm border border-surface">THE ARCHITECTS</span>
              <h2 className="text-4xl font-black text-main mb-4">Leadership Team</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="team-card bg-surface rounded-xl shadow-md border border-surface-alt text-center p-8 relative overflow-hidden group hover:border-primary transition-colors">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-primary to-accent">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover w-full h-full rounded-full bg-base" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-main mb-1">{member.name}</h3>
                  <p className="text-primary font-mono text-sm uppercase tracking-wide mb-4">{member.role}</p>
                  
                  {/* Subtle hover effect to reveal more details or socials */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-surface-alt transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-xs text-muted mb-2 line-clamp-2">{member.description}</p>
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
