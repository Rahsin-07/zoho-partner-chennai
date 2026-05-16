'use client'
import { useEffect, useRef } from 'react'

// Section 9 — Zoho Apps We Build & Customize (full list from brief)
const products = [
  { name: 'Zoho One',        icon: 'bi-grid-3x3-gap-fill', color: '#2563eb', desc: 'A complete business management suite with 45+ connected apps for sales, HR, finance and operations — all under one login.' },
  { name: 'Zoho CRM',        icon: 'bi-people-fill',       color: '#dc2626', desc: 'Capture every lead, monitor your sales process, automate follow-ups, and give your team everything they need to close.' },
  { name: 'Zoho Creator',    icon: 'bi-app-indicator',     color: '#f59e0b', desc: 'A flexible low-code platform to build custom business tools, approval flows, and internal apps tailored to your process.' },
  { name: 'Zoho Campaigns',  icon: 'bi-megaphone-fill',    color: '#2563eb', desc: 'A complete email and SMS marketing tool — grow audiences, automate journeys, and track every open, click and conversion.' },
  { name: 'Zoho SalesIQ',    icon: 'bi-chat-square-text-fill', color: '#dc2626', desc: 'Website visitor tracking and live chat that identifies high-intent visitors, engages them and converts traffic into enquiries.' },
  { name: 'Zoho Inventory',  icon: 'bi-box-seam-fill',     color: '#f59e0b', desc: 'Centralised inventory and order management — stock movement, POs, multi-warehouse, and perfect sales-channel sync.' },
  { name: 'Zoho Mail',       icon: 'bi-envelope-fill',     color: '#2563eb', desc: 'Secure, distraction-free business email with custom domains, shared inboxes, calendar and deep Zoho integration.' },
  { name: 'Zoho Analytics',  icon: 'bi-bar-chart-fill',    color: '#dc2626', desc: 'Powerful BI and reporting — pull data from multiple sources, build real-time dashboards, spot patterns instantly.' },
  { name: 'Zoho Books',      icon: 'bi-journal-text',      color: '#f59e0b', desc: 'GST-ready online accounting built for Indian businesses — invoicing, vendor payments, reconciliation and tax filing.' },
  { name: 'Zoho Workplace',  icon: 'bi-people',            color: '#2563eb', desc: 'One collaboration platform — email, instant messaging, video calls, document management and shared workspaces.' },
  { name: 'Zoho Expense',    icon: 'bi-receipt',           color: '#dc2626', desc: 'Smart expense tracking and reimbursements — capture receipts on the go, approval flows, budgets, payroll sync.' },
  { name: 'Zoho Bookings',   icon: 'bi-calendar-check-fill', color: '#f59e0b', desc: 'Online appointment booking — clients pick slots, get auto reminders, and your calendar stays conflict-free.' },
  { name: 'Zoho Social',     icon: 'bi-share-fill',        color: '#2563eb', desc: 'Plan content calendars, publish to socials, monitor mentions, and measure post performance from a single screen.' },
  { name: 'Zoho Bigin',      icon: 'bi-kanban',            color: '#dc2626', desc: 'A simple pipeline CRM for small and growing businesses — contacts, deals, and follow-up automation without complexity.' },
  { name: 'Zoho Commerce',   icon: 'bi-bag-fill',          color: '#f59e0b', desc: 'A ready-to-launch ecommerce platform — store, listings, secure payments, order fulfilment and store analytics.' },
  { name: 'Zoho Forms',      icon: 'bi-ui-checks',         color: '#2563eb', desc: 'A hassle-free online form builder — conditional logic, multi-step forms, payments and instant CRM sync.' },
]

