'use client'
import { useState, useEffect, useRef } from 'react'

// Section 17 — Frequently Asked Questions (Chennai)
const faqs = [
  { q: 'What does ZoFlowX do as a Zoho Partner in Chennai?',
    a: 'ZoFlowX is an authorised Zoho partner based in Chennai. We help businesses in Tamil Nadu and across India implement, customise, and support the full suite of Zoho products — from CRM and Books to Zoho One.' },
  { q: 'Which Zoho products does ZoFlowX implement?',
    a: "We implement Zoho CRM, Zoho Books, Zoho People, Zoho Projects, Zoho Desk, Zoho Analytics, Zoho Inventory, and Zoho One. If it's in the Zoho ecosystem, we can set it up and customise it for your business." },
  { q: 'Why choose a local Zoho partner in Chennai instead of a remote consultant?',
    a: 'Working with a Chennai based Zoho partner like ZoFlowX means faster response times, on site support when needed, and a team that understands the regulatory and business context specific to Tamil Nadu and South India.' },
  { q: 'How long does a Zoho implementation typically take?',
    a: 'A standard Zoho CRM setup takes 2–4 weeks. More complex implementations involving multiple Zoho apps or data migration can take 6–12 weeks. ZoFlowX provides a clear project timeline before we begin.' },
  { q: 'Does ZoFlowX offer Zoho training for our team?',
    a: "Yes. We provide hands on Zoho training sessions tailored to your team's roles — whether that's sales staff using Zoho CRM or finance teams working in Zoho Books. Training is available in person (Chennai) or online." },
  { q: 'Can ZoFlowX migrate data from our existing software to Zoho?',
    a: 'Yes. We handle data migration from platforms like Tally, Salesforce, HubSpot, Excel, and other legacy systems into Zoho. We map, clean, and validate your data before migration to minimise errors.' },
  { q: 'What industries does ZoFlowX serve in Chennai?',
    a: "We work with businesses in manufacturing, retail, real estate, logistics, professional services, healthcare, and education. Our Zoho solutions are tailored to each industry's workflows and compliance needs." },
  { q: 'Does ZoFlowX provide post implementation support?',
    a: 'Yes. ZoFlowX offers ongoing Zoho support plans that cover troubleshooting, feature updates, user additions, and workflow changes. Support is available via phone, email, and remote desktop.' },
  { q: 'Can ZoFlowX build custom integrations with Zoho?',
    a: "Yes. We build custom integrations between Zoho apps and third party tools — including payment gateways, ecommerce platforms, ERP systems, and WhatsApp — using Zoho's API, Deluge scripting, and Zoho Flow." },
  { q: 'How do I get started with ZoFlowX?',
    a: "Book a free consultation through our website or call our Chennai office. We'll assess your current tools, understand your business goals, and recommend the right Zoho solution and implementation plan for you." },
  { q: 'Does ZoFlowX serve businesses across all areas of Chennai?',
    a: "Yes. ZoFlowX works with businesses across Chennai — including commercial hubs like Anna Nagar, Nungambakkam, T. Nagar, Velachery, Guindy, OMR (Old Mahabalipuram Road), Ambattur, and Porur. Whether you're a startup in Sholinganallur or an established firm in Adyar, our Zoho consultants can visit your office or support you remotely." },
  { q: 'Is ZoFlowX suitable for small businesses in Chennai?',
    a: 'Absolutely. ZoFlowX works with businesses of all sizes — from solo traders and small teams to large enterprises. We offer flexible Zoho packages that fit SME budgets without compromising on quality of implementation or support.' },
  { q: "Can ZoFlowX help if we already have Zoho but it's not set up properly?",
    a: 'Yes. Many clients come to us after a poor initial setup. ZoFlowX conducts a Zoho audit, identifies gaps in your current configuration, and re implements or optimises workflows, automations, and integrations to get your system working the way it should.' },
  { q: 'How do I get started with ZoFlowX as my Zoho Partner in Chennai?',
    a: 'Getting started is simple. Book a free 30 minute Zoho audit with ZoFlowX. Our Chennai team will review your current setup, understand your business requirements, and give you a clear roadmap — with no obligation and no sales pressure.' },
]

