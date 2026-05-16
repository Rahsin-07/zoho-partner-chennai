'use client'
import { useEffect, useRef } from 'react'

// Section 5 — Why ZoFlowX
const reasons = [
  {
    icon: 'bi-search',
    color: '#2563eb',
    title: 'We Start by Understanding Your Business',
    desc: 'Before taking any action, our Chennai team takes time to understand the functioning of your business. All the decisions that we make at Zoho are based on your workflow, your team and your goals.',
  },
  {
    icon: 'bi-arrow-through-heart',
    color: '#dc2626',
    title: 'We Stay with You from Day One to Beyond Go-Live',
    desc: 'Our core team takes care of you from the initial call to post-launch support. No third party transfers. No disappearing after delivery. We stay with you.',
  },
  {
    icon: 'bi-geo-alt-fill',
    color: '#f59e0b',
    title: 'Built for the Way Chennai Businesses Actually Work',
    desc: 'We handle local tax compliance, set up integrations like Razorpay, IndiaMART, and Tally, and offer same-timezone support. We understand how businesses across Chennai and Tamil Nadu actually run.',
  },
]

const bullets = [
  '15+ Zoho specialists on staff',
  '15+ years of hands-on experience',
  '50+ implementations across India',
  'Chennai · Bangalore · Mumbai · Hyderabad',
]

const areas = [
  'Chennai', 'Anna Nagar', 'T. Nagar', 'Velachery', 'OMR',
  'Sholinganallur', 'Perungudi', 'Nungambakkam', 'Adyar',
  'Guindy', 'Ambattur', 'Porur',
]

