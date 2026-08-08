import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, FileText, ClipboardList, Settings, Layers, ArrowLeftRight } from 'lucide-react'
import { useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

const cardIcons = [
  <ClipboardList size={22} strokeWidth={1.5} />,
  <Settings size={22} strokeWidth={1.5} />,
  <Layers size={22} strokeWidth={1.5} />,
  <ArrowLeftRight size={22} strokeWidth={1.5} />,
]

const cardAccents = ['#2563EB', '#14B8A6', '#8B5CF6', '#F59E0B']

export default function Home() {
  const t = useT()

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 animate-fade-in"
                style={{ background: 'var(--muted)', color: 'var(--muted-foreground)', border: '1px solid var(--border)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                {t({ pt: 'Disponível para novas oportunidades', en: 'Open to new opportunities' })}
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-in-up"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
              >
                {t(tr.home.name)}
              </h1>

              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 animate-fade-in-up delay-100">
                <span
                  className="text-lg font-semibold"
                  style={{ color: 'var(--primary)' }}
                >
                  {t(tr.home.title)}
                </span>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 animate-fade-in-up delay-200">
                {t(tr.home.headline)}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mb-10 animate-fade-in-up delay-300"
                style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem' }}
              >
                {t(tr.home.summary)}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-in-up delay-400">
                <Link
                  to="/projetos"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: 'var(--primary)' }}
                >
                  {t(tr.home.ctaWork)}
                  <ArrowRight size={15} />
                </Link>

                <Link
                  to="/projetos"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-muted hover:-translate-y-0.5"
                  style={{ border: '1px solid var(--border)', color: 'var(--foreground)', background: 'var(--card)' }}
                >
                  <FileText size={15} />
                  {t(tr.home.ctaProjects)}
                </Link>

                <Link
                  to="/curriculo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-muted hover:-translate-y-0.5"
                  style={{ border: '1px solid var(--border)', color: 'var(--foreground)', background: 'var(--card)' }}
                >
                  <Download size={15} />
                  {t(tr.home.ctaResume)}
                </Link>

                <a
                  href="mailto:charles@example.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{ color: 'var(--accent)', border: '1px solid var(--accent)', background: 'transparent' }}
                >
                  <Mail size={15} />
                  {t(tr.common.contact)}
                </a>
              </div>
            </div>

            {/* Profile photo */}
            <div className="flex-shrink-0 animate-scale-in delay-200">
              <div className="relative">
                {/* Outer ring */}
                <div
                  className="w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1"
                  style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)' }}
                >
                  {/* Inner ring white */}
                  <div className="w-full h-full rounded-full p-1 bg-background">
                    {/* Avatar */}
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center text-5xl font-bold text-primary-foreground select-none"
                      style={{
                        background: 'linear-gradient(135deg, #1D4ED8 0%, #0F172A 100%)',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                      }}
                    >
                      CPM
                    </div>
                  </div>
                </div>
                {/* Floating badges */}
                <div
                  className="absolute -bottom-3 -right-4 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--primary)' }}
                >
                  🎓 {t({ pt: 'Ciência da Computação', en: 'Computer Science' })}
                </div>
                <div
                  className="absolute -top-3 -left-4 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--accent)' }}
                >
                  📋 {t({ pt: 'Analista de Requisitos', en: 'Requirements Analyst' })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <h2
              className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t(tr.home.featuresTitle)}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
              {t(tr.home.featuresSubtitle)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tr.home.cards.map((card, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl p-6 animate-fade-in-up"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  animationDelay: `${0.1 + i * 0.1}s`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${cardAccents[i]}15`, color: cardAccents[i] }}
                >
                  {cardIcons[i]}
                </div>
                <h3
                  className="font-semibold text-foreground mb-2 text-base"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {t(card.title)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(card.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
