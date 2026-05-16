'use client'
import { useEffect, useRef } from 'react'

// Section 7 — Zoho Services Built for Chennai Businesses and Beyond
const PALETTE = ['#2563eb', '#dc2626', '#f59e0b']

const services = [
  {
    tag: 'Implement', icon: 'bi-tools',
    title: 'Zoho Implementation',
    desc: 'Not sure where to start with Zoho? Or already using it but not getting what you paid for? Our Chennai team sets up and configures your entire Zoho ecosystem from scratch, making sure every tool works together so your business runs without the usual friction.',
    cta: 'Implement Zoho',
  },
  {
    tag: 'Migrate', icon: 'bi-arrow-left-right',
    title: 'Zoho Data Migration & Integrations',
    desc: 'Moving to Zoho from another platform? We handle complete data migration and integrate your business tools with Zoho cleanly and carefully — every record transferred, every connection tested, with zero data loss and zero disruption to your daily operations.',
    cta: 'Migrate to Zoho',
  },
  {
    tag: 'Customize', icon: 'bi-sliders',
    title: 'Zoho Customization',
    desc: 'A default Zoho setup rarely fits the way a real business works. We go deeper — building custom modules, smart automations, and tailored workflows that match exactly how your team operates every day, nothing borrowed from another business.',
    cta: 'Customize My Zoho',
  },
  {
    tag: 'Develop', icon: 'bi-code-square',
    title: 'Zoho App Development',
    desc: 'Some business processes need more than what standard Zoho tools offer. Our Zoho custom development experts create and develop fully custom business applications from scratch, tailored to your workflow, team structure, and long-term objectives.',
    cta: 'Build a Custom App',
  },
  {
    tag: 'Manage', icon: 'bi-life-preserver',
    title: 'Zoho Managed Services',
    desc: 'Going live is just the beginning. Once implemented, ZoFlowX remains with your business — taking care of system health checks, updates, continuous improvements and day-to-day support, so Zoho never slows your business down.',
    cta: 'Get Managed Services',
  },
]