export default function WhyUs() {
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
    <section id="why-us" ref={ref} style={{ background: '#fafaf7', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-10%', left: '-5%', width: 480, height: 480, background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 460, height: 460, background: 'radial-gradient(circle, rgba(245,158,11,0.07), transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="container position-relative">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 920, margin: '0 auto 50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label section-label-blue">Why ZoFlowX</span>
          </div>
          <h2 className="section-title">
            Searching for the Best Zoho Partner in Chennai? <span className="grad-blue-red">Here's Why Chennai Businesses Pick ZoFlowX</span>
          </h2>
          <p className="section-sub mx-auto" style={{ maxWidth: 820 }}>
            ZoFlowX is a Zoho Certified Authorized Partner and a Zoho Full-Service Partner based in Tirunelveli, India with a dedicated team of 15+ Zoho experts. Over 15 years of hands-on experience and 50+ Zoho implementations across India — real expertise in every Zoho product.
          </p>

          {/* Inline bullets */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap',
            marginTop: 28,
          }}>
            {bullets.map((b, i) => (
              <div key={b} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 50,
                padding: '8px 16px', fontSize: '0.82rem', fontWeight: 600,
                color: '#334155', fontFamily: 'Inter,sans-serif',
                boxShadow: '0 4px 12px rgba(11,18,32,0.04)',
                transition: 'all 0.3s var(--ease-out)',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 10px 22px rgba(11,18,32,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(11,18,32,0.04)'
                }}
              >
                <i className="bi bi-check-circle-fill" style={{ color: ['#2563eb', '#dc2626', '#f59e0b', '#2563eb'][i], fontSize: '0.9rem' }} />
                {b}
              </div>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {reasons.map((r, i) => (
            <div key={r.title} className="col-md-6 col-lg-4 fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{
                position: 'relative', padding: '36px 30px',
                background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
                height: '100%', transition: 'all 0.4s cubic-bezier(.2,.7,.2,1)',
                overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = `0 30px 70px ${r.color}1f`
                  el.style.borderColor = r.color
                  el.querySelector('.w-bg').style.opacity = '1'
                  el.querySelector('.w-icon').style.transform = 'scale(1.06) rotate(-4deg)'
                  el.querySelector('.w-icon').style.background = r.color
                  el.querySelector('.w-icon').style.color = '#fff'
                  el.querySelector('.w-num').style.opacity = '1'
                  el.querySelector('.w-num').style.color = r.color
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.transform = ''
                  el.style.boxShadow = ''
                  el.style.borderColor = '#e8e3dc'
                  el.querySelector('.w-bg').style.opacity = '0'
                  el.querySelector('.w-icon').style.transform = ''
                  el.querySelector('.w-icon').style.background = `${r.color}15`
                  el.querySelector('.w-icon').style.color = r.color
                  el.querySelector('.w-num').style.opacity = '0.18'
                  el.querySelector('.w-num').style.color = '#cbd5e1'
                }}
              >
                <div className="w-bg" aria-hidden style={{
                  position: 'absolute', inset: 0, opacity: 0,
                  background: `linear-gradient(135deg, ${r.color}06, transparent 55%)`,
                  transition: 'opacity 0.4s',
                }} />
                <div className="w-num" aria-hidden style={{
                  position: 'absolute', top: 20, right: 24, fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontSize: '3.2rem', fontWeight: 900, letterSpacing: -2,
                  color: '#cbd5e1', opacity: 0.18, lineHeight: 1, transition: 'all 0.4s',
                }}>0{i + 1}</div>

                <div className="w-icon" style={{
                  width: 60, height: 60, borderRadius: 16, marginBottom: 22,
                  background: `${r.color}15`, color: r.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.6rem', transition: 'all 0.36s cubic-bezier(.2,.7,.2,1)',
                  position: 'relative', zIndex: 1,
                }}>
                  <i className={`bi ${r.icon}`} />
                </div>

                <h3 style={{
                  fontSize: '1.2rem', fontWeight: 800,
                  marginBottom: 12, color: '#0b1220',
                  fontFamily: 'Plus Jakarta Sans,sans-serif', lineHeight: 1.28,
                  letterSpacing: '-0.014em', position: 'relative', zIndex: 1,
                }}>{r.title}</h3>

                <p style={{
                  fontSize: '0.94rem', color: '#64748b', lineHeight: 1.72,
                  marginBottom: 0, fontFamily: 'Inter,sans-serif', position: 'relative', zIndex: 1,
                }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="fade-up" style={{ marginTop: 56 }}>
          <div style={{
            background: '#fff', border: '1px solid #e8e3dc', borderRadius: 22,
            padding: '32px 36px', position: 'relative', overflow: 'hidden',
          }}>
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 4,
              background: 'var(--grad-tri)', opacity: 0.85,
            }} />
            <div className="row align-items-center g-3">
              <div className="col-lg-4">
                <div style={{
                  fontSize: '0.72rem', fontWeight: 800, letterSpacing: 2,
                  textTransform: 'uppercase', color: '#2563eb', marginBottom: 6,
                  fontFamily: 'Inter,sans-serif',
                }}>Serving across Chennai</div>
                <div style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif', fontWeight: 800,
                  fontSize: '1.15rem', color: '#0b1220', lineHeight: 1.3,
                }}>From OMR's IT corridor to Anna Nagar's enterprises — we cover every part of Chennai.</div>
              </div>
              <div className="col-lg-8">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {areas.map((a, i) => {
                    const c = ['#2563eb', '#dc2626', '#f59e0b'][i % 3]
                    return (
                      <span key={a} style={{
                        background: `${c}10`, color: c, border: `1px solid ${c}30`,
                        padding: '6px 14px', borderRadius: 50,
                        fontSize: '0.78rem', fontWeight: 700,
                        fontFamily: 'Inter,sans-serif',
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        transition: 'all 0.25s var(--ease-out)',
                      }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = c
                          e.currentTarget.style.color = '#fff'
                          e.currentTarget.style.transform = 'translateY(-2px)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = `${c}10`
                          e.currentTarget.style.color = c
                          e.currentTarget.style.transform = ''
                        }}
                      >
                        <i className="bi bi-geo-alt-fill" style={{ fontSize: '0.7rem' }} />
                        {a}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
