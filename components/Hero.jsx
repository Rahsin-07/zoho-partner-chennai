'use client'
import { useEffect, useRef, useState } from 'react'

// 7 slides total — slide 1 is the brand intro, slides 2-7 are services
const heroSlides = [
  // ───────────── SLIDE 1: Brand intro ─────────────
  {
    kind: 'intro',
    color: '#2563eb',
    pillText: 'Zoho Authorized Partner · Chennai, India',
    showCertified: true,
    headlinePart1: 'Zoho Authorized Partner',
    headlinePart2: 'Chennai, India',
    description:
      'ZoFlowX helps Chennai businesses unlock the full potential of Zoho — structured implementation, custom solutions, migration and managed services.',
    descriptionBold: 'Every feature you pay for, working hard for your growth.',
    primaryCta: { text: 'Book Free 30-Min Audit', icon: 'bi-arrow-right', href: '#contact' },
    secondaryCta: { text: 'Explore Zoho Services', icon: 'bi-grid-3x3-gap', href: '#services' },
  },
  // ───────────── SLIDE 2 ─────────────
  {
    kind: 'service',
    tag: 'Zoho Consulting',
    headline: 'Paying for Zoho every month but your business still runs the same way?',
    description:
      "The gap isn't the software, it's the setup. As a Zoho Authorized Partner in Chennai, we help businesses unlock the full potential of Zoho through structured implementation — so every feature you pay for actually works hard for your growth.",
    cta: { text: 'Talk to a Zoho Expert Now', icon: 'bi-arrow-right', href: '#contact' },
    icon: 'bi-rocket-takeoff',
    color: '#2563eb',
  },
  // ───────────── SLIDE 3 ─────────────
  {
    kind: 'service',
    tag: 'Custom Zoho Solutions',
    headline: 'Looking for a Zoho Solution Tailored Specifically to Your Chennai Business?',
    description:
      'A default Zoho setup was never designed for your unique workflow. As the best Zoho Partner in Chennai, we build solutions around your exact process — from custom modules and automations to third party integrations. Everything is built specifically for your business.',
    cta: { text: 'Build My Zoho Solution', icon: 'bi-arrow-right', href: '#contact' },
    icon: 'bi-sliders',
    color: '#dc2626',
  },
  // ───────────── SLIDE 4 ─────────────
  {
    kind: 'service',
    tag: 'Zoho Migration & Integration',
    headline: 'Ready to Move to Zoho or Connect It With Your Existing Tools?',
    description:
      'Switching from another software to Zoho? Or want Zoho connected with your website, ERP, or other platforms? We handle complete Zoho migration and integration for businesses across Tamil Nadu, keeping your data safe and your operations running without interruption.',
    cta: { text: 'Start My Migration Now', icon: 'bi-arrow-right', href: '#contact' },
    icon: 'bi-arrow-left-right',
    color: '#f59e0b',
  },
  // ───────────── SLIDE 5 ─────────────
  {
    kind: 'service',
    tag: 'Dedicated Zoho Analytics Expert',
    headline: 'Struggling to See Your Full Business Performance in One Place?',
    description:
      'Partner with a dedicated Zoho Analytics expert to build custom dashboards and reports designed around your goals. Get live visibility into what is working, spot gaps faster, and make confident decisions without hunting through multiple tools or spreadsheets.',
    cta: { text: 'Get My Free Dashboard Demo', icon: 'bi-arrow-right', href: '#contact' },
    icon: 'bi-bar-chart-line',
    color: '#2563eb',
  },
  // ───────────── SLIDE 6 ─────────────
  {
    kind: 'service',
    tag: 'Zoho CRM Implementation',
    headline: 'Want to See How Zoho CRM Can Fix Your Chennai Sales Process?',
    description:
      'Most businesses use Zoho CRM just to save contacts and nothing more. As a certified Zoho CRM partner in Chennai, we build smart pipelines, lead scoring, and sales automation that push deals forward and actually help your team close more — not just track more.',
    cta: { text: 'See Zoho CRM in Action', icon: 'bi-arrow-right', href: '#contact' },
    icon: 'bi-people-fill',
    color: '#dc2626',
  },
  // ───────────── SLIDE 7 ─────────────
  {
    kind: 'service',
    tag: 'Dedicated Zoho Developer',
    headline: 'Need One Zoho Developer Fully Focused on Your Business Alone?',
    description:
      'Got new Zoho requirements coming in every week? Stop juggling freelancers for every task. Hire a dedicated Zoho developer in Chennai who works only for your business — available on demand, consistent in delivery, and fully aligned with your goals from day one.',
    cta: { text: 'Get a Dedicated Developer', icon: 'bi-arrow-right', href: '#contact' },
    icon: 'bi-code-square',
    color: '#f59e0b',
  },
]

