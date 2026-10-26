import { useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import logo from './rachatour-logo.svg'
import Footer from './Footer'

type Place = {
  title: string
  category: string
  location: string
  description: string
  image: string
  tag?: string
}

const places: Place[] = [
  {
    title: 'შაორის წყალსაცავი',
    category: 'ბუნება',
    location: 'ამბროლაურის მუნიციპალიტეტი',
    description: 'ტყით გარშემორტყმული წყალსაცავი, სასეირნოდ, დასასვენებლად და ფოტოების გადასაღებად.',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85',
    tag: 'პოპულარული',
  },
  {
    title: 'ნიკორწმინდის ტაძარი',
    category: 'ისტორია',
    location: 'ნიკორწმინდა',
    description: 'რაჭის გამორჩეული ისტორიული ძეგლი და ქართული ხუროთმოძღვრების მნიშვნელოვანი ნიმუში.',
    image: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=900&q=85',
    tag: 'ისტორია',
  },
  {
    title: 'რაჭული ღვინის გამოცდილება',
    category: 'მარანი',
    location: 'ამბროლაური',
    description: 'გაიცანი ადგილობრივი ღვინო, მეღვინეობის ტრადიცია და მასპინძლობა.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85',
    tag: 'გემოები',
  },
]

const categories = [
  { icon: '🏞️', title: 'ღირსშესანიშნაობები', subtitle: 'აღმოაჩინე რაჭის გამორჩეული ადგილები', to: '/discover' },
  { icon: '🛏️', title: 'სასტუმროები', subtitle: 'იპოვე შენთვის სასურველი დასარჩენი ადგილი', to: '/stays' },
  { icon: '🍽️', title: 'რესტორნები', subtitle: 'დააგემოვნე რაჭული სამზარეულო', to: '/food' },
  { icon: '🍷', title: 'მარნები', subtitle: 'გაეცანი ადგილობრივ ღვინოსა და მეღვინეებს', to: '/wineries' },
  { icon: '📍', title: 'ჩექ-ინები', subtitle: 'მონიშნე მონახულებული ადგილები', to: '/check-in' },
  { icon: '🏡', title: 'ქონება', subtitle: 'მიწები, სახლები და განცხადებები', to: '/property' },
]

const navItems = [
  ['მთავარი', '/'],
  ['აღმოაჩინე', '/discover'],
  ['დარჩი', '/stays'],
  ['დააგემოვნე', '/food'],
  ['მარნები', '/wineries'],
  ['ქონება', '/property'],
  ['ჩექ-ინი', '/check-in'],
] as const

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
       <Link
  className="brand"
  to="/"
  onClick={() => setMenuOpen(false)}
  aria-label="RachaTour — აღმოაჩინე რაჭა"
>
  <img
    className="brand-logo"
    src={logo}
    alt="RachaTour — აღმოაჩინე რაჭა"
  />
</Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="მენიუს გახსნა">
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          {navItems.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {label}
            </NavLink>
          ))}
          <Link className="add-business" to="/add-listing" onClick={() => setMenuOpen(false)}>+ დაამატე ობიექტი</Link>
        </nav>
      </div>
    </header>
  )
}

