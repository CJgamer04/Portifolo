import { GraduationCap, MapPin, Languages, Target, Heart, Star } from 'lucide-react'
import { useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

export default function About() {
  const t = useT()
  const data = tr.about

  return (
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            {t({ pt: 'Conheça', en: 'Get to know' })}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            {t(data.pageTitle)}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{t(data.pageSubtitle)}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Biography */}
            <div
              className="rounded-2xl p-8 animate-fade-in-up delay-100"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)', color: '#fff' }}>
                  <Star size={15} />
                </div>
                <h2 className="font-bold text-lg text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {t(data.bioTitle)}
                </h2>
              </div>
              {t(data.bio).split('\n\n').map((para, i) => (
                <p key={i} className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            {/* Objectives */}
            <div
              className="rounded-2xl p-8 animate-fade-in-up delay-200"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#8B5CF6', color: '#fff' }}>
                  <Target size={15} />
                </div>
                <h2 className="font-bold text-lg text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {t(data.objectivesTitle)}
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{t(data.objectives)}</p>
            </div>

            {/* Values */}
            <div
              className="rounded-2xl p-8 animate-fade-in-up delay-300"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)', color: '#fff' }}>
                  <Heart size={15} />
                </div>
                <h2 className="font-bold text-lg text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {t(data.valuesTitle)}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.values.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: 'var(--muted)' }}
                  >
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                    <span className="text-sm font-medium text-foreground">{t(v)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas of interest */}
            <div
              className="rounded-2xl p-8 animate-fade-in-up delay-400"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <h2 className="font-bold text-lg text-foreground mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {t(data.interestsTitle)}
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {data.interests.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                    style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
                  >
                    {t(item)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Education */}
            <div
              className="rounded-2xl p-7 animate-fade-in-up delay-200"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--primary)', color: '#fff' }}>
                  <GraduationCap size={15} />
                </div>
                <h2 className="font-bold text-base text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {t(data.educationTitle)}
                </h2>
              </div>

              <div
                className="rounded-xl p-4 mb-4"
                style={{ background: 'var(--muted)' }}
              >
                <p className="font-semibold text-sm text-foreground mb-1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {t(data.degree)}
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>{t(data.university)}</p>
              </div>

              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                <span>{t(data.educationLocation)}</span>
              </div>
            </div>

            {/* Languages */}
            <div
              className="rounded-2xl p-7 animate-fade-in-up delay-300"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#F59E0B', color: '#fff' }}>
                  <Languages size={15} />
                </div>
                <h2 className="font-bold text-base text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {t(data.languagesTitle)}
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {data.languages.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: i < data.languages.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <span className="text-sm font-medium text-foreground">{t(lang.name)}</span>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: i === 0 ? 'var(--accent)' : 'var(--muted)',
                        color: i === 0 ? 'var(--accent-foreground)' : 'var(--muted-foreground)',
                      }}
                    >
                      {t(lang.level)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div
              className="rounded-2xl p-7 animate-fade-in-up delay-400"
              style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #1D4ED8 100%)' }}
            >
              <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">
                {t({ pt: 'Resumo', en: 'Summary' })}
              </p>
              <div className="space-y-4">
                {[
                  { num: '2+', label: { pt: 'Anos de Experiência', en: 'Years of Experience' } },
                  { num: '7+', label: { pt: 'Ferramentas Dominadas', en: 'Tools Mastered' } },
                  { num: '10+', label: { pt: 'Certificações', en: 'Certifications' } },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {stat.num}
                    </span>
                    <span className="text-sm text-white/70">{t(stat.label)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
