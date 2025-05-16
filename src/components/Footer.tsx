
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-techno-darker border-t border-gray-800 py-12 mt-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-display text-white mb-2">
              SONIC<span className="text-neon-purple">PULSE</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              The ultimate destination for techno music enthusiasts. Streaming live sets, showcasing talented DJs, and bringing you the best events.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <h3 className="text-sm font-medium mb-4 text-gray-300">JOIN OUR NEWSLETTER</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-techno-dark border border-gray-700 rounded px-3 py-2 text-sm focus:border-neon-purple outline-none"
              />
              <Button className="bg-neon-purple hover:bg-neon-purple/80 text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'Radio', 'DJs', 'Videos', 'Events'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-neon-purple text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-white">Connect</h3>
            <ul className="space-y-2">
              {['Instagram', 'SoundCloud', 'YouTube', 'Twitter', 'Facebook'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-neon-purple text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-white">Info</h3>
            <ul className="space-y-2">
              {['About', 'Contact', 'Press Kit', 'Partnerships', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-neon-purple text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {['Terms', 'Privacy', 'Cookies', 'Licensing', 'Copyright'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-neon-purple text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SonicPulse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              {['Terms', 'Privacy', 'Cookies'].map((item) => (
                <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