// Rating avatars (RK, PM, SA, VN, DM)
const ratingAvatars = [
  { initials: 'RK', color: '#dc2626' },
  { initials: 'PM', color: '#16a34a' },
  { initials: 'SA', color: '#f59e0b' },
  { initials: 'VN', color: '#2563eb' },
  { initials: 'DM', color: '#7c3aed' },
]

// Quick action buttons — update the hrefs to your real numbers/links
const actionButtons = [
  { icon: 'bi-telephone-fill', label: 'Call',      href: 'tel:+919999999999' },
  { icon: 'bi-whatsapp',       label: 'WhatsApp',  href: 'https://wa.me/919999999999', highlight: true },
  { icon: 'bi-envelope-fill',  label: 'Email',     href: 'mailto:hello@zoflowx.com' },
  { icon: 'bi-calendar-event', label: 'Schedule',  href: '#contact' },
  { icon: 'bi-chat-dots-fill', label: 'Live Chat', href: '#chat' },
]

// Floating Zoho module chips (kept from original)
const moduleChips = [
  { label: 'Zoho CRM',       icon: 'bi-people-fill',    x: '2%',  y: '14%', delay: 0,   color: '#2563eb' },
  { label: 'Zoho Books',     icon: 'bi-journal-text',   x: '88%', y: '12%', delay: 0.4, color: '#dc2626' },
  { label: 'Zoho Creator',   icon: 'bi-app-indicator',  x: '90%', y: '48%', delay: 0.2, color: '#2563eb' },
  { label: 'Zoho Analytics', icon: 'bi-bar-chart-line', x: '1%',  y: '52%', delay: 0.8, color: '#f59e0b' },
]

const SLIDE_DURATION = 5000 // 7s per slide

const mobileBtn = {
  width: 38, height: 38, borderRadius: '50%',
  background: '#fff', border: '1px solid #e8e3dc',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', color: '#0b1220', fontSize: '0.95rem',
  boxShadow: '0 4px 12px rgba(11,18,32,0.06)',
}