export default function ZohoProducts() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" ref={ref} style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '20%', right: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(220,38,38,0.08), transparent 65%)', filter: 'blur(40px)' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '10%', left: '-10%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="container position-relative">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Zoho Products</div>
            <h2 className="section-title">
              Zoho Apps We <span className="grad-blue-red">Build & Customize</span>
            </h2>
            <p className="section-sub">
              If you need one Zoho app or the whole suite, we configure, connect and customise all Zoho products around the way your Chennai business works — so there's no unused tool and every one of them works.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="#contact" className="link-reveal">
              Show Me the Right Zoho Products <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-3 g-md-4">
          {products.map((p, i) => (
            <div key={p.name} className="col-sm-6 col-lg-4 col-xl-3 fade-up" style={{ transitionDelay: `${(i % 8) * 0.04}s` }}>
              <div className="prod-card" style={{
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 18,
                padding: '24px 22px', height: '100%',
                transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-5px)'
                  el.style.borderColor = p.color
                  el.style.boxShadow = `0 22px 50px ${p.color}1f`
                  el.querySelector('.pp-bar').style.transform = 'scaleX(1)'
                  el.querySelector('.pp-icon').style.background = p.color
                  el.querySelector('.pp-icon').style.color = '#fff'
                  el.querySelector('.pp-icon').style.transform = 'rotate(-6deg) scale(1.05)'
                  el.querySelector('.pp-link').style.color = p.color
                  el.querySelector('.pp-link').style.gap = '10px'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.borderColor = '#e8e3dc'
                  el.style.boxShadow = ''
                  el.querySelector('.pp-bar').style.transform = 'scaleX(0)'
                  el.querySelector('.pp-icon').style.background = `${p.color}15`
                  el.querySelector('.pp-icon').style.color = p.color
                  el.querySelector('.pp-icon').style.transform = ''
                  el.querySelector('.pp-link').style.color = '#0b1220'
                  el.querySelector('.pp-link').style.gap = '6px'
                }}
              >
                <div className="pp-bar" aria-hidden style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                  background: p.color, transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.4s ease-out',
                }} />

                <div className="pp-icon" style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: `${p.color}15`, color: p.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.35rem', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  marginBottom: 14,
                }}>
                  <i className={`bi ${p.icon}`} />
                </div>

                <h3 style={{
                  fontSize: '1rem', fontWeight: 800, color: '#0b1220',
                  fontFamily: 'Plus Jakarta Sans,sans-serif', lineHeight: 1.3,
                  marginBottom: 8, letterSpacing: '-0.012em',
                }}>{p.name}</h3>

                <p style={{
                  fontSize: '0.84rem', color: '#64748b', lineHeight: 1.6,
                  marginBottom: 12, fontFamily: 'Inter,sans-serif', flex: 1,
                }}>{p.desc}</p>

                <a href="#contact" className="pp-link" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: '0.8rem', fontWeight: 700, color: '#0b1220',
                  textDecoration: 'none', fontFamily: 'Plus Jakarta Sans,sans-serif',
                  transition: 'all 0.28s',
                }}>
                  Learn more <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Helper card */}
        <div className="fade-up" style={{
          marginTop: 56,
          background: 'linear-gradient(135deg, #f6f1ea 0%, #fef3c7 100%)',
          border: '1px solid #e8e3dc', borderRadius: 22,
          padding: '32px 36px', position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 4,
            background: 'var(--grad-tri)',
          }} />
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div style={{
                fontSize: '0.72rem', fontWeight: 800, letterSpacing: 2,
                textTransform: 'uppercase', color: '#dc2626', marginBottom: 10,
                fontFamily: 'Inter,sans-serif',
              }}>Not sure where to start?</div>
              <h4 style={{
                fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                fontSize: '1.5rem', color: '#0b1220', lineHeight: 1.25,
                marginBottom: 8, letterSpacing: '-0.014em',
              }}>
                Not Sure Which Zoho Product Your Chennai Business Actually Needs?
              </h4>
              <p style={{
                fontFamily: 'Inter,sans-serif', color: '#475569',
                fontSize: '0.96rem', marginBottom: 0, lineHeight: 1.65,
              }}>
                We take a close look at how your business runs today, match your exact requirements to the right Zoho products, and give you an honest recommendation — no unnecessary add-ons, no guesswork.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn-gradient ahover">
                Show Me the Right Zoho Products <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
