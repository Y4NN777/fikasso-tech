import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-surface border-t border-surface-alt">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="footer-brand md:col-span-2">
          <Link to="/" className="inline-block mb-6">
            <Logo scale={0.9} />
          </Link>
          <p className="footer-desc text-muted mt-2 leading-relaxed">
            Building Africa's sovereign digital infrastructure.<br/>
            Transforming how the continent captures, secures and uses data.
          </p>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading text-main font-bold mb-4">Ecosystem</h4>
          <ul className="space-y-3 text-muted">
            <li><Link to="/solutions/pcontrol" className="hover:text-primary transition-colors">PControl (Identity)</Link></li>
            <li><Link to="/solutions/hcontrol" className="hover:text-primary transition-colors">HControl (Hospitality)</Link></li>
            <li><Link to="/solutions/wcontrol" className="hover:text-primary transition-colors">WControl (eKYC)</Link></li>
            <li><Link to="/solutions/lynx" className="hover:text-primary transition-colors">Lynx (AI Platform)</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading text-main font-bold mb-4">Company</h4>
          <ul className="space-y-3 text-muted">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/sectors" className="hover:text-accent transition-colors">Industries</Link></li>
            <li><Link to="/deployments" className="hover:text-accent transition-colors">Real Deployments</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors">Journal & Insights</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading text-main font-bold mb-4">Global Operations</h4>
          <ul className="contact-list space-y-4">
            <li className="flex gap-3 text-muted">
              <MapPin size={20} className="text-primary flex-shrink-0" />
              <span className="text-sm">Abidjan, Côte d'Ivoire<br/>Ouagadougou, Burkina Faso</span>
            </li>
            <li className="flex gap-3 text-muted">
              <MapPin size={20} className="text-accent flex-shrink-0" />
              <span className="text-sm">Tokyo, Japan (Engineering)</span>
            </li>
            <li className="flex gap-3 text-muted mt-4">
              <Mail size={18} className="text-primary flex-shrink-0" />
              <span className="text-sm">contact@fikassotech.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom border-t border-surface-alt bg-base py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between text-muted text-sm gap-4">
          <p>&copy; {currentYear} FikassoTech. All rights reserved.</p>
          <div className="legal-links flex gap-6">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