function PlaceCard({ place }: { place: Place }) {
  return (
    <article className="place-card">
      <div className="place-image" style={{ backgroundImage: `url("${place.image}")` }}>
        {place.tag && <span className="image-tag">{place.tag}</span>}
        <span className="image-category">{place.category}</span>
      </div>
      <div className="place-content">
        <p className="place-location">⌖ {place.location}</p>
        <h3>{place.title}</h3>
        <p className="place-description">{place.description}</p>
        <Link className="text-link" to="/discover">გაიგე მეტი <span>↗</span></Link>
      </div>
    </article>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <span className="eyebrow"><span className="eyebrow-dot" /> შენი რაჭა იწყება აქ</span>
          <h1>იგრძენი რაჭა<br /><em>თითოეული ამოსუნთქვით.</em></h1>
          <p>მთების სიჩუმე, ბუნების სურნელი, ადგილობრივი გემოები და ისტორიები, რომლებიც რაჭას განსაკუთრებულ სამყაროდ აქცევს.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/discover">აღმოაჩინე რაჭა <span>→</span></Link>
            <Link className="button button-glass" to="/check-in">📍 ჩექ-ინი</Link>
          </div>
          <div className="hero-note"><span>✦</span> მთები, ღვინო და დაუვიწყარი ამბები</div>
        </div>
        <div className="hero-bottom page-width">
          <span>საქართველო · რაჭა</span>
          <span>42° North · Endless memories</span>
        </div>
      </section>

      <section className="section page-width category-section">
        <div className="section-heading">
          <div><span className="section-kicker">ერთი სივრცე — უამრავი შესაძლებლობა</span><h2>როგორ გინდა <em>აღმოაჩინო რაჭა?</em></h2></div>
          <p>დაგეგმე მოგზაურობა შენს სტილში — შაბათ-კვირის დასვენებიდან ახალ აღმოჩენებამდე.</p>
        </div>
        <div className="category-grid">
          {categories.map(item => (
            <Link className="category-card" to={item.to} key={item.title}>
              <span className="category-icon">{item.icon}</span>
              <span className="category-arrow">↗</span>
              <h3>{item.title}</h3><p>{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="page-width">
          <div className="section-heading">
            <div><span className="section-kicker">რაჭა გელოდება</span><h2>აღმოაჩინე <em>რჩეული ადგილები</em></h2></div>
            <Link className="text-link" to="/discover">ყველა ადგილი <span>→</span></Link>
          </div>
          <div className="places-grid">{places.map(place => <PlaceCard key={place.title} place={place} />)}</div>
        </div>
      </section>

      <section className="checkin-banner page-width">
        <div className="checkin-art"><span className="pin pin-one">📍</span><span className="pin pin-two">📍</span><span className="pin pin-three">📍</span><div className="map-lines">RACHA<br />GEORGIA</div></div>
        <div className="checkin-copy">
          <span className="section-kicker">შენი ამბავიც რაჭის ნაწილია</span>
          <h2>აქ ხარ? <em>მონიშნე!</em></h2>
          <p>ჩექ-ინი გააკეთე მონახულებულ ადგილებში, დააგროვე ქულები და აღმოაჩინე სად არიან სხვა მოგზაურები.</p>
          <Link className="button button-primary" to="/check-in">ჩემი პირველი ჩექ-ინი <span>→</span></Link>
        </div>
      </section>

      <section className="business-cta">
        <div className="page-width business-inner">
          <div><span className="section-kicker">ადგილობრივი ბიზნესი</span><h2>შენი ბიზნესი რაჭაშია?</h2><p>დაამატე შენი სასტუმრო, რესტორანი ან მარანი და გახდი RachaTour-ის ნაწილი.</p></div>
          <Link className="button button-light" to="/add-listing">დაამატე ობიექტი <span>→</span></Link>
        </div>
      </section>
    </>
  )
}

const pageContent: Record<string, { icon: string; title: string; subtitle: string; items: string[] }> = {
  discover: { icon: '🏞️', title: 'აღმოაჩინე რაჭა', subtitle: 'ბუნება, ისტორია და ადგილები, რომლებიც უნდა ნახო.', items: ['ღირსშესანიშნაობები', 'ტურისტული მარშრუტები', 'სოფლები და ბუნება', 'მუზეუმები'] },
  stays: { icon: '🛏️', title: 'დარჩი რაჭაში', subtitle: 'იპოვე სასტუმრო, საოჯახო სახლი ან მყუდრო დასასვენებელი ადგილი.', items: ['სასტუმროები', 'საოჯახო სასტუმროები', 'კოტეჯები', 'ფილტრი ფასით'] },
  food: { icon: '🍽️', title: 'რაჭული გემოები', subtitle: 'რესტორნები, კაფეები და ადგილობრივი სამზარეულო.', items: ['რესტორნები', 'კაფეები', 'რაჭული კერძები', 'მენიუ და სამუშაო საათები'] },
  wineries: { icon: '🍷', title: 'მარნები და ღვინო', subtitle: 'გაიცანი რაჭის მეღვინეები და ღვინის ტრადიციები.', items: ['მარნები', 'ღვინის დეგუსტაცია', 'ადგილობრივი ჯიშები', 'მარნის მონახულება'] },
  property: { icon: '🏡', title: 'ქონება რაჭაში', subtitle: 'მიწის ნაკვეთები, სახლები და კომერციული ფართები.', items: ['იყიდება მიწა', 'იყიდება სახლი', 'ქირავდება', 'განცხადების დამატება'] },
  'check-in': { icon: '📍', title: 'ახლა რაჭაში', subtitle: 'მონიშნე მონახულებული ადგილი და გაუზიარე შენი აღმოჩენა სხვებს.', items: ['ჩექ-ინი ადგილას', 'მონახულებული ადგილები', 'ქულები და ბეჯები', 'მოგზაურობის გამოწვევები'] },
  'add-listing': { icon: '➕', title: 'დაამატე ობიექტი', subtitle: 'გააცანი შენი ბიზნესი რაჭის სტუმრებს. ამ საწყის ვერსიაში ფორმა დემოა.', items: ['სასტუმრო ან საოჯახო სახლი', 'რესტორანი ან კაფე', 'მარანი ან ტური', 'უძრავი ქონების განცხადება'] },
}

function InfoPage({ pageKey }: { pageKey: string }) {
  const page = pageContent[pageKey]
  const [selected, setSelected] = useState('')
  const isAdd = pageKey === 'add-listing'
  return (
    <main className="inner-page page-width">
      <div className="breadcrumbs"><Link to="/">მთავარი</Link><span>/</span>{page.title}</div>
      <section className="inner-hero">
        <span className="inner-icon">{page.icon}</span>
        <span className="section-kicker">RACHATOUR · აღმოაჩინე რაჭა</span>
        <h1>{page.title}</h1><p>{page.subtitle}</p>
      </section>
      {isAdd ? (
        <form className="listing-form" onSubmit={e => { e.preventDefault(); alert('ეს დემო ფორმაა. შემდეგ ეტაპზე დავუკავშირებთ მონაცემთა ბაზას.') }}>
          <label>ობიექტის სახელი<input required placeholder="მაგ. საოჯახო სასტუმრო რაჭაში" /></label>
          <label>ობიექტის ტიპი<select required value={selected} onChange={e => setSelected(e.target.value)}><option value="">აირჩიე კატეგორია</option>{page.items.map(item => <option key={item}>{item}</option>)}</select></label>
          <label>მდებარეობა<input required placeholder="მაგ. ამბროლაური, ონი..." /></label>
          <label>საკონტაქტო ინფორმაცია<input placeholder="ტელეფონი ან ელფოსტა" /></label>
          <button className="button button-primary" type="submit">გაგრძელება <span>→</span></button>
          <small>შენიშვნა: ამ ეტაპზე მონაცემები არ ინახება — ეს მხოლოდ ვიზუალური დემოა.</small>
        </form>
      ) : (
        <div className="inner-cards">
          {page.items.map((item, index) => <button key={item} className="inner-card" onClick={() => setSelected(item)}><span>{['✦', '⌖', '↗', '＋'][index % 4]}</span><strong>{item}</strong><small>მალე დაემატება</small></button>)}
          {selected && <div className="selection-note">არჩეულია: <strong>{selected}</strong> — შემდეგ ეტაპზე ამ კატეგორიას რეალურ მონაცემებს დავუკავშირებთ.</div>}
        </div>
      )}
      <div className="back-home"><Link className="text-link" to="/">← მთავარ გვერდზე დაბრუნება</Link></div>
    </main>
  )
}

// function Footer() {
//   return <footer className="site-footer"><div className="page-width footer-inner"><Link className="footer-brand" to="/">RachaTour<span>.</span></Link><p>რაჭის ადგილები, გემოები და ამბები — ერთ სივრცეში.</p><span className="footer-copy">© 2026 RachaTour · პირველი ვერსია</span></div></footer>
// }

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<InfoPage pageKey="discover" />} />
        <Route path="/stays" element={<InfoPage pageKey="stays" />} />
        <Route path="/food" element={<InfoPage pageKey="food" />} />
        <Route path="/wineries" element={<InfoPage pageKey="wineries" />} />
        <Route path="/property" element={<InfoPage pageKey="property" />} />
        <Route path="/check-in" element={<InfoPage pageKey="check-in" />} />
        <Route path="/add-listing" element={<InfoPage pageKey="add-listing" />} />
        <Route path="*" element={<InfoPage pageKey="discover" />} />
      </Routes>
      <Footer />
    </div>
  )
}
