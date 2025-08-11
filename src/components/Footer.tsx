import { Zap, Github, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-darker border-t border-electric/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-electric/10 border border-electric/30">
                <Zap className="h-6 w-6 text-electric" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-electric to-neon bg-clip-text text-transparent">
                RoboSociety
              </span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Building the future through robotics innovation. Join our community of engineers, programmers, and visionaries creating tomorrow's technology.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-surface hover:bg-electric/20 text-electric hover:text-electric-bright transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-surface hover:bg-electric/20 text-electric hover:text-electric-bright transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-surface hover:bg-electric/20 text-electric hover:text-electric-bright transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-surface hover:bg-electric/20 text-electric hover:text-electric-bright transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-electric mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-electric transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-electric transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#events" className="text-muted-foreground hover:text-electric transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-electric transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-electric mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <span className="block">Robotics Lab, Building A</span>
                <span className="block">Tech University Campus</span>
                <span className="block">City, State 12345</span>
              </li>
              <li className="pt-2">
                <a href="mailto:contact@robosociety.edu" className="hover:text-electric transition-colors">
                  contact@robosociety.edu
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-electric transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-electric/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 RoboSociety. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-electric text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-electric text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-electric text-sm transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;