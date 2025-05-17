// components/Footer.js
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ABOUT US */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">ABOUT US</h3>
            <p className="mt-4 text-base text-gray-500">
              <span className="text-pink-600 font-medium">Geometry Dash Spam</span> is a website where you can become a good wave spammer by improving your ability to tap or click fast and consistently in the geometry dash games to get through obstacles. Multiple levels from easy to hard with narrow spaces and sharp turns. Try out and see how good a wave spammer you are!
            </p>
          </div>

          {/* READ MORE */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">READ MORE</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy-policy" className="text-base text-pink-600 hover:text-pink-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-base text-pink-600 hover:text-pink-800">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/DMCA" className="text-base text-pink-600 hover:text-pink-800">
                  DMCA Copyrights
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">CONTACT US</h3>
            <p className="mt-4 text-base text-gray-500">
              <strong>Email:</strong>{' '}
              <a href="mailto:support@geometrydashspam.com" className="text-gray-700 hover:underline">
                support@geometrydashspam.com
              </a>
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            All Games © Rights Reserved to Their Respective Owners &amp; Publishers.
          </p>
        </div>
      </div>
    </footer>
  );
}
