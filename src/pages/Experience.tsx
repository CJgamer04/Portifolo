import { Calendar, MapPin, CheckCircle2, Trophy, Wrench } from 'lucide-react'
import { useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

export default function Experience() {
  const t = useT()
  const data = tr.experience

  return (
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            {t({ pt: 'Trajetória', en: 'Journey' })}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            {t(data.pageTitle)}
          </h1>
          <p className="text-lg text-muted-foreground">{t(data.pageSubtitle)}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'var(--border)' }}
          />

          <div className="space-y-8">
            {/* Experience card */}
            <div className="relative animate-fade-in-up delay-100">
              {/* Timeline dot */}
              <div
                className="absolute left-4 top-8 w-4 h-4 rounded-full border-2 hidden sm:block z-10"
                style={{ background: 'var(--primary)', borderColor: 'var(--background)' }}
              />

              <div
                className="sm:ml-16 rounded-2xl overflow-hidden"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                {/* Job header */}
                <div
                  className="px-7 py-6"
                  style={{ borderBottom: '1px solid var(--border)', background: 'var(--muted)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
                        >
                          {t({ pt: 'Estágio', en: 'Internship' })}
                        </span>
                      </div>
                      <h2
                        className="text-xl font-bold text-foreground mt-2"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {t(data.role)}
                      </h2>
                      <p className="text-base font-semibold mt-1" style={{ color: 'var(--primary)' }}>
                        {data.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={13} />
                        <span>{t(data.period)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={13} />
                        <span>{t(data.location)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7 space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="font-bold text-base text-foreground mb-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {t(data.overviewTitle)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(data.overview)}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Responsibilities */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                        <h3 className="font-bold text-base text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {t(data.responsibilitiesTitle)}
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {data.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: 'var(--primary)' }}
                            />
                            {t(r)}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Trophy size={16} style={{ color: '#F59E0B' }} />
                        <h3 className="font-bold text-base text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {t(data.achievementsTitle)}
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {data.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <div
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ background: '#F59E0B' }}
                            />
                            {t(a)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Wrench size={16} style={{ color: 'var(--accent)' }} />
                      <h3 className="font-bold text-base text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {t(data.toolsTitle)}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium"
                          style={{
                            background: 'var(--muted)',
                            color: 'var(--foreground)',
                            border: '1px solid var(--border)',
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More to come note */}
        <div
          className="mt-8 sm:ml-16 p-5 rounded-2xl text-center animate-fade-in-up delay-300"
          style={{ border: '2px dashed var(--border)', color: 'var(--muted-foreground)' }}
        >
          <p className="text-sm">{t({ pt: '🚀 Mais experiências em desenvolvimento', en: '🚀 More experience coming soon' })}</p>
        </div>
      </div>
    </main>
  )
}
