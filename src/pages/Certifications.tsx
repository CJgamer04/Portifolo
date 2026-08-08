import { useState } from 'react'
import { ChevronDown, Award, Star } from 'lucide-react'
import { useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

const institutionColors: Record<string, string> = {
  scrumStudy: '#1E40AF',
  clickup: '#7C3AED',
  alura: '#059669',
  linkedinLearning: '#0A66C2',
  santander: '#EC0000',
  enap: '#D97706',
  websis: '#6B7280',
}

export default function Certifications() {
  const t = useT()
  const data = tr.certifications
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['scrumStudy', 'clickup']))

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  // All highlighted certs for the featured row
  const allHighlighted = data.institutions.flatMap((inst) =>
    inst.certs.filter((c) => c.highlight).map((c) => ({ ...c, institution: inst.name }))
  )

  return (
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            {t({ pt: 'Formação Contínua', en: 'Continuous Learning' })}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            {t(data.pageTitle)}
          </h1>
          <p className="text-lg text-muted-foreground">{t(data.pageSubtitle)}</p>
        </div>

        {/* Featured certs */}
        <div
          className="rounded-2xl p-7 mb-10 animate-fade-in-up delay-100"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Star size={16} style={{ color: '#F59E0B' }} />
            <h2 className="font-bold text-base text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {t(tr.common.highlight)}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {allHighlighted.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl card-hover"
                style={{ background: 'var(--muted)', border: '1px solid var(--border)' }}
              >
                <Award size={14} style={{ color: '#F59E0B' }} />
                <div>
                  <p className="text-xs font-semibold text-foreground">{t(cert.title)}</p>
                  <p className="text-xs text-muted-foreground">{cert.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion by institution */}
        <div className="space-y-3">
          {data.institutions.map((inst, i) => {
            const isOpen = openIds.has(inst.id)
            const color = institutionColors[inst.id] || '#64748B'
            const highlightCount = inst.certs.filter((c) => c.highlight).length

            return (
              <div
                key={inst.id}
                className="rounded-2xl overflow-hidden animate-fade-in-up"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  animationDelay: `${0.05 + i * 0.06}s`,
                }}
              >
                {/* Header */}
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left transition-all hover:bg-muted/50"
                  onClick={() => toggle(inst.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: color }}
                    />
                    <div>
                      <p className="font-bold text-base text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {inst.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {inst.certs.length} {t({ pt: 'certificados', en: 'certificates' })}
                        {highlightCount > 0 && (
                          <span className="ml-2 text-yellow-500">
                            ★ {highlightCount} {t({ pt: 'destaque', en: 'highlighted' })}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className="text-muted-foreground transition-transform duration-300 flex-shrink-0"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                {/* Expandable content */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '600px' : '0' }}
                >
                  <div className="px-7 pb-6" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="pt-5 space-y-2.5">
                      {inst.certs.map((cert, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between p-3.5 rounded-xl"
                          style={{ background: 'var(--muted)' }}
                        >
                          <div className="flex items-center gap-3">
                            <Award
                              size={15}
                              style={{ color: cert.highlight ? '#F59E0B' : 'var(--muted-foreground)', flexShrink: 0 }}
                            />
                            <span className="text-sm font-medium text-foreground">{t(cert.title)}</span>
                            {cert.highlight && (
                              <span
                                className="text-xs px-2 py-0.5 rounded-full font-medium hidden sm:inline"
                                style={{ background: '#FEF3C7', color: '#92400E' }}
                              >
                                {t(tr.common.highlight)}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground flex-shrink-0 ml-4">{cert.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up delay-400">
          {[
            { num: '7', label: { pt: 'Instituições', en: 'Institutions' } },
            { num: `${data.institutions.reduce((acc, i) => acc + i.certs.length, 0)}`, label: { pt: 'Certificações', en: 'Certifications' } },
            { num: `${data.institutions.flatMap((i) => i.certs).filter((c) => c.highlight).length}`, label: { pt: 'Destaques', en: 'Highlights' } },
            { num: '2024', label: { pt: 'Último Certificado', en: 'Latest Certificate' } },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center card-hover"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <p className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {stat.num}
              </p>
              <p className="text-xs text-muted-foreground">{t(stat.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
