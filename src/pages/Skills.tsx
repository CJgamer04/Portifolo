import { useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

const colorMap: Record<string, { bg: string; text: string; dot: string }> = {
  blue: { bg: '#EFF6FF', text: '#2563EB', dot: '#2563EB' },
  teal: { bg: '#F0FDFA', text: '#0D9488', dot: '#14B8A6' },
  purple: { bg: '#F5F3FF', text: '#7C3AED', dot: '#8B5CF6' },
  orange: { bg: '#FFF7ED', text: '#C2410C', dot: '#F59E0B' },
  slate: { bg: '#F8FAFC', text: '#475569', dot: '#64748B' },
  green: { bg: '#F0FDF4', text: '#15803D', dot: '#22C55E' },
}

const darkColorMap: Record<string, { bg: string; text: string; dot: string }> = {
  blue: { bg: '#1D2F5C', text: '#93C5FD', dot: '#3B82F6' },
  teal: { bg: '#0F2D2A', text: '#5EEAD4', dot: '#2DD4BF' },
  purple: { bg: '#2D1B69', text: '#C4B5FD', dot: '#A78BFA' },
  orange: { bg: '#451A03', text: '#FCD34D', dot: '#FBBF24' },
  slate: { bg: '#1E293B', text: '#94A3B8', dot: '#64748B' },
  green: { bg: '#14532D', text: '#86EFAC', dot: '#4ADE80' },
}

export default function Skills() {
  const t = useT()
  const data = tr.skills

  return (
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            {t({ pt: 'Habilidades', en: 'Skills' })}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            {t(data.pageTitle)}
          </h1>
          <p className="text-lg text-muted-foreground">{t(data.pageSubtitle)}</p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.categories.map((cat, i) => {
            const colors = colorMap[cat.color]
            return (
              <div
                key={cat.id}
                className="rounded-2xl p-7 card-hover animate-fade-in-up"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  animationDelay: `${0.05 + i * 0.08}s`,
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: colors.dot }}
                  />
                  <h2
                    className="font-bold text-base text-foreground"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {t(cat.title)}
                  </h2>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => {
                    const label = typeof item === 'string' ? item : t(item as { pt: string; en: string })
                    return (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:opacity-80"
                        style={{
                          background: colors.bg,
                          color: colors.text,
                        }}
                      >
                        {label}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Proficiency visual bar section */}
        <div
          className="mt-10 rounded-2xl p-8 animate-fade-in-up delay-400"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <h2
            className="font-bold text-xl text-foreground mb-8"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {t({ pt: 'Nível de Proficiência', en: 'Proficiency Levels' })}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: { pt: 'Análise de Requisitos', en: 'Requirements Analysis' }, pct: 85 },
              { label: { pt: 'Metodologias Ágeis', en: 'Agile Methodologies' }, pct: 80 },
              { label: { pt: 'Gestão de Projetos', en: 'Project Management' }, pct: 75 },
              { label: { pt: 'Prototipação (Figma)', en: 'Prototyping (Figma)' }, pct: 70 },
              { label: { pt: 'Documentação Técnica', en: 'Technical Documentation' }, pct: 80 },
              { label: { pt: 'Comunicação com Stakeholders', en: 'Stakeholder Communication' }, pct: 85 },
            ].map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">{t(skill.label)}</span>
                  <span className="text-xs text-muted-foreground">{skill.pct}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--muted)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${skill.pct}%`,
                      background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
