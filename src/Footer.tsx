import { Link } from 'react-router-dom'
import './Footer.css'
import logo from './rachatour-logo.svg'

const socialLinks = [
  {
    name: 'Facebook',
    label: 'f',
    url: 'https://www.facebook.com/',
  },
  {
    name: 'Instagram',
    label: '◎',
    url: 'https://www.instagram.com/',
  },
  {
    name: 'TikTok',
    label: '♪',
    url: 'https://www.tiktok.com/',
  },
  {
    name: 'YouTube',
    label: '▶',
    url: 'https://www.youtube.com/',
  },
]

const footerLinks = [
  { label: 'მთავარი', to: '/' },
  { label: 'ტურები', to: '/tours' },
  { label: 'რაჭის შესახებ', to: '/about' },
  { label: 'ადგილები', to: '/places' },
  { label: 'კონტაქტი', to: '/contact' },
]

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* მთავარი ნაწილი */}
        <div className="footer-main">

          {/* ბრენდი */}
          <div className="footer-brand-column">
            <Link
              to="/"
              className="footer-brand"
              aria-label="RachaTour — მთავარი გვერდი"
            >
                <img
                    className="brand-logo"
                    src={logo}
                    alt="RachaTour — აღმოაჩინე რაჭა"
                  />

              { <span className="footer-brand-name">
                Racha<span>Tour</span>
              </span> }

              <span className="footer-brand-tagline">
                DISCOVER · EXPLORE · EXPERIENCE
              </span>
            </Link>

            <p className="footer-description">
              იგრძენი რაჭა თითოეული ამოსუნთქვით.
              აღმოაჩინე მისი ბუნება, კულტურა,
              ადგილები და დაუვიწყარი გამოცდილებები.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="footer-social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>

            <p className="footer-handwritten">
              Racha is always a good idea.
              <span> ♡</span>
            </p>
          </div>

          {/* ნავიგაცია */}
          <div className="footer-links-column">
            <h3 className="footer-heading">სწრაფი ბმულები</h3>

            <nav className="footer-nav" aria-label="ქვედა ნავიგაცია">
              {footerLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="footer-nav-link"
                >
                  <span aria-hidden="true">›</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* საკონტაქტო ინფორმაცია */}
          <div className="footer-contact-column">
            <h3 className="footer-heading">კონტაქტი</h3>

            <a
              className="footer-contact-item"
              href="tel:+995599123456"
            >
              <span className="footer-contact-icon">☎</span>
              <span>
                <small>ტელეფონი</small>
                <strong>+995 599 123 456</strong>
              </span>
            </a>

            <a
              className="footer-contact-item"
              href="mailto:info@rachatour.ge"
            >
              <span className="footer-contact-icon">✉</span>
              <span>
                <small>ელფოსტა</small>
                <strong>info@rachatour.ge</strong>
              </span>
            </a>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">⌖</span>
              <span>
                <small>მდებარეობა</small>
                <strong>რაჭა, საქართველო</strong>
              </span>
            </div>
          </div>

          {/* მოწოდება მოქმედებისკენ */}
          <div className="footer-cta-column">
            <h3 className="footer-heading">
              აღმოაჩინე რაჭა
            </h3>

            <p className="footer-cta-description">
              დაგეგმე შენი შემდეგი მოგზაურობა
              და აღმოაჩინე რაჭის გამორჩეული ადგილები.
            </p>

            <a
              href="mailto:info@rachatour.ge"
              className="footer-email-button"
            >
              <span>✉</span>
              მოგვწერე
            </a>

            <Link to="/places" className="footer-explore-button">
              დაიწყე აღმოჩენა
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>

        {/* ქვედა ზოლი */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} RachaTour.
            ყველა უფლება დაცულია.
          </p>

          <p className="footer-creator">
            შექმნილია <span>♥</span>-ით საქართველოში
          </p>

          <a
            className="footer-back-to-top"
            href="#top"
            aria-label="გვერდის დასაწყისში დაბრუნება"
          >
            ↑
          </a>
        </div>

      </div>
    </footer>
  )
  
} 