export default function Hero() {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => {
      setActive((p) => (p + 1) % heroSlides.length)
    }, SLIDE_DURATION)
    return () => clearTimeout(t)
  }, [active, paused])

  // Fade-up observer (for the section as a whole entering view)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const current = heroSlides[active]
  const goTo = (i) => setActive(i)
  const prev = () => setActive((p) => (p - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setActive((p) => (p + 1) % heroSlides.length)

  return (
    <section
      id="hero"
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        background: 'linear-gradient(160deg, #fafaf7 0%, #f0ece5 100%)',
        padding: '90px 0 70px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Tri-color gradient blobs */}
      <div aria-hidden style={{ position: 'absolute', width: 540, height: 540, top: -200, left: -140, background: 'radial-gradient(circle at center, rgba(37,99,235,0.22), transparent 60%)', animation: 'blob-drift 14s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 580, height: 580, bottom: -240, right: -180, background: 'radial-gradient(circle at center, rgba(245,158,11,0.18), transparent 60%)', animation: 'blob-drift 18s ease-in-out infinite reverse', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', width: 420, height: 420, top: '30%', right: '20%', background: 'radial-gradient(circle at center, rgba(220,38,38,0.12), transparent 60%)', animation: 'blob-drift 22s ease-in-out infinite', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.45 }} className="dot-grid" />

      {/* Per-slide colored glow that retints with the active slide */}
      <div aria-hidden style={{
        position: 'absolute',
        top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: 720, height: 720,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${current.color}1a, transparent 65%)`,
        transition: 'background 0.8s ease',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

   
      {/* <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
        {moduleChips.map((c, i) => (
          <div key={c.label} className="d-none d-xl-inline-flex"
            style={{
              position: 'absolute', left: c.x, top: c.y,
              background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(8px)',
              border: '1px solid #e8e3dc', borderRadius: 999, padding: '7px 14px',
              fontSize: '0.78rem', fontFamily: 'Inter,sans-serif', fontWeight: 600,
              color: '#334155', boxShadow: '0 10px 28px rgba(11,18,32,0.08)',
              alignItems: 'center', gap: 8,
              animation: `float-y ${5 + (i % 3) * 1.2}s ease-in-out ${c.delay}s infinite`,
              whiteSpace: 'nowrap',
            }}>
            <i className={`bi ${c.icon}`} style={{ color: c.color, fontSize: '0.95rem' }} />
            {c.label}
          </div>
        ))}
      </div> */}

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* ═══════════════════ SLIDE STAGE ═══════════════════ */}
        <div style={{
          minHeight: 560,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
          <div
            key={`slide-${active}`}
            className="text-center"
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              width: '100%',
              animation: 'slide-in-up 0.7s cubic-bezier(.2,.7,.2,1) both',
            }}
          >
            {current.kind === 'intro' ? (
              // ════════════ INTRO SLIDE ════════════
              <>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                  <div className="pill-tri">
                    <span className="pill-dot" />
                    <span>{current.pillText}</span>
                    {current.showCertified && (
                      <>
                        <span style={{ width: 1, height: 14, background: '#e8e3dc' }} />
                        <span style={{ color: '#2563eb', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                          <i className="bi bi-patch-check-fill" /> Certified
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <h1 style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontSize: 'clamp(2.3rem, 5.6vw, 4.15rem)',
                  fontWeight: 800, color: '#0b1220',
                  marginBottom: 22, letterSpacing: '-0.028em', lineHeight: 1.05,
                }}>
                  <span className="grad-blue-red">{current.headlinePart1}</span><br />
                  in <span className="grad-red-yellow">{current.headlinePart2}</span>
                </h1>

                <p style={{
                  fontSize: '1.13rem', color: '#475569', maxWidth: 760,
                  margin: '0 auto 32px', lineHeight: 1.75, fontFamily: 'Inter,sans-serif',
                }}>
                  {current.description} <strong style={{ color: '#0b1220' }}>{current.descriptionBold}</strong>
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
                  <a href={current.primaryCta.href} className="btn-gradient ahover" style={{ padding: '0.94rem 2rem', fontSize: '0.95rem' }}>
                    {current.primaryCta.text} <i className={`bi ${current.primaryCta.icon}`} />
                  </a>
                  <a href={current.secondaryCta.href} className="btn-white-soft ahover" style={{ padding: '0.86rem 1.9rem', fontSize: '0.95rem' }}>
                    {current.secondaryCta.text} <i className={`bi ${current.secondaryCta.icon}`} />
                  </a>
                </div>
              </>
            ) : (
              // ════════════ SERVICE SLIDE ════════════
              <>
                {/* Floating service icon orb */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}>
                  <div style={{
                    width: 78, height: 78, borderRadius: 22,
                    background: `linear-gradient(135deg, ${current.color}, ${current.color}cc)`,
                    color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem',
                    boxShadow: `0 20px 40px ${current.color}40`,
                    animation: 'gentle-bob 4s ease-in-out infinite',
                  }}>
                    <i className={`bi ${current.icon}`} />
                  </div>
                </div>

                {/* Tag pill */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}>
                  <span style={{
                    display: 'inline-block',
                    background: `${current.color}15`,
                    color: current.color,
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: 1.8,
                    textTransform: 'uppercase',
                    padding: '7px 16px',
                    borderRadius: 50,
                    fontFamily: 'Inter,sans-serif',
                    border: `1px solid ${current.color}30`,
                  }}>{current.tag}</span>
                </div>

                {/* Headline */}
                <h2 style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontSize: 'clamp(1.8rem, 4.2vw, 3.1rem)',
                  fontWeight: 800,
                  color: '#0b1220',
                  marginBottom: 22,
                  letterSpacing: '-0.022em',
                  lineHeight: 1.12,
                  maxWidth: 920,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>{current.headline}</h2>

                {/* Description */}
                <p style={{
                  fontSize: '1.1rem',
                  color: '#475569',
                  maxWidth: 760,
                  margin: '0 auto 32px',
                  lineHeight: 1.75,
                  fontFamily: 'Inter,sans-serif',
                }}>{current.description}</p>

                {/* CTA */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
                  <a
                    href={current.cta.href}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 10,
                      background: current.color, color: '#fff',
                      padding: '0.95rem 2rem', fontSize: '0.95rem', fontWeight: 700,
                      borderRadius: 14, textDecoration: 'none',
                      fontFamily: 'Plus Jakarta Sans,sans-serif',
                      boxShadow: `0 14px 30px ${current.color}40`,
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = `0 20px 40px ${current.color}55`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = ''
                      e.currentTarget.style.boxShadow = `0 14px 30px ${current.color}40`
                    }}
                  >
                    {current.cta.text} <i className={`bi ${current.cta.icon}`} />
                  </a>
                </div>
              </>
            )}

            {/* ═══════════ RATING ROW (on every slide) ═══════════ */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: 16, flexWrap: 'wrap', marginBottom: 22,
            }}>
              <div style={{ display: 'flex' }}>
                {ratingAvatars.map((a, i) => (
                  <div key={a.initials} style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: a.color, color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.74rem', fontWeight: 800,
                    fontFamily: 'Inter,sans-serif',
                    border: '2.5px solid #fff',
                    marginLeft: i === 0 ? 0 : -10,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    zIndex: ratingAvatars.length - i,
                  }}>{a.initials}</div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="bi bi-star-fill" style={{ color: '#fbbf24', fontSize: '1.05rem' }} />
                  ))}
                </div>
                <span style={{
                  fontFamily: 'Plus Jakarta Sans,sans-serif',
                  fontSize: '1.05rem', fontWeight: 800, color: '#0b1220',
                }}>4.8/5</span>
              </div>
            </div>

            {/* ═══════════ ACTION BUTTONS (on every slide) ═══════════ */}
            <div style={{
              display: 'flex', justifyContent: 'center',
              gap: 10, flexWrap: 'wrap',
            }}>
              {actionButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.href.startsWith('http') ? '_blank' : undefined}
                  rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: btn.highlight ? '#dcfce7' : '#fff',
                    color: btn.highlight ? '#15803d' : '#0b1220',
                    border: btn.highlight ? '1px solid #bbf7d0' : '1px solid #e8e3dc',
                    padding: '0.62rem 1.1rem',
                    fontSize: '0.88rem', fontWeight: 600,
                    borderRadius: 12, textDecoration: 'none',
                    fontFamily: 'Inter,sans-serif',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 10px rgba(11,18,32,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(11,18,32,0.08)'
                    if (!btn.highlight) {
                      e.currentTarget.style.borderColor = current.color
                      e.currentTarget.style.color = current.color
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(11,18,32,0.04)'
                    if (!btn.highlight) {
                      e.currentTarget.style.borderColor = '#e8e3dc'
                      e.currentTarget.style.color = '#0b1220'
                    }
                  }}
                >
                  <i className={`bi ${btn.icon}`} style={{ fontSize: '1rem' }} />
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

          {/* ═══════════ SIDE ARROW CONTROLS (desktop) ═══════════ */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="d-none d-lg-flex"
            style={{
              position: 'absolute', left: -10, top: '50%',
              transform: 'translateY(-50%)',
              width: 52, height: 52, borderRadius: '50%',
              background: '#fff', border: '1px solid #e8e3dc',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.25s ease',
              color: '#0b1220', fontSize: '1.2rem',
              boxShadow: '0 8px 24px rgba(11,18,32,0.08)',
              zIndex: 3,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = current.color; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = current.color; e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0b1220'; e.currentTarget.style.borderColor = '#e8e3dc'; e.currentTarget.style.transform = 'translateY(-50%)' }}
          >
            <i className="bi bi-arrow-left" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="d-none d-lg-flex"
            style={{
              position: 'absolute', right: -10, top: '50%',
              transform: 'translateY(-50%)',
              width: 52, height: 52, borderRadius: '50%',
              background: '#fff', border: '1px solid #e8e3dc',
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.25s ease',
              color: '#0b1220', fontSize: '1.2rem',
              boxShadow: '0 8px 24px rgba(11,18,32,0.08)',
              zIndex: 3,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = current.color; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = current.color; e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0b1220'; e.currentTarget.style.borderColor = '#e8e3dc'; e.currentTarget.style.transform = 'translateY(-50%)' }}
          >
            <i className="bi bi-arrow-right" />
          </button>
        </div>

        {/* ═══════════ PROGRESS BARS + COUNTER ═══════════ */}
        <div style={{
          marginTop: 32,
          display: 'flex', alignItems: 'center',
          gap: 18, flexWrap: 'wrap',
          maxWidth: 900, margin: '32px auto 0',
        }}>
          {/* Mobile prev */}
          <button onClick={prev} aria-label="Previous" className="d-lg-none" style={mobileBtn}>
            <i className="bi bi-arrow-left" />
          </button>

          {/* Progress bars */}
          <div style={{ display: 'flex', gap: 6, flex: 1, minWidth: 200 }}>
            {heroSlides.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  flex: 1, height: 4,
                  background: '#d8d3c9',
                  border: 'none', padding: 0,
                  borderRadius: 4, cursor: 'pointer',
                  overflow: 'hidden', position: 'relative',
                }}
              >
                <div
                  key={`bar-${i}-${active}-${paused}`}
                  style={{
                    position: 'absolute', inset: 0,
                    background: s.color,
                    transformOrigin: 'left',
                    transform: i < active ? 'scaleX(1)'
                            : i > active ? 'scaleX(0)'
                            : undefined,
                    animation: i === active && !paused
                      ? `fill-bar ${SLIDE_DURATION}ms linear forwards`
                      : 'none',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Mobile next */}
          <button onClick={next} aria-label="Next" className="d-lg-none" style={mobileBtn}>
            <i className="bi bi-arrow-right" />
          </button>

          {/* Counter */}
          <div style={{
            fontFamily: 'Plus Jakarta Sans,sans-serif',
            fontSize: '0.95rem', color: '#64748b', fontWeight: 600,
            minWidth: 70, textAlign: 'right',
          }}>
            <span style={{ color: '#0b1220', fontWeight: 800, fontSize: '1.1rem' }}>
              {String(active + 1).padStart(2, '0')}
            </span>
            <span style={{ margin: '0 4px' }}>/</span>
            {String(heroSlides.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fill-bar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes gentle-bob {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50%      { transform: translateY(-8px) rotate(2deg); }
        }
      `}</style>
    </section>
  )
}