function ServiceCard({ s, color, delay }) {
  return (
    <div className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="svc-card" style={{
        background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
        padding: '34px 28px', height: '100%',
        transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
        position: 'relative', overflow: 'hidden',
      }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.transform = 'translateY(-7px)'
          el.style.boxShadow = `0 30px 70px ${color}26`
          el.style.borderColor = color
          el.querySelector('.svc-glow').style.opacity = '1'
          el.querySelector('.svc-icon').style.background = color
          el.querySelector('.svc-icon').style.color = '#fff'
          el.querySelector('.svc-icon').style.transform = 'rotate(-6deg) scale(1.08)'
          el.querySelector('.svc-cta').style.color = color
          el.querySelector('.svc-cta').style.gap = '12px'
          el.querySelector('.svc-tag').style.background = color
          el.querySelector('.svc-tag').style.color = '#fff'
          el.querySelector('.svc-bar').style.transform = 'scaleX(1)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.transform = ''
          el.style.boxShadow = ''
          el.style.borderColor = '#e8e3dc'
          el.querySelector('.svc-glow').style.opacity = '0'
          el.querySelector('.svc-icon').style.background = `${color}15`
          el.querySelector('.svc-icon').style.color = color
          el.querySelector('.svc-icon').style.transform = ''
          el.querySelector('.svc-cta').style.color = '#0b1220'
          el.querySelector('.svc-cta').style.gap = '8px'
          el.querySelector('.svc-tag').style.background = `${color}15`
          el.querySelector('.svc-tag').style.color = color
          el.querySelector('.svc-bar').style.transform = 'scaleX(0)'
        }}
      >
        <div className="svc-bar" aria-hidden style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: color, transform: 'scaleX(0)', transformOrigin: 'left',
          transition: 'transform 0.45s ease-out',
        }} />
        <div className="svc-glow" aria-hidden style={{
          position: 'absolute', top: -60, right: -60, width: 220, height: 220,
          borderRadius: '50%', background: `radial-gradient(circle, ${color}28, transparent 70%)`,
          opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none',
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18, position: 'relative' }}>
          <div className="svc-icon" style={{
            width: 58, height: 58, borderRadius: 16,
            background: `${color}15`, color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem', transition: 'all 0.32s',
          }}>
            <i className={`bi ${s.icon}`} />
          </div>
          <span className="svc-tag" style={{
            display: 'inline-block', background: `${color}15`, color,
            fontSize: '0.66rem', fontWeight: 800, letterSpacing: 1.5,
            textTransform: 'uppercase', padding: '5px 12px', borderRadius: 50,
            fontFamily: 'Inter,sans-serif', transition: 'all 0.32s',
          }}>{s.tag}</span>
        </div>

        <h3 style={{
          fontSize: '1.18rem', fontWeight: 800, marginBottom: 12,
          color: '#0b1220', fontFamily: 'Plus Jakarta Sans,sans-serif', lineHeight: 1.3,
          letterSpacing: '-0.012em',
        }}>{s.title}</h3>

        <p style={{
          fontSize: '0.92rem', color: '#64748b', lineHeight: 1.72,
          marginBottom: 22, fontFamily: 'Inter,sans-serif',
        }}>{s.desc}</p>

        <a href="#contact" className="svc-cta" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: '0.86rem', fontWeight: 700, color: '#0b1220',
          textDecoration: 'none', fontFamily: 'Plus Jakarta Sans,sans-serif',
          transition: 'all 0.28s',
        }}>
          {s.cta} <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} style={{ background: '#fff', position: 'relative' }}>
      <div className="container">
        <div className="row align-items-end mb-5 fade-up">
          <div className="col-lg-8">
            <div className="section-label">Services</div>
            <h2 className="section-title">
              Zoho Services Built for <span className="grad-blue-red">Chennai Businesses</span> and Beyond
            </h2>
            <p className="section-sub">
              As a leading Zoho Partner in Chennai, our certified Zoho experts bring practical, ground-level experience across every Zoho product — helping businesses of all sizes get Zoho working the way it should, from day one and long after.
            </p>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0 d-none d-lg-block">
            <a href="#contact" className="link-reveal">
              Work With Our Zoho Experts <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>

        <div className="row g-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} color={PALETTE[i % 3]} delay={i * 0.05} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="fade-up" style={{
          background: 'linear-gradient(135deg, #0b1220 0%, #1e3a8a 100%)',
          borderRadius: 24, padding: '46px 40px', marginTop: 56,
          position: 'relative', overflow: 'hidden',
        }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.22 }} className="dot-grid-light" />
          <div aria-hidden style={{
            position: 'absolute', top: '-40%', right: '-10%', width: 420, height: 420,
            background: 'radial-gradient(circle, rgba(220,38,38,0.30), transparent 65%)', filter: 'blur(40px)',
          }} />
          <div aria-hidden style={{
            position: 'absolute', bottom: '-40%', left: '-10%', width: 380, height: 380,
            background: 'radial-gradient(circle, rgba(245,158,11,0.22), transparent 65%)', filter: 'blur(40px)',
          }} />
          <div className="row align-items-center position-relative g-4">
            <div className="col-lg-8">
              <div style={{
                fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2.5px',
                textTransform: 'uppercase', color: '#f59e0b', marginBottom: 12,
              }}>One Partner. Every Zoho Service.</div>
              <h3 style={{
                color: '#fff', fontFamily: 'Plus Jakarta Sans,sans-serif',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', marginBottom: 8,
                lineHeight: 1.2, letterSpacing: '-0.018em',
              }}>
                Zoho has the power. What your Chennai business needs is the right partner to unlock it.
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.96rem', marginBottom: 0, fontFamily: 'Inter,sans-serif' }}>
                Implementation, customization, migration, app development and ongoing managed services — all under one roof.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn-accent ahover">
                Work With Our Zoho Experts <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
