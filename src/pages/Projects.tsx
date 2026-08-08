import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import { useT } from '../context/AppContext'
import { tr } from '../i18n/translations'

export default function Projects() {
  const t = useT()
  const data = tr.projects

  return (
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            {t({ pt: 'Cases', en: 'Cases' })}
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.02em' }}
          >
            {t(data.pageTitle)}
          </h1>
          <p className="text-lg text-muted-foreground">{t(data.pageSubtitle)}</p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SIGEBD Card */}
          <div
            className="rounded-2xl overflow-hidden card-hover animate-fade-in-up delay-100 flex flex-col"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            {/* Project image */}
            <div
              className="h-52 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #0F172A 60%, #134E4A 100%)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Abstract system diagram illustration */}
                <div className="relative w-48 h-32 opacity-30">
                  {[0, 1, 2].map((row) =>
                    [0, 1, 2].map((col) => (
                      <div
                        key={`${row}-${col}`}
                        className="absolute w-10 h-8 rounded-lg border border-white/40"
                        style={{ top: `${row * 36}px`, left: `${col * 60}px` }}
                      />
                    ))
                  )}
                </div>
              </div>
              {/* Overlay badge */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-sm">
                  {data.sigebd.year}
                </span>
              </div>
              {/* Role badge */}
              <div className="absolute bottom-4 left-4">
                <span className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-black/30 text-white/90 backdrop-blur-sm">
                  {t(data.sigebd.role)}
                </span>
              </div>
            </div>

            {/* Card content */}
            <div className="p-7 flex flex-col flex-1">
              <h2
                className="text-2xl font-bold text-foreground mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {data.sigebd.title}
              </h2>
              <p className="text-sm font-semibold mb-4" style={{ color: 'var(--accent)' }}>
                {t(data.sigebd.subtitle)}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {t(data.sigebd.description)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {data.sigebd.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{ background: 'var(--muted)', color: 'var(--foreground)', border: '1px solid var(--border)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Link
                  to="/projetos/sigebd"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: 'var(--primary)' }}
                >
                  {t(tr.common.viewCaseStudy)}
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-muted hover:-translate-y-0.5"
                  style={{ border: '1px solid var(--border)', color: 'var(--foreground)' }}
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Coming soon card */}
          <div
            className="rounded-2xl p-8 flex flex-col items-center justify-center text-center animate-fade-in-up delay-200 min-h-64"
            style={{ border: '2px dashed var(--border)', background: 'var(--muted)/30' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'var(--muted)' }}
            >
              <ExternalLink size={20} style={{ color: 'var(--muted-foreground)' }} />
            </div>
            <h3
              className="font-bold text-lg text-foreground mb-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {t({ pt: 'Novos Projetos em Breve', en: 'New Projects Coming Soon' })}
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t({ pt: 'Esta área está preparada para receber novos projetos e cases.', en: 'This area is ready to receive new projects and cases.' })}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