const relatedPages = [
  { label: 'Zoho Partner in India',     href: '#' },
  { label: 'Zoho Partner in Mumbai',    href: '#' },
  { label: 'Zoho Partner in Bangalore', href: '#' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
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
    <section id="faq" ref={ref} style={{ background: '#fafaf7' }}>
      <div className="container">
        <div className="text-center mb-5 fade-up" style={{ maxWidth: 820, margin: '0 auto 56px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="section-label">Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Questions come up? <span className="grad-blue-red">Let's clear them.</span>
          </h2>
          <p className="section-sub mx-auto">
            Still thinking it through? Here are answers to the most common questions we hear from businesses like yours.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="fade-up">
              {faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <div key={i} style={{
                    border: `1px solid ${isOpen ? '#2563eb' : '#e8e3dc'}`,
                    borderRadius: 16, marginBottom: 12, overflow: 'hidden',
                    background: '#fff',
                    boxShadow: isOpen ? '0 14px 38px rgba(37,99,235,0.10)' : 'none',
                    transition: 'all 0.3s',
                  }}>
                    <button onClick={() => setOpen(isOpen ? -1 : i)}
                      style={{
                        width: '100%', textAlign: 'left',
                        background: 'transparent', border: 'none',
                        padding: '22px 26px',
                        fontFamily: 'Inter,sans-serif',
                        fontWeight: 700, fontSize: '0.98rem',
                        color: isOpen ? '#2563eb' : '#0b1220',
                        cursor: 'pointer',
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', gap: 16,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => { if (!isOpen) e.currentTarget.style.color = '#2563eb' }}
                      onMouseLeave={e => { if (!isOpen) e.currentTarget.style.color = '#0b1220' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
                        <span style={{
                          fontFamily: 'Inter,sans-serif',
                          fontSize: '0.78rem', fontWeight: 800,
                          color: isOpen ? '#2563eb' : '#94a3b8',
                          letterSpacing: 1, minWidth: 22,
                        }}>{String(i + 1).padStart(2, '0')}</span>
                        {faq.q}
                      </span>
                      <div style={{
                        width: 34, height: 34, borderRadius: '50%',
                        background: isOpen ? 'var(--grad-tri)' : '#f6f1ea',
                        color: isOpen ? '#fff' : '#334155',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.88rem', flexShrink: 0,
                        transition: 'all 0.3s',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      }}>
                        <i className="bi bi-plus-lg" />
                      </div>
                    </button>
                    <div style={{
                      maxHeight: isOpen ? 480 : 0, overflow: 'hidden',
                      transition: 'max-height 0.45s ease',
                    }}>
                      <div style={{
                        padding: '0 26px 24px 62px',
                        fontSize: '0.93rem', color: '#475569',
                        lineHeight: 1.75, fontFamily: 'Inter,sans-serif',
                      }}>
                        {faq.a}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="fade-up text-center" style={{
              marginTop: 32, padding: '28px 24px',
              background: '#fff', borderRadius: 18, border: '1px solid #e8e3dc',
              position: 'relative', overflow: 'hidden',
            }}>
              <div aria-hidden style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'var(--grad-tri)',
              }} />
              <div style={{ fontSize: '0.92rem', color: '#475569', marginBottom: 14, fontFamily: 'Inter,sans-serif' }}>
                Still have questions?
              </div>
              <a href="#contact" className="btn-gradient ahover">
                Ask Us Directly <i className="bi bi-arrow-right" />
              </a>
            </div>

            {/* Related pages */}
            <div className="fade-up" style={{ marginTop: 44 }}>
              <h4 style={{
                fontSize: '0.78rem', fontWeight: 700, color: '#64748b',
                marginBottom: 16, fontFamily: 'Inter,sans-serif',
                letterSpacing: 1.8, textTransform: 'uppercase',
              }}>
                Related Pages
              </h4>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {relatedPages.map((page, i) => {
                  const colors = ['#2563eb', '#dc2626', '#f59e0b']
                  const c = colors[i % 3]
                  return (
                    <a key={page.label} href={page.href}
                      style={{
                        background: `${c}10`, color: c,
                        padding: '10px 20px', borderRadius: 50,
                        fontSize: '0.86rem', fontWeight: 700,
                        textDecoration: 'none', transition: 'all 0.25s',
                        fontFamily: 'Inter,sans-serif',
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        border: `1px solid ${c}30`,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = c
                        e.currentTarget.style.color = '#fff'
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = `0 10px 22px ${c}55`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = `${c}10`
                        e.currentTarget.style.color = c
                        e.currentTarget.style.transform = ''
                        e.currentTarget.style.boxShadow = ''
                      }}
                    >
                      {page.label} <i className="bi bi-arrow-up-right" style={{ fontSize: '0.75rem' }} